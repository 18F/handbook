---
title: External collaboration through Slack
questions:
  - admins-slack
---

[_Back to Slack page_](../)

Collaboration with people outside of TTS falls into one of two categories:

- [Working with partners on Slack](#working-with-partners-on-slack)
- [The public](#collaborating-with-the-public-on-slack)

We use different setups for each.

## Working with partners on Slack

Partners may include:

- Partners at federal agencies whose projects are under an Interagency Agreement with TTS, or at state or local agencies whose projects are under an Intergovernmental Collaboration Act agreement with TTS
- Vendors _under contract_ (not just a Terms of Service) with TTS
- Vendors with GSA who are working on a project with TTS, for which we have a Memorandum of Understanding (MOU)

Note this does _not_ include:

- The general public, for which we have [dedicated channels](#collaborating-with-the-public-on-slack)
- Other feds we're not working with directly

Contractors' level of access will be determined by the Contracting Officer (CO). By default, **contractors who are "embedded" in TTS (working on TTS projects most or full-time) can be added as full members using their GSA emails. Other collaborators should be added as single or multi-channel guests** as appropriate. See [contractors]({{site.baseurl}}/contractors/) for general information. [Request guest access through GSA IT](https://gsa.servicenowservices.com/sp?id=sc_category&sys_id=f9874e76db5003400dc9ff621f96190d&catalog_id=e0d08b13c3330100c8b837659bba8fb4).

TTS collaborators within GSA may be added as full Slack members. Examples might include the Chief Information Officer or FAS Commissioner. If you'd like to add someone to this category ask the TTS @tech-portfolio before making this request in [#admins-slack](https://gsa-tts.slack.com/messages/admins-slack).

### Dedicated channels

You may want to invite partners, contractors, etc. to specific project channels to foster collaboration and asynchronous communication with the team. Projects often [create specific channels](https://get.slack.help/hc/en-us/articles/201402297-Creating-a-channel) that end with `-partners`.

1. [Create a `<project>-partners` channel](https://get.slack.help/hc/en-us/articles/201402297-Creating-a-channel) if an existing channel doesn't meet your needs.
1. Add partners to the channel through one of these methods:
   - Slack Connect (preferred; see below)
   - Individually, through a [GSA IT request](https://gsa.servicenowservices.com/sp?id%3Dsc_category%26sys_id%3Df9874e76db5003400dc9ff621f96190d%26catalog_id%3De0d08b13c3330100c8b837659bba8fb4&sa=D&source=editors&ust=1646321611843286&usg=AOvVaw3UU70sD9y4ZuftnI4AvkfY)

### Shared channels

There are two options for sharing channels with partners who use Slack.

- [**Multi-workspace channels**](https://slack.com/help/articles/115001399587-Create-multi-workspace-channels-on-Enterprise-Grid) can be used between [workspaces in the GSA Slack Enterprise Grid](https://gsa.enterprise.slack.com/).

- Use [**Slack Connect**](https://slack.com/help/articles/115004151203-Guide-to-sharing-channels-with-external-organizations) to share channels with partners outside of GSA.

Slack Connect is preferred over adding partners as guests.

- It offloads user management to the partner
- The partners can use their existing Slack accounts
- The partner is able to retain the channel history
- The history shows up in searches of the partner's Slack workspace
- It saves TTS money

The contents of shared channels are treated the same as other channels. See [rules](../getting-started/) and [records](../records/).

## Collaborating with the public on Slack

TTS has specific channels in Slack that the public can join. These channels end with `-public`. (Note: In Slack's parlance, all channels in a workspace are either `public`, allowing any full member to find/join, or `private`. However, when we say "public channels" on this page, we mean channels open to all members of the public.)

Friends with `.gov`/`.mil` email addresses who aren't collaborating on a project can be invited into public channels. Request this through [GSA IT](https://gsa.servicenowservices.com/sp?id%3Dsc_category%26sys_id%3Df9874e76db5003400dc9ff621f96190d%26catalog_id%3De0d08b13c3330100c8b837659bba8fb4&sa=D&source=editors&ust=1646322071630282&usg=AOvVaw1yztj9UbjcyxJDbmOR_uMO).

Treat these public channels like you would a livestreamed event on GSA's YouTube page or other type of public meeting open to guests. Materials and documents that are not otherwise public should not be shared only in public channels. Instead, they should be published on TTS websites and then linked to from the public channels so that access to Slack isn't required to see the information.

Members of the public must also comply with GSA standards and the [TTS Code of Conduct]({{site.baseurl}}/code-of-conduct).

To invite people to a public Slack channel, send them to [chat.18f.gov](https://chat.18f.gov/) and have them select the appropriate channel from the drop-down. Note that these users are added as [**single-channel** guests](https://slack.zendesk.com/hc/en-us/articles/201314026-Understanding-roles-permissions-inside-Slack).

### Add a new public channel

See [the instructions for creating a new public channel](https://github.com/18F/chat#adding-new-public-channels).

## Archive a Slack channel

When a Slack channel is no longer needed (e.g., a partner project has ended), the channel should be archived. For Slack Connect channels (indicated by a double diamond icon next to the channel name), make a request in [#admins-slack](https://gsa-tts.slack.com/messages/admins-slack) to archive the channel. Channels that aren't Slack Connect can be archived by any member of the channel. View [instructions for archiving a Slack channel](https://slack.com/help/articles/213185307-Archive-or-delete-a-channel).

## Use of other Slack workspaces

You may be invited to other Slack workspaces operated by government entities, or entities under contract to the government. You're allowed to join those workspaces as necessary for your work. You should join those workspaces with your **GSA email address**. If you're invited to Slack workspaces [in your personal capacity]({{site.baseurl}}/office-of-operations/fas-speaker-guide/#professional-vs-personal-capacity), you must join those workspaces with a personal email address.
