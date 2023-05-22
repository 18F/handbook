---
title: Slack user management, administration and security
redirect_from:
  - /slack-admin/
questions:
  - admins-slack
---

_[Back to Slack page](../)_

This page overviews the administrative tasks done to manage our Slack account at
TTS.

## Adding TTS staff

The Talent team will fill out a
[user request ticket](https://gsa.servicenowservices.com/sp?id=sc_category&sys_id=f9874e76db5003400dc9ff621f96190d&catalog_id=e0d08b13c3330100c8b837659bba8fb4)
for people when they join TTS.

## Offboarding

Slack users need to be offboarded in the following situations:

- Someone leaving TTS
- A partner who's employment/engagement is ending
- A contractor who is no longer supporting TTS

In all of these cases, {% slack_channel "people-ops" "PeopleOps" %} / the
engagement manager / the COR should **fill out
[a user modification ticket](https://gsa.servicenowservices.com/sp?id=sc_category&sys_id=f9874e76db5003400dc9ff621f96190d&catalog_id=e0d08b13c3330100c8b837659bba8fb4)**.

An admin will then do one of the following:

- **[Convert them to a Single-Channel Guest.](https://get.slack.help/hc/en-us/articles/218124397-Change-a-team-member-s-role)**

  - Put them in one of the following channels (as appropriate):

    - {% slack_channel "alumni" %} (former Full Members only, but treated as a
      public channel)
    - One of the `-public` channels (their pick)

  - [Disable their 2FA](https://get.slack.help/hc/en-us/articles/212221668-Require-two-factor-authentication-for-your-team).

    - ...unless you know they were using their personal device for 2FA — we
      don't want them to be locked out.

  - [Change their email](https://get.slack.help/hc/en-us/articles/225531168-Change-a-team-member-s-email-address)
    to their personal address

\*NOTE: When a TTS Slack user is converted to a Single-channel user, they
maintain access to their direct message chat history but are unable to search
for or create new direct messages with folks that they've never messaged before.
Unless another channel is specified, the only channel that will still be
accessible is #alumni.

- **[Deactivate their account.](https://get.slack.help/hc/en-us/articles/204475027-Deactivate-a-team-member-s-account)**

If they were a partner, the admin will also set their `Downgraded/disabled on`
date in
[the user request spreadsheet](https://docs.google.com/spreadsheets/d/1weEbuD1RUqtwTiHCT_roD6tvKkBiQL5nkLe8btxyKHA/edit#gid=1249016991).

## Slack admins

Here are the resources used by Slack Admins to track and manage Slack accounts:

- [GSA IT's Slack administration guide](https://docs.google.com/document/d/1ncHqriv2CnsZQ7brrZ3mlLCK_i-XuvW-kRpXb0fP0t4/edit)
- [GSA IT's Slack ServiceNow tickets](https://gsa.servicenowservices.com/sp?id=sc_category&sys_id=f9874e76db5003400dc9ff621f96190d&catalog_id=e0d08b13c3330100c8b837659bba8fb4)
- [Delegation of functionality](https://docs.google.com/a/gsa.gov/document/d/1gDuScce7R6q6NqQPPS3cFe3dZFYO_ZEp60dmuzVDYwg/edit?usp=sharing)
- Requests for approved emoji are fulfilled from
  {% slack_channel "approved-emoji"%}

### Slack Workflow

Requests for new emoji use Slack's
[Workflow Builder](https://slack.com/help/articles/360035692513-Guide-to-Workflow-Builder)
feature. You can download the Workflow to share with other Slack workspaces. As
a Workflow Collaborator in Slack, click TTS > Tools > Workflow Builder. In the
Workflow Builder, select the menu from the Workflow you want to download. Click
"Download workflow file". This JSON file can be uploaded into another workspace
by clicking the "Import" button from the Workflow Builder.

Reach out to {% slack_channel "tts-tech-portfolio" %} for Collaborator access to
the Custom Emoji Request workflow.

## Security

GSA's Slack Enterprise Grid is authorized at the [Moderate](https://atos.open-control.org/categorization/#selecting-the-overall-impact-level) level via a [FedRAMP authorization](https://marketplace.fedramp.gov/#/product/slack?sort=productName&productNameSearch=slack).

