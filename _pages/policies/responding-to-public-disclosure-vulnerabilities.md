---
title: Public disclosures of vulnerabilities
---

When someone in the public alerts you to a potential vulnerability in our systems, you need to act quickly.  If you know the alert applies to a system TTS doesn't have responsibility over, please either submit the report to [US-CERT](https://vulcoord.cert.org/VulReport/) if there is helpful context you can add to it, or direct the public contact to submit the report to [US-CERT](https://vulcoord.cert.org/VulReport/) themselves.  Otherwise, there are three steps in the process:

1. [Triage the vulnerability](#triage-the-vulnerability)
2. [File an issue](#file-an-issue)
3. [Respond to reporter](#respond-to-reporter)


## Triage the vulnerability

In order to respond quickly to reports submitted by the public, the Infrastructure team has designated a small group of folks who will monitor incoming reports and initiate response accordingly. This role has been designated **first responder** and will be assigned in [#vuln-disclosure](https://gsa-tts.slack.com/messages/vuln-disclosure/) with an @ (mention). Barring schedule conflicts, the role will rotate weekly. The [First Responder schedule](https://docs.google.com/document/d/1rjIUT2ElIWC8wsVGR3sYRqqybcapCnJY7ysGl0IhiH4/edit) is posted in the [#vuln-disclosure](https://gsa-tts.slack.com/messages/vuln-disclosure/) channel topic.

* *cloud.gov note:* Response team members need to be on the cloud.gov whitelist for outside-of-business-hours email alerts. Each new response team member should tell the cloud.gov Product Lead, Director, or Deputy Director to add their email address to the whitelist.

The **first responder** monitors reports received from the public via emails to [`tts-vulnerability-reports@gsa.gov`](mailto:tts-vulnerability-reports@gsa.gov) or [through this reporting form](https://docs.google.com/forms/d/e/1FAIpQLSdhr6REOq8QRZ3C2cRWVHWbjcGgdNL8_nVSGY1cBSl1-tfkWA/viewform). The report is reviewed and the responder categorizes risk according to the potential impact on system **confidentiality**, **integrity**, or **availability**. The first responder will then provide a _brief_ overview of the issue in [#vuln-disclosure](https://gsa-tts.slack.com/messages/vuln-disclosure/) and @ (mention) all appropriate personnel. At this point, potential impact must be determined quickly to ensure appropriate steps are taken to remediate the reported issue.

Each metric above receives a single score on potential impact from the following list:

* n/a
* low
* moderate
* high
* incident

A score of `n/a` means that the report falls outside of scope, or is negligible, or doesn't contain enough information. If the report is `n/a`, [jump to the response step](#respond-to-reporter).

Scores of `low`, `moderate`, and `high` are subjective. 

In the case of an **incident**, the responder has determined for any reason that the vulnerability has _already_ impacted system confidentiality, integrity, or availability. The responder immediately follows the [security incident process](../security-incidents/).

* *cloud.gov note:* If the reported issue involves **[cloud.gov](https://cloud.gov)** and is scored **moderate or higher**, the first responder **must** mention `@cg-team` in Slack and email **[`cloud-gov-emergency@gsa.gov`](mailto:cloud-gov-emergency@gsa.gov)**, so the cloud.gov team can help determine impact and respond to incidents.

If the first responder is unable to make a determination of risk severity, the responder should immediately post in the [#incident-response](https://gsa-tts.slack.com/messages/incident-response) Slack channel and seek counsel from other responders, as well as @-ing the [Infrastructure Lead](https://github.com/18F/Infrastructure/blob/master/ISSUE_TEMPLATE.md) of the affected product or service.

## File an issue

For vulnerabilities categorized as **low**, an Issue should be created in the appropriate GitHub repo or project management tool and assigned to the appropriate Infrastructure Lead to prioritize further.

For vulnerabilities of **medium**, **high**, or **incident**, an issue must be filed in the private [security incident repository](https://github.com/18F/security-incidents/issues) and assigned to the appropriate Infrastructure Lead.

Regardless of where the issue is filed, the first responder should advise the Infrastructure Lead on next steps.

The first responder is responsible for closing out the GitHub issue once they are satisfied that the issue has been resolved (whether remediated or marked `wont fix` or `false positive`).

The first responder will communicate directly with the Infrastructure Lead, who is responsible for communication with the system's engineering team throughout the remediation lifecycle.

## Respond to reporter

If the report is `n/a`, send the appropriate message:

* **Not in scope:** "Thanks for contacting us. However, this report falls outside of our scope as described at https://18f.gsa.gov/vulnerability-disclosure-policy/. [_Add additional details as helpful._]"
* **No impact:** "Thanks for sending us this report. However, we have determined that the impact of this issue is not significant. Please feel free to provide additional information that indicates the issue is of higher severity, and we'll be happy to re-evaluate it."
* **Not enough information:** "Thanks for sending us this report. However, it does not contain enough information for us to reproduce the issue and evaluate its severity. If you can send us additional information, we'll be happy to evaluate the issue."

Otherwise, after filing the issue as described above:

1. Quickly send an acknowledgement.
2. Loop in any relevant program staff on the acknowledgement response, so they have a direct line of communication.
3. Ensure an alert is set so that we get pinged well before the 90-day mark, at which point our request for confidentiality will expire.

The acknowledgement text could be something like:

> Thanks for sending us this report. We're taking action internally to evaluate and reproduce this report. I'm connecting you with the relevant technical staff so that you can communicate directly as needed.
> 
> As a reminder, our policy, which can be read at https://18f.gsa.gov/vulnerability-disclosure-policy/, asks for 90 days from the date you sent your report before you disclose this report publicly.

Remember to **CC this email** to any relevant program staff or infrastructure leads. They assume responsibility for further communication and resolving the issue.

The last thing you should do is set an email alert via Google Calendar at the 77-day (11 weeks) mark from the date the reporter sent the email, so that, if no response or resolution has yet been made, the team has about 2 weeks to bring the issue to resolution and close out the issue with the reporter.
