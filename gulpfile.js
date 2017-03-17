var gulp = require("gulp");
var through2 = require("through2");
var markdownlint = require("markdownlint");
var tidymarkdown = require("tidy-markdown");
var map = require('map-stream');

var gulpTidyMarkdown = function(file, cb) {
  var content = tidymarkdown(String(file.contents));
  file.contents = new Buffer(content);
  cb(null, file);
};

gulp.task("tidy-markdown", function task() {
  return gulp.src(["**/*.md", "!node_modules/**"])
    .pipe(map(gulpTidyMarkdown))
    .pipe(gulp.dest('.'));
});

gulp.task("markdownlint", function task() {
  var errors = 0
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
            errors++;
          }
          next(err, file);
        });
    }))
    .on('end', function () {
      if (errors > 0) {
        console.log(errors + ' markdown issues found, build failed');
        process.exit(1);
      }
    });
});

gulp.task('default', ['markdownlint']);
