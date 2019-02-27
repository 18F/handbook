TTS Handbook [![CircleCI](https://circleci.com/gh/18F/handbook.svg?style=svg)](https://circleci.com/gh/18F/handbook)
========================

The [TTS Handbook](https://handbook.18f.gov) documents the mission, values, structures, policies, tools, and guides that shape our team. This is a _living_ document and is updated regularly. If you have questions, comments, or suggestions, please
[open an issue](https://github.com/18F/handbook/issues). If you want to add content to the Handbook, please submit a pull request or ask in [#tts-handbook](https://gsa-tts.slack.com/messages/tts-handbook).

Note: If you're changing any kind of process, please let [#wg-onboarding](https://gsa-tts.slack.com/messages/wg-onboarding) know so we can keep the handbook, new hire messages, and checklists up to date.

## What can't be included

For TTS staff, keep in mind that the handbook website and repository are public, so we can't include information that shouldn't be public. We already get training on this, but here are a few reminders about things we shouldn't include here:

* [Sensitive information, as described in our Open Source Policy practices guide](https://github.com/18F/open-source-policy/blob/master/practice.md#protecting-sensitive-information)
* Comments that can be easily interpreted as [endorsements](https://www.oge.gov/web/oge.nsf/Use%20of%20Government%20Position%20and%20Resources/17593AE8B3A597C685257E96006364E4?opendocument) (or other potential ethical issues)

We avoid including information that can easily go out of date and is already published somewhere else in a useful format. This includes:

* People's phone numbers, even if public information (such as their GSA work number). Link to the public [GSA staff directory](http://www.gsa.gov/portal/staffDirectory/searchStaffDirectory) or the access-controlled 18F contact spreadsheet instead of including phone numbers in the handbook.
* Information that is already well-covered on GSA InSite. Link there instead of reproducing it.
* Specific TTS org chart info (such as lists of names of supervisors and facilitators). Link to the [TTS org chart](https://handbook.18f.gov/tts-org-chart/), the internal [18F org chart](https://handbook.18f.gov/org-chart/), or the internal [OPP org chart](https://handbook.18f.gov/opp-org-chart/) instead.

We're careful about publishing [information collected during research](https://handbook.18f.gov/research-guidelines/); [learn more](https://docs.google.com/document/d/1Xp4LxbW6cx61rXrsnnfIPCz6cglovHzZeEjCcnpIeaM/edit) and ask [#research](https://gsa-tts.slack.com/archives/research) for guidance first.

## Development

### With Docker

```
docker-compose up
```

### Without Docker

Install dependencies:

```bash
bundle install
```

Serve the site:

```bash
bundle exec jekyll serve
```

### Fork or branch?

Forking and branching are two ways of submitting pull requests to edit the Handbook.

If you are using the ***GitHub website built-in editing features***, you do not have to choose: GitHub will make the correct choice for you.

If you are using your Terminal / local git to edit:

* **TTS teammates**: Please use ***branching*** to submit pull requests. Federalist Preview sites will only be built from a branch, and continuous integration can only succeed for PRs created from branches.

* **External contributors**: Please use ***forking*** to submit pull requests, since non-TTS contributors do not have write access. Unfortunately, we won't be able to run Federalist Preview sites for your pull request; please build and serve the site locally to test instead.

If you have any questions, feel free to ask in [#tts-handbook](https://gsa-tts.slack.com/messages/tts-handbook).

Thank you so much for your contributions! :tada:


### GuidesStyle

This project inherits a few commands from the [guides-style project](https://github.com/18F/guides-style):

```
# Update navigation data in _config.yml:
$ GuidesStyle18F.update_navigation_configuration Dir.pwd

# Update the guides_style_18f gem
$ GuidesStyle18F.update_theme
```

The GuidesStyle project appears to be more in maintenance mode than in active development; future updates to theme may come from GuidesStyle or from another source.

### Travel guide development

To add additional images:

1. Add an image to the `images/travel` directory.
1. Link the image on the travel page, with folding HTML: `<img src="/images/travel/filename.png" class="travel-guide-hide">`.
1. A show/hide link will automatically be created.

To create a new page:

1. Create a markdown file in the `_pages/policies/travel` directory.
1. Include a title and links to the "Travel Guide TOC" (see existing pages for reference).
1. Update the page content.
* Update the Travel Guide TOC `_pages/policies/travel/travel-guide-table-of-contents.md` with a link to your new page.

### Internal links

For internal links, use `{{site.baseurl}}` in the URL (in place of `https://https://handbook.18f.gov`) to make links work correctly in Federalist previews as well as in production.

:sparkles: **Good:** `({{site.baseurl}}/code-of-conduct/)`

:no_entry_sign: **Instead of:** `(/code-of-conduct/)`
