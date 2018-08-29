---
title: Security incidents
---

Something went "bump" in the night (or the day)? This document explains what to do when responding to a security incident. See [What is an incident?](#what-is-an-incident) if you need help determining whether something counts as an incident.

## Security incidents: You must report IT security incidents or suspicious activity

An “incident” or “information security incident” can be thought of as a violation or imminent threat of violation of information security or privacy policies, acceptable use policies, or standard security practices. 

See GSA’s Insite: [Report IT Security Incidents or Suspicious Activity](https://insite.gsa.gov/portal/content/539161) if you need help determining whether something counts as an incident. If you observe or suspect prohibited material or programs on GSA systems, or inappropriate use of GSA systems, report it immediately to: [ITServiceDesk@gsa.gov](mailto: ITServiceDesk@gsa.gov) or 1-866-450-5250.  

If you detect any unusual or suspicious activity on your computer, DO NOT turn off your computer. By turning off the computer, valuable evidence may be lost. For questions about GSA’s Incident Response Program, contact the GSA Incident Response (IR) Team at [gsa-ir@gsa.gov](mailto:gsa-ir@gsa.gov).

## Reporting phishing emails
If you receive a phishing email, follow these steps to report to GSA IT:

1. Do not click any links in the email. Do not delete it yet. You may mark it as spam.
1. If you can, click the `Show Original` option in the "triangle" menu associated with the email. This will open a new window with the Original Message above and the raw text of the email below.
1. Click on the `Download Original` link halfway down the page and it will save text of the email to your hard drive.
1. Forward the email to itservicedesk@gsa.gov. As long as you haven't clicked on link or downloaded the file, you may stop here.
1. After receiving your notification to GSA, IT will create a ticket and may contact you for more information. If you were unable to retrieve the raw headers above, IT may need to access your computer to view the email.
1. After GSA IR confirms that they have all they need to investigate, mark the email as a phishing email by selecting the `Report phishing` option in the same "triangle" menu associated with the email.

## Reporting phishing incidents
If you also clicked on a link in a phishing email, follow these steps to report to GSA IR:

1. If you haven't already, follow the steps above for reporting phishing emails, and then continue to the next step.
1. Forward the phishing email to gsa-ir@gsa.gov and devops@gsa.gov and attach the original text you downloaded. Please include *Security Incident* in the subject line, along with a brief description of the issue (Ex. Clicked on link in phishing email).
1. Report the phishing email in the [#incident-response](https://gsa-tts.slack.com/messages/incident-response) Slack channel.

## Reporting other incidents
To report a security incident, follow *all* of the steps below:

1. Send an email to itservicedesk@gsa.gov, gsa-ir@gsa.gov, and devops@gsa.gov within 1 hour of identifying an incident. You can use this
 <a href="mailto:itservicedesk@gsa.gov?subject=Incident:&cc=gsa-ir@gsa.gov;devops@gsa.gov">link to quickly send an email to everyone at the same time</a>. Please include *Security Incident* in the subject line, along with a brief description of the incident (Ex. security token committed to GitHub repo). When emailing GSA's Incident Response (IR) team, please include as many details as possible, including relevant URLs, repos, and a link to related GitHub issue (if applicable). It is critical that you notify GSA IR within 1 hour of suspected incident and provide all available information to assist the response team with triage. If email is unavailable, call the IT Service Desk at 1-866-450-5250. If **_classified information_** is part of the incident, do not attach the information to your report. Wait for instructions from the GSA Incident Response (IR) team. If you do not recieve a timely acknowledgement of your report, you can phone the IR team via the numbers listed in Section 3.1.1 of the [GSA IT Security Procedural Guide](https://insite.gsa.gov/portal/getMediaData?mediaId=558637).

1. Report the incident in the [#incident-response](https://gsa-tts.slack.com/messages/incident-response) Slack channel.

1. [Send a Slack DM to Kimber Dowsett (@kimber)](https://gsa-tts.slack.com/messages/@kimber/), the 18F Head of Infrastructure Engineering, with a _very short description_ of the incident.

1. Open a [GitHub issue in the security-incidents repository](https://github.com/18F/security-incidents/issues/new) describing the incident in **as much detail as possible, excluding sensitive data**.
  * Keep this issue up to date by adding comments with appropriately summarized actions or information from interactions with the GSA IR team. GSA IR must be emailed updates as incidents unfold. Please do not rely on GitHub to communicate with the GSA IR team. GitHub should be used to document communications with GSA IR, not used in place of email communications.
  * **If you suspect sensitive data is part of the security incident that you're reporting, you must create a GSA Google Drive folder and share it with devops@gsa.gov and gsa-ir@gsa.gov ONLY**. To do this, ensure you're creating the folder as part of "My Drive" and not within a pre-existing folder. Use this GSA Google Drive folder for any potentially sensitive data and/or files. Add static files, Google Docs, or Google Sheets as appropriate, and add a comment to any information you think is critical to the investigation.
  * Potentially sensitive data must never be shared in Slack, GitHub, or transmitted via email. Include the hyperlink to the GSA Google Drive folder in the top summary of the GitHub Issue. At this time, GSA Google Drive is the only approved method of secure data transmission during an active incident.

1. Do not delete any potential evidence or modify the evidence without instruction from the Incident Response team. For example, in the event of a suspected GitHub incident, do no delete files or modify the access permissions on the GitHub repository. In the event of a suspected Amazon Web Services (AWS) or cloud.gov incident, do not stop or allow an instance or app to be terminated that is potentially part of the incident. Please leave the instance running and reconfigure the Security Group or route for that instance or app to be dismissive of all ingress and egress traffic until a forensics review can be performed. A significant set of data is lost and is unrecoverable when instances or containers are "stopped" or "terminated."

1. If the incident involves [cloud.gov](https://cloud.gov/) platform operations/security, start [following the additional checklist here](https://cloud.gov/docs/ops/security-ir-checklist/).

1. Following notification to GSA, the Incident Response team will contact you requesting more information. If the incident is related to cloud.gov, please ensure they CC the cloud.gov team (cloud-gov-support@gsa.gov), but try to drive as much of the conversation back to [#incident-response](https://gsa-tts.slack.com/messages/incident-response) in Slack as possible.

1. If you cannot access email or Slack, please call the GSA IT Service Desk at 1-866-450-5250 and ask them to forward the relevant information to the addresses above. 

Please note that incidents need to be reported *within one hour* of being identified. This isn't "within an hour of happening", but "within one hour of you becoming aware of the incident". The idea is to make sure we're promptly looping in the right people. So, as soon as you're aware of a problem, follow the above steps.

## What is an incident?

First, it's important to note: it's always OK to err on the side of reporting! [TTS](http://www.gsa.gov/portal/category/25729)'s and GSA's IR teams are good at their job, and they are totally used to false alarms. You'll never get in trouble for pinging them about something that turns out not to be an issue! Indeed, *you'll never get in trouble for pinging IR at all*. The most effective security "early warning system" is attentive staff, so "report early, report often"!

On to the answer to "what is an incident?": in a nutshell, an incident is anything that compromises (or could compromise) our "CIA": **Confidentiality, Integrity, or Availability.**

- **Confidentiality** means: "secrets". So personal information (PII) — names, phone numbers, social security numbers, etc — is one very important secret, but so are your passwords, service credentials, internal non-public documents, etc. Any time you suspect that any confidential information may have been leaked outside TTS, you should open an incident.

- **Integrity** means the the soundness/fitness of purpose of our systems or information. So if a backup was lost, or if a app stopped logging for a while, or if some documents got deleted — those are integrity issues. Sometimes these can indicate deeper incidents (like an attacker deleting logs to cover their tracks), so it's important to report these, as well.

- Finally, **availability** means the availability of the services we provide. So if an app goes down, if something we expect to be running stops running — those are availability issues. Note that this only refers to production systems (it's fine if your demo app crashes), and also only to unexpected downtime. If you decide to shut something down temporarily for maintenance — go for it, not an incident.

Remember: it's totally OK — and encouraged — to fail towards the side of reporting something. Organizations with really healthy IR systems see a lot of false alarms, and a lot of very low severity reports. This is good, because it indicates that people feel comfortable reporting day-to-day issues. The more we do it, the better we'll get at it. And this is ultimately the goal, because then when something really serious happens, we'll be well-practiced at handling it smoothly and efficiently.

##For Responders

Responders to an incident (as defined above) are entitled to take steps to remediate the immediate problem without worrying about whether or not the work is billable for up to eight person-hours of work per incident. Fix the problem, and then worry about how we will account for your time. 

### Preventing future incidents with Git Seekrets

If an incident involved exposing environment variables or private configuration
data, consider [adding a Rule](https://github.com/18F/laptop#git-seekret) to the
Git Seekrets installation to prevent further incidents across TTS.
