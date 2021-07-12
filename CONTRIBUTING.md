---
title: Contributing to the Handbook
permalink: /contributing/
---

If you're not familiar with how to edit Markdown through GitHub, see [Intro to GitHub]({{site.baseurl}}/intro-to-github/) and [digital.gov's Using GitHub for Content Creation](https://digital.gov/resources/an-introduction-github/).

## Front matter

The Handbook has a special `contacts` [front matter](https://jekyllrb.com/docs/front-matter/) variable for pages:

```yaml
questions:
  - name-of-slack-channel
  - some@email.gov
  - text: The text to display
    url: https://somesite.gov
```

It is optional, and can contain one or more Slack channel name, email address, and/or link.

## What cannot be included

- TTS staff should not include information that shouldn't be public.
  - We already get training on this, but here are a few reminders about things we shouldn't include here:
  - [Sensitive information](https://handbook.tts.gsa.gov/sensitive-information/)
  - Comments that can be easily interpreted as [endorsements](https://www.oge.gov/web/oge.nsf/Use%20of%20Government%20Position%20and%20Resources/17593AE8B3A597C685257E96006364E4?opendocument) (or other potential ethical issues)
- Information that can easily go out of date and is already published somewhere else in a useful format. This includes:
  - People's phone numbers, even if public information (such as their GSA work number). Link to the public [GSA staff directory](http://www.gsa.gov/portal/staffDirectory/searchStaffDirectory) or the access-controlled 18F contact spreadsheet instead of including phone numbers in the handbook
  - Information that is already well-covered on GSA InSite - link there instead of reproducing it
  - Specific TTS org chart info (such as lists of names of supervisors and facilitators). Link to the [TTS org chart](https://handbook.tts.gsa.gov/tts-org-chart/), the internal [18F org chart](https://handbook.tts.gsa.gov/org-chart/), or the internal [Office of Solutions org chart](https://handbook.tts.gsa.gov/opp-org-chart/) instead

## A few things to remember

- This handbook website and repository are public
- We're careful about publishing [information collected during research](https://handbook.tts.gsa.gov/research-guidelines/); [learn more](https://docs.google.com/document/d/1Xp4LxbW6cx61rXrsnnfIPCz6cglovHzZeEjCcnpIeaM/edit) and ask [#g-research](https://gsa-tts.slack.com/archives/g-research) for guidance first
- Try to avoid "click here" links. If necessary, be sure to follow the [A11Y Project Anchor Link Patterns](https://a11yproject.com/patterns/#anchors-links).
- TTS-wide information should be public by default and link to Google Docs for anything that shouldn't be publicly visible.

## Fork or branch?

Forking and branching are two ways of submitting pull requests to edit the Handbook.

If you are using the **_GitHub website built-in editing features_**, you do not have to choose: GitHub will make the correct choice for you.

If you are using your Terminal / local git to edit:

- **TTS teammates**: Please use **_branching_** to submit pull requests. Federalist Preview sites will only be built from a branch, and continuous integration can only succeed for PRs created from branches.

- **External contributors**: Please use **_forking_** to submit pull requests, since non-TTS contributors do not have write access. Unfortunately, we won't be able to run Federalist Preview sites for your pull request; please build and serve the site locally to test instead.

If you have any questions, feel free to ask in [#tts-handbook](https://gsa-tts.slack.com/messages/tts-handbook).

Thank you so much for your contributions! :tada:

## How to update the handbook

Everyone, inside and outside TTS, can submit contributions to https://github.com/18F/handbook as a pull request or [open an issue](https://github.com/18F/handbook/issues/new) with a suggestion. If you're part of TTS, you can also chat about ideas in [#tts-handbook](https://gsa-tts.slack.com/messages/tts-handbook) or [#wg-onboarding](https://gsa-tts.slack.com/messages/wg-onboarding).

There is no dedicated staff for the handbook; maintenance is done by TTS staff who are interested in helping.

For long or important chunks of writing, consider asking the [18F Writing Lab](https://github.com/18F/writing-lab) to review and edit before you propose significant changes to the handbook.

We use [Prettier](https://prettier.io/) to enforce a standard formatting for all
Markdown files. If code is pushed to GitHub and is not well-formatted via
Prettier, it will automatically be fixed by a bot; you have the option to run
Prettier locally before pushing to avoid this extra commit, but it is not
required.

### File/folder structure

By default, any Markdown file created in the `_pages` directory, regardless of its internal nesting, will have a URL at the top-level. For example, if you create some new content at `_pages/awesome-resources/pizza.md`, the URL will look like `https://handbook.tts.gsa.gov/pizza/`.

If you do in fact want the nesting to appear in the URL, you should create a new directory at the top-level of the project (i.e. at the same level as `_pages`). In this example, you would create a new directory `awesome-resources` and place the new `pizza.md` file inside it.

In short: If you want nesting, make a top-level folder; if you don't, put the Markdown file under `_pages/`.

### Pull requests (PRs)

Each pull request should be reviewed by at least one other TTS staff member before merging. Once a PR is approved, anyone can merge it (including the original submitter).

If you make a pull request that's best reviewed by a specific person, tag or assign it to that person. It can also help to ping them in Slack to ask for review.

### CODEOWNERS

The TTS Handbook uses the GitHub ["code owners" feature](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners) to enforce ownership of
Handbook content. For certain pages, individuals or teams will be automatically
added as a reviewer. This means that in most cases, you as a contributor should
not need to manually add anyone for a review.

If you suspect that the wrong team was added as a reviewer, feel free to open a
pull request to change the CODEOWNERS file, located at the top-level of the
project.

### How to review and merge pull requests

Any TTS staff member can review a pull request. If it's not your area of expertise, ask somebody who has expertise in that area (for instance, by commenting to tag a person or sharing the PR in Slack). If the author of the pull request added a specific person as a reviewer, hold off merging the pull request until at least one specified reviewer has had a chance to review it.

A note to submitters: If you need multiple people to see your PR before it's merged, please add a comment letting reviewers know!

If you're not sure, ask for a second opinion in #tts-handbook first.

### Using repo specific labels

- _do not merge yet:_ Delay merging this pull request until the label has been removed
- _help wanted:_ Need additional assistance
- _In progress:_ Currently being worked on
- _info is incorrect/outdated:_ The current information that is there needs tending to
- _new content needed:_ There is information that is not present that should exist
- _<2 hours:_ Easy peazy, lemon squeezy
- _2-4 hours:_ Hold my callz
- _>4 hours:_ Ooph, its a doozy!

## Content and accessibility

The handbook follows the [18F content guide](https://content-guide.18f.gov), and all content should follow web accessibility best practices. Remember to use [descriptive link text](https://content-guide.18f.gov/urls-and-filenames/#link-text).

## Public domain

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
