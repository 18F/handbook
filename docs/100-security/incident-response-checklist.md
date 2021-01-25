# CivicActions Security Incident Response Procedure Checklist

For more details on any part of the checklist, see the [Security Incident Response Plan](incident-response-plan.md).

## Table of Contents

<!--ts-->

- [1. <em>Breathe</em>](#1-breathe)
- [2. Start documenting](#2-start-documenting)
- [3. Initiate the response](#3-initiate-the-response)
- [4. Assess the incident](#4-assess-the-incident)
  - [IR Team responsibilities](#ir-team-responsibilities)
  - [Incident Commander responsibilities](#incident-commander-responsibilities)
- [5. Remediate](#5-remediate)
  - [IR Team responsibilities](#ir-team-responsibilities-1)
  - [Incident Commander responsibilities](#incident-commander-responsibilities-1)
- [6. Conclude the incident](#6-conclude-the-incident)

<!-- Added by: fen, at: Fri Jan 22 10:45:55 PM EST 2021 -->

<!--te-->

---

## 1. _Breathe_

No one's life is in danger.

## 2. Start documenting

Begin documenting all steps and findings. Documentation makes handoffs and responder onboarding easier. The Slack channel [#general](https://civicactions.slack.com/messages/general/), or a Project-specific Slack channel if applicable, is recommended because it is most widely accessible, but other [communication channels](incident-response-plan.md#communication-channels) may be used.

## 3. Initiate the response

At this stage, the _First Responder_ is usually working alone, and is also the _Incident Commander_ (IC).

A. Allocate 5 minutes and determine whether this event is a potential incident or false alarm. Consider any potential Project impact.

B. Respond accordingly:

- Potential incident

  1.  Issue a [broadcast notification](incident-response-plan.md#communication-channels) via one or more of the following:

      - Slack channel [#general](https://civicactions.slack.com/messages/general/). Use `@security` to trigger a Slack notification for the Security team.
      - Email to [security@civicactions.com](mailto:security@civicactions.com).
      - Email/telephone to the [CivicActions IR Team](https://drive.google.com/open?id=1P9TePYm2Gkly8EjxCzA2EmlTjUIBypE7-CbCZrRN1EA) for an incident that has potential Project impact.

  2.  For an incident requiring more than 30 minutes to resolve:

      - Recruit additional IR Team responders via the Slack channel [#general](https://civicactions.slack.com/messages/general/). Use `@channel` to trigger a Slack notification for everyone in the channel.
      - Designate an [**Incident Commander**](incident-response-plan.md#incident-commander) and [hand off the IC duties](incident-response-plan.md#explicit-handoff-ceremony).

  More information on [incident response roles and responsibilities](incident-response-plan.md#roles-and-responsibilities):

        - [Responder](incident-response-plan.md#responder)
        - [Incident Commander (IC)](incident-response-plan.md#incident-commander)
        - [Communications Officer (CO)](incident-response-plan.md#communications-officer)

  Use the [_Explicit Handoff Ceremony_](incident-response-plan.md#explicit-handoff-ceremony) when transferring/changing roles.

- False alarm

  Conclude the incident. Proceed to [_6. Conclude the incident_](#6-conclude-the-incident).

## 4. Assess the incident

### IR Team responsibilities

A. Confirm the incident.

1. Gather information, and document your findings.

   - Was the event triggered by an [external dependency](contingency-plan.md#external-dependencies)?
   - Is a system failure causing the disruption?

2. Proceed to the next step for a confirmed incident. (For a false alarm, conclude the incident. Proceed to [_6. Conclude the incident_](#6-conclude-the-incident).)

B. Assess the severity. Use the [rubric in the IR guide](incident-response-plan.md#incident-severities). (Project incidents are generally "Low severity".)

C. Assess whether to activate the [contingency plan](contingency-plan.md). Consider whether Disaster Recovery is required.

_Reminder: Use the [Explicit Handoff Ceremony](incident-response-plan.md#explicit-handoff-ceremony) when transferring/changing roles._

### Incident Commander responsibilities

- Post an initial situation report, called a _sitrep_ ([example _sitrep_](incident-response-plan.md#4-assess-the-incident)), to the Slack channel [#general](https://civicactions.slack.com/messages/general/). Include a descriptive name, and identify the current Incident Commander and Responders. Use `@security` to trigger a Slack notification for the Security team.
- For an issue with potential Project impact, ensure that a JIRA ticket or Gitlab issue has been created. This should be done, even if the _First Responder/IC_ manages the incident fully, for example, by simply re-starting a service.

## 5. Remediate

### IR Team responsibilities

- Determine the cause, implement a resolution, and return the system to normal operations. Make every attempt to identify the cause; this can prevent incident recurrence.

- If suspicious activity is suspected or other unanswered questions exist, do the following before making any changes:

  - Make snapshots of relevant volumes and data.
  - Preserve logs.
  - Take screen captures of anomalous activity that can be used in post-remediation forensic analysis.
  - Consider implementing a containment strategy. For example, reconfigure firewall rules for the affected instance to drop all ingress and egress traffic, except from specific IPs like yours, until forensics can be performed.

### Incident Commander responsibilities

- Maintain current information in Slack, shared Google Docs files, the ticket/issue (if applicable), or other [communication channels](incident-response-plan.md#communication-channels). Be sure to include:
  - Project team leads and members
  - Remediation items and their assignees
- Establish and document work shifts for an incident longer than 3 hours.
- Maintain communications with stakeholders, or designate a _Communications Officer_ via [explicit handoff](incident-response-plan.md#explicit-handoff-ceremony).
- Share _sitreps_ on a regular basis:
  - High severity: hourly
  - Medium severity: 2x daily
  - Low severity: daily
- Focus on coordination, not remediation.

## 6. Conclude the incident

A. Notify the Slack channel [#general](https://civicactions.slack.com/messages/general/) that the incident has been resolved. Use `@security` to trigger a Slack notification for the Security team.

B. Update the ticket/issue (if applicable) and set the status to one of the following:

- Confirmed incident: _Ready for QA_
- False alarm: _Done_

C. Schedule an [IR Team retrospective](incident-response-plan.md#conducting-a-retrospective). Optional for false alarms.

D. Share the final _sitrep_ with stakeholders.

E. Thank everyone for their service.
