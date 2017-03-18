var gulp = require("gulp");
var through2 = require("through2");
var markdownlint = require("markdownlint");
var tidymarkdown = require("tidy-markdown");
var map = require('map-stream');
var remark = require('gulp-remark');
var lint = require('remark-lint');

var gulpTidyMarkdown = function(file, cb) {
  var content = tidymarkdown(String(file.contents));
  file.contents = new Buffer(content);
  cb(null, file);
};

// Tidy task - imperfect, but can help if we bring in messy Markdown.
gulp.task("tidy-markdown", function task() {
  return gulp.src(["**/*.md", "!node_modules/**"])
    .pipe(map(gulpTidyMarkdown))
    .pipe(gulp.dest('.'));
});

// Markdownlint - not used since remark seems better, but leaving the task in place for now.
gulp.task("markdownlint", function task() {
  return gulp.src(["**/*.md", "!node_modules/**"], { "read": false })
    .pipe(through2.obj(function obj(file, enc, next) {
      markdownlint(
        { "files": [ file.relative ],
          "config": {
            // Enter config for markdownlint below:
            // See https://github.com/DavidAnson/markdownlint#optionsconfig
            // and https://github.com/DavidAnson/markdownlint/tree/master/style
            "default": true,
            "line_length": false
          }
        },
        function callback(err, result) {
          var resultString = (result || "").toString();
          if (resultString) {
            console.log(resultString);
          }
          next(err, file);
        });
    }))
});

// Remark is our primary checker and fixer.
gulp.task('remark', function () {
  return gulp.src(["**/*.md", "!node_modules/**"])
    .pipe(remark(
      { 
        "quiet": true,
        "streamError": process.stdout,
        "color": true
      }))
   .pipe(gulp.dest('.'));
});

gulp.task('default', ['remark']);
