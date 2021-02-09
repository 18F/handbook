const gulp = require("gulp");
const remark = require("gulp-remark");
const options = require("gulp-options");
const vfileToEslint = require("vfile-to-eslint");
const vfileReporter = require("vfile-reporter");
const parse = require("parse-diff");

const { Octokit } = require("@octokit/rest");
const { createAppAuth } = require("@octokit/auth-app");

const branchName = require("current-git-branch");
const branch = branchName();

const remarkBase = "https://github.com/remarkjs/";
const remarkLint = "remark-lint/tree/main/packages/remark-lint-";
const retextBase = "https://github.com/retextjs/";

const githubKey = process.env.GULP_KEY;
const githubPR = process.env.CI_EXTERNAL_PULL_REQUEST_IID;
const doCodeReview = branch && githubKey && githubPR;
var codeReviewResults = {};

var codeReview = function (files, severity) {
  if (!doCodeReview) {
    // Only post a code review if it looks like we have the right information available.
    return;
  }
  if (!(severity in codeReviewResults)) {
    codeReviewResults[severity] = {};
  }
  vfileToEslint(files).forEach((file) => {
    file.messages.forEach((message) => {
      if (!(file.filePath in codeReviewResults[severity])) {
        codeReviewResults[severity][file.filePath] = {};
      }
      if (!(message.line in codeReviewResults[severity][file.filePath])) {
        codeReviewResults[severity][file.filePath][message.line] = "";
      }
      var rule = message.ruleId.split(":");
      if (rule[0] == "remark-lint") {
        var url = remarkBase + remarkLint + rule[1] + "#example";
      } else if (rule[0].slice(0, 6) == "retext") {
        url = retextBase + rule[0];
      } else {
        url = remarkBase + rule[0];
      }
      var issue =
        "- [" + message.message + "](" + url + ") (" + severity + ")\n";
      codeReviewResults[severity][file.filePath][message.line] += issue;
    });
  });
};

var report = function (files, severity) {
  codeReview(files, severity);
  return vfileReporter(files, { quiet: true });
};

var reportProblems = function (files) {
  return report(files, "problem")
    .replace(/warnings/g, "problems")
    .replace(/warning/g, "problem");
};
var reportSuggestions = function (files) {
  return report(files, "suggestion")
    .replace(/warnings/g, "suggestions")
    .replace(/warning/g, "suggestion");
};

gulp.task("problems", function () {
  // Default to all md files in root and in docs directory.
  var path = ["**/*.md", "!node_modules/**"];
  // Support an optional --path argument.
  if (options.has("path")) {
    path = options.get("path");
  }
  return gulp.src(path).pipe(
    remark({
      rcPath: ".remarkrc.problem",
      reporter: reportProblems,
    })
  );
});

gulp.task("suggestions", function () {
  // Default to all md files in root and in docs directory.
  var path = ["**/*.md", "!node_modules/**"];
  // Support an optional --path argument.
  if (options.has("path")) {
    path = options.get("path");
  }
  return gulp.src(path).pipe(
    remark({
      quiet: true,
      rcPath: ".remarkrc.suggestion",
      reporter: reportSuggestions,
    })
  );
});

/* This posts a review to the Github PR with any problems or suggestions */
gulp.task("postReview", async function () {
  if (!doCodeReview) {
    // Only post a code review if it looks like we have the right information available.
    return Promise.resolve("complete");
  }
  const githubOwner = "civicactions";
  const githubRepo = "handbook";
  const githubAppId = 73570;
  const githubAppInstallationId = 10664614;

  // Authenticate the app and fetch a token.
  const appOctokit = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      id: githubAppId,
      privateKey: githubKey,
    },
  });
  const { token } = await appOctokit.auth({
    type: "installation",
    installationId: githubAppInstallationId,
  });
  // Create a client using the token we retrieved.
  const octokit = new Octokit({
    auth: token,
  });
  // Fetch the PR diff - this is used to calcuate diff-wise line numbers.
  const { data: diff } = await octokit.pulls.get({
    owner: githubOwner,
    repo: githubRepo,
    pull_number: githubPR,
    mediaType: {
      format: "diff",
    },
  });

  var severities = [];
  // For problems, we request changes - for suggestions we just comment.
  severities.push({ level: "problem", event: "REQUEST_CHANGES" });
  severities.push({ level: "suggestion", event: "COMMENT" });
  severities.forEach(async function (severity) {
    var results = codeReviewResults[severity.level];
    var body = "";
    var comments = [];
    var files = parse(diff);
    files.forEach(function (file) {
      /* The position value equals the number of lines down from the first "@@" hunk
         header in the file you want to add a comment. The line just below the "@@"
         line is position 1, the next line is position 2, and so on. The position in
         the diff continues to increase through lines of whitespace and additional
         hunks until the beginning of a new file. */
      var diffLine = 0;
      if (file.to in results) {
        file.chunks.forEach(function (chunk) {
          diffLine++; // Move down a line for each @@ chunk marker.
          chunk.changes.forEach(function (change) {
            if (change.type == "add") {
              if (change.ln in results[file.to]) {
                // Generate our comment.
                var comment = {
                  path: file.to,
                  position: diffLine,
                  body: results[file.to][change.ln],
                };
                comments.push(comment);
                // Remove the item, so we don't include it in any leftovers.
                delete results[file.to][change.ln];
              }
            }
            diffLine++; // Move down a line for each change (will count add/del separately).
          });
        });
      }
    });
    // We add any leftover feedback we can't add to the diff in the body of the review:
    for (const [file, lines] of Object.entries(results)) {
      if (Object.keys(lines).length > 0) {
        var title =
          severity.level.charAt(0).toUpperCase() + severity.level.slice(1);
        body += "### " + title + " in " + file + ":\n";
        for (const [line, issue] of Object.entries(lines)) {
          body += "On line " + line + ":\n\n";
          body += "- " + issue + "\n";
        }
        body += "\n";
      }
    }
    if (body.length > 0 || comments.length > 0) {
      // If we have any feedback, post the review.
      await octokit.pulls.createReview({
        owner: githubOwner,
        repo: githubRepo,
        pull_number: githubPR,
        body: body,
        event: severity.event,
        comments: comments,
      });
    }
  });

  return Promise.resolve("complete");
});

gulp.task("default", gulp.series("suggestions", "problems"));
gulp.task("ci", gulp.series("default", "postReview"));
