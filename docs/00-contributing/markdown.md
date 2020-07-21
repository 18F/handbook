# Markdown

The documentation is written in markdown.

## The Commonmark spec

Markdown has always been a pretty loose-goosey syntax, but because our documentation is published at Readthedocs, we've adopted the [Commonmark](http://commonmark.org/) spec, which is somewhat more strict than the markdown parsers you may be used to using in various web apps like Jira, or Trello. For this reason, it's probably worth upping your Markdown game, even if you've been using it for years. The linter (more on that below) will complain if you use the wrong syntax, and your edits will not be merge-able.

There's a great tutorial [on the Commonmark website](http://commonmark.org/help/tutorial/).

## Common markdown errors to avoid

- You need a blank line before every "block" of text. "Blocks" include paragraphs, headings, lists, code blocks, blockquotes, etc.
- You need a blank line at the end of each file.
- Headings (#, ##, ###, etc.) must increment correctly. You can't go from # (h1) to ### (h3).

## Format auto-correct

- Many common Markdown formatting issues will be automatically corrected after you submit your Pull Request by the FOSS [Restyler](https://restyled.io/).
- This applies the FOSS tool [Prettier](https://prettier.io/) using the default configuration, which is our canonical standard.

## Markdown linter

We are using <http://remark.js.org/> for additional linting/checking our markdown syntax as well as making suggestions around common readbility, language and grammar issues.

- The [.remarkrc.problem file](https://github.com/CivicActions/handbook/blob/master/.remarkrc.problem) shows a list of all the rules being enforced.
- The [.remarkrc.suggestion file](https://github.com/CivicActions/handbook/blob/master/.remarkrc.suggestion) shows a list of all rules used to give suggestions.

This linter is run by [Gitlab CI](gitlab-ci.md) with each pull request and code merge, and will automatically post a pull request review to GitHub indicating problems and suggestions. You can also access the log of problems and suggestions from the Gitlab CI check details link.

Finally, the mkdocs command (which is what Readthedocs) uses to build the web version of the documentation is run - this may identify broken links or other issues in your pull request.

### Running the linter and format auto-correct locally

You can check that your markdown complies with the retext and remark locally:

- Install node.js if you don't have it already: <https://nodejs.org/en/download/> (or use a package manager).
- Install yarn: <https://yarnpkg.com/lang/en/docs/install/> (various options to install, could also use a package manager).
- Open a terminal and `cd` to your Git root.
- Run `yarn install` to install the dependencies.
- Run `./node_modules/.bin/gulp` (you can also pass in `--path=` to a specific file to limit tests to just that).
- Run `./node_modules/.bin/prettier --write <path>` to automatically format a file.

## Editors

Markdown can be really easy to use with a good editor such as some of these [text editors](../04-how-we-work/tools/text-editors.md) - many editors have plugings that support Prettier and Remark linting for real time fixing and feedback on your edits.
