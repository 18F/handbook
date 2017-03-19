var gulp = require("gulp");
var remark = require('gulp-remark');
var options = require('gulp-options');

// Stream writer that changes warnings to errors
var stream = require('stream');
var errorStream = new stream.Writable();
errorStream._write = function (chunk, encoding, done) {
  console.log(chunk.toString().replace(/warnings/g, "\x1b[31merrors\x1b[0m").replace(/warning/g, "\x1b[31merror\x1b[0m"));
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
  return gulp.src(path)
    // Main run against the "error" configuration.
    .pipe(remark(
      { 
        "quiet": true,
        "streamError": errorStream,
        "color": true,
        "rcPath": ".remarkrc.error"
      }))
    // Save any changes.
    .pipe(gulp.dest('.'))
    // Finally, run against "warning" configuration.
    .pipe(remark(
      { 
        "quiet": true,
        "streamError": process.stdout,
        "color": true,
        "rcPath": ".remarkrc.warning"
      }));
});

gulp.task('default', ['remark']);
