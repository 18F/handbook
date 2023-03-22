---
title: Contributing to the Handbook
permalink: /contributing/
cSpell: ignore Ooph,tada
---

So you want to contribute to the Handbook? Great! We're glad you're here. This
project is fully crowd-sourced, and thus its success hinges on whether people
like you correct typos, update stale content, or make pages more readable.

## Introduction

### How to update the handbook

Everyone, inside and outside TTS, can submit contributions to
https://github.com/18F/handbook as a pull request or
[open an issue](https://github.com/18F/handbook/issues/new) with a suggestion.
If you're part of TTS, you can also chat about ideas in
{% slack_channel "tts-handbook" %}.

There is no dedicated staff for the handbook; maintenance is done by TTS staff
who are interested in helping.

For long or important chunks of writing, consider asking the
[18F Writing Lab](https://github.com/18F/writing-lab) to review and edit before
you propose significant changes to the handbook.

### Disclaimers

Before you make your contribution, there are a few things to remember:

- This handbook website and repository are public
- We're careful about publishing
  [information collected during research](https://handbook.tts.gsa.gov/research-guidelines/);
  [learn more](https://docs.google.com/document/d/1Xp4LxbW6cx61rXrsnnfIPCz6cglovHzZeEjCcnpIeaM/edit)
  and ask {% slack_channel "g-research" "the research guild" %} for guidance
  first
- Try to avoid "click here" links. If necessary, be sure to follow the
  [A11Y Project Anchor Link Patterns](https://a11yproject.com/patterns/#anchors-links).
- TTS-wide information should be public by default and link to Google Docs for
  anything that shouldn't be publicly visible.
- We follow the structure outlined in the
  [18F Content Guide](https://content-guide.18f.gov/our-approach/structure-the-content/)

There is also some information that should **not** be included in the Handbook:

- TTS staff should not include information that shouldn't be public. We already
  get training on this, but here are a few reminders about things we shouldn't
  include here:

  - [Sensitive information](https://handbook.tts.gsa.gov/sensitive-information/)
  - Comments that can be easily interpreted as
    [endorsements](https://www.oge.gov/web/oge.nsf/Use%20of%20Government%20Position%20and%20Resources/17593AE8B3A597C685257E96006364E4?opendocument)
    (or other potential ethical issues)

  - Information that can easily go out of date and is already published
    somewhere else in a useful format. This includes:

    - People's phone numbers, even if public information (such as their GSA work
      number). Link to the public
      [GSA staff directory](http://www.gsa.gov/portal/staffDirectory/searchStaffDirectory)
      or the access-controlled 18F contact spreadsheet instead of including
      phone numbers in the handbook
    - Information that is already well-covered on GSA InSite - link there
      instead of reproducing it
    - Specific TTS org chart info (such as lists of names of supervisors and
      facilitators). Link to the
      [TTS org chart](https://handbook.tts.gsa.gov/tts-org-chart/), the internal
      [18F org chart](https://handbook.tts.gsa.gov/org-chart/), or the internal
      [Office of Solutions org chart](https://handbook.tts.gsa.gov/opp-org-chart/)
      instead

{% capture alert_content %} If you plan on creating a new Handbook page, first
check out the
[page templates](https://github.com/18F/handbook/tree/main/_templates). If the
type of content you're creating -- for example, if you're documenting a new tool
-- has a template, then please use it to write your new page. {% endcapture %}
{% include "alert.html" heading:"Creating a new page?" content:alert_content %}

Now, assuming you've identified what you want to contribute -- if you haven't,
check out the Handbook's [open issues](https://github.com/18F/handbook/issues)
-- let's talk about GitHub, the mechanism by which you'll contribute.

## Helpers and shortcuts

The backend of the Handbook is built using a tool called
[Eleventy](https://www.11ty.dev/), which uses a language called "Liquid" to
enable shortcuts and helpers, making it easier and faster to add new content.
Here are some of the helpers and shortcuts available in the Handbook. Please use
them when possible as they will make it easier to maintain the Handbook over
time!

- **Linking to another page**  
  Linking to other pages within the Handbook can be a little tricky if you do it
  by hand because you need to know the page's absolute URL after it is built and
  published. To simplify this, you can use the `{{ "{% page %}" }}` short code:

  ```
  [this is my link]{{ '({% page "/another/page/to/link" %})' }}
  or
  <a href="{{ '{% page "/another/page/to/link" %}' }}">this is my link</a>
  ```

- **Displaying images**  
  To include an image that is unique to TTS in your content, first be sure that
  the image is located in the `_img` directory. (Images not hosted within the
  Handbook can be included using the normal methods for images.) Then, use the
  `{{ "{% image %}" }}` short code, like this:

  ```
  {{ '{% image "_img/myImage.png" "alt text describing the image" %}' }}
  ```

  The first item after the code is the path to your new image. Your image can be
  organized into subdirectories however you like, just be sure to include the
  complete path here. The second item is alt text used to describe the image. If
  your image needs a custom CSS class, you can instead use the
  `{{ "{% image_with_class %}" }}` short code:

  ```
  {{ '{% image_with_class "path" "css class" "alt text" %}' }}
  ```

- **Linking to a Slack channel**  
  The format of links to Slack channels have changed over time, so instead of
  expecting everyone to be aware of the current way, we have created a short
  code that does it for you! The `{{ "{% slack_channel %}" }}` short code can
  help:

  - `{{ '{% slack_channel "research" %}' }}` will create a link to the
    `#research` channel. The link will be styled like so:
    {% slack_channel "research" %}. The channel name is the first item after the
    code and will work whether you include a hash symbol or not.

  - `{{ '{% slack_channel "g-diversity" "Diversity Guild" %}' }}` will create a
    link to `#g-diversity`, but it'll be presented with the text
    `Diversity Guild`, like so:
    {% slack_channel "#g-diversity" "Diversity Guild" %}

- **Linking to a download**  
  If you need to link to a publicly-downloadable file, you can add the file to
  the `downloads` directory in the Handbook repository. Then in your content,
  you can use the `{{ '{% download %}' }}` short code to get the full URL to
  your file, like so:

  ```
  [download my file]({{ '{% download "my_file.pdf" %}' }})
  or
  <a href="{{ '{% download "my_file.pdf" %}' }}">download my file</a>
  ```

- **Using a USWDS icon**  
  The Handbook is built on [USWDS](https://designsystem.digital.gov/) 3. As a
  result, it includes USWDS's icons. To make it easier to access the icons, you
  can use the `{{ "{% uswds_icon %}" }}` short code:

  `{{ '{% uswds_icon "build" %}' }}` will produce {% uswds_icon "build" %}

  USWDS provides a handy
  [searchable list of icons](https://designsystem.digital.gov/components/icon/)
  to help you find the perfect piece of iconography for your needs.

  {% capture alert_content %} Do not use icons in place of textual content.
  These icons do not come with alt text and are not accessible. Use them as
  decorative elements or as additional emphasis on the text. {% endcapture %}
  {% include "alert.html" heading:"Be careful with icons" content:alert_content %}

## Contributing via Git

If you're not familiar with how to edit Markdown through GitHub, start with
[Intro to GitHub]({% page "/intro-to-github/" %}) and
[digital.gov's Using GitHub for Content Creation](https://digital.gov/resources/an-introduction-github/).

- Click the `Edit this page` link at the very bottom of whichever page you want
  to edit. This will bring you to GitHub with the page you selected already
  loaded into an editor window. This is a plaintext editor.
  - Most handbook pages are in Markdown as described in the links above. Some of
    them are HTML, however.
- Make your changes. Don't worry too much about keeping the file neat and tidy –
  the file will be formatted for consistency automatically. You should only need
  to worry about the Markdown and the content!
- At the bottom of the page, you will have an opportunity to provide some text
  describing this edit. This will be used as part of the default description
  text when you open your pull request (PR) in the next step. You may leave it
  blank if you wish as you will have a chance to edit the PR text directly.
- Make sure `Create a new branch for this commit and start a pull request` is
  selected. Check the automatically-generated branch name in the text box below
  that selection – you will need it later if you want to edit multiple files as
  part of the same pull request – and click the `Propose changes` button.
- On the pull request page, give your PR a short title that helps people quickly
  identify what it does. Feel free to provide more information in the
  description field.
- Click the `Create pull request` button. This will automatically start a series
  of tests to ensure everything is still working as expected. While those run,
  you can assign someone to review your pull request using the "Reviewers"
  section in the right sidebar. Most PRs will be automatically assigned a
  reviewer, but you can add your own. See the
  [pull requests](#pull-requests-prs) and [CODEOWNERS](#codeowners) sections
  below for more information.

If you need to edit multiple files as part of a single pull request, it is best
to use a desktop file editor. Doing it directly in GitHub is a bit more
complicated.

- After editing your first file as described above, navigate to the
  [list of branches](https://github.com/18F/handbook/branches), find the one you
  created above, and click it. This will display a list of all files in the
  Handbook, but as they exist on your branch.
- Browse the file tree to find the ones you want to edit. Click a filename to
  open a file viewer. From here, you can edit the file by clicking the pencil
  icon above the content.
- When you finish editing a file, make sure
  `Commit directly to the <your branch> branch` is selected and then click the
  `Commit changes` button. This will cause your new edits to be added to the
  pull request you opened previously.
- You can continue to edit files from your branch and they will be added to your
  pull request.

## Other

Random technical details:

### Front matter

The Handbook has a special `questions`
[front matter](https://www.11ty.dev/docs/data-frontmatter/) variable for pages:

```yaml
questions:
  - name-of-slack-channel
  - some@email.gov
  - text: The text to display
    url: https://somesite.gov
```

It is optional, and can contain one or more Slack channel name, email address,
and/or link.

### Auto-formatting

We use [Prettier](https://prettier.io/) to enforce a standard formatting for all
Markdown files. If code is pushed to GitHub and is not well-formatted via
Prettier, it will automatically be fixed by a bot; you have the option to run
Prettier locally before pushing to avoid this extra commit, but it is not
required. To format your code locally, run:

```sh
npm run lint
```

### File/folder structure

New files should be created in the `pages` directory and in the sub-directory
that makes the most sense for your content. For example, a new page on an 18F
process should go in the `pages/18f` directory.

### Pull requests (PRs)

Each pull request should be reviewed by at least one other TTS staff member
before merging. Once a PR is approved, anyone can merge it (including the
original submitter).

If you make a pull request that's best reviewed by a specific person, tag or
assign it to that person. It can also help to ping them in Slack to ask for
review.

### CODEOWNERS

The TTS Handbook uses the GitHub
["code owners" feature](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners)
to automatically add content owners as a reviewer. This means that in most
cases, you as a contributor should not need to manually add anyone for a review.

If you suspect that the wrong team was added as a reviewer, feel free to open a
pull request to change the CODEOWNERS file, located at the top level of the
project.

### How to review and merge pull requests

Any TTS staff member can review a pull request. If it's not your area of
expertise, ask somebody who has expertise in that area (for instance, by
commenting to tag a person or sharing the PR in Slack). If the author of the
pull request added a specific person as a reviewer, hold off merging the pull
request until at least one specified reviewer has had a chance to review it.

A note to submitters: If you need multiple people to see your PR before it's
merged, please add a comment letting reviewers know!

If you're not sure, ask for a second opinion in
{% slack_channel "tts-handbook" %} first.

## Content and accessibility

The handbook follows the [18F content guide](https://content-guide.18f.gov), and
all content should follow web accessibility best practices. Remember to use
[descriptive link text](https://content-guide.18f.gov/urls-and-filenames/#link-text).

## Public domain

This project is in the public domain within the United States, and copyright and
related rights in the work worldwide are waived through the
[CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0 dedication. By
submitting a pull request, you are agreeing to comply with this waiver of
copyright interest.
