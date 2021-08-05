---
title: TTS Bug Bounty Program
questions:
  - bug-bounty
  - bug-bounty-partners
---

TTS administers a [Bug Bounty Program](https://hackerone.com/tts) for the public
to report vulnerabilities in TTS systems.

## How it works

1. Security researchers submit reports based on program policy
1. H1 staff triage the report
1. You confirm the report and award the bounty
1. You publish a fix to production and resolve the report
1. (optional) The researcher confirms the fix
1. (optional) Disclose the report

Security researchers review the [program policy](https://hackerone.com/tts) for
what systems are in scope of the Bug Bounty Program and rules of behavior.

Researchers report to the Bug Bounty Program where H1 staff do the initial
triage.

Once Triaged, the report will be assigned to your group (H1 term for team) for
you to confirm. You can ask H1 staff or the researcher for any
clarification, or help if you're having trouble reproducing the issue.

Once confirmed, you can [award the bounty](). You don't need to wait until the
issue is resolved to award.

When the fix has been released to production, you can close the report as
Resolved and include a link to the commit or pull request containing the fix.

The researcher can optionally validate the fix is correct.

We encourage programs to disclose reports and redact any [sensitive information]({{site.baseurl}}/sensitive-information/) when necessary.

## Notifications

By default, H1 sends notifications for every report to the TTS Bug Bounty
program but you probably only want to receive reports related to your system.

In your [notification settings](https://hackerone.com/settings/notification_preferences),
under the TTS Bug Bounty, select "Reports where I'm assigned, I interact, or I'm mentioned".

![Screenshot of the TTS Bug Bounty notification preferences]({{site.baseurl}}/images/bug-bounty/team-notifications.png)

Then, under "Notify me about...", at least enable notifications for:

- Mentions (anywhere)
- Report Updates
- Comments by hackers
- Comments by program staff

Subscribe to [program changes](https://hackerone.com/tts) by clicking the
"Subscribe" button in order to be notified of changes to the program policy.

![Screenshot of the program subscription button]({{site.baseurl}}/images/bug-bounty/program-notifications.png)

## How do I add a team member to my bug bounty program?

Any administration requests can be made in [#bug-bounty](https://gsa-tts.slack.com/archives/C0X2FMJ86). Please include:

- team member's email address
- bug bounty group (your program)

Ping `@bugbounty-admins` if urgent.

## How do I award the bounty?

Make sure the CVSS score and severity are correct. This is what determines the award
amount based on the [bounty tables](https://hackerone.com/tts).

The bounty must be awarded by the Contracting Officer Representative (COR). Please
post an internal comment on the report "Please award" and the COR will award the
bounty.

## How do I mark a report as Resolved?

Above the comment field is a drop-down with several actions and defaults to "Add
comment". Select "Close report" > "Resolved".

![Screenshot showing actions menu on the report screen]({{site.baseurl}}/images/bug-bounty/report-actions.png)

## Who is the Vulnerability Disclosure Lead?

The Vulnerability Disclosure Lead is an [assigned member of the Tech Portfolio](https://github.com/18F/tts-tech-portfolio/blob/main/how_we_work/roles.md).

### For admins

Invite the user from the [user management admin screen](https://hackerone.com/tts/team_members).
