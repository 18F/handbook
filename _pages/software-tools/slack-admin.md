---
title: Slack for TTS Admins
tags:
 - TTS legend
---

This page overviews the administrative tasks done to manage our Slack account at TTS.

* See the [Slack Handbook Page]({{site.baseurl}}/slack/) for an introduction and setup
* See the [Slack @ TTS](https://docs.google.com/document/d/1Hm42cg61S7FPhaLrRIJxl-LXQCcwGvJTKX_wG0Jz4aU/edit#heading=h.ho6etfp5g3pp) internal how-to guide 

## Adding TTS staff

Fill out the [user request form](https://docs.google.com/forms/d/e/1FAIpQLSfYQ-D82rIGwbCmwF3kAQERqczi5syVGq6GtmQNR6fhxRAA2Q/viewform?usp=sf_link).

### Adding external collaborators

We can invite people outside TTS to have access to a **single channel** on our Slack account. These single-channel users are free, and don't need financial authorization from TeamOps or security clearance from TTS Tech Portfolio. These users may include:

- Vendors _under contract_ (not just a Terms of Service) with TTS
- Vendors with GSA who are working on a project with TTS, for which we have an Memorandum of Understanding (MOU)
- Partners at federal agencies whose projects are under an Interagency Agreement with TTS, or at state or local agencies whose projects are under an Intergovernmental Collaboration Act agreement with TTS.
- Federal staff with government email addresses (for example, friends at the USDS, CFPB, other teams inside GSA, etc.).
- Members of the public collaborating on an open source project in a public channel via [chat.18f.gov](https://chat.18f.gov).

TTS reserves the right to bill for partners with access to more than channel your IAA / budget line at [the normal Slack user rate](https://slack.com/pricing). When possible, we prefer to set up shared channels with partners over having multi-channel guests.

You may want to invite partners, contractors, etc. to specific project channels to foster collaboration and asynchronous communication with the team. Most 18F projects [create](https://get.slack.help/hc/en-us/articles/201402297-Creating-a-channel) specific channels that end with `-partners`.

1. [Create a `<project>-partners` channel](https://get.slack.help/hc/en-us/articles/201402297-Creating-a-channel), if you don't want them in an existing channel.
1. Fill out the [user request form](https://docs.google.com/a/gsa.gov/forms/d/e/1FAIpQLSfYQ-D82rIGwbCmwF3kAQERqczi5syVGq6GtmQNR6fhxRAA2Q/viewform).

A small number of close TTS collaborators at GSA may be full Slack members at the discretion of the head of infrastructure. Examples might include the Chief Information Officer or FAS Commissioner. Ask in [#admins-slack](https://gsa-tts.slack.com/messages/admins-slack) if you'd like to add someone to this category.

## Offboarding

Slack users need to be offboarded in the following situations:

- Someone leaving TTS
    - Someone from [#talent](https://gsa-tts.slack.com/messages/talent/) should fill out [the user modification form](https://docs.google.com/a/gsa.gov/forms/d/e/1FAIpQLSfYQ-D82rIGwbCmwF3kAQERqczi5syVGq6GtmQNR6fhxRAA2Q/viewform) when this happens.
- A partner who's employment/engagement is ending
    - It is the responsibility of the engagement manager to inform @slackadmin in [#admins-slack](https://gsa-tts.slack.com/messages/admins-slack/) when this is happening.
- A contractor who is no longer supporting TTS
    - The COR or the TTS representative that added the contractor to Slack should fill out [the user modification form](https://docs.google.com/a/gsa.gov/forms/d/e/1FAIpQLSfYQ-D82rIGwbCmwF3kAQERqczi5syVGq6GtmQNR6fhxRAA2Q/viewform) when the period of performance ends.

An admin will then do one of the following:

- **[Convert them to a Single-Channel Guest.](https://get.slack.help/hc/en-us/articles/218124397-Change-a-team-member-s-role)**
    - Put them in one of the following channels (as appropriate):
        * [#alumni](https://gsa-tts.slack.com/messages/alumni/) (former Full Members only, but treated as a public channel)
        * One of the `-public` channels (their pick)
    - [Disable their 2FA](https://get.slack.help/hc/en-us/articles/212221668-Require-two-factor-authentication-for-your-team).
        * ...unless you know they were using their personal device for 2FA — we don't want them to be locked out.
    - [Change their email](https://get.slack.help/hc/en-us/articles/225531168-Change-a-team-member-s-email-address) to their personal address

\*NOTE: When a TTS Slack user is converted to a Single-channel user, they maintain access to their direct message chat history but are unable to search for or create new direct messages with folks that they've never messaged before.  Unless another channel is specified, the only channel that will still be accessible is #alumni.

- **[Deactivate their account.](https://get.slack.help/hc/en-us/articles/204475027-Deactivate-a-team-member-s-account)**

If they were a partner, the admin will also set their `Downgraded/disabled on` date in [the user request spreadsheet](https://docs.google.com/spreadsheets/d/1weEbuD1RUqtwTiHCT_roD6tvKkBiQL5nkLe8btxyKHA/edit#gid=1249016991).

## Slack admins

Here are the resources used by Slack Admins to track and manage Slack accounts:

- [GSA IT's Slack administration guide](https://docs.google.com/document/d/1ncHqriv2CnsZQ7brrZ3mlLCK_i-XuvW-kRpXb0fP0t4/edit)
- Subscribe to responses for the following forms ([screen capture](https://cl.ly/03100Y0u2v2i))
  - [New user requests (internal)](https://docs.google.com/forms/d/e/1FAIpQLSfYQ-D82rIGwbCmwF3kAQERqczi5syVGq6GtmQNR6fhxRAA2Q/viewform?usp=sf_link)
  - [New public user requests (external)](https://docs.google.com/forms/d/e/1FAIpQLSfYQ-D82rIGwbCmwF3kAQERqczi5syVGq6GtmQNR6fhxRAA2Q/viewform?usp=sf_link)
  - [Integration requests](https://docs.google.com/a/gsa.gov/forms/d/1sH-eLcDMDSBE9xvUnbE39N0PFOcfg6Mf3mnWU8xzBz8/edit#responses)
- [Delegation of functionality](https://docs.google.com/a/gsa.gov/document/d/1gDuScce7R6q6NqQPPS3cFe3dZFYO_ZEp60dmuzVDYwg/edit?usp=sharing)

## Records policy

Per the mandatory [General Records Schedule 3.1](http://www.archives.gov/records-mgmt/memos/ac33-2014.html) issued by the National Archives and Records Administration (NARA), everything in Slack channels and groups is considered at minimum a temporary record.

To ensure compliance with the possibility that we might create permanent or long-lived records in Slack, the records retention policy is set to **retain all messages forever AND also retain edit and deletion logs for all messages**. Users are prohibited from deleting messages. Do not abuse the `edit` command in Slack to effectively delete your message by replacing it with null or symbolic content. Edits for clarity or typos are fine. If any bot or integration ever posts something inappropriate, please call for a clean-up in [#admins-slack](https://gsa-tts.slack.com/messages/admins-slack/) using `@slackadmin`.

This policy applies to all types of Slack communications: public channels, private groups, even direct messages. **Nothing is private.** We use the [Corporate Export](https://get.slack.help/hc/en-us/articles/204897248-Guide-to-Slack-import-and-export-tools) capability in Slack to get the data and filter using the [slack-export-handling](https://github.com/18F/slack-export-handling) tool.

During regular operations, only the Slack Owners have access to the exports. There is no regular monitoring of these messages, but they have been reviewed in the past. Various legal actions (for example, a Freedom of Information Act (FOIA) request) or security operations approved by the TTS Tech Portfolio Director have required others to view the exports. The team will continue to be notified at the earliest possible time that the exports have been accessed. Notifications of access may not be made in realtime.

## Exporting channel contents

There is not an easy way to export the contents of a single channel, for partners or otherwise. If you really want, you can:

1. Open the Slack channel in Chrome
1. [Take a screenshot](https://zapier.com/blog/full-page-screenshots-in-chrome/)
1. Scroll up
1. Repeat

These, of course, will be images, so they unfortunately won't be searchable.

---

## Still have questions?

Ask in Slack: [#admins-slack](https://gsa-tts.slack.com/messages/admins-slack), [#it-issues](https://gsa-tts.slack.com/messages/it-issues), [#questions](https://gsa-tts.slack.com/messages/questions), [#teamops](https://gsa-tts.slack.com/messages/teamops)
