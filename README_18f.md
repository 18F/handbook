CivicActions Handbook [![Build Status](https://travis-ci.org/CivicActions/handbook.svg?branch=master)](https://travis-ci.org/CivicActions/handbook)
========================

The [CivicActions Handbook](https://handbook.civicactions.com) documents the mission, values, structures, policies, tools, and guides that shape our team. This is a _living_ document and is updated regularly. If you have questions, comments, or suggestions, please
[open an issue](https://github.com/CivicActions/handbook/issues). If you want to add content to the Handbook, please submit a pull request or ask in [#civicactions-handbook](https://civicactions.slack.com/messages/civicactions-handbook).

Note: If you're changing any kind of process, please let [#wg-onboarding](https://civicactions.slack.com/messages/wg-onboarding) know so we can keep the handbook, new hire messages, and checklists up to date.

## What can't be included

For CivicActions staff, keep in mind that the handbook website and repository are public, so we can't include information that shouldn't be public. We already get training on this, but here are a few reminders about things we shouldn't include here:

* [Sensitive information, as described in our Open Source Policy practices guide](https://github.com/CivicActions/open-source-policy/blob/master/practice.md#protecting-sensitive-information)
* Comments that can be easily interpreted as [endorsements](https://www.oge.gov/web/oge.nsf/Use%20of%20Government%20Position%20and%20Resources/17593AE8B3A597C685257E96006364E4?opendocument) (or other potential ethical issues)

We avoid including information that can easily go out of date and is already published somewhere else in a useful format. This includes: 

* People's phone numbers, even if public information (such as their GSA work number). Link to the public [GSA staff directory](http://www.gsa.gov/portal/staffDirectory/searchStaffDirectory) or the access-controlled CivicActions contact spreadsheet instead of including phone numbers in the handbook.
* Information that is already well-covered on GSA InSite. Link there instead of reproducing it.
* Specific CivicActions org chart info (such as lists of names of supervisors and facilitators). Link to the [internal CivicActions org chart](https://handbook.civicactions.com/org-chart/) instead.

We're careful about publishing [information collected during research](https://handbook.civicactions.com/research-guidelines/); [learn more](https://docs.google.com/document/d/1Xp4LxbW6cx61rXrsnnfIPCz6cglovHzZeEjCcnpIeaM/edit) and ask [#research](https://civicactions.slack.com/archives/research) for guidance first.

## Development

``` bash
git clone https://github.com/CivicActions/handbook.git
cd handbook
bundle install
./go serve
```

See the CivicActions Pages documentation to learn how to [make a new page](https://pages.civicactions.com/guides-template/add-a-new-page/) and [add it to the homepage navigation links](https://pages.civicactions.com/guides-template/update-the-config-file/).

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
