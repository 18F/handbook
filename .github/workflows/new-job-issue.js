const yaml = require("js-yaml");
const fs = require("fs/promises");

// Map the free-text job types to the values expected in the yaml. The keys are
// the text values used by the issue template form and the values are the text
// values used by the yaml file.
const JOB_TYPE_MAPPING = new Map([
  ["public", "public"],
  ["internal-only", "internal"],
]);

const schema = yaml.DEFAULT_SCHEMA;
schema.compiledTypeMap.scalar["tag:yaml.org,2002:timestamp"].represent = (
  date
) => {
  const yyyy = date.getUTCFullYear();
  const mm = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const dd = date.getUTCDate().toString().padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

// Wrap the body in some helper methods.
const makeBody = (body) => {
  // Given some heading text, we know from the issue template that the heading
  // should be the start of a line and preceded by an H3 (###). Then we need to
  // handle the cases where the heading text itself contains regex special
  // characters. Here we convert \, ?, ., and * to escaped versions.
  const getRegexString = (heading) =>
    `^### ${heading
      .replace(/\\/g, "\\\\")
      .replace(/\?/g, "\\?")
      .replace(/\./g, "\\.")
      .replace(/\*/g, "\\*")}`;

  return {
    // Get the value associated with a question (heading) in the issue template.
    getValueForHeading: (heading) => {
      // For a given heading text in the issue template, the value is separated
      // from the heading by two newlines, and is terminated by another newline.
      // We need to do a multiline search.
      const regex = new RegExp(`${getRegexString(heading)}\n\n([^\n]+)`, "im");

      // When searching the body, first remove any carriage return characters.
      // GitHub issues are CRLF formatted.
      const [, value] = body.replace(/\r/g, "").match(regex) ?? [];
      return value;
    },

    // Check if a heading exists.
    hasHeading: (heading) =>
      // Make sure we do a multiline search.
      new RegExp(getRegexString(heading), "im").test(body),
  };
};

module.exports = async ({ context, core, github }) => {
  // Get issue metadata from the action context.
  const issue = context.issue;

  // There should always be an issue number, but let's just be safe...
  if (issue.number) {
    // Get the issue body text from the GitHub API, and then create a utility
    // wrapper around it.
    const {
      data: { body: rawBody },
    } = await github.rest.issues.get({
      ...issue,
      issue_number: issue.number,
    });

    const body = makeBody(rawBody);

    // First check if these heading exists. If they all exist, then we can
    // assume this is from a jobs issue template. If they don't, it may be some
    // other kind of issue so we should ignore it.
    const HEADINGS = [
      "Is this job available to the public, or is it internal-only?",
      "Role",
      "Link",
      "Job opening date",
      "Job closing date",
      "Maximum number of applications",
      "Does this job close when all selections have been made?",
    ];

    for (const heading of HEADINGS) {
      if (!body.hasHeading(heading)) {
        // If any of the headings is missing, assume this is NOT a new job issue
        // template, and we can bail out.
        core.setOutput("updated", "no");
        return;
      }
    }

    // If we got this far, we assume that the issue is based on our new jobs
    // issue template. Nowe can pull out the provided values.
    const type = body.getValueForHeading(
      "Is this job available to the public, or is it internal-only?"
    );
    const role = body.getValueForHeading("Role");
    const link = body.getValueForHeading("Link");
    const opens = body.getValueForHeading("Job opening date");
    const closes = body.getValueForHeading("Job closing date");
    const maxApplications = body.getValueForHeading(
      "Maximum number of applications"
    );
    const closesEarly =
      body.getValueForHeading(
        "Does this job close when all selections have been made?"
      ) === "yes";

    // Track all validation errors rather than failing fast. This way if there
    // are multiple problems with the issue, we can notify the author about all
    // of them at once instead of making them fix them one at a time.
    const validationErrors = [];

    if (type !== "public" && type !== "internal-only") {
      validationErrors.push(
        `The role type must be \`public\` or \`internal-only\`. It is currently \`${type}\`}`
      );
    }

    if (!role) {
      validationErrors.push(`The role must have a title.`);
    }

    if (!link) {
      validationErrors.push(`The role must have a link to more information.`);
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(opens)) {
      validationErrors.push(`Job opening date must be formatted as YYYY-MM-DD`);
    }
    if (!dateRegex.test(closes)) {
      validationErrors.push(`Job closing date must be formatted as YYYY-MM-DD`);
    }

    if (validationErrors.length > 0) {
      // TODO: post a comment about validation problems
      core.error("oh noes");
      core.error(validationErrors.join("\n"));
      core.setOutput("updated", "no");
      return;
    }

    // Load the existing job data from disk
    const jobs = yaml.load(
      await fs.readFile("_data/jobs.yaml", {
        encoding: "utf-8",
      })
    );

    // Get the list of jobs according to the job type (public or internal). If
    // the list doesn't currently exist, default to an empty list.
    const target = jobs[JOB_TYPE_MAPPING.get(type)] ?? [];
    target.push({
      role,
      link,

      // Yaml understands actual dates, but in order to get it to treat them as
      // dates, they need to actually BE dates, so convert from date strings to
      // Date objects.
      opens: new Date(Date.parse(`${opens}T00:00:00.000Z`)),
      closes: new Date(Date.parse(`${closes}T00:00:00.000Z`)),

      // Yaml properties are perfectly happy to have spaces in their names.
      "max applications": Number.parseInt(maxApplications, 10) | 0,
      "closes when filled": closesEarly,
    });

    // Now update the list of jobs for this type (public or internal).
    jobs[JOB_TYPE_MAPPING.get(type)] = target;

    // Dump the updated jobs data back to file.
    await fs.writeFile(
      "_data/jobs.yaml",

      // When we dump the output, don't let it do anything funny with line
      // widths. It shouldn't hurt anything, but I don't necessarily trust it.
      // Also use our custom schema (defined above) to make sure we only get
      // ISO 8601 dates, not full datetimes.
      yaml.dump(jobs, {
        lineWidth: -1,
        schema,
      }),
      {
        encoding: "utf-8",
      }
    );

    // Set outputs to make it clear that this script succeeded. Also pass along
    // the issue number so downstream steps don't also have to look at the
    // context.
    core.setOutput("updated", "yes");
    core.setOutput("issue", issue.number);
  }
};
