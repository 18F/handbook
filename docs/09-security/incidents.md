# Security Incidents

Something went "bump" in the night (or the day)? This document explains what to do when you notice and wish to report what you believe may be a security incident. See [What is an incident?](#what-is-an-incident) if you need help determining whether something counts as an incident.

## Reporting phishing emails

If you receive a phishing email, follow these steps to report to CivicActions IT:

_Note: the menus and links described below refer to the standard GMail interface which is the most commonly used at CivicActions. Please "translate" these to your mail reader UI if using another system, or ask for help on [slack](https://civicactions.slack.com/messages/general/) or via [email](mailto:security@civicactions.com)._

1.  Do not click any links in the email. Do not delete it yet. You may mark it as spam.
2.  If you can, click the `Show Original` option in the "triangle" menu associated with the email. This will open a new window with the Original Message above and the raw text of the email below.
3.  Click on the `Download Original` link halfway down the page and it will save text of the email to your hard drive.
4.  Mark the email as a phishing email by selecting the `Report phishing` option in the same "triangle" menu associated with the email.
5.  Forward the email to `security@civicactions.com`. As long as you haven't clicked on link or downloaded the file, you may stop here.
    - If you suspect that the email has compromised your system with a download or link, attach the original text you downloaded. Please include _Security Incident_ in the subject line, along with a brief description of the issue (Ex. Clicked on link in phishing email).
6.  Report the phishing email in the [#general](https://civicactions.slack.com/messages/general/) (attention: `@security`) Slack channel. (The `general` channel is used as everyone has access to it.)
7.  After receiving your notification to security, IT may create a ticket and contact you for more information.

You might be tempted to simply mark phishing emails as spam and otherwise ignore them, but if you accidentally (or intentionally) click a link or receive a download from a suspect email, you must report it as an incident following the steps above. Successful phishing attacks are security incidents and should be reported immediately. Phishing emails that are automatically routed to your spam folder do not need to be reported. Your vigilance also helps CivicActions IT to prepare against similar phishing attacks that might be sent to other team members.

## Reporting other incidents

To report a security incident, follow _all_ of the steps below:

1.  Send an email to <mailto:security@civicactions.com> within 1 hour of identifying an incident. Please include _Security Incident_ in the subject line, along with a brief description of the incident (Ex. "password committed to GitLabrepo"). Don't worry if you don't have all of the details gathered when you email CivicAction Security (AKA "Incident Response") team. The critical piece here is notification within one hour.

2.  If the incident is project specific:

    - If there is a project specific tech email address, you can email the information to that instead. If unsure, email <mailto:security@civicactions.com>.
    - Report the incident in the project Slack channel (attention: `@security`). This will alert the project's Incident Response Team as well as the Project Manager (PM).

3.  Do not delete any potential evidence or modify the evidence without instruction from the Incident Response team. For example, in the event of a suspected GitLab incident, do no delete files or modify the access permissions on the GitLab repository. In the event of a suspected Amazon Web Services (AWS) or Kubernetes incident, do not stop or allow an instance or app to be terminated that is potentially part of the incident. Please leave the instance running and reconfigure the Security Group or route for that instance to be dismissive of all ingress and egress traffic until a forensics review can be performed. A significant set of data is lost and is unrecoverable when instances or containers are "stopped" or "terminated."

4.  Following notification to _security_, the Incident Response team may contact you requesting more information.
    - The _Incident Coordinator_ will create a JIRA ticket (or Trello card) labeled "Incident" with as much detail as possible.

Please note that incidents need to be reported _within one hour_ of being identified. This isn't "within an hour of happening", but "within one hour of you becoming aware of the incident". The idea is to make sure we're promptly looping in the right people. So, as soon as you're aware of a problem, follow the above steps.

## What is an incident?

First, it's important to note: it's always OK to err on the side of reporting! The CivicActions Security and Incident Response Teams good at their job, and they are totally used to false alarms. You'll never get in trouble for pinging them about something that turns out not to be an issue! Indeed, _you'll never get in trouble for pinging Security at all_. The most effective security "early warning system" is attentive staff, so "report early, report often"!

On to the answer to "what is an incident?": in a nutshell, an incident is anything that compromises (or could compromise) our or our client's "CIA": **Confidentiality, Integrity, or Availability.**

- **Confidentiality** means: "secrets". So personally identifiable information (PII) — names, addresses, phone numbers, social security numbers, etc. — is one very important class of secrets, but so are your passwords, service credentials, internal non-public documents, and any copyrighted documents. Any time you suspect that any confidential information may have been leaked outside of CivicActions or a specific client who has rightful access to the information, you should open an incident. Note that this includes unknown users with elevated permissions on a site and access lists on Google docs.

- **Integrity** means the soundness/fitness of purpose of our systems or information. So if a backup was lost, or a web page was altered, or if an app stopped logging for a while, or if some documents got deleted — those are integrity issues. Sometimes these can indicate deeper incidents (like an attacker deleting logs to cover their tracks), so it's important to report these, as well.

- **Availability** means the availability of the services we provide. So if an app goes down, dynamic pages fail to update, if something we expect to be running stops running or consistently runs slower than expected — those are availability issues. Note that this only refers to production systems (it's fine if your demo app crashes), and also only to unexpected downtime. If you shut something down temporarily for planned maintenance — go for it, not an incident.

Remember: it's totally OK — and encouraged — to fail towards the side of reporting something. Organizations with really healthy _Incident Response_ systems see a lot of false alarms, and a lot of very low severity reports. This is good, because it indicates that people feel comfortable reporting day-to-day issues. The more we do it, the better we'll get at it. And this is ultimately the goal, because then when something really serious happens, we'll be well-practiced at handling it smoothly and efficiently.

Finally - while this page is called "Security Incidents," not all incidents are security related. It could be that a disk got full or a page got wedged and stopped updating properly. We call them "security incidents" because they _might_ be security related, and we want our Incident Response Team to be ready for security incidents. If all they have to do is restart Apache, well, that's a good day. And again - thank you for reporting the issue!
