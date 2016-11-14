---
title: Public disclosures of vulnerabilities
---

When someone in the public alerts us to a potential vulnerability, we need to respond and triage quickly. There are only three steps in the process.

## Triage process

In PagerDuty, someone is on call to be the **first responder**. This roles rotates weekly.

The **first responder** checks for reports upon notification via (TBD: Gmail push, Slack, PagerDuty text, etc). The report is reviewed and the responder categorizes risk according to the potential impact on system **_confidentiality_**, **_integrity_**, or **_availability_**.

Each metric above receives a single score on potential impact from the following list:

* low
* moderate
* high
* incident

Low through high is subjective. In the case of an **incident**, the responder has determined for any reason that the vulnerability has _already_ impacted system confidentiality, integrity, or availability. The responder immediately follows the [security incident process](https://handbook.18f.gov/security-incidents/).

If the first responder is unable to make a determination of risk severity, the responder should immediately post in the [#incident-response](https://gsa-tts.slack.com/messages/incident-response) Slack channel and seek counsel from other responders, as well as @-ing the Infrastructure Lead of the affected product or service.

## Filing an issue

For vulnerabilities categorized as **low**, an Issue should be created in the appropriate GitHub repo or project management tool and assigned to the appropriate Infrastructure Lead to prioritize further.

For all other vulnerabilities, an issue must be filed in the private [security incident repository](https://github.com/18F/security-incidents/issues) and assigned to the appropriate Infrastructure Lead.

Regardless of where the issue is filed, the first responder should advise the Infrastructure Lead on next steps.

The first responder is responsible for closing out the GitHub issue once they are satisfied that the issue has been resolved (whether remediated or marked `wont fix` or `false positive`).

The first responder will communicate directly with the Infrastructure Lead, who is responsible for communication with the system's engineering team throughout the remediation lifecycle.

## Inform the reporter

TBD.
