# Markdown

The documentation is written in markdown.

## The Commonmark spec

Markdown has always been a pretty loose-goosey syntax, but because our documentation is published at Readthedocs, we've adopted the [Commonmark](http://commonmark.org/) spec, which is somewhat more strict than the markdown parsers you may be used to using in various web apps like Jira, or Trello. For this reason, it's probably worth upping your Markdown game, even if you've been using it for years. The linter (more on that below) will complain if you use the wrong syntax, and your edits will not be merge-able.

There's a great tutorial [on the Commonmark website](http://commonmark.org/help/tutorial/).

## Common markdown errors to avoid

- You need a blank line before every "block" of text. "Blocks" include paragraphs, headings, lists, code blocks, blockquotes, etc.
- Nested lists (such as bullets) points require four spaces.
- No space before
- You need a blank line at the end of each file.
- Headings (#, ##, ###, etc.) must increment correctly. You can't go from # (h1) to ### (h3).

## Markdown linter

We are using <http://remark.js.org/> for linting/checking our markdown syntax. The [.remarkrc.error file](https://github.com/CivicActions/handbook/blob/master/.remarkrc.error) shows a list of all the rules being enforced.

This linter is run by [Travis CI](travis-ci.md) with each pull request and code merge, and will fail if it finds errors.

### Running the linter locally

You can check that your markdown complies with the retext and remark locally:

- Install node.js if you don't have it already: <https://nodejs.org/en/download/> (or use a package manager).
- Install yarn: <https://yarnpkg.com/lang/en/docs/install/> (various options to install, could also use a package manager).
- Open a terminal and `cd` to your Git root.
- Run `yarn install` to install the dependencies.
- Run `./node_modules/.bin/gulp` (you can also pass in `--path=` to a specific file to limit tests to just that).

## Editors

Markdown can be really easy to use with a good editor such as some of these [text editors](../04-how-we-work/tools/text-editors.md)
