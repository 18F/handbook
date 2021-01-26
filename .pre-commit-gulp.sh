#!/usr/bin/env bash
# This installs and runs mkdocs and will output any warning messages.
# It is quiet by default to simplify output, passing an argument will show debug output.
DEBUG=/dev/null
if [[ "$1" != "" ]]; then
  DEBUG=/dev/stdout
fi
yarn install --frozen-lockfile &> $DEBUG
./node_modules/.bin/gulp ci 2>&1 | tee gulp.log &> $DEBUG
! grep -e "(problem\W)" gulp.log
