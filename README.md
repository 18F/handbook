# TTS Handbook [![CircleCI](https://circleci.com/gh/18F/handbook.svg?style=svg)](https://circleci.com/gh/18F/handbook)

The [TTS Handbook](https://handbook.tts.gsa.gov) documents the mission, values, structures, policies, tools, and guides that shape our team. This is a _living_ document and is updated regularly. If you have questions, comments, or suggestions, please
[open an issue](https://github.com/18F/handbook/issues). If you want to add content to the Handbook, please submit a pull request or ask in [#tts-handbook](https://gsa-tts.slack.com/messages/tts-handbook).

Note: If you're changing any kind of process, please let [#wg-onboarding](https://gsa-tts.slack.com/messages/wg-onboarding) know so we can keep the handbook, new hire messages, and checklists up to date.

## Development

To run the site locally:

1. Install [Docker for Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac).
1. Clone this repository.
1. From this repository directory, run:

   ```sh
   docker-compose up --build
   ```

1. Open http://localhost:4000

## Contributing

If you are interested in contributing to this repository, you can read more at [CONTRIBUTING](CONTRIBUTING.md).

### Travel guide development

To add additional images:

1. Add an image to the `images/travel` directory.
2. Link the image on the travel page, with folding HTML: `<img src="/images/travel/filename.png" class="travel-guide-hide">`.
3. A show/hide link will automatically be created.

To create a new page:

1. Create a markdown file in the `_pages/policies/travel` directory.
1. Include a title and links to the "Travel Guide TOC" (see existing pages for reference).
1. Update the page content.

- Update the Travel Guide TOC `_pages/policies/travel/travel-guide-table-of-contents.md` with a link to your new page.

### Internal links

For internal links, use `{{site.baseurl}}` in the URL (in place of `https://https://handbook.tts.gsa.gov`) to make links work correctly in Federalist previews as well as in production.

:sparkles: **Good:** `({{site.baseurl}}/code-of-conduct/)`

:no_entry_sign: **Instead of:** `(/code-of-conduct/)`

### Linting

We use [Prettier](https://prettier.io/) to format Markdown. You can fix your files locally with:

    $ npm run lint

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](https://handbook.tts.gsa.gov/contributing/):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.

## Folder Structure

The folder structure should correspond almost exactly with how
the information is presented on the homepage. The current structure is as
follows (top-level directories are included for now, though eventually they
should be merged into `_pages`):

```
launching_software
performance_management
tools
_pages
├── about-us
├── general-information-and-resources
│   ├── locations
│   ├── policies
│   │   ├── business-and-ops-policies
│   │   ├── conduct-policies
│   │   ├── employee-resources-policies
│   │   └── tech-policies
│   └── who-we-are
├── getting-started
│   └── classes
├── hiring-staying-or-changing-jobs
├── redirects
├── software-and-tools
├── training-and-development
├── travel-leave
│   └── travel-and-leave-policies
└── tts-offices
    ├── 18f
    │   ├── chapters
    │   ├── how-18f-works
    │   ├── leadership-resources
    │   └── projects-partners
    ├── coe
    ├── oa
    │   └── OA-operational-guidance
    ├── operations
    │   ├── biz-ops
    │   ├── outreach
    │   └── talent
    └── solutions
```
