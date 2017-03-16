
## How to update the handbook

### The lazy way (get someone else to do it!)

Better than doing nothing at all: [Open a Trello card](https://trello.com/b/ZKx6l4bC/civicactions-documentation-project) with a suggestion, or chat about it in [#docs](https://civicactions.slack.com/messages/docs/).  

> @todo [Update this to refer to github issues once we switch](https://trello.com/c/Kxf3ER8i/98-move-issue-tracking-for-this-repo-to-issues)

### The easy way, via the github UI on the master branch

Go to a page, click edit, and make your changes, using markdown.  Before you save, click the "Preview changes" tab to make sure you've got it right. 

When you save it ("make a commit"), it will create a pull request that will go through a quick review process. There are three fields to fill out, _all of which are optional_.

* **The commit title**: By default it is something like "Update [filename]".  You can usually leave this as is, or you can be more precise, but keep it short (under 50 characters is recommended).
* **Extended description**: Explain your changes. Useful if you need more than 50 characters. If there's a Trello card for this change, you can a link to it here. 
* **The branch title:** By default this will be something like [username]-patch-1.  If you want to change it to something more semantic (eg easy-github-contributing),  that's helpful to the reviewers.  

This process works well if you are making changes just one page at a time.  If you want to package up a number of changes into one review, to be merged all at once, you'll want to... 

### The more advanced way: fork the handbook

If you're familiar with the git fork and PR workflow, we definitely recommend forking this repo and making pull requests from your fork. 

This is the recommended way to contribute, and it's necessary if you want to submit a change that includes more than one file at once.

The easiest way to get started with this method is by installing [Github Desktop](https://desktop.github.com/) and then learning how to keep your local version up to date with the latest, create commits, and submit PRs. 

You can use any other number of tools, including text editors and the command line, or other GUI tools.  

> @todo [Add additional "advanced" git workflow tips](https://trello.com/c/Bhxio8eo/99-add-some-more-advanced-git-workflow-documentation-or-point-to-external-documentation-in-contributing-md)

## Assign your pull request

If you make a pull request related to a subject that is the responsibility of a specific team or person, please consider tagging or assigning it to that team or person (or pinging them in Slack to ask them to review it).

## How to review and merge pull requests

Each pull request must be reviewed by at least one other CivicActions staff member before it can be merged. There is no dedicated staffing for the handbook right now; maintenance is done in spare time by any CivicActions staff member who is interested in helping.

Any CivicActions staff member can review a pull request and decide whether they feel confident about merging it. If it's not your area of expertise, ask somebody at CivicActions who has expertise in that area.

For example: if something looks like it's related to how Marketing works, ask a Marketing person to review it; if it looks like it needs Project Management team review, ask a PM.

If you're not sure if you should merge something, ask for a second opinion in [#docs](https://civicactions.slack.com/messages/docs/) first.

## Styles

This will be fleshed out in future iterations. For now, keep in mind that content appearing in the handbook should exemplify best practices with regard to content. Handbook content should be welcoming, personable, and free from jargon. Markdown formatting should be compliant with https://github.com/mivok/markdownlint/blob/master/docs/RULES.md.

## Public domain

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
