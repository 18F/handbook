# How to update the handbook

## The lazy way (get someone else to do it!)

Better than doing nothing at all: [Open a Trello card](https://trello.com/b/ZKx6l4bC/civicactions-documentation-project) with a suggestion, or chat about it in [#docs](https://civicactions.slack.com/messages/docs/).  

> @todo [Update this to refer to github issues once we switch](https://trello.com/c/Kxf3ER8i/98-move-issue-tracking-for-this-repo-to-issues)

## The easy way, via the github UI on the master branch

We only recommend this approach for those who are not already familiar with the git workflow, and who do not have tools for keeping their github forks up to date.

You'll need a Github account, and to be added to the CivicActions Team ([instructions are here](docs/how-we-work/tools/github.md)).

Go to a page, click edit, and make your changes, using [markdown](https://guides.github.com/features/mastering-markdown/).  Before you commit your changes, click the "Preview changes" tab to make sure your formatting is good and everything looks right.

When you save it ("make a commit"), there are three fields to fill out. *All of these are optional*, with default values, and in most cases it's fine to leave the defaults.

* **The commit title**: By default it is something like "Update /[filename/]". You can usually leave this as is (often this is ideal), or you can be more precise, but keep it short.
* **Extended description**: Explain your changes, if you wish. Useful if you need more than the 50 characters available in the title.
* **The branch name:** By default this will be a new branch, with a name like /[username/]-patch-1.  If you want to change it to something more semantic (eg /[username/]-easy-github-contributing), that can be helpful to the reviewers, but it's not necessary.  

After you commit, you will be asked if you want to create a new pull request with the branch you created.  You'll again be presented with a few fields, which you can generally leave as is.

* **The PR title:** By default it is the title of your last commit.
* **Extended description:** This also draws from your last commit.
* **The right sidebar:** You can assign your pull request to someone on the team (someone you think may want to review your edits).

Most of the time you don't need to fill anything out, just click "Create pull request".  

Or, if you want to make other changes on the same branch and have it reviewed at the same time as the commit you just made, don't create the PR quite yet. Navigate to the branch you created in your first commit (eg <https://github.com/CivicActions/handbook/tree/[your-branch-name]>.  You can also find this branch from the handbook homepage by clicking on [branches](https://github.com/CivicActions/handbook/branches).   Then, edit another file (or the same file you just edited) and commit it.  This time, Github will know that you want to commit to the same branch as you created during your first commit.  

Once you are done making commits to your branch, you can then create a PR from your branch to the master branch, which will include all changes.  

## The recommended, but more advanced way: fork the handbook

If you're familiar with the git fork and PR workflow, we definitely recommend forking this repo and making pull requests from your fork. This is the recommended way to contribute.

The easiest way to get started, if you're not familiar with the command line or an existing git repo management tool, is by installing [Github Desktop](https://desktop.github.com/), and then learning how to keep your fork up to date with the latest, create commits, and submit PRs.

You can use any other number of tools, including text editors and the command line, or other GUI tools.  

> @todo [Add additional "advanced" git workflow tips](https://trello.com/c/Bhxio8eo/99-add-some-more-advanced-git-workflow-documentation-or-point-to-external-documentation-in-contributing-md)

## Assign your pull request

If you make a pull request related to a subject that is the responsibility of a specific team or person, please consider tagging or assigning it to that team or person (or pinging them in Slack to ask them to review it).

## How to review and merge pull requests

Each pull request must be reviewed by at least one other CivicActions employee before it can be merged. There is no dedicated staffing for the handbook right now; maintenance is done in spare time by any CivicActions staff member who is interested in helping.

Any CivicActions employee with Github account, who has been added to the CivicActions Team ([instructions are here](docs/how-we-work/tools/github.md)), can review a pull request and decide whether they feel confident about merging it. If it's not your area of expertise, ask somebody at CivicActions who has expertise in that area.

For example: if something looks like it's related to how Marketing works, ask a Marketing person to review it; if it looks like it needs Project Management team review, ask a PM.

If you're not sure if you should merge something, ask for a second opinion in [#docs](https://civicactions.slack.com/messages/docs/) first.

## Styles

This will be fleshed out in future iterations. For now, keep in mind that content appearing in the handbook should exemplify best practices with regard to content. Handbook content should be welcoming, personable, and free from jargon. Markdown formatting should be compliant with <https://github.com/mivok/markdownlint/blob/master/docs/RULES.md>.

## Public domain

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
