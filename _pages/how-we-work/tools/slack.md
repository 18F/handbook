---
title: Slack
---

Slack is a chat client that provides us with a centralized way to communicate without overloading our inboxes.

## Setup

Because Slack is a web application, there’s no installation necessary. You can [login online](https://gsa-tts.slack.com/) or download the [desktop](https://itunes.apple.com/us/app/slack/id803453959?mt=12) or [mobile](https://itunes.apple.com/us/app/slack-team-communication/id618783545?mt=8) clients from the App Store.


## Rules

- **Complete [your profile](https://gsa-tts.slack.com/account/profile).** A complete profile gives everyone a better chance of knowing who you are. This includes your first name, last name (optionally followed by your location and [personal pronouns](http://pronoun.is/) in parenthesis), profile picture (photos are preferred, but not required), phone number, and a summary of what you do and what teams you’re on.
- **[Enable two-factor authentication (2FA)](https://slack.zendesk.com/hc/en-us/articles/204509068-Enabling-two-factor-authentication).** You can either do this through SMS or an authentication tool. Slack provides detailed instructions for both options.
- **Abide by [the 18F Code of Conduct](/code-of-conduct).** If you see anyone violating our Code of Conduct, please contact [Noah Kunin](https://gsa-tts.slack.com/messages/@noah/) and [Hillary Hartley](https://gsa-tts.slack.com/messages/@hillary/).
- **Do not post anything that would make our systems vulnerable or would impact the privacy of others if it fell into the wrong hands.** If you need to share sensitive data (environmental variables, passwords, and so forth), please use [Fugacious](https://fugacious.18f.gov/) to create a short message that is auto-deleted. If the information you need to share is very complex, please share it using a GSA Google Drive folder, and then promptly delete it once you’re done sharing.
- **Assume everything you share will be made public**. Treat Slack as a public forum — you have _no_ privacy. This includes file uploads to Slack.

## Usage of 18F's Slack

Slack is required for all 18F staff (including PIFs). We can also invite people outside 18F to have access to a **single channel** on our Slack account. These single-channel users are free, and don't need financial authorization from TeamOps or security clearance from Infrastructure. These users may include:

- Vendors _under contract_ (not just a Terms of Service) with 18F
- Vendors with GSA who are working on a project with 18F, for which we have an Memorandum of Understanding (MOU)
- Partners at federal agencies whose projects are under an Interagency Agreement with 18F
- Federal staff with government email addresses (for example, friends at the USDS, CFPB, other teams inside GSA, etc.)
- Members of the public collaborating on an open source project in a public channel via [chat.18f.gov](https://chat.18f.gov)

## Usage of other Slack teams

You may be invited to other Slack teams operated by government entities, or entities under contract to the government. You're allowed to join those teams as necessary for your work. You should join those teams with your **government email address** and ensure your avatar and profile information are consistent across Slack teams. If you're invited to Slack teams unrelated to your job, you must join those teams with a personal email address.

### Project stakeholders

You can invite government partners to specific project channels to foster collaboration and asynchronous communication with the team. Several projects have [created](https://get.slack.help/hc/en-us/articles/201402297-Creating-a-channel) specific channels that end with `-partners`. Our partners may be invited as `single-channel guests` at no cost to the project or agency. Giving partners access to _more_ than one channel will be billed [the normal Slack user rate](https://gsa-tts.slack.com/pricing) to your IAA.

1. [Create a `<project>-partners` channel](https://get.slack.help/hc/en-us/articles/201402297-Creating-a-channel), if you don't want them in an existing channel.
1. Post the email/username of the partner(s) and what channel(s) they should be in in [#admins-slack](https://gsa-tts.slack.com/messages/admins-slack/).
1. If you want partners to have access to _more_ than one channel:
    1. The admin will make them a multi-channel user, and update [the multi-channel user list](https://docs.google.com/spreadsheets/d/1weEbuD1RUqtwTiHCT_roD6tvKkBiQL5nkLe8btxyKHA/edit).
    1. Give [#finance](https://gsa-tts.slack.com/messages/finance/) a heads up.

### Friends

Friends from other government teams can be invited into a project's channel or a general purpose channel like [#friends](https://gsa-tts.slack.com/messages/friends/). If the individual is a federal employee, and the main purpose of inviting them is to work on government projects, the invite should be sent to their `.gov`/`.mil` email address.

## Records policy

Per the mandatory [General Records Schedule 3.1](http://www.archives.gov/records-mgmt/memos/ac33-2014.html) issued by the National Archives and Records Administration (NARA), everything in Slack channels and groups is considered at minimum a temporary record.

To ensure compliance with the possibility that we might create permanent or long-lived records in Slack, the records retention policy is set to **retain all messages forever AND also retain edit and deletion logs for all messages**. Users are prohibited from deleting messages. Do not abuse the `edit` command in Slack to effectively delete your message by replacing it with null or symbolic content. Edits for clarity or typos are fine. If any bot or integration ever posts something inappropriate, please call for a clean-up in [#admins-slack](https://gsa-tts.slack.com/messages/admins-slack/).

This policy applies to all types of Slack communications: public channels, private groups, even direct messages. **Nothing is private.** We use the [compliance export](https://slack.zendesk.com/hc/en-us/articles/203950296-FAQs-about-Slack-s-policy-update#complianceexport) capability in Slack to view all messages. The Primary Team Owner is responsible for ensuring monthly exports and backing these exports up in GSA's Google Drive.

During regular operations, only the Slack Owners, the Executive Director of 18F, and GSA IT have access to the exports. There is no regular monitoring of these messages, but they have been reviewed in the past. Various legal actions (for example, a Freedom of Information Act request) or security operations approved by the Infrastructure Director have required others to view the exports. The team will continue to be notified at the earliest possible time that the exports have been accessed. Notifications of access may not be made in realtime.

## Infrastructure security

Slack is currently built on Amazon Web Services (AWS), which from a federal security perspective, already has a host of protections verified through GSA's [FedRAMP program](https://www.fedramp.gov/marketplace/compliant-systems/amazon-web-services-aws-eastwest-us-public-cloud/). GSA IT and 18F have also conducted a review of Slack's security operations and vulnerability scanning.

However, there are currently _no_ assurances that Slack employees can't read any and all of the messages sent via Slack. In fact, Slack [makes it clear](https://slack.com/security) that its employees _do_ have this ability, and just don't use it without customer permission:

> All of our employees are bound to our policies regarding customer data and we treat these issues as matters of the highest importance within our company. If, in order to diagnose a problem you are having with the service, we would need to do something which would expose your data to one of our employees in a readable form, we will always ask you prior to taking action and will not proceed without your permission. Our platform will automatically generate an audit entry of any such access.

This is the case with most software as a service offerings. Slack has multiple mechanisms in place to audit this access, and ensure it is only done with the appropriate authorizations. Regardless, we currently do not, and may never, authorize Slack to handle sensitive information.

## Integrations

_...or "Apps" or "bots"._

**[Integration request form](https://goo.gl/forms/pgxtz7xwIWubF0go1)**

Note this is only necessary for new bots or *types* of integrations—approval is not needed for new “configurations” of a previously-approved App. The form should filled out again if the nature of the connection changes, e.g. a webhook connection changes to using OAuth.

Before completing this form, you might need to research how the integration interacts with Slack. For example, does the integration have read access to channels or not? Reach out to #admins-slack and/or [Slack support](https://gsa-tts.slack.com/help/requests/new) for help.

New integrations being built/hosted by GSA should be developed against the [test Slack](https://gsa-tts-testing.slack.com/)—ask in #admins-slack for access. When ready to be integrated into the TTS Slack, fill out the form.

Responses will be reviewed in [this spreadsheet](https://docs.google.com/spreadsheets/d/1karb4OJPFga493-3bnuWFvhFuk18iFlvz-xWC8ZedSQ/edit#gid=161327310). The form can be edited [here](https://docs.google.com/a/gsa.gov/forms/d/1sH-eLcDMDSBE9xvUnbE39N0PFOcfg6Mf3mnWU8xzBz8/edit).

### Approval

New integrations/bots need approval from the following:

* TTS Slack admins
* Security Engineering (ISE) (Bo Berlas)
* OCTO
* GSA IT (Amar Singh, Chris McFerren, or Derrick Rogers)

### Considerations

* Read access from Slack (e.g. RSS) will almost definitely be approved.
* One-way integrations into Slack (e.g. via webhooks) are almost always fine.
* Integrations from higher-risk systems (Moderate or High) into Slack will generally not be approved.
* TTS Infrastructure will advise a hard veto on any externally hosted bots that can read all the messages in channels they are invited into and the only utility from the bot is achieved if they are invited into more or less all the channels.

## The public

18F has specific channels in Slack that are open to the public. These channels end with `-public` to signify a channel the public can join. Treat these channels like you would a town hall or other type of public meeting. Members of the public must also comply with GSA standards and the [18F Code of Conduct](/code-of-conduct).

### Invite a member of the public to Slack

To invite people to a public Slack channel, send them to [chat.18f.gov](https://chat.18f.gov/) and have them select the appropriate channel from the drop-down. Note that these users are added as [**single-channel** guests](https://slack.zendesk.com/hc/en-us/articles/201314026-Understanding-roles-permissions-inside-Slack).

### Add a new public channel

See [the instructions](https://github.com/18F/chat#adding-new-public-channels).

## Groups

Slack Groups allow you to direct messages to a specific list of people in a more precise way than an **@-channel** or **@-here**. Any full member can create and edit Slack groups at will. You can see existing groups by going to https://gsa-tts.slack.com/messages/general-talk/team/ (or click the "three dots" in top right and click "team directory") then going to the "Groups" tab.

Groups are a great way to alert people who might not be in a channel about something that needs their attention or make sure urgent incidents are directed to the right people and not an entire channel. For example, you can ping **@github-admins** in #admins-github if you have an urgent issue instead of using an **@channel** or use **@federalist-team** to alert that group of a conversation in another channel that we should see immediately.

## Tips

- **Everything in Slack is subject to FOIA** and is therefore potentially part of the public record (written words that are attributable back to you). Don’t say something on Slack that you wouldn’t feel comfortable appearing on the news.
- Slack provides some [formatting tips](https://get.slack.help/hc/en-us/articles/202288908-How-can-I-add-formatting-to-my-messages) to make your messages extra fancy.
- **When customizing your profile** with your location or [personal pronouns](http://pronoun.is/), consider also adding those details to the Last Name field so they appear alongside your messages. This is a great way to be remote-friendly and gender inclusive. Otherwise, your colleagues need to view your profile to see that information. Many people use airport codes instead of city names to indicate their location.
- **The advanced settings section** provides an option for _only showing channels that have unread messages._ This is useful if you’re a member of a lot of channels.
- **Click the timestamp** on any post to go to the archival view of it. This is helpful if you’d like to cross-post a link to a message in another channel.
- **When using Slack on mobile:** mentioning someone in a channel they aren’t in won’t notify them, and you won’t get the option to invite someone after mentioning them.
- **Feel free to pop in and out of channels.** You can `/mute` channels (so you only receive messages when your name or `@channel` is mentioned) or leave channels if they become overwhelming.
- **If you’re interested in tracking specific keywords across Slack,** set up [highlight word notifications](https://get.slack.help/hc/en-us/articles/201398467-Highlight-word-notifications).
- **To add an RSS feed to any channel**, type `/feed subscribe <RSS URL>`.
- **Never use Slack to share secure information.** If you need to share short bits of text securely, use [Fugacious](https://fugacious.18f.gov/). If you want to say something private, it’s easy to ask someone to hop on a call. (See the [shortcuts](/slack/#shortcuts) below.)
- **You can use Slack as an archival system.** It has a [powerful search feature](https://get.slack.help/hc/en-us/articles/202528808-Searching-in-Slack) and you can search specific channels or conversations. For instance, if you have a question about a specific healthcare plan, search for that in Slack before asking.
- You can also search by tagged emoji. To see all messages tagged with a particular emoji, search Slack for `has:{{emoji_name}}` (for example `has::evergreen_tree:`).
- **Set Slack boundaries when you need to be heads-down** by [setting your status](https://get.slack.help/hc/en-us/articles/201864558-Setting-your-Slack-status) to _Away_. If you use Slack on mobile, you can **prevent direct messages and mentions from pinging you when you're not working**. Just set your phone to Do Not Disturb mode or temporarily turn off notifications from the Slack app. Don't worry — though we have different schedules and may message each other at strange times, there's no expectation for people to respond when they're not working.
- **Praise your coworkers.** If you'd like to praise someone for doing good work, start a message with `love @username` or `:heart: @username` in [#general-talk](https://gsa-tts.slack.com/archives/general-talk), or any channel in which [Charlie](https://gsa-tts.slack.com/team/charlie) is present. You can also see recent praise in [#love](https://gsa-tts.slack.com/archives/love).
- **Use text encoding when pasting a large chunk of text.** Use the + sign to the left of the text box to create a snippet. There will be an option to select how you would like to encode the text; select plain text to avoid smart quotes, if you're pasting code.
- **Emojis come in different colors.** Tired of tabbing through multiple skin color emoji to find the one you want or identify with? Click on the Emoji Deluxe picker (the smily face in the text box) - then click on the emoji in the bottom right corner. You can then select a default color going forward.
- **Change your color scheme.** You can change your color scheme by going to Preferences --> Theme --> Custom Theme. Paste the following for the US Design Standards theme: `#112E51,#205493,#0071BC,#FFFFFF,#323A45,#FFFFFF,#4AA564,#981B1E`
- **Screen-sharing tip:** If you want notifications to stop showing up so people don't see them, hover over the Notification Center icon in the top right corner of your screen and **Option + click** on it. Repeat that to turn notifications back on.
- **Update Slackbot.** We automate responses to frequently asked questions with a Slackbot. You can update or customize responses [here](https://gsa-tts.slack.com/customize/slackbot). (You can also [add emoji](https://gsa-tts.slack.com/customize/emoji)).

### Frequently used emoji

:check: = I did this or verified it was done

:plus: = I am a +1 for the above

:100: = I am a SUPER +1 to the above OR this comment is keeping it 100 (as in, keeping it real, speaking the 100% truth)

:thumbsup: = Sounds good

:question: = I don't understand this/needs followup

:point_up: = I would also say this (can mean "this is correct" if you are the decider)

:raccoon: ===> Slack channel = Please consider moving this conversation to a different channel. (It's a raccoon because of [this image](http://i.imgur.com/cOnFedN.png) referenced in [this article](http://www.slate.com/articles/technology/users/2015/04/slack_and_the_office_chat_several_people_are_typing_who_s_working.html).

:raised_hand: = I volunteer

:raising_hand: = Have time for a question? (Keep in mind that many folks strongly prefer that you also add what your question is about so they can determine its urgency.)

:thanks: = A picture of Tom Hanks (T. Hanks -> thanks) used as a shortcut to say "thanks"

:facepalm: = Disbelief, shame, or exasperation.

:troll: = I'm intentionally [trolling](https://en.wikipedia.org/wiki/Internet_troll) you or making a joke

### Bots

- [Angry Tock](https://gsa-tts.slack.com/team/angrytock): our fierce timesheet reminder.
- [Charlie](https://gsa-tts.slack.com/team/charlie), a.k.a. _El Hubot Real_: our [Hubot instance](https://github.com/18F/18f-bot). Knows all kinds of tricks. To get a list of them, send Charlie a direct message with the word `help`.
- [coffeemate](https://gsa-tts.slack.com/team/coffeemate): direct message @coffeemate with `coffee me` to set up a virtual coffee/tea with a random coworker.
- [Dolores Landingham](https://gsa-tts.slack.com/team/mrs_landingham): our onboarding bot. Ask for access in [#wg-onboarding](https://gsa-tts.slack.com/archives/wg-onboarding).
- [:evergreen_tree: bot](https://github.com/18F/hubot-slack-github-issues#hubot-slack-github-issues): This bot allows you to “tag” Slack messages as information that should be in the 18F Handbook. If you add an 🌲 (`evergreen_tree`) reaction to a Slack message, a bot will open [a GitHub issue in the 18F Handbook repository](https://github.com/18F/handbook/issues) with a link to that message. The issue serves as a reminder to integrate the linked information into the handbook.
- [Slackbot](https://get.slack.help/hc/en-us/articles/202026038-Slackbot-your-assistant-notepad-programmable-bot): Slack's own bot is relatively simple, but easy to [customize with automatic responses](https://gsa-tts.slack.com/customize/slackbot).

If you're interested in learning more about the bots, or perhaps contributing to them, pop into [#bots](https://gsa-tts.slack.com/archives/bots/).

--------------------------------------------------------------------------------

## Appendix: Channel names and handy shortcuts

### Clusters of channels

* Teams
    * 18F
        * Business Units
            * [partner-solutions](https://gsa-tts.slack.com/messages/partner-solutions/)
            * [products-platforms](https://gsa-tts.slack.com/messages/products-platforms/)
        * 18F Chapters
            * [design](https://gsa-tts.slack.com/messages/design/)
            * [dev](https://gsa-tts.slack.com/messages/dev/) (Engineering)
            * [product](https://gsa-tts.slack.com/messages/product/)
            * [strategy](https://gsa-tts.slack.com/messages/strategy/)
    * [infrastructure](https://gsa-tts.slack.com/messages/infrastructure/)
    * [opp](https://gsa-tts.slack.com/messages/opp/)
        * OPP Portfolios?
* Projects
    * [cap](https://gsa-tts.slack.com/messages/cap/) (C2/Communicart)
    * [cloud-gov](https://gsa-tts.slack.com/messages/cloud-gov/)
    * [code-gov](https://gsa-tts.slack.com/messages/code-gov/)
    * [ffd-general](https://gsa-tts.slack.com/messages/ffd-general/) (Federal Front Door)
    * etc.
* Guilds: #g-*
* Working groups: #wg-*
* Locations
    * [chitown](https://gsa-tts.slack.com/messages/chitown/)
    * [cowork-across-america](https://gsa-tts.slack.com/messages/cowork-across-america/)
    * [dc](https://gsa-tts.slack.com/messages/dc/)
    * [michigan](https://gsa-tts.slack.com/messages/michigan/)
    * [nyc](https://gsa-tts.slack.com/messages/nyc/)
    * [sf](https://gsa-tts.slack.com/messages/sf/)
    * etc.
* SaaS administration/support: #admins-*
* Technologies
    * [django](https://gsa-tts.slack.com/messages/django/)
    * [docker](https://gsa-tts.slack.com/messages/docker/)
    * [git](https://gsa-tts.slack.com/messages/git/)
    * [javascript](https://gsa-tts.slack.com/messages/javascript/)
    * [python](https://gsa-tts.slack.com/messages/python/)
    * [ruby](https://gsa-tts.slack.com/messages/ruby/)
    * etc.

### Channel naming conventions

- Channels that begin with `admin-` include administrators for various tools. [#admins-slack](https://gsa-tts.slack.com/messages/admins-slack/), for example, is used to request invites to Slack (see above), expunge a particularly offensive/off-topic message (see above), change the name of an existing channel, and so on.
- Channels that begin with `wg-` are for working groups; channels that begin with `g-` are for guilds. See [the Grouplet Playbook](https://pages.18f.gov/grouplet-playbook/) for information about working groups and guilds. Feel free to join a working group or guild channel even if you are not actively part of the group.
- Channels that end with `-partner` include partners from other agencies.
- Channels that end with `-public` may include members of the public.

### Shortcuts

- Type `@channel [message]` to send your message to everyone in the channel. Use sparingly and only if everyone in the channel needs to see your message.
- Type `@here [message]` to send your message to everyone in the channel with Slack open **at a desktop computer.** Don't use this as a softer version of an `@channel` because there will be no notification for anyone who wasn't at their computer.
- Type `/me [message]` to “emote” your message. (Just try it.)
- Type `/mute` to suppress notifications from the channel you’re currently in. You can also turn on desktop notifications for specific channels.
- Type `/hangout` to start a Google Hangout in the current channel.
- Type `/hero` to start Screen Hero automatically.
- Type `[message XPOST #channel-name]` to cross-post a message to a different channel while posting it.
- Type `/remind` to remind yourself to do something in the future.
- Type `love @username for [message]` to publicly praise and thank someone. If [Charlie](#bots) is in the channel, it will copy your message to [#love](https://gsa-tts.slack.com/archive/love).
- Type `charlie hug bomb` for a dose of team love! To add your picture, email it to [Aidan Feldman](mailto:aidan.feldman@gsa.gov?subject=Please%20add%20me%20to%20the%20hug%20bomb) or [Diego Lapiduz](mailto:diego.lapiduz@gsa.gov?subject=Please%20add%20me%20to%20the%20hug%20bomb) or post in [#admins-slack](https://gsa-tts.slack.com/messages/admins-slack/).
- Press `Option + Up` or `Option + Down` to switch between channels and direct messages.
- Press `Esc` to mark all messages in the current channel as read.
- Press `Shift + Esc` to mark all messages across all channels as read. Only do this if you’ve caught up in channels for your projects first.
- Press `Command + K` or `Command + T` to switch between channels and direct messages by name.
- Press `Command + [` and `Command + ]` to jump back and forth along your history of DMs/channels.
- To mark messages as unread, click a message on your phone and select _mark unread_ or press `Alt` and then click your mouse to do so on your desktop.

--------------------------------------------------------------------------------

#### Still have questions?

Ask in Slack: [#admins-slack](https://gsa-tts.slack.com/messages/admins-slack), [#it-issues](https://gsa-tts.slack.com/messages/it-issues), [#questions](https://gsa-tts.slack.com/messages/questions), [#teamops](https://gsa-tts.slack.com/messages/teamops)
