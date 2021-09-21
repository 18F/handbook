---
title: External collaboration through Slack
questions:
  - admins-slack
---

[_Back to Slack page_](../)

Collaboration with people outside of TTS falls into one of two categories:

- [Partners](#partners)
- [The public](#the-public)

We use different setups for each.

## Partners

Collaborators may include:

- Vendors _under contract_ (not just a Terms of Service) with TTS
- Vendors with GSA who are working on a project with TTS, for which we have an Memorandum of Understanding (MOU)
- Partners at federal agencies whose projects are under an Interagency Agreement with TTS, or at state or local agencies whose projects are under an Intergovernmental Collaboration Act agreement with TTS.

Note this does _not_ include:

- The general public, for which we have [dedicated channels](#the-public)
- Other feds who we are not working with directly

Contractors' level of access will be determined by the Contracting Officer (CO). By default, **contractors who are "embedded" in TTS (working on TTS projects most or full-time) can be added as full members using their GSA emails, while other collaborators should be added as single or multi-channel guests**, as appropriate. See [contractors]({{site.baseurl}}/contractors/) for general information.

[Request guest access](https://goo.gl/forms/mKATdB9QuNo7AXVY2){: .usa-button}

Additonal exceptions, including a small number of close TTS collaborators at GSA, may be added as full Slack members at the discretion of the Technology Director. Examples might include the Chief Information Officer or FAS Commissioner. Ask in [#admins-slack](https://gsa-tts.slack.com/messages/admins-slack) if you'd like to add someone to this category.

### Dedicated channels

You may want to invite partners, contractors, etc. to specific project channels to foster collaboration and asynchronous communication with the team. Projects often [create](https://get.slack.help/hc/en-us/articles/201402297-Creating-a-channel) specific channels that end with `-partners`.

1. [Create a `<project>-partners` channel](https://get.slack.help/hc/en-us/articles/201402297-Creating-a-channel), if you don't want them in an existing channel.
1. Add the partners to the channel, either:
   - Through Slack Connect (preferred; see below)
   - Individually, through the [user request form](https://docs.google.com/a/gsa.gov/forms/d/e/1FAIpQLSfYQ-D82rIGwbCmwF3kAQERqczi5syVGq6GtmQNR6fhxRAA2Q/viewform)

#### Shared channels

Slack offers a couple of mechanisms for sharing channels with partners that use Slack:

[**Multi-workspace channels**](https://slack.com/help/articles/115001399587-Create-multi-workspace-channels-on-Enterprise-Grid) can be used between [workspaces in the GSA Slack Enterprise Grid](https://gsa.enterprise.slack.com/).

Use [**Slack Connect**](https://slack.com/help/articles/115004151203-Guide-to-sharing-channels-with-external-organizations) to share channels with partners outside of GSA. This is the preferred over adding them as Guests, since:

- It offloads user management to the partner
- The partners can use their existing Slack accounts
- The partner is able to retain the history
- The history shows up in searches of their Slack workspace
- It saves TTS money

The contents of shared channels are treated the same as normal channels — see [rules](../getting-started/) and [records](../records/).

## The public

[TTS](https://www.gsa.gov/portal/category/25729) has specific channels in Slack that are open to the public to join. These channels end with `-public`. (Note: In Slack's parlance, all channels in a workspace are either `public`, allowing any full member to find/join, or `private`. However, when we say "public channels" on this page, we mean channels open to all members of the public.)

Friends with `.gov`/`.mil` email addresses who aren't collaborating on a project can be invited into public channels. Fill out the [user request form](https://docs.google.com/forms/d/e/1FAIpQLSfYQ-D82rIGwbCmwF3kAQERqczi5syVGq6GtmQNR6fhxRAA2Q/viewform?usp=sf_link).

Treat these public channels like you would a livestreamed event on GSA's YouTube page or other type of public meeting open to guests. Materials and documents that are not otherwise public should not be shared only in public channels; instead, they should be published on TTS websites and then linked to from the public channels so that access to Slack isn't required to see the document.

Members of the public must also comply with GSA standards and the [TTS Code of Conduct]({{site.baseurl}}/code-of-conduct).

To invite people to a public Slack channel, send them to [chat.18f.gov](https://chat.18f.gov/) and have them select the appropriate channel from the drop-down. Note that these users are added as [**single-channel** guests](https://slack.zendesk.com/hc/en-us/articles/201314026-Understanding-roles-permissions-inside-Slack).

### Add a new public channel

See [the instructions](https://github.com/18F/chat#adding-new-public-channels).

## Usage of other Slack workspaces

You may be invited to other Slack workspaces operated by government entities, or entities under contract to the government. You're allowed to join those workspaces as necessary for your work. You should join those workspaces with your **GSA email address**. If you're invited to Slack workspaces [in your personal capacity]({{site.baseurl}}/office-of-operations/fas-speaker-guide/#additional-information), you must join those workspaces with a personal email address.
