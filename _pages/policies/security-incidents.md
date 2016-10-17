---
title: Security incidents
---

Something went "bump" in the night (or the day)? This document explains what to do when responding to a security incident. See [What is an incident?](#what-is-an-incident) if you need help determining whether something counts as an incident.

# Reporting Process
To report a security incident, follow all of the steps below:

1. Send an email to itservicedesk@gsa.gov, gsa-ir@gsa.gov, and devops@gsa.gov. You can use this
 <a href="mailto:itservicedesk@gsa.gov?subject=Incident:&cc=gsa-ir@gsa.gov;devops@gsa.gov">link to quickly send an email to everyone at the same time</a>,
 and within 1 hour of identifying an incident. Don't worry if you don't have all of the details gathered when you email GSA's Incident Response (IR) team. The critical piece here is notification within one hour. If email is unavailable, call the IT Service Desk at 1-866-450-5250. If **_classified information_** is part of the incident, do not attach the information to your report. Wait for instructions from the GSA Incident Response (IR) team.

1. Report the incident in the [#incident-response](https://gsa-tts.slack.com/messages/incident-response) Slack channel.

1. For anything that _isn't_ a phishing attempt, [send a Slack DM to Kimber Dowsett (@kimber)](https://gsa-tts.slack.com/messages/@kimber/), the 18F Infrastructure Security Architect, with a _very short description_ of the incident.

1. Open a [GitHub issue in the security-incidents repository](https://github.com/18F/security-incidents/issues/new) describing the incident in **as much detail as possible, excluding sensitive data**.
  * Keep this issue up to date with appropriately summarized actions or information from interactions with GSA.
  * **If you suspect sensitive data is part of security incident you're reporting, you must create a GSA Google Drive folder and share it with devops@gsa.gov and gsa-ir@gsa.gov ONLY**. To do this, ensure you're creating the folder as part of "My Drive" and not within a pre-existing folder. Use this GSA Google Drive folder for any potentially sensitive data and/or files. Add static files, Google Docs, or Google Sheets as appropriate, and add a comment to any information you think is critical to the investigation.
  * Potentially sensitive data must never be shared in Slack, GitHub, or transmitted via email. Include the hyperlink to the GSA Google Drive folder in the top summary of the GitHub Issue. At this time, GSA Google Drive is the only approved method of secure data transmission during an active incident.

1. Do not delete any potential evidence. For example, in the event of a suspected Amazon Web Services (AWS) or cloud.gov incident, do not stop or allow an instance or app to be terminated that is potentially part of the incident. Please leave the instance running and reconfigure the Security Group or route for that instance or app to be dismissive of all ingress and egress traffic until a forensics review can be performed. A significant set of data is lost and is unrecoverable when instances or containers are "stopped" or "terminated."

1. If the incident involves [cloud.gov](https://cloud.gov/), start [following the additional checklist here](https://docs.cloud.gov/ops/security-ir-checklist/).

1. Following notification to GSA, the Incident Response team will contact you requesting more information. If the incident is related to cloud.gov, please ensure they CC the cloud.gov team (cloud-gov-support@gsa.gov), but try to drive as much of the conversation back to [#incident-response](https://gsa-tts.slack.com/messages/incident-response) in Slack as possible.
 
Please note that incidents need to be reported *within one hour* of being identified. This isn't "within an hour of happening", but "within one hour of you becoming aware of the incident". The idea is to make sure we're promptly looping in the right people. So, as soon as you're aware of a problem, follow the above steps.

## What is an incident?

First, it's important to note: it's always OK to err on the side of reporting! TTS's and GSA's IR teams are good at their job, and they are totally used to false alarms. You'll never get in trouble for pinging them about something that turns out not to be an issue! Indeed, *you'll never get in trouble for pinging IR at all*. The most effective security "early warning system" is attentive staff, so "report early, report often"!

On to the answer to "what is an incident?": in a nutshell, an incident is anything that compromises (or could compromise) our "CIA": **Confidentiality, Integrity, or Availability.**

- **Confidentiality** means: "secrets". So personal information (PII) — names, phone numbers, social security numbers, etc — is one very important secret, but so are your passwords, service credentials, internal non-public documents, etc. Any time you suspect that any confidential information may have been leaked outside 18F, you should open an incident.

- **Integrity** means the the soundness/fitness of purpose of our systems or information. So if a backup was lost, or if a app stopped logging for a while, or if some documents got deleted — those are integrity issues. Sometimes these can indicate deeper incidents (like an attacker deleting logs to cover their tracks), so it's important to report these, as well.

- Finally, **availability** means the availability of the services we provide. So if an app goes down, if something we expect to be running stops running — those are availability issues. Note that this only refers to production systems (it's fine if your demo app crashes), and also only to unexpected downtime. If you decide to shut something down temporarily for maintenance — go for it, not an incident.

Remember: it's totally OK — and encouraged — to fail towards the side of reporting something. Organizations with really healthy IR systems see a lot of false alarms, and a lot of very low severity reports. This is good, because it indicates that people feel comfortable reporting day-to-day issues. The more we do it, the better we'll get at it. And this is ultimately the goal, because then when something really serious happens, we'll be well-practiced at handling it smoothly and efficiently.
