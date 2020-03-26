# CivicAction Incident Response Plan (IRP)

## Table of Contents

- [Applicability](#applicability)
- [Overview](#overview)
- [Response process](#response-process)
  - [Initiate](#initiate)
    - [Comms at the Initiate phase](#comms-at-the-initiate-phase)
  - [Assess](#assess)
    - [Comms at the Assess phase](#comms-at-the-assess-phase)
  - [Remediate](#remediate)
    - [Comms at the Remediate phase](#comms-at-the-remediate-phase)
  - [Retrospective](#retrospective)
- [Incident Severities](#incident-severities)
  - [1 - High Severity](#1---high-severity)
  - [2 - Medium Severity](#2---medium-severity)
  - [3 - Low Severity](#3---low-severity)
- [How this document works](#how-this-document-works)

---

### Applicability

**Note:** This Incident Response Plan applies to systems for which CivicActions has negotiated and defined Incident Response/Contingency Plan (IRCP) operations. Each IRCP-managed system will have a specific, tailored version of this Incident Response Plan or in some cases a completely unique Incident Response Plan will be developed. All CivicActions employees are aware of the procedures outlined herein.

### Overview

This Incident Response Plan provides baseline guidance for the CivicActions Team's process for responding to security incidents and other disruptions of a CivicActions IRCP managed system, product or service ("system"). It outlines roles and responsibilities during and after incidents, and it lays out the steps we'll take to resolve them.

**If you're responding to an incident**, [here's an IRP checklist](incident-response-checklist.md) as a short, actionable companion to this guide.

At a high level, incident response follows this process:

[Initiate](#initiate):

- A CivicActions team member (the _reporter_) notices and reports a system related incident, notifying the CivicActions Incident Response Team:
  1.  Slack: client specific or [`#general`](https://civicactions.slack.com/messages/general/) using `@security` (or `@channel`)
  2.  [CivicActions Incident Response Team contact sheet](https://drive.google.com/open?id=1P9TePYm2Gkly8EjxCzA2EmlTjUIBypE7-CbCZrRN1EA)
- The first responder on the Incident Response Team (which could be the reporter if the reporter is on the team) becomes the initial **Incident Commander (IC)**.

[Assess](#assess):

- The IC forms a team (_responders_) to determine if the event is actually a confirmed incident, and if so [assesses the severity](#incident-severities).
  - Note that some apparent outages can be triggered by [external dependencies as listed in the contingency plan](contingency-plan.md#external-dependencies).
- The IC creates an initial situation report ("sitrep") using Slack ([`#general`](https://civicactions.slack.com/messages/general/)), or acknowledges false-alarm notification.
- The IC assesses whether to also activate the [contingency plan](contingency-plan.md) (for disaster recovery).

[Remediate](#remediate):

- If **_suspicious activity_** is suspected or other unanswered questions exist, create database dumps, take disk snapshots of relevant volumes, get screen captures of anomalous activity **_before making changes_** such that post-remediation forensic analysis is supported.
- The responders work to contain and remediate the issue; timelines vary based on the assessed severity.
- The IC coordinates, communicates, and tracks the investigation and remediation.
- If appropriate to the situation, the IC coordinates with the Product Owner (PO) to notify affected customers.

[Retrospective](#retrospective):

- The responding team holds a retrospective to analyze the incident, capture follow-ups and lessons-learned, and write a formal report.

During this process, the team communicates in the following places:

- Situation updates, investigation notes, and other relevant information gets captured in the issue/ticket created to track this event.
- Real-time communication happens in Slack, in the [`#general`](https://civicactions.slack.com/messages/general/) channel.
- If needed, the team can use a Zoom room, Google Hangout and/or Google Docs to share information that's not appropriate for Slack (PII, etc.).
  - IT Zoom <https://zoom.us/j/865708118> Meeting ID: 865 708 118
  - IT Google Hangout <https://hangouts.google.com/hangouts/_/civicactions.net/it_is>

For full details, read on.

### Response process

#### Initiate

An incident begins when someone becomes aware of a potential incident. We define "incident" broadly, following [NIST SP 800-61](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf), as "a violation or imminent threat of violation of computer security policies, acceptable use policies, or standard security practices". This is a deliberately broad definition, designed to encompass any scenario that might threaten the security of a system. (For more, see: [What is an incident?](http://civicactions-handbook.readthedocs.io/en/latest/09-security/incidents/#what-is-an-incident))

When a person (the _reporter_) notices what appears to be a security-related incident, they should check [`#general`](https://civicactions.slack.com/messages/general/) slack to see if this may be expected behavior (e.g., expected system downtime during a maintenance window) and if necessary alert the on-call system administrators by messaging on Slack ([`#general`](https://civicactions.slack.com/messages/general/)). If they don't get acknowledgment from the Incident Response team within 10 minutes, they should escalate by contacting the [CivicActions Incident Response Team](https://drive.google.com/open?id=1P9TePYm2Gkly8EjxCzA2EmlTjUIBypE7-CbCZrRN1EA) directly until they receive acknowledgment of their report.

The first participant on the CivicActions Incident Response Team becomes the initial **Incident Commander** (IC) and carries out the next steps in the response. The IC's responsibility is coordination, not necessarily investigation. The IC's primary role is to guide the process. The first responder may remain IC throughout the process, or they may hand off IC duties later in the process.

The IC makes sure that the incident response process is followed, including supporting the reporter if the reporter already started it, or starting it if nobody has started it yet.

##### Comms at the Initiate phase

Note that at this point the event's status is "investigating" — we haven't confirmed that it's really an issue yet. So, we should actually refer to this as just an "event" at this point; it doesn't become an "incident" until we've confirmed it.

To help with reporting, you may copy the following template into Slack to create the issue (replace ALL CAPS with pertinent details):

```
Short description of what's going on with SYSTEM

* *Status*: investigating
* *Severity*: unknown
* *Reporter*: WHO INITIALLY REPORTED THE ISSUE
* *IC*: YOUR NAME
* *Responders*: ANY OTHER RESPONDERS

ANY EXTRA DETAILS ABOUT THE ISSUE CAN GO HERE.
```

The IC is responsible for keeping this issue up-to-date as investigation and remediation progresses. Everyone involved in the issue (_responders_) should leave notes as comments on the issue.

- The IC may start a Zoom room, Google Hangout and/or create Google Docs so that responders can share information in real time:
  - IT Zoom <https://zoom.us/j/865708118> Meeting ID: 865 708 118
  - IT Google Hangout <https://hangouts.google.com/hangouts/_/civicactions.net/it_is>

#### Assess

The next step is to assess the event. We need to answer two questions:

- Is this an incident? (i.e., did the thing we suspect happen actually happen?)
- If so, how severe is it? (This will determine how our response proceeds.)
- Could the event have been triggered by an [external dependency](contingency-plan.md#external-dependencies)?

To answer these questions, the IC should form a response team using Slack. The response team should work to confirm the event and assess its impact.

If the event turns out to be a false alarm, the IC should update the issue, setting the status to "false alarm", and closing the issue.

If the event is a valid incident, the team should assess its impact and determine an initial severity following the incident severity guide below. (Note that the severity can change over the lifespan of the incident, so it's OK to determine the initial severity fairly quickly.)

If a security incident is suspected, the IC ensures that system state is captured with disk snapshots, screen captures and any other mechanisms relevant to the system such that post-remediation forensic analysis is supported.

Once this is done, the IC should update the issue, noting:

- Status: "confirmed"
- Severity: High/Med/Low
- Any new/changed responders

The IC should assess whether to also activate the [contingency plan](contingency-plan.md).

At this point, the IC should write an initial situation report to Slack or other permanent medium (GitHub, GitLab, JIRA, Trello, etc.) summarizing what's going on, identifying the IC, and linking to the issue. Here's an example sitrep:

```
Subject: [sitrep] The chickens are escaping

Severity: low
IC: Farmer Jane
Responders: Spot the Dog, Farmer Dave

We've confirmed reports of escaped chickens. Looks like a fox may have tunneled into the run. Dave is working to fix the fence, Spot is tracking the fox.
```

This sitrep should be posted in [`#general`](https://civicactions.slack.com/messages/general/) slack (include link to incident issue/ticket if possible)

##### Comms at the Assess phase

Updates and real-time chat should continue as above (chat in Slack, Zoom or Google Hangouts).

#### Remediate

At this point, we're trying to fix the issue! Remediation will be very situation-specific, so specific steps are hard to suggest. However, a few guidelines to follow during this process:

- If **_suspicious activity_** is suspected or other unanswered questions exist, create database dumps, take disk snapshots of relevant volumes, get screen captures of anomalous activity **_before making changes_** such that post-remediation forensic analysis is supported.

- The IC's responsibility is coordination, communication, and information-collection. The remediation team will be focused on resolving the issue, so it's up to the IC to make sure that we properly track what happened, how we're fixing it, who's doing what, etc. Ideally, the notes kept by the IC should be sufficient for an outside investigator to independently follow the work of the response team and validate the team's work

- The team will develop a list of **leads** — actionable information about breaches, stolen data, etc. The IC should track these leads, maintain information about which are being investigated (and by whom), and what information that investigation leads. These can be tracked as checklists in the issue.

- Similarly, the team will develop a list of **remediation steps**. The IC is likewise responsible for tracking those, making sure they're assigned and followed-up, and verifying them as they're completed. These may be tracked in the central issue as well. The IC should distinguish between immediate concerns which should be completed before the incident is considered resolved and long-term improvements/hardening which can be deferred to the Retrospective.

- The response team should aim to adopt a _containment_ strategy: if machines are compromised, they should avoid destroying or shutting them down if possible (this can hamper forensics). Creating database dumps or snapshots of relevant volumes is a good step here.

  - For AWS instances, remember that you can leave the instance running and reconfigure the Security Group for the instance to drop all ingress and egress traffic except from specific IPs (like yours) until forensics can be performed.

- Remediation may require service disruption. If it does, the team should proceed in a different way depending on the [severity](#incident-severities):

  - For High-severity incidents, the team should take action immediately, even if this causes disruption. A notification about the disruption should be sent out as soon as possible, but the team needs no permission to take action at this level.

  - For Medium-severity incidents, the team should notify the Product Owners and Tech Leads of the planned action, and help them assess the relative risk of disruption vs. security. If the leads are unavailable via Slack, they should be contacted using the phone numbers in their Slack profiles. The team should reach a collaborative decision on action, with a bias towards disruption. If they can't be reached within 1 hour, the team may take action without them.

  - For Low-severity issues, the team should notify as above, and not take action until a mutually-agreed-on course of action has been determined.

- Remediation can sometimes take a long time. If the issue progresses for more than 3 hours without being resolved, the IC should plan for a long remediation. This means:

  - Determine if remediation efforts should be "business hours" or "24/7". This will depend on the severity of the issue, and whether breaches are ongoing.

  - For 24/7 responses, the IC should begin shift-planning. Generally, responders should only work 3 hour shifts, so the IC should begin scheduling shifts and sending people "home" to preserve their ability to function.

  - The IC also needs to get into rotation — again, 3 hour shifts are about the maximum suggested. So, the IC should likely hand off duties at this point.

Once the incident is no longer active — i.e. the breach has been contained, the issue has been fixed, etc. — the IC should spin down the incident. There may still be longer-term remediation needed, and possibly more investigation, but as long as the incident is no longer active these activities can proceed at the regular pace of business. To close out an incident, the IC should:

- Set the status of the incident to "Ready for QA".
- Send a final sitrep to stakeholders.
- Thank everyone involved for their service!

##### Comms at the Remediate phase

- Updates and real-time chat should continue as above (updates on the issue, chat in Slack or Google Hangouts).
- The IC should continue to post updated sitreps on a regular cadence (the section on severities, below, suggests cadences for each level). These sitreps should be sent to Slack, posted in the issue, and to any other stakeholders identified throughout the process (e.g. clients).

#### Retrospective

The final step in handling a security incident is figuring out what we learned. The IC (or one of the ICs if there were multiple, or a designated other party) should lead a retrospective and develop an incident report.

The report should contain:

- a timeline of the incident
- details about how the incident progressed
- information about the vulnerabilities that led to the incident, or _cause analysis_

The _cause analysis_ is an important part of this report; the team should use tools such as [Infinite Hows](https://www.kitchensoap.com/2014/11/14/the-infinite-hows-or-the-dangers-of-the-five-whys/) or [Five Whys](https://en.wikipedia.org/wiki/5_Whys) to try to dig into causes, how future incidents could be prevented, how responses could be better in the future, etc.

The report should also contain some basic response metrics:

- Discovery method (how did we become aware of the issue?)
- Time to discovery (how long did it take from when the incident started until we became aware of it?)
- Time to containment (how long did it take from when we became aware until the issue was contained?)
- Threat actions (which specific actions -- e.g. phishing, password attacks, etc.) -- were taken by the actor)?

This report should be posted as a final comment on the issue, emailed which can then be closed.

### Incident Severities

_Note that most CivicActions' systems no High Value Assets (HVAs) or Sensitive Personally Identifiable Information (SPII). As such, system incidents are generally expected to fall into the_ **Low Severity** _bucket._

Severity ratings drive the actions of the response team. Below are the severities ratings we use, some examples of incidents that might fall into that bucket, and some guidelines for ICs and response teams about how to treat each class of incident.

Note the severities may (and often will) change during the lifecycle of the incident. That's normal.

#### 1 - High Severity

High-severity incidents successfully compromise the confidentiality/integrity of _Sensitive_ Personally Identifiable Information (SPII), impact the availability of services for a large number of customers, or have significant financial impact. Examples include:

- Confirmed breach of SPII
- Successful root-level compromise of production systems
- Critical business function outage or severe performance degradation
- Improper privilege escalation

Guidelines for addressing high-sev issues:

- Work will likely be 24/7 (e.g. work until the issue is contained).
- Responders are empowered to take any step needed to contain the issue, up to and including complete service degradation.
- Sitreps should be sent every hour, or more.

#### 2 - Medium Severity

Medium-severity incidents represent attempts (possibly un- or not-yet-successful) at breaching PII, or those with limited availability/financial impact. Examples include:

- Suspected SPII breach
- Targeted (but as-of-yet unsuccessful) attempts to compromise production systems
- Spam/phishing attacks targeting CivicActions or client staff
- DoS attacks resulting in limited service degradation

Guidelines for addressing medium-sev issues:

- Response should be business-hours.
- Responders should attempt to consult stakeholders before causing downtime, but may proceed without them if they can't be contacted in a reasonable time-frame.
- Sitreps should be sent approximately twice a day.

#### 3 - Low Severity

Low-sev incidents don't affect SPII, have little availability and no financial impact. Examples include:

- Attempted compromise of non-important systems (staging/testing instances, etc.)
- System degradation of non-critical systems
- Incidents involving specific employees
- DoS attacks with no noticeable customer impact

Guidelines for addressing low-sev issues:

- Response should be business-hours.
- Responders should avoid service degradation unless stakeholders agree.
- Sitreps should be sent approximately daily.

### How this document works

This plan is most effective if all CivicActions team members know about it, remember that it exists, have the ongoing opportunity to give input based on their expertise, and keep it up to date.

- The CivicActions team is responsible for maintaining this document and updating it as needed. Any change to it must be approved and peer reviewed by at least another member of the team.
  - All changes to the plan should be communicated to the rest of the team.
  - At least once a year, and after major changes to our systems, we review and update the plan.
- How we protect this plan from unauthorized modification:
  - This plan is stored in the CivicActions Handbook GitHub repository (<https://github.com/CivicActions/handbook/tree/master/docs/09-security>) with authorization to modify it limited to the Incident Response Team by GitHub access controls. CivicActions policy is that changes are proposed by making a pull request and ask another team member to review and merge the pull request.
