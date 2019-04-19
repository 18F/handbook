if git log -1 --pretty=%B | grep -Fq 'Automatic commit'; then
  echo "Previous commit was automatic, so skip pushing fixes.'
  exit 0
fi

# Run once to fix content as needed - redirect output to avoid double output
gulp &> /dev/null

# Commit and push any changes
if [[ `git status --porcelain` ]]; then
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
  git commit -a -m"Automatic commit to fix markdown formatting (Build: ${TRAVIS_BUILD_NUMBER})."
  git remote add pr "https://${GH_TOKEN}@github.com/${TRAVIS_PULL_REQUEST_SLUG}"
  git push pr "${TRAVIS_PULL_REQUEST_BRANCH}"
fi
