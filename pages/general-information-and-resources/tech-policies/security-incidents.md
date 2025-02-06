---
title: Security incidents
redirect_from:
  - /security-incidents/
cSpell: ignore Cofense, TTS's
---

Something went "bump" in the night (or the day)? This document explains what to
do when responding to a security incident. See
[What is an incident?](#what-is-an-incident) if you need help determining
whether something counts as an incident.

## You must report IT security incidents or suspicious activity

An “incident” or “information security incident” is a violation - or an imminent
threat of violation - of information security or privacy policies, acceptable
use policies, or standard security practices.

If you detect any unusual or suspicious activity on your computer, DO NOT turn
off your computer. By turning off the computer, valuable evidence may be lost.
If you observe or suspect prohibited material or programs on GSA systems, or
inappropriate use of GSA systems, report it immediately to the
<a href="mailto:itservicedesk@gsa.gov?subject=Security Incident">GSA IT Service
Desk</a>.

It is critical that you notify GSA IT within 1 hour of suspected incident and
provide all available information to assist the response team with triage. If
email is unavailable,
[contact them another way](https://insite.gsa.gov/employee-resources/information-technology).

Potentially sensitive data must never be shared in Slack, GitHub, or transmitted
via email. At this time, GSA Google Drive is the only approved method of secure
data transmission during an active incident.

If **_classified information_** is part of the incident, do not attach the
information to your report. Wait for instructions from the GSA Incident Response
(IR) team. If you do not receive a timely acknowledgement of your report, you
can phone the IR team via the numbers listed in Section 3.1.1 of the
[GSA IT Security Procedural Guide](https://insite.gsa.gov/portal/getMediaData?mediaId=558637).

Remember: it's totally OK — and encouraged — to fail towards the side of
reporting something. Organizations with healthy incident reporting systems see a
lot of false alarms, and a lot of low severity reports. This is good, because it
indicates that people feel comfortable reporting day-to-day issues. The more we
do it, the better we'll get at it. And this is ultimately the goal, because then
when something really serious happens, we'll be practiced at handling it
smoothly and efficiently.

For questions about GSA’s Incident Response Program, contact the GSA Incident
Response (IR) Team at [gsa-ir@gsa.gov](mailto:gsa-ir@gsa.gov).

## Reporting [Phishing](https://insite.gsa.gov/employee-resources/information-technology/it-security-and-privacy/it-security/report-it-security-incidents-suspicious-activity/phishing-emails-scams?term=cofense)

If you receive a suspicious email, follow these steps:

1. Do not click any links in the email. Do not delete it yet.
1. Follow the
   ["Cofense Report" video](https://vimeo.com/gsavisualcommunications/review/810968282/6c567fac26)
   on the
   [Phishing Emails and Scams InSite page](https://insite.gsa.gov/employee-resources/information-technology/it-security-and-privacy/it-security/report-it-security-incidents-suspicious-activity/phishing-emails-scams?term=cofense).
1. This should instruct you in how to use the Cofense tool (the little fish icon
   that should be on the right) to report the phish.
1. You may mark it as spam/phishing _after_ reporting it to Cofense. Cofense doesn't let you report the email if it is already in your spam folder, so be sure to do this step after. You can do this by clicking the 3 vertical dots to the top right of the email.
1. GSA IT will triage and let you know what they need you to do, if anything.

If you also clicked on a link in a phishing email, follow these steps to report
to GSA's Incident Response (IR) team:

1. Send an email to itservicedesk@gsa.gov and devops@gsa.gov. Please include
   _Security Incident_ in the subject line, along with a brief description of
   the issue (Ex. Clicked on link in phishing email).

## Reporting other incidents

To report a security incident, follow _all_ of the steps below:

Please note that incidents need to be reported within one hour of being
identified. This isn't "within an hour of happening" but "within one hour of you
becoming aware of the incident." The idea is to make sure we're promptly looping
in the right people. So, as soon as you're aware of a problem, follow the above
steps.

1. Send an email to itservicedesk@gsa.gov, gsa-ir@gsa.gov, and devops@gsa.gov
   within 1 hour of identifying an incident. Please include _Security Incident_
   in the subject line, along with a brief description of the incident (Ex.
   security token committed to repo).
   - Include as many details as possible, including relevant URLs (like
     repositories).
   - Do not delete any potential evidence or modify the evidence without
     instruction from the GSA's Incident Response (IR) team.
1. Check the system's specific Incident Response Plan
   - For [cloud.gov](https://cloud.gov/) platform operations/security, start
     [following the additional checklist here](https://cloud.gov/docs/ops/security-ir-checklist/).
   - For [Login.gov](https://login.gov/) operations/security, start
     [following the additional checklist here](https://handbook.login.gov/articles/incident-response-checklist.html).
1. Following notification to GSA, the GSA's Incident Response (IR) team will
   contact you requesting more information. Example questions that will be
   asked:
   1. What systems do these secrets allow access to?
   2. How long were the secrets available on the exposed system?
   3. Were these secrets publicly available? If not, how many people had access
      to the secrets and what were their roles on the project?
   4. How quickly can/were the secrets rotated?
   5. Has the message - or file - containing the secrets been deleted (and
      removed from archive) in the exposed system?

## What is an incident?

First: it's always OK to err on the side of reporting!
TTS's and GSA's incident response
teams are good at their job, and they are totally used to false alarms. You'll
never get in trouble for pinging them about something that turns out not to be
an issue! Indeed, _you'll never get in trouble for pinging IR at all_. The most
effective security early warning system is attentive staff, so report early and
report often!

**What is an incident?** An occurrence that actually or potentially jeopardizes
the [confidentiality](#confidentiality), [integrity](#integrity), or
[availability](#availability) of an information system or the information the
system processes, stores, or transmits or that constitutes a violation or
imminent threat of violation of security policies, security procedures, or
acceptable use policies.

See GSA’s Insite:
[Report IT Security Incidents or Suspicious Activity](https://insite.gsa.gov/topics/information-technology/security-and-privacy/it-security/report-it-security-incidents-and-suspicious-activity-immediately)
if you need help determining whether something counts as an incident.

## For responders

Responders to an incident (as defined above) are entitled to take steps to
remediate the immediate problem without worrying about whether or not the work
is billable for up to eight person-hours of work per incident. Fix the problem,
and then worry about how we will account for your time.

### TTS tailored examples of incidents

- Putting sensitive data in a public Slack channel
- Exposing a secret token in a GitHub repository

### Preventing future incidents

If an incident involved exposing environment variables or private configuration
data, consider adding a [rule](https://github.com/cloud-gov/caulking#rule-sets)
to [Caulking](https://github.com/cloud-gov/caulking) to prevent further
incidents across TTS.

### Setting up My Drive for sensitive information sharing

Ensure you’re creating the folder as part of **My Drive** and not within a
pre-existing folder. Use this GSA Google Drive folder for any potentially
sensitive data and/or files. Add static files, Google Docs, or Google Sheets as
appropriate, and add a comment to any information you think is critical to the
investigation.

## Glossary

### Availability

Means the availability of the services we provide. If an app goes down or
something we expect to be running stops running, those are availability issues.
This only refers to production systems (it's fine if your demo app crashes), and
only to unexpected downtime. If you decide to shut something down temporarily
for maintenance — go for it, not an incident.

### Confidentiality

think: secrets. Personal information (PII) — names, phone numbers, social
security numbers, etc — is one kind of secret, but so are your passwords,
service credentials, internal non-public documents, etc. Any time you suspect
that confidential information may have been leaked outside TTS, you should open
an incident.

### Integrity

The soundness/fitness of purpose of our systems or information. So if a backup
was lost, or an app stopped logging for a while, or some documents got deleted,
those are integrity issues. Sometimes these can indicate deeper incidents (like
an attacker deleting logs to cover their tracks), so it's important to report
these.

## Contacts

- Incident? Report in the {% slack_channel "incident-response" %} Slack channel
- Questions? Ask in the {% slack_channel "g-security-compliance" %} Slack
  channel
- You can use this link to
  <a href="mailto:itservicedesk@gsa.gov?subject=Incident:&cc=gsa-ir@gsa.gov;tts-tech-operations@gsa.gov">quickly
  send an email to IT Service Desk, GSA IR Team & TTS Tech Operations</a> at the
  same time.
- cloud.gov: [cloud.gov support team](mailto:cloud-gov-support@gsa.gov) or
  {% slack_channel "incident-response" %} Slack channel
- Login.gov: {% slack_channel "login-situation" %}
- Need to find the Information System Security Officer (ISSO) or Information
  System Security Manager (ISSM) for a specific system? See the
  [directory of contacts for GSA systems](https://ea.gsa.gov/#!/FISMA_POC).
  You'll need to be [on the GSA
  network]({% page "/getting-started/how-to-log-in/#connecting-to-gsa-networks" %})
  to access the directory.)
