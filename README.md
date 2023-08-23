# TTS Handbook [![CircleCI](https://circleci.com/gh/18F/handbook.svg?style=svg)](https://circleci.com/gh/18F/handbook)

The [TTS Handbook](https://handbook.tts.gsa.gov) documents the mission, values,
structures, policies, tools, and guides that shape our team. This is a _living_
document and is updated regularly. If you have questions, comments, or
suggestions, please [open an issue](https://github.com/18F/handbook/issues). If
you want to add content to the Handbook, please submit a pull request or ask in
[#tts-handbook](https://gsa-tts.slack.com/messages/tts-handbook).

Note: If you're changing any kind of process, please let
[#wg-onboarding](https://gsa-tts.slack.com/messages/wg-onboarding) know so we
can keep the handbook, new hire messages, and checklists up to date.

## Development

### Docker

1. Clone this repo
2. Run `docker compose up`
3. Open http://localhost:8080

### Not Docker

To run the site locally:

1. Clone this repo
2. From the repo directory, run:
   ```sh
   npm install
   npm start
   ```
3. Open http://localhost:8080

## Contributing

If you are interested in contributing to this repository, you can read more at
[CONTRIBUTING](CONTRIBUTING.md).

### Travel guide development

To add additional images:

1. Add an image to the `_img/travel` directory.
2. Link the image on the travel page, with folding HTML:
   `<img src="{% image "_img/travel/filename.png %}" class="travel-guide-hide">`.
3. A show/hide link will automatically be created.

To create a new page:

1. Create a markdown file in the `pages/policies/travel` directory.
1. Include a title and links to the "Travel Guide TOC" (see existing pages for
   reference).
1. Update the page content.

- Update the Travel Guide TOC
  `pages/policies/travel/travel-guide-table-of-contents.md` with a link to your
  new page.

### Linting

We use [Prettier](https://prettier.io/) to format Markdown. You can fix your
files locally with:

    $ npm run lint

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in
[CONTRIBUTING](https://handbook.tts.gsa.gov/contributing/):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the
> [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication.
> By submitting a pull request, you are agreeing to comply with this waiver of
> copyright interest.
