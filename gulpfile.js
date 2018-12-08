var gulp = require("gulp");
var remark = require('gulp-remark');
var options = require('gulp-options');
var log = require('fancy-log');
var execSync = require('child_process').execSync;
var stream = require('stream');

// Stream writer that changes warnings to errors
var errorStream = new stream.Writable();
errorStream._write = function (chunk, encoding, done) {
  console.log(chunk.toString().replace(/warnings/g, "\x1b[31merrors\x1b[0m").replace(/warning/g, "\x1b[31merror\x1b[0m"));
  done();
};

// Stream writer that changes warnings to suggestions
var suggestionStream = new stream.Writable();
suggestionStream._write = function (chunk, encoding, done) {
  console.log(chunk.toString().replace(/warnings/g, "suggestions").replace(/warning/g, "suggestion"));
  done();
};

// Remark is our primary checker and fixer.
gulp.task('remark', function () {
  // Default to all md files in root and in docs directory.
  var path = ["**/*.md", "!node_modules/**"];
  // Support an optional --path argument.
  if (options.has('path')) {
    path = options.get('path');
  }
  gulp.src(path)
    // Main run against the "error" configuration.
    .on('end', function () { log("\x1b[31mFailing issues:\x1b[0m") })
    .pipe(remark(
      {
        "quiet": true,
        "streamError": errorStream,
        "color": true,
        "rcPath": ".remarkrc.error"
      }));

  // Run against "warning" configuration for files changed from master only to reduce noise.
  var changedFiles = execSync('git diff --name-status master').toString().split('\n');
  for (var i = 0; i < changedFiles.length; i++) {
    if (changedFiles[i]) {
      var statusFile = changedFiles[i].split('\t');
      if (statusFile[0] == 'D') {
        continue;
      }
      if (statusFile[1].split('.').pop() != 'md') {
        continue;
      }
      gulp.src(statusFile[1])
        .on('end', function () { log("\x1b[32mSuggestion for changed file:\x1b[0m") })
        .pipe(remark(
          {
            "quiet": true,
            "streamError": suggestionStream,
            "color": true,
            "rcPath": ".remarkrc.suggestion"
          }));
    }
  }
});

gulp.task('default', ['remark']);
