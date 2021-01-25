# CivicActions Security Incident Response Procedures

## Table of Contents

<!--ts-->

- [Introduction](#introduction)
- [Roles and Responsibilities](#roles-and-responsibilities)
  - [Responder](#responder)
    - [First Responder](#first-responder)
    - [IR Team Responders](#ir-team-responders)
  - [Incident Commander](#incident-commander)
  - [Communications Officer](#communications-officer)
    - [Communication channels](#communication-channels)
- [Incident response process](#incident-response-process)
  - [1. <em>Breathe</em>](#1-breathe)
  - [2. Start documenting](#2-start-documenting)
  - [3. Initiate the response](#3-initiate-the-response)
  - [4. Assess the incident](#4-assess-the-incident)
    - [IR Team responsibilities during assessment](#ir-team-responsibilities-during-assessment)
    - [Incident Commander responsibilities during assessment](#incident-commander-responsibilities-during-assessment)
  - [5. Remediate](#5-remediate)
    - [Remediation and service disruption](#remediation-and-service-disruption)
    - [Remediation requiring more than 3 hours](#remediation-requiring-more-than-3-hours)
    - [IR Team responsibilities during remediation](#ir-team-responsibilities-during-remediation)
    - [Incident Commander responsibilities during remediation](#incident-commander-responsibilities-during-remediation)
    - [Communications during remediation](#communications-during-remediation)
  - [6. Conclude the incident](#6-conclude-the-incident)
    - [Closing the ticket](#closing-the-ticket)
    - [Conducting a retrospective](#conducting-a-retrospective)
    - [Developing the incident report](#developing-the-incident-report)
- [Incident severities](#incident-severities)
  - [High severity](#high-severity)
  - [Medium severity](#medium-severity)
  - [Low severity](#low-severity)
- [Explicit Handoff Ceremony](#explicit-handoff-ceremony)

<!-- Added by: fen, at: Fri Jan 22 10:48:36 PM EST 2021 -->

<!--te-->

---

## Introduction

This document describes the process that the CivicActions Incident Response Team follows when responding to security incidents and other disruptions that may affect the Confidentiality, Integrity, Availability (CIA) or Privacy of system resources and data. It explains:

- roles and responsibilities during and after incidents
- overview of the steps to follow for resolution

_During an incident, the [IRP checklist](incident-response-checklist.md) may be more useful as it contains bulleted, actionable items for the IR Team to follow._

## Roles and Responsibilities

Individual and team roles are described below.

### Responder

A _Responder_ is a member of the CivicActions IR Team who investigates and remediates an event or incident.

#### First Responder

The _First Responder_ is the first IR Team member who becomes aware of the incident.

- Frequently the _First Responder_ is also the _Incident Reporter_.
- The _First Responder_ assumes the role as the _Incident Commander_ (IC) until [handing off IC duties](#explicit-handoff-ceremony).
- For the first 15-30 minutes, the _First Responder_ may work alone. If needed, the _First Responder_ begins forming the IR Team. See [Initiate](#3-initiate-the-response).

#### IR Team Responders

During incident response, _Responders_ do the following:

- Assume primary responsibility for the [Assess](#4-assess-the-incident) and [Remediate](#5-remediate) steps.
- Document in real time the measurements, theories, and steps taken using the Slack channel [#general](https://civicactions.slack.com/messages/general/) or other channels provided by the _Incident Commander_ (IC). Use `@security` to trigger a Slack notification for the Security team.
- Designate an _Incident Commander_ (IC), if the incident might require more than 15-30 minutes to resolve, and do an [explicit handoff](#explicit-handoff-ceremony).

### Incident Commander

The _Incident Commander_ (IC) remains uninvolved in remediation efforts, and performs three major duties:

1. IR Team creation and management, ensuring that the IR Team:

   - Includes team members who are capable of containing, investigating, and remediating the incident.
   - Remains focused on resolving the incident.
   - Uses the most appropriate media/communication channels for recording actions. During business hours, _Incident Commander_ (IC) may create a dedicated Slack channel (for example, #fire-team) for IR Team communications.
   - Utilizes work shifts if the incident lasts longer than 3 hours.

2. Documentation, including all actions taken during investigation and remediation, using the following methods:

   - Slack channel [#general](https://civicactions.slack.com/messages/general/) (Use `@security` to trigger a Slack notification for the Security team.)
   - Project JIRA ticket or Gitlab issue (if applicable)

3. Communication, ensuring that internal and external entities stay informed. For communication duties, the _Incident Commander_ (IC) may designate a _Communications Officer_ (CO) and do an [explicit handoff](#explicit-handoff-ceremony).

### Communications Officer

Communication is critical as the IR Team works to contain, investigate, and remediate an incident.

The _Incident Commander_ (IC) manages communications regarding the incident until [handing off IC duties](#explicit-handoff-ceremony) to another IR Team member or designating a _Communications Officer_ (CO).

The _Communications Officer_ (CO) manages external communications with:

- Management, developers, users, and anyone affected by the incident
- Client stakeholders (if applicable)
- Additional Project team members and/or the Product Owner (if applicable)
- CivicActions Legal team, and US-CERT if escalation is required

#### Communication channels

The _Incident Commander_ (IC) determines the most appropriate communication channels during incident response. Any of the following may be used:

- Slack channel [#general](https://civicactions.slack.com/messages/general/). Use `@security` to trigger a Slack notification for the Security team.
- During business hours, _Incident Commander_ (IC) may create a dedicated Slack channel (for example, #fire-team) for IR Team communications.
- A JIRA ticket or Github/Gitlab issue for the incident (if applicable) will be the final location for all incident reporting, with links to other documents as needed.
- Video conference: Zoom, Google Meet, Microsoft Teams, Skype, etc. (Be sure to record the call for documentation purposes.)
- Email to [security@civicactions.com](mailto:security@civicactions.com).
- Email/telephone to the [CivicActions IR Team](https://drive.google.com/open?id=1P9TePYm2Gkly8EjxCzA2EmlTjUIBypE7-CbCZrRN1EA) for an incident that has potential Project impact.

## Incident response process

There are six major processes of incident response, detailed below:

- [1. _Breathe_](#1-breathe)
- [2. Start documenting](#2-start-documenting)
- [3. Initiate the response](#3-initiate-the-response)
- [4. Assess the incident](#4-assess-the-incident)
- [5. Remediate](#5-remediate)
- [6. Conclude the incident](#6-conclude-the-incident)

_During an incident, the [IRP checklist](incident-response-checklist.md) may be more useful as it contains bulleted, actionable items for the IR Team to follow._

### 1. _Breathe_

No one's life is in danger.

### 2. Start documenting

Begin documenting all steps and findings. Documentation makes handoffs and Responder onboarding easier. The Slack channel [#general](https://civicactions.slack.com/messages/general/) is recommended because it is most widely accessible, but other [communication channels](#communication-channels) may be used. When posting messages to Slack, use `@security` to trigger a Slack notification for the Security team.

### 3. Initiate the response

At this stage, the _First Responder_ is usually working alone, and is also the _Incident Commander_ (IC).

A. Allocate 5 minutes and determine whether this event is a potential incident or false alarm. Consider any potential Project impact.

An incident begins when someone becomes aware of a disruption in expected normal system operations. An incident is defined broadly, following [_NIST SP 800-61: Computer Security Incident Handling Guide_](https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final), as "a violation or imminent threat of violation of computer security policies, acceptable use policies, or standard security practices". This definition encompasses any scenario that might threaten the security of system resources and data. For more information, see the CivicActions handbook: [What is an incident?](http://civicactions-handbook.readthedocs.io/en/latest/09-security/incidents/#what-is-an-incident)

B. Respond accordingly:

- Potential incident

  1.  Issue a broadcast notification via one or more of the following:

      - Slack channel [#general](https://civicactions.slack.com/messages/general/). Use `@security` to trigger a Slack notification for the Security team.
      - Email to [security@civicactions.com](mailto:security@civicactions.com).
      - Email/telephone to the [CivicActions IR Team](https://drive.google.com/open?id=1P9TePYm2Gkly8EjxCzA2EmlTjUIBypE7-CbCZrRN1EA) for an incident that has potential Project impact.

  An example message follows. The format is not important, but the information fields are useful.

        **Description**: [Short description of the event and its impact]
        **Status**: investigating
        **Severity**: unknown
        **Incident Reporter**: [name of the person who reported the issue]
        **Incident Commander**: [your name]
        **Responders**: [names of other _Responders_]
        **Details**: [Extra details about the event]

  Observe the following guidelines for communications:

      - During this stage of incident response, the event status is "investigating".
      - An unconfirmed issue is called an _event_. A confirmed issue is called an _incident_.

  2.  For an incident requiring more than 30 minutes to resolve:

      - Recruit additional _Responders_ via the Slack channel [#general](https://civicactions.slack.com/messages/general/). Use `@security` to trigger a Slack notification for the Security team.
      - Designate an [Incident Commander (IC)](#incident-commander) and [hand off the IC duties](#explicit-handoff-ceremony).

  More information on [incident response roles and responsibilities](#roles-and-responsibilities):

      - [Responder](#responder)
      - [Incident Commander (IC)](#incident-commander)
      - [Communications Officer (CO)](#communications-officer)

      Use the [Explicit Handoff Ceremony](#explicit-handoff-ceremony) when transferring/changing roles.

- False alarm

Conclude the incident. Proceed to [_6. Conclude the incident_](#6-conclude-the-incident).

### 4. Assess the incident

#### IR Team responsibilities during assessment

A. Confirm the incident.

1.  Gather information, and document your findings.

    - Was the event triggered by an [external dependency](contingency-plan.md#external-dependencies)?
    - Is a system failure causing the disruption?

2.  Proceed to the next step for a confirmed incident. (For a false alarm, conclude the incident. Proceed to [_6. Conclude the incident_](#6-conclude-the-incident).)

B. Assess the severity.

- Use the [rubric for determining severity](#incident-severities). Project incidents are generally "Low severity".
- Does it affect system or data Confidentiality, Integrity, Availability and/or Privacy?
- Note that severity can change over the lifespan of an incident, and it is acceptable for the IR Team to assess the initial severity quickly.

C. Determine whether the IR Team needs to activate the [Contingency Plan](contingency-plan.md). Consider whether Disaster Recovery is required.

The IR Team should record all actions and observations in an appropriate [communication channel](#communication-channels).

_Reminder: Use the [Explicit Handoff Ceremony](#explicit-handoff-ceremony) when transferring/changing roles._

#### Incident Commander responsibilities during assessment

- Post an initial situation report (_sitrep_), in the following locations:

  - Slack channel [#general](https://civicactions.slack.com/messages/general/) (Use `@security` to trigger a Slack notification for the Security team. Include link to the ticket/issue if applicable.)
  - JIRA ticket or Gitlab issue (if applicable)
  - Any other [communication channels](#communication-channels) as specified by the _Incident Commander_ (IC) (or _Communications Officer_ (CO)).

  Here is an example _sitrep_:

      **Subject**: \[sitrep\] Chickens are escaping
      **Severity**: low
      **Incident Commander**: Farmer Jane
      **Responders**: Spot the Dog, Farmer Dave
      **Description**: We've confirmed reports of escaped chickens. Looks like a fox may have tunneled into the run. Dave is working to fix the fence. Spot is tracking the fox.

- For an issue with potential Project impact, ensure that a ticket/issue has been created. This should be done, even if the _First Responder/IC_ manages the incident fully, for example, by simply re-starting a service.

### 5. Remediate

Remediation is about resolving the issues caused by an incident. Remediation will be situation-specific, and timelines vary based on the assessed severity.

#### Remediation and service disruption

Remediation may require service disruption. If it does, the IR Team should proceed in a different way depending on the [severity](#incident-severities):

- **High severity**: Take action immediately, even if this causes disruption. Send a notification about the disruption as soon as possible. The CivicActions IR Team, or Project IR Team if applicable, does not need permission to take action at this level.
- **Medium severity**: Consult the other members of the CivicActions IR Team and agree on the best course of action. For an issue with Project impact, notify the Project leads about the planned action, and help them assess the relative risk of disruption versus security. If the leads are unavailable on Slack, contact them using the phone numbers in their Slack profiles. The Project team should reach a collaborative decision on action, with a bias towards disruption. If they cannot be reached within an hour, the Project IR Team may take action without them.
- **Low severity**: Consult the other members of the CivicActions IR Team and agree on the best course of action. For an issue with Project impact, notify the Project leads as described above. Do not take action until a mutually-agreed course of action has been determined.

#### Remediation requiring more than 3 hours

Remediation takes time. If the issue progresses for more than 3 hours without being resolved, the _Incident Commander_ (IC) should plan for a long remediation. This means:

- The _Incident Commander_ (IC) determines whether remediation efforts will occur during business hours only or be continuous. This depends on the severity of the issue, and whether breaches are ongoing.
- For a continuous response, the _Incident Commander_ (IC) should plan shifts. This allows _Responders_ to take breaks and insures continuous coverage. Shifts should be no longer than 3 hours. Also, the _Incident Commander_ (IC) duties should rotate in shifts no longer than 3 hours.

#### IR Team responsibilities during remediation

- Determine the cause, implement a resolution, and return the system to normal operations. Make every attempt to identify the cause; this can prevent incident recurrence.
- Maintain a list of informational leads from the incident — actionable information about any security breaches, stolen data, etc.
- Develop a list of remediation steps. These can be tracked as checklists in Slack, shared Google Docs files, a JIRA ticket, Gitlab issue or another [communication channel](#communication-channels) as specified by the _Incident Commander_ (IC).

If suspicious activity is suspected or other unanswered questions exist, do the following before making any changes:

- Make [CPM snapshots](https://cpm.project.com/) of relevant volumes and data.
- Preserve logs.
- Take screen captures of anomalous activity that can be used in post-remediation forensic analysis.
- Consider implementing a containment strategy. For example, reconfigure firewall rules for the affected instance to drop all ingress and egress traffic, except from specific IPs like your own, until forensics can be performed.

#### Incident Commander responsibilities during remediation

At a high level, the _Incident Commander_ (IC) tracks remediation actions, ensures they are assigned and followed, and verifies them when they are completed.

The _Incident Commander_ (IC) must distinguish between immediate concerns, which need to be completed before the incident is considered resolved, and long-term improvements/hardening, which can be deferred to the Retrospective.

The _Incident Commander_ (IC) does do the following:

- Maintains current information in Slack, shared Google Docs files, a JIRA ticket, or another [communication channel](#communication-channels). Be sure to include:

  - IR Team members and their roles, and/or Project team leads and members (if applicable)
  - Remediation items and their assignees

- Establishes and documents work shifts for an incident longer than 3 hours.
- Maintains communications with stakeholders, or designates a _Communications Officer_ (CO) via [explicit handoff](#explicit-handoff-ceremony).
- Shares _sitreps_ on a regular basis:

  - High severity: hourly
  - Medium severity: 2x daily
  - Low severity: 1x daily

- Focuses on coordination, communication, and information collection -- not remediation.

#### Communications during remediation

The _Incident Commander_ (IC) or _Communications Officer_ (CO) does this following:

- Coordinates with the CivicActions managers to apprise them of the situation.
- Coordinates with the Project Product Owner (PO), if applicable, to notify affected customers.
- Ensures that the IR Team is recording all actions in the appropriate designated [communication channels](#communication-channels).
- Shares _sitreps_ on a regular basis in Slack, in the ticket/issue (if applicable), and with stakeholders. See the section on [incident severities](#incident-severities) for suggested time intervals based on severity level.

### 6. Conclude the incident

#### Closing the ticket

When the incident is no longer active, for example, the breach has been contained, the issue has been fixed, etc., the _Incident Commander_ (IC) should conclude the incident. There might be longer term remediation required, and possibly more investigation, but when the incident is no longer active, these activities can proceed at the regular pace of business.

To conclude an incident, the _Incident Commander_ (IC) should:

- Set the status of the ticket/issue to **Ready for QA**.
- Send a final _sitrep_ to stakeholders, including CivicActions managers and the Security team.
- Thank everyone involved for their service.

#### Conducting a retrospective

An _Incident Commander_ (IC), or another designated party such as the _Communications Officer_ (CO), should lead a retrospective and develop an incident report.

#### Developing the incident report

The incident report should contain:

- a timeline of the incident
- details about how the incident progressed
- information about the vulnerabilities that led to the incident, also called a _cause analysis_ (The _cause analysis_ is an important part of the incident report. Tools such as [Infinite Hows](https://www.kitchensoap.com/2014/11/14/the-infinite-hows-or-the-dangers-of-the-five-whys/) and [Five Whys](https://en.wikipedia.org/wiki/5_Whys) can help the IR Team explore potential causes, prevention, and improved incident response.)

Additionally, the incident report should include basic response metrics:

- **Discovery method**: How did the IR Team become aware of the issue?
- **Time to discovery**: How much time passed from the time the incident became active until someone became aware of it?
- **Time to containment**: How much time passed from the time someone became aware of the incident until the incident was contained?
- **Threat actions**: What actions were taken by the actor? For example, phishing, password attacks, etc.

The incident report should be posted in Slack, or in the ticket/issue as a final comment before the ticket is closed.

## Incident severities

The incident severity level determines the actions of the IR Team. Severity usually changes during the lifecycle of the incident.

### High severity

A high severity incident does one or more of the following:

- compromises the confidentiality/integrity of Sensitive Personally Identifiable Information (SPII),
- impacts the availability of services for a large number of customers, or
- has significant financial impact.

Examples include:

- Confirmed breach of SPII
- Successful root-level compromise of production systems
- Denial of Service attacks resulting in severe outages

Guidelines for incident response:

- Remediation efforts will likely be continuous until the issue is contained.
- _Responders_ may take any action required to contain the issue, including complete service degradation.
- _Sitreps_ should be shared every hour, or more frequently.

### Medium severity

A medium severity incident can be an unsuccessful attempt to breach Personally Identifiable Information (PII), an event with limited impact on the availability of services for a large number of users, or an event with limited financial impact. Examples include:

- Suspected PII breach
- Targeted but unsuccessful attempts to compromise production systems
- Spam/phishing attacks targeting CivicActions or Project staff
- Denial of Service attacks resulting in limited service degradation

Guidelines for incident response:

- Response should occur during business hours.
- _Responders_ should attempt to consult stakeholders before causing downtime, but may proceed without consent if stakeholders do not respond in a reasonable time frame.
- _Sitreps_ should be shared approximately twice per day.

### Low severity

A low severity incident does not affect PII, and has no availability or financial impact. Examples include:

- Attempted compromise of non-important systems, for example, staging or testing instances
- Denial of Service attacks with no noticeable customer impact

Guidelines for incident response:

- Response should occur during business hours.
- _Responders_ should avoid service degradation unless stakeholders agree.
- _Sitreps_ should be shared daily.

## Explicit Handoff Ceremony

To transfer _Incident Commander_ (IC), _Communications Officer_ (CO), or _Responder_ duties:

1. Outgoing ROLE initiates the handoff and briefs the incoming ROLE on the situation.
2. Incoming ROLE confirms the handoff and assumes responsibility.
3. Incoming ROLE documents the handoff in Slack or the JIRA ticket/Gitlab issue.
4. Incoming ROLE shares a _sitrep_, which notes the handoff.
5. Outgoing ROLE remains available for 15-20 minutes to ensure a smooth handoff and then logs off.
