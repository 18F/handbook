# Security Incidents

Something went "bump" in the night (or the day)? This document explains what to do when you need to report a potential security incident.

Please remember:

- You are not in trouble when you report a security incident.
- When in doubt, report it. The security team decides if it's an actual incident. (For more information, see [What is an incident?](#what-is-an-incident))
- We are all part of the Security team at CivicActions.

## Handling phishing emails

A phishing email is a suspicious email that asks you to click a link, open an attachment, or enter data into a form -- all actions that create opportunities for hackers.

**If you got phished:** If you received a suspicious email and did any of the following, you must [report it immediately as a security incident](#reporting-an-incident):

- Clicked a link
- Opened an attachment
- Entered information into a form

See [Reporting an incident](#reporting-an-incident). Even if you don't think something bad happened, you must report it. Many incidents happen silently so you won't notice until the damage has been done. The security team can help you verify that your system is secure.

**If you receive a suspicious email:**

1. Alert your CivicActions team members about the suspicious email using the Slack channel [#loving-security](https://civicactions.slack.com/messages/loving-security/) or [#general](https://civicactions.slack.com/messages/general/).
2. Use the _Report phishing_ or _Report spam_ option in your email application, or delete the email. (In Gmail, _Report phishing_ is located in the options menu for the message. To access the menu, click the button with three dots. If you need help finding these options, ask for help using the Slack channel [#general](https://civicactions.slack.com/messages/general/) or [email](mailto:security@civicactions.com).)

**If you find a suspicious email in your spam folder:** Ignore it. If the email went to your Spam folder automatically, the CivicActions mail server has already flagged it as spam.

## Reporting an incident

Report any potential incident as soon as possible. Time is critical so that the Security team can initiate our Incident Response.

### To report a security incident

- Send an email to [security@civicactions.com](mailto:security@civicactions.com) as soon as possible. If the incident is related to a phishing email, forward the email.
- Include _Security Incident_ in the subject line.
- Describe briefly what happened.
- Indicate the best way for the Security team to contact you, and include a telephone number as an alternate method if possible.

### For a project-specific incident

- Report the incident in your project Slack channel, and mention `@security`. This alerts your project's Incident Response Team and the Project Manager (PM).
- Send an email to [security@civicactions.com](mailto:security@civicactions.com). This alerts the Security team so that we can be aware of this issue and any potential impact to CivicActions.

### Honor the "do not delete" rule

Do not delete or modify any potential evidence without instruction from the Incident Response team. For example, in the event of a suspected GitLab incident, do no delete files or modify the access permissions on the GitLab repository. For a suspected Amazon Web Services (AWS) or Kubernetes incident, do not stop or allow an instance or app to be terminated that is potentially part of the incident. Leave the instance running and reconfigure the Security Group or route for that instance to be dismissive of all ingress and egress traffic until a forensics review can be performed. A significant set of data is lost and is unrecoverable when instances or containers are "stopped" or "terminated."

## What is an incident?

First, it's important to note: it's always OK to err on the side of reporting! The CivicActions Security and Incident Response Teams are good at their job, and they are totally used to false alarms. You'll never get in trouble for pinging them about something that turns out not to be an issue! Indeed, _you'll never get in trouble for pinging Security at all_. The most effective security "early warning system" is attentive staff, so "report early, report often"!

On to the answer to "what is an incident?": in a nutshell, an incident is anything that compromises (or could compromise) our or our client's "CIA": **Confidentiality, Integrity, or Availability.**

- **Confidentiality** means: "secrets". Personally identifiable information (PII) — names, addresses, phone numbers, social security numbers, etc. — is one very important class of secrets. So are your passwords, service credentials, internal non-public documents, many contractual and any copyrighted documents. Any time you suspect that any confidential information may have been leaked outside of CivicActions or a specific client who has rightful access to the information, you should open an incident. Note that this includes unknown users with elevated permissions on a site and access lists on Google docs.

- **Integrity** means the soundness/fitness of purpose of our systems or information. So if a backup was lost, or a web page was altered, or if an app stopped logging for a while, or if some documents got deleted — those are integrity issues. Sometimes these can indicate deeper incidents (like an attacker deleting logs to cover their tracks), so it's important to report these, as well.

- **Availability** means the availability of the services we provide. So if an app goes down, dynamic pages fail to update, if something we expect to be running stops running or consistently runs slower than expected — those are availability issues. Note that this only refers to production systems (it's fine if your demo app crashes), and also only to unexpected downtime. If you shut something down temporarily for planned maintenance — go for it, not an incident.

Remember: it's totally OK — and encouraged — to fail towards the side of reporting something. Organizations with really healthy _Incident Response_ systems see a lot of false alarms, and a lot of very low severity reports. This is good, because it indicates that people feel comfortable reporting day-to-day issues. The more we do it, the better we'll get at it. And this is ultimately the goal, because then when something really serious happens, we'll be well-practiced at handling it smoothly and efficiently.

Finally - while this page is called "Security Incidents," not all incidents are security related. It could be that a disk got full or a page got wedged and stopped updating properly. We call them "security incidents" because they _might_ be security related, and we want our Incident Response Team to be ready for security incidents. If all they have to do is restart Apache, well, that's a good day. And again - thank you for reporting the issue!
