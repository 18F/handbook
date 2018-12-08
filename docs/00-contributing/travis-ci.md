# Travis CI

Travis CI is a hosted, distributed continuous integration service used to build and test projects hosted at GitHub. Travis CI automatically detects when a commit has been made and pushed to a GitHub repository that is using Travis CI, and each time this happens, it will try to build the project and run tests.

Every time a pull request is made to the handbook repo, or when a commit is merged, Travis CI will run tests to ensure that commit complies with certain standards. For now, it is primarily concerned with our [markdown](markdown.md) syntax, and will "fail" if there are errors as specified in the .remarkrc.error file in the root directory of this repo.

## What to do if your a build fails

Each time a commit or PR is made to the master repo, the tests will run, and a report is created with the results of that test. A bot posts a link to the report on the merge request page in github, as well as in the #docs channel in Slack. If it fails, you can click the report number and see what went wrong.

The left hand column shows the line and the position in that line where the error/warning occurs, and explains which test failed, which should provide you with enough information about how to address it.

You can see some example output (for our master branch) at <https://travis-ci.org/CivicActions/handbook>.
