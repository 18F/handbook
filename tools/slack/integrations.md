---
title: Slack integrations
questions:
  - admins-slack
---

[_Back to Slack page_](../)

We have a few different Slack Apps and bots you'll see in Slack:

- [Angry Tock](https://gsa-tts.slack.com/team/angrytock): our fierce timesheet reminder.
- [Charlie](https://gsa-tts.slack.com/team/charlie), a.k.a. _El Hubot Real_: our [Hubot instance](https://github.com/18F/18f-bot). Knows all kinds of tricks. To get a list of them, send Charlie a direct message with the word `help`.
- [coffeemate](https://gsa-tts.slack.com/team/charlie): send a message with `coffee me` in a public channel or direct message @Charlie (El Hubot Real) with `coffee me` to set up a virtual coffee/tea with a random coworker.
- [Slackbot](https://get.slack.help/hc/en-us/articles/202026038-Slackbot-your-assistant-notepad-programmable-bot): We automate responses to frequently asked questions with a Slackbot. You can update or customize responses [here](https://gsa-tts.slack.com/customize/slackbot). (You can also [add emoji](https://gsa-tts.slack.com/customize/emoji)). **Do not include private or sensitive information in Slackbot automatic responses.**

Learn more about some of our unique channel customizations and auto-responses in the [Slack @ TTS](https://docs.google.com/document/d/1Hm42cg61S7FPhaLrRIJxl-LXQCcwGvJTKX_wG0Jz4aU/edit#heading=h.4l9k8pqdjzh1) guide.

If you're interested in learning more about the bots, or perhaps contributing to them, pop into [#bots](https://gsa-tts.slack.com/archives/bots/).

### New integrations

You can add new "configurations" of [pre-approved integrations](https://gsa-tts.slack.com/apps/manage) to Slack, for things like posting Trello or GitHub notifications to a Slack channel. You can also freely add new configurations for "Incoming WebHooks," which is on a [different page](https://gsa-tts.slack.com/apps/manage/custom-integrations). For any new integration types, please follow the process below.

**[Integration request form](https://goo.gl/forms/pgxtz7xwIWubF0go1)**

Note this is only necessary for new bots or _types_ of integrations — approval is not needed for new “configurations” of a previously-approved App. The form should be filled out again if the nature of the connection changes, e.g. a webhook connection changes to using OAuth.

Before completing this form, you might need to research how the integration interacts with Slack. For example, does the integration have read access to channels or not? Reach out to #admins-slack and/or [Slack support](https://gsa-tts.slack.com/help/requests/new) for help.

New integrations being built/hosted by GSA should be developed against the [test Slack](https://gsa-tts-testing.slack.com/)—ask in #admins-slack for access. When ready to be integrated into the [TTS](https://www.gsa.gov/portal/category/25729) Slack, fill out the form.

Responses will be reviewed in [this spreadsheet](https://docs.google.com/spreadsheets/d/1karb4OJPFga493-3bnuWFvhFuk18iFlvz-xWC8ZedSQ/edit#gid=161327310). [Edit the form](https://docs.google.com/a/gsa.gov/forms/d/1sH-eLcDMDSBE9xvUnbE39N0PFOcfg6Mf3mnWU8xzBz8/edit).

New integrations/bots need approval from the following:

- TTS Slack admins
- Security Engineering (ISE)
- OCTO
- GSA IT Slack admins

Considerations:

- Read access from Slack (e.g. RSS) will almost definitely be approved.
- One-way integrations into Slack (e.g. via webhooks) are almost always fine.
- Integrations from higher-risk systems (Moderate or High) into Slack will generally not be approved.
- TTS Tech Portfolio will advise a hard veto on any externally hosted bots that can read all the messages in channels they are invited into and the only utility from the bot is achieved if they are invited into more or less all the channels.
