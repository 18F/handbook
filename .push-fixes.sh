gulp
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"
git commit -a -m"Automatic commit to fix markdown formatting (Build: ${TRAVIS_BUILD_NUMBER})."
git add remote pr "https://${GH_TOKEN}@github.com/${TRAVIS_PULL_REQUEST_SLUG}"
git push pr "HEAD:${TRAVIS_PULL_REQUEST_BRANCH}"
