---
title: Public disclosures of vulnerabilities
---

When someone in the public alerts you to a potential vulnerability in our systems, you need to act quickly. There are four steps in this process:

1. [Triage the vulnerability](#triage-the-vulnerability)
1. [Respond to reporter](#reply-to-the-reporter)
1. [Remediate](#remediate)

## Triage the vulnerability

In order to respond quickly to reports submitted by the public (aka reporter), the TTS Tech Portfolio will monitor incoming reports and initiate response accordingly. This role has been designated **first responder** and monitors reports received from the public via emails to [`tts-vulnerability-reports@gsa.gov`](mailto:tts-vulnerability-reports@gsa.gov), [through this reporting form](https://docs.google.com/forms/d/e/1FAIpQLSdhr6REOq8QRZ3C2cRWVHWbjcGgdNL8_nVSGY1cBSl1-tfkWA/viewform) or the Vulnerability Disclosure platform.

The first responder will then provide a _brief_ overview of the issue in [#vuln-disclosure](https://gsa-tts.slack.com/messages/vuln-disclosure/) and @ (mention) all appropriate personnel. At this point, potential impact must be determined quickly to ensure appropriate steps are taken to remediate the reported issue.

Scores of `low`, `medium`, `high` and `critical` are based on the [CVSS 3.0](https://www.first.org/cvss/specification-document) scoring.

Each metric above receives a single score on potential impact from the following list:

| Rating   | CVSS Score |
| -------- | ---------- |
| None     | 0.0        |
| Low      | 0.1 - 3.9  |
| Medium   | 4.0 - 6.9  |
| High     | 7.0 - 8.9  |
| Critical | 9.0 - 10.0 |

A score of `none` means that the report falls outside of scope, or is negligible, or doesn't contain enough information. If the report is `none`, [jump to the response step](#reply-to-the-reporter).

## Determine an incident

In the case of an **incident**, the responder has determined the vulnerability has _already_ impacted system confidentiality, integrity, or availability. The responder immediately follows the [security incident process](../security-incidents/).

If the first responder is unable to make a determination of risk severity, the responder should immediately post in the [#incident-response](https://gsa-tts.slack.com/messages/incident-response) Slack channel and seek counsel from other responders, as well as @-ing the lead of the affected product or service.

## Reply to the reporter

If the report impact is `none`, send the appropriate message:

- **Not in scope:** "Thanks for contacting us. However, this report falls outside of our scope as described at https://18f.gsa.gov/vulnerability-disclosure-policy/. [_Add additional details as helpful._]"
- **No impact:** "Thanks for sending us this report. However, we have determined that the impact of this issue is not significant. Please feel free to provide additional information that indicates the issue is of higher severity, and we'll be happy to re-evaluate it."
- **Not enough information:** "Thanks for sending us this report. However, it does not contain enough information for us to reproduce the issue and evaluate its severity. If you can send us additional information, we'll be happy to evaluate the issue."

Then:

1. Quickly send an acknowledgement.
1. Loop in any relevant program staff on the acknowledgement response, so they have a direct line of communication.

The acknowledgement text could be something like:

> Thanks for sending us this report. We're taking action internally to evaluate and reproduce this report. I'm connecting you with the relevant technical staff so that you can communicate directly as needed.
>
> As a reminder, our policy, which can be read at https://18f.gsa.gov/vulnerability-disclosure-policy/, asks for 90 days from the date you sent your report before you disclose this report publicly.

Remember to **CC this email** to any relevant program staff or TTS Tech Portfolio leads.

## Remediate

Valid vulnerabilities need to be resolved in the following timeline:

| Risk Value      | Corrective Action Deadline                                                          |
| --------------- | ----------------------------------------------------------------------------------- |
| Critical        | For Internet-accessible IP addresses: within 15 calendar days of initial detection. |
|                 | For all other assets: within 30 calendar days of initial detection.                 |
| High            | Within 30 calendar days of initial detection                                        |
| Moderate/Medium | Within 90 days of initial detection                                                 |
| Low             | No specific deadline unless defined by the GSA OCISO                                |

Source: [GSA Vulnerability Management Process guide](https://insite.gsa.gov/topics/information-technology/security-and-privacy/it-security/it-security-procedural-guides), Appendix B. These values will also appear in the [RA-5(d)](https://nvd.nist.gov/800-53/Rev4/control/RA-5#Rev4Statements) control of your System Security Plan (SSP).

### Reports for non-TTS Systems

If you know the alert applies to a system TTS doesn't have responsibility over, please either submit the report to [US-CERT](https://vulcoord.cert.org/VulReport/) if there is helpful context you can add to it, or direct the public contact to submit the report to [US-CERT](https://vulcoord.cert.org/VulReport/) themselves.

Notifications to partner agencies should do the following:

1. Find a POC
   1. Look for security@[vendor.com] or VDP form
   1. Using the list of [security contacts](https://github.com/GSA/data/blob/master/dotgov-domains/current-full.csv)
   1. Reach out through professional network
1. Describe the potential harm
1. Recommend a course of action
