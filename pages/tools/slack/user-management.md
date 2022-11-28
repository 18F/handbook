---
title: Slack user management
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

## Custom emoji

Per
[GSA Directive](https://www.gsa.gov/cdnstatic/Directives/CC044995_Directive_CIO%2021602B%20CHGE%204,%20GSA%20Electronic%20Messaging%20and%20Related%20Services.pdf),
all custom emoji must be reviewed by TTS staff. You can add new emoji through
[the emoji request process]({% page "/tools/slack/guidelines/#custom-emoji" %}).
The overall process looks like this.

1. Users request new emoji from {% slack_channel "emoji-showcase" %}
2. TTS reviews the request in {% slack_channel "admins-emoji" %}
3. Approved emoji are routed to {% slack_channel "approved-emoji" %} for Slack
   admins
4. Slack admins
   [create the approved emoji](https://gsa-tts.slack.com/customize/emoji) in the
   Slack workspace
5. Users are notified the new emoji is ready for use

Ideas for automating the creation of approved emoji are discussed in
[18f/tts-tech-portfolio#1077](https://github.com/18f/tts-tech-portfolio/issues/1077).

### Approval criteria

TTS staff in {% slack_channel "admins-emoji" %} are responsible for reviewing
new emoji. Emoji are covered by the same rules that govern our behavior at work,
including the
[GSA IT Rules of Behavior](<https://www.gsa.gov/directive/gsa-information-technology-(it)-general-rules-of-behavior->),
[GSA Policy Statement on Harassment, Including Sexual and Non-sexual](<https://www.gsa.gov/directive/general-services-administration-(gsa)-policy-statement-on-harassment,-including-sexual-and-non-sexual->),
[TTS Code of Conduct]({% page "/code-of-conduct/" %}), and ethics rules. TTS
staff should review emoji requests with these rules in mind.

Submitters should be thoughtful and mindful about emoji submissions, and try to
ensure they're in line with our values of diversity and inclusion. Inclusion Bot
will automatically flag emoji submissions where the emoji name may contain
exclusionary language as a quick aid to reviewers.

**Emoji of TTS members' faces, family, pets, etc**: When reviewing, emoji
approvers **MUST** ask for clear, affirmative consent from the person whose
image is being used. Ideally, submitters will check before requesting, but it's
the approver's responsibility to verify.

If you'd like to help review emoji requests, please reach out to
{% slack_channel "tts-tech-portfolio" %}.

### Slack admins

Creation of emoji requires admin permissions. Once emoji are approved by TTS,
the request is handed-off to the Slack admins for creation. Once Slack admins
[create the approved emoji](https://gsa-tts.slack.com/customize/emoji), they
should click "I have created the emoji" to complete the request.

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
