---
title: Contributing to the Handbook
permalink: /contributing/
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
-- let's talk about the mechanism by which you'll contribute: NetlifyCMS or Git.

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

## Contributing via NetlifyCMS (Experimental)

[NetlifyCMS](https://www.netlifycms.org/) is a Git-based content management
system (CMS) that provides a Google Docs-like interface for editing content. In
other words, this means that you won't need to know anything about (a) Git, (b)
Markdown, or (c) web development to make your contribution.

If you'd rather stick with the Git way of editing content, see
[below](#contributing-via-git).

Note: The following steps specifically cover **editing an existing page**.

### Step 1: Access NetlifyCMS

To access NetlifyCMS for the Handbook, navigate to
[the Handbook content manager](https://handbook.tts.gsa.gov/admin/). If you
haven't made a contribution before, NetlifyCMS will prompt you to login with
GitHub. If you don't have a GitHub account,
[create one](https://github.com/signup).

Because the Handbook is built and served by
[Cloud.gov Pages](https://cloud.gov/pages/), you'll also need to [request access
to Pages]({% page "/tools/federalist/" %}) before you can use NetlifyCMS.
Cloud.gov Pages uses cloud.gov for authentication, so you'll need a Cloud.gov
account before requesting access to Pages.

### Step 2: Find the page you'd like to edit

Using the search feature, search by the _title_ of the page you are looking to
edit. It should come up in the results; click it to open the editor.

{% image "_img/netlifycms-step2.png" "Arrow pointing to the Netlify search bar" %}

### Step 3: Make your changes and save

NetlifyCMS lets you edit content in either Rich Text or Markdown, so feel free
to use whichever makes you feel more comfortable. When you're done making your
changes, click the 'Save' button at the top of your screen. _Note: NetlifyCMS
does not offer auto-saving at this time._

When you save for the first time, a
[pull request](https://github.com/18F/handbook/pulls) will be automatically
opened.

**Action Item: You should change the title and body of the pull request to make
more sense, since it will be pre-filled by NetlifyCMS.**

{% image "_img/netlifycms-step3.png" "Arrow pointing to the Netlify save button" %}

### Step 4: Update the status of your change from 'Draft' to 'In Review'

We've enabled the "editorial workflow" feature of NetlifyCMS, which allows
content editors to more easily track the status of proposed changes. When you
first click save, your changes will have 'Status: Draft' attached. Once you feel
that your changes are ready for others' review, use the dropdown to change the
status to 'In review'.

You can also change the status by using a
[Trello-like board](https://handbook.tts.gsa.gov/admin/#/workflow). To change
the status, simply drag the card associated with your changes from the 'Drafts'
column to the 'In Review' column.

{% image "_img/netlifycms-step4.png" "Arrow pointing to the 'In review' status" %}

### Step 5: See your changes through!

At this point, your changes should be officially marked as ready for review --
great work! You should hear back from certain
[content owners](https://github.com/18F/handbook/blob/main/CODEOWNERS) regarding
your changes; they should work with you to get your change merged into the main
Handbook repository.

At the time of writing, the review process is primarily handled in GitHub. If
you aren't familiar with this tool, that's okay -- see our
[Intro to GitHub](https://handbook.tts.gsa.gov/intro-to-github/) for a brief
primer. For most people, the important things to know in GitHub are: (a) how to
login, (b) how to comment, request changes, or approve pull requests, and (c)
how to create
[issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/quickstart).

{% image "_img/netlifycms-step5.png" "Screenshot of the GitHub pull request" %}

### Other benefits

- **Access the build preview directly**: At the top right hand side of
  NetlifyCMS, click 'View Preview' to see your changes deployed on a live, mock
  Handbook, courtesy of cloud.gov Pages. Check out the
  [build preview docs](https://federalist.18f.gov/documentation/previews/) for
  more information on this feature.

## Contributing via Git

If you're not familiar with how to edit Markdown through GitHub, see [Intro to
GitHub]({% page "/intro-to-github/" %}) and
[digital.gov's Using GitHub for Content Creation](https://digital.gov/resources/an-introduction-github/).

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

### Fork or branch?

Forking and branching are two ways of submitting pull requests to edit the
Handbook.

If you are using the **_GitHub website built-in editing features_**, you do not
have to choose: GitHub will make the correct choice for you.

If you are using your Terminal / local git to edit:

- **TTS teammates**: Please use **_branching_** to submit pull requests.
  Federalist Preview sites will only be built from a branch, and continuous
  integration can only succeed for PRs created from branches. If you are a TTS
  teammate and don't get an option to build a branch, request access to the
  [18F Staff team](https://github.com/orgs/18F/teams/18f-staff/) on
  #admins-github
- **External contributors**: Please use **_forking_** to submit pull requests,
  since non-TTS contributors do not have write access. Unfortunately, we won't
  be able to run Federalist Preview sites for your pull request; please build
  and serve the site locally to test instead.

If you have any questions, feel free to ask in
{% slack_channel "tts-handbook" %}.

Thank you so much for your contributions! :tada:

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

**If you're reviewing a pull request made using NetlifyCMS**

Pull requests made using NetlifyCMS should only be reviewed when the label is
changed from `netlify-cms/draft` to `netlify-cms/pending_review` or
`netlify-cms/pending_publish`.

### Using repo specific labels

- _do not merge yet:_ Delay merging this pull request until the label has been
  removed
- _help wanted:_ Need additional assistance
- _In progress:_ Currently being worked on
- _info is incorrect/outdated:_ The current information that is there needs
  tending to
- _new content needed:_ There is information that is not present that should
  exist
- _<2 hours:_ Easy peazy, lemon squeezy
- _2-4 hours:_ Hold my callz
- _\>4 hours:_ Ooph, its a doozy!

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
