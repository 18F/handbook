#!/usr/bin/env bash
# This installs and runs mkdocs and will output any warning messages.
# It is quiet by default to simplify output, passing an argument will show debug output.
DEBUG=/dev/null
if [[ "$1" != "" ]]; then
  DEBUG=/dev/stdout
fi
python3 -m venv env &> $DEBUG
./env/bin/pip install -r requirements.txt mkdocs &> $DEBUG
./env/bin/mkdocs build 2>&1 | tee mkdocs.txt &> $DEBUG
! grep '^WARNING' mkdocs.txt
