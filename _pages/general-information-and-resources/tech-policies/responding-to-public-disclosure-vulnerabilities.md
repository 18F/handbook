---
title: Public disclosures of vulnerabilities
questions:
  - bug-bounty
  - vuln-disclosure
---

_For reporting vulnerabilities, submit your report through the [TTS Bug Bounty Program](https://hackerone.com/tts)._

_For programs managing vulnerability reports, see the [bug bounty guide]({{site.baseurl}}/bug-bounty)._

{% capture alert_content %}
This content is not reflective of how individual programs administer the TTS Bug Bounty. See [#2584](https://github.com/18F/handbook/issues/2584) and [#2585](https://github.com/18F/handbook/issues/2585).
{% endcapture %}
{% include alert.html heading="Needs review" content=alert_content %}

When someone in the public alerts TTS to a potential vulnerability in our systems, we need to act quickly.

This document outlines TTS' Vulnerability Disclosure triage process, and provides operational instructions for TTS staff reviewing reports that come through the vulnerability disclosure platform (VDP) or other means.

# What the VDP Support Team Does

- Technically validate and respond to all valid submissions within 1 business day.
- Communicate with hackers on TTS behalf. This includes:
  - Gathering more information about a report if necessary.
  - Explaining why we marked a report as _Informative_ or _Not Applicable_--the goal is to educate hackers, not shut them down.
    - _Informative_ - the report contains useful information, but does not demonstrate enough security impact to warrant action or a fix.
    - _Not Applicable (N/A)_ - the report is invalid / not a vulnerability, is clearly out of scope, or is otherwise unacceptable.
    - _Spam_ - the report is obvious noise and contains no useful information.
  - Informing hackers if they’ve submitted a duplicate report.
    - Duplicate - the report contains the same information as a previously reported vulnerability. Whenever possible, we will link to the original report to build trust with the researcher.
  - If we are unsure of the appropriate closure state to use for a particular report, we will leave an internal comment and assign it to the “TTS Team” group for clarification.
  - Providing hackers with updates (when available).
- Standardize reports to make it easy for you to file a bug internally.
  - Standardizing report titles to facilitate understanding issues at-a-glance and spotting duplicates.
  - Setting (or modifying) a [CVSS 3.0](#vulnerability-scoring) score to ensure each report is rated and prioritized by severity.
  - Mapping the report to the appropriate weakness type, using Common Weakness Enumeration.
  - Writing a summary, including steps to reproduce and an impact statement on each report. If any of this information is missing in the hacker’s original report, we’ll add it.
  - Suggesting a bounty amount for each valid and unique vulnerability. The suggested award is based on report severity and the rewards table outlined in your program policy.
  - Assigning reports to “TTS Team” if reports require clarification from TTS. The VDP Support Team may need clarification if a report is out of scope but valid, if impact isn't clare, etc.
- Provide ongoing support for all reports.

  - Even after a report has been validated and forwarded to TTS, the VDP Support Team is available for follow-up questions or concerns, and will ensure nothing gets missed. Simply **assign the report to the “H1 Triage” group** to get it back in VDP's Support Team's work queue.

  # What TTS Does

1. [Route the vulnerability](#route-the-vulnerability)
1. [Communicate with reporter](#communicate-with-vulnerability-reporter)
1. [Award the bounty](#award-the-bounty)
1. [Remediate](#remediate)
1. [Close Report](#close-report)

## Route the vulnerability

In order to respond quickly to reports submitted by the public (aka reporter), the TTS Tech Portfolio will monitor incoming reports and initiate response accordingly.

This role has been designated **TTS Team** and monitors reports received from the public via emails to [`tts-vulnerability-reports@gsa.gov`](mailto:tts-vulnerability-reports@gsa.gov), [through this reporting form](https://docs.google.com/forms/d/e/1FAIpQLSdhr6REOq8QRZ3C2cRWVHWbjcGgdNL8_nVSGY1cBSl1-tfkWA/viewform) or the Vulnerability Disclosure platform.

**If the report comes in through the VDP Platform...**
The TTS Team will then validate that the appropriate team is [assigned](https://docs.hackerone.com/programs/report-actions.html#assign-a-report) to the report and that it is showing up in their [inbox](https://docs.hackerone.com/programs/inbox.html). Each team within [scope](https://hackerone.com/tts?type=team) has their own inbox and will only receive reports that have been assigned to them.

- Monitor the inbox for actionable reports at least once a week. Keep an eye on these inbox views:
  - **Specific team inbox** This is the inbox that will collect all reports for your given assigned system.
  - **Pending Bounty** Reports that are eligible for bounty.
  - **Pending Disclosure** Reports that the reported has requested disclosures.
  - **Missed Targets** Reports that missed any of the following responsiveness targets (Time to First Response, Time to Triage, Time to Bounty, Time to Resolution)

**If the report comes in through other means...**
The TTS Team will communicate with the affected team and the reporter.

1.  **To the team** Provide a _brief_ overview of the issue in [#vuln-disclosure](https://gsa-tts.slack.com/messages/vuln-disclosure/) and @ (mention) all appropriate personnel. At this point, potential impact must be determined quickly to ensure appropriate steps are taken to remediate the reported issue.
1.  **To the reporter**

    - Quickly send an acknowledgement.
      - Loop in any relevant program staff on the acknowledgement response, so they have a direct line of communication.

    The acknowledgement text could be something like:

    > Thanks for sending us this report. We're taking action internally to evaluate and reproduce this report. I'm connecting you with the relevant technical staff so that you can communicate directly as needed.
    >
    > As a reminder, our policy, which can be read at https://18f.gsa.gov/vulnerability-disclosure-policy/, asks for 90 days from the date you sent your report before you disclose this report publicly.

## Communicate with vulnerability reporter

- Provide periodic status updates on your remediation timeline by leaving a comment on the report. Hackers appreciate seeing their findings get fixed, so this step keeps them engaged in your program!
- At the bottom of the report, click “Add comment” → post to “All participants”.
- If you want to leave an internal comment instead (only visible to TTS and HackerOne, not the hacker), then post to “Team only”. Internal comments and fields have a red background.
- If you want to ask the hacker a question directly:
  - “Add comment” and tag the hacker using the @ symbol followed by their username. Ensure your posted comment is on a white (and not red) background so that the hacker can see it.
  - If you can’t validate the issue without the hacker’s input, “Add comment” → “Change state” → “Needs more info”.
  - Customize your [Common Responses](https://docs.hackerone.com/programs/common-responses.html) to improve efficiency.

> If the report impact is `none`, send the appropriate message:
>
> - **No impact:** "Thanks for sending us this report. However, we have determined that the impact of this issue is not significant. Please feel free to provide additional information that indicates the issue is of higher severity, and we'll be happy to re-evaluate it."
> - **Not enough information:** "Thanks for sending us this report. However, it does not contain enough information for us to reproduce the issue and evaluate its severity. If you can send us additional information, we'll be happy to evaluate the issue."

## Communicate with VDP Support

- Let the VDP Support know if a Triaged report does not pose security risk or is otherwise not interesting or impactful to TTS.
- “Add comment” → “Assign report” to “H1 Triage” group with a comment providing context. We will relay this to the hacker and close the report in the appropriate state.

## Award the Bounty

- Award bounties on all valid (“Triaged”) issues, and file a bug in your internal issue tracking system to forward the details to the correct remediation team.
- Bounty-eligible (Triaged or Resolved) reports will show up in the “Pending Bounty” view.
- To award bounty, click “Add comment” → “Set award” and pay based on the report’s final severity and your bounty table. If HackerOne suggested a bounty amount, it will pre-populate when you click “Set award”.
- We recommend awarding bounty within a week of triage. Your public policy page shows your team’s average “Time to Bounty” metrics for the last 90 days. Keeping this number low will help you attract and engage strong hackers.

## Remediate

Valid vulnerabilities need to be resolved by the [resolution timeline](#resolution-timeline) timeline

Set an email alert via Google Calendar at the 77-day (11 weeks) mark from the date the reporter sent the email, so that, if no response or resolution has yet been made, there is about 2 weeks to bring the issue to resolution and close out the issue with the reporter.

## Close Report

- Once the bug is fixed, close it.
- “Add comment” → “Close report” → “Status: Resolved”. You will see a pre-populated comment thanking the hacker for their contribution. Feel free to modify this, and click “Close report”.

## Disclose Report

- A security researcher or TTS can request to make any Closed report publicly available on [Hacktivity](https://hackerone.com/hacktivity).
- Disclosure helps hackers learn, contributes to the hacker community, and positions TTS as a transparent, security-minded organization. TTS requires both parties to agree to disclosure before a report is published.
- Please carefully review reports prior to disclosing them to ensure they do not include PII or other sensitive information. You can redact strings from the report, or choose Limited disclosure if the report comments contain sensitive information.
- To approve a disclosure request, “Add comment” → “Disclose”. To deny the request, “Add comment” → “Cancel disclosure request”. It’s helpful to provide an explanation for your decision.

> We recommend approving disclosure requests on Resolved issues (vs. Duplicate, Informative, or Not Applicable) as those have the greatest value for the community.

### Reports for non-TTS Systems

If you know the alert applies to a system TTS doesn't have responsibility over, please either submit the report to [US-CERT](https://vulcoord.cert.org/VulReport/) if there is helpful context you can add to it, or direct the public contact to submit the report to [US-CERT](https://vulcoord.cert.org/VulReport/) themselves.

Notifications to partner agencies should do the following:

1. Find a POC
   1. Look for security@[vendor.com] or VDP form
   1. Using the list of [security contacts](https://github.com/cisagov/dotgov-data/blob/main/current-full.csv)
   1. Reach out through professional network
1. Describe the potential harm
1. Recommend a course of action

# Supporting information

## Vulnerability Scoring

Scores of `low`, `medium`, `high` and `critical` are based on the [CVSS 3.0](https://www.first.org/cvss/specification-document) scoring.

Each metric above receives a single score on potential impact from the following list:

| Rating   | CVSS Score |
| -------- | ---------- |
| None     | 0.0        |
| Low      | 0.1 - 3.9  |
| Medium   | 4.0 - 6.9  |
| High     | 7.0 - 8.9  |
| Critical | 9.0 - 10.0 |

A score of `none` means that the report falls outside of scope, or is negligible, or doesn't contain enough information. If the report is `none`, [jump to the response step](#close-report).

| Severity¹ | Initial² | Standard³ | Login.gov Only |
| --------- | -------- | --------- | -------------- |
| Critical  | $2,000   | $5,000    | $5,000         |
| High      | $750     | $2,000    | $2,000         |
| Medium    | $300     | $750      | $300           |
| Low       | $150     | $250      | $150           |

¹ By default, Severity will be assessed according to CVSS v3.

² The initial bounty amounts for newly included services targets the 75th percentile award level based on current HackerOne platform data.

³ Services that have been in scope for a reasonable period of time graduate to higher award levels.

## Resolution Timeline

| Risk Value      | Corrective Action Deadline                                                          |
| --------------- | ----------------------------------------------------------------------------------- |
| Critical        | For Internet-accessible IP addresses: within 15 calendar days of initial detection. |
|                 | For all other assets: within 30 calendar days of initial detection.                 |
| High            | Within 30 calendar days of initial detection                                        |
| Moderate/Medium | Within 90 days of initial detection                                                 |
| Low             | No specific deadline unless defined by the GSA OCISO                                |

Source: [GSA Vulnerability Management Process guide](https://insite.gsa.gov/topics/information-technology/security-and-privacy/it-security/it-security-procedural-guides), Appendix B. These values will also appear in the [RA-5(d)](https://nvd.nist.gov/800-53/Rev4/control/RA-5#Rev4Statements) control of your System Security Plan (SSP).

## TTS Report Summary Template

- **Summary of the Issue** A brief summary of the vulnerability, including information we gathered from the hacker and through our own analysis.
- **Location/URLs/Parameters/etc.** Any affected URLs, parameters / where is the bug located.
- **Steps to Reproduce** Clear steps to reproduce the vulnerability.
- **Impact Statement** Description of the vulnerability’s real-world impact / what would happen if the vulnerability were exploited.
