# CivicActions Incident Response Procedure Checklist

_This is a short, actionable checklist for the_ **Incident Commander** _(IC) and_ **Responders** _to follow during incident response. It's a companion to the [Incident Response Plan](incident-response-plan.md) where you can find the full details of each step._

## Step 1: _Breathe_

- No one's life is in danger.
- **_Document your steps and findings!_** _(A client specific or [`#general`](https://civicactions.slack.com/messages/general/) slack channel is recommended - `#general` will be used in the rest of this document.)_ This eases communications and handoffs.
- Consult with the _Incident Commander_ (or other team members) if you have questions.

## Roles

_There is often overlap between these two roles, especially at the beginning of an incident response._

- **Incident Commander (IC)**

  - is the first CivicActions team member to notice or respond to the incident
  - forms the team (for the first 15-30 minutes the IC may also be the only _Responder_)
  - escalates communication to additional team members and/or the Product Owner when needed.
  - ensures steps are documented (usually in [`#general`](https://civicactions.slack.com/messages/general/) slack)
  - ensures a ticket is created and a record of the Incident process is maintained

- **Responders**
  - primarily responsible for the _Assess_ and _Remediate_ steps
  - document _in real time_ measurements, theories, steps taken in [`#general`](https://civicactions.slack.com/messages/general/) slack.
  - seek out a separate **Incident Commander** if the incident will take longer than 15-30 minutes to resolve

## Initiate

At this point, the _Incident Commander_ (aka the first _Responder_) is usually working alone:

- Determine if you can whether or not this may be a false alarm.
- If you believe it may be a real incident (best to err on the side of _"it is an incident"_) and you can't resolve yourself in under 15-30 minutes, find either a _Responder_ or replacement _Incident Commander_ to help share the load:
  - Slack: [`#general`](https://civicactions.slack.com/messages/general/) using `@channel` (notifies the team of an incident)
  - [CivicActions Incident Response Team contact sheet](https://drive.google.com/open?id=1P9TePYm2Gkly8EjxCzA2EmlTjUIBypE7-CbCZrRN1EA)

## Assess

The _Responders_ (more than one is OK) work to:

- Confirm the incident — _is it a real incident?_
  - Was the event triggered by an [external dependency](contingency-plan.md#external-dependencies)?
  - If it's not a real incident, go to [False Alarm](#false-alarm).
- Assess the severity, using [the rubric in the IR guide](incident-response-plan.md#incident-severities) _(CivicActions system incidents are generally_ **Low** _severity.)_

The _Incident Commander_:

- Forms a team (_responders_) to determine if the event is actually a confirmed incident, and if so [assesses the severity](incident-response-plan.md#incident-severities).
- Determines whether to also activate the [contingency plan](contingency-plan.md) - _is a system failure causing the disruption?_
- Posts an initial situation report ("sitrep") ([example sitrep](incident-response-plan.md#assess)) to [`#general`](https://civicactions.slack.com/messages/general/) slack including the a descriptive name, Commander and Responders

## Remediate

The _Responders_ work to determine cause, find resolution and return the system(s) to normal operations.

- If **_suspicious activity_** is suspected or other unanswered questions exist, create database dumps, take disk snapshots of relevant volumes, get screen captures of anomalous activity **_before making changes_** such that post-remediation forensic analysis is supported.
- Determining the cause can drive follow-up measures to prevent incident reoccurrence.
  - A _containment_ strategy may be implemented by the Information Security Group for the instance to drop all ingress and egress traffic except from specific IPs (like yours) until forensics can be performed.

The _Incident Commander_ coordinates activity:

- Keep the ticket/docs updated as people work, tracking:
  - Leads, and who's following them
  - Remediation items, and who's working on them, including customer notification (if appropriate to the situation)
- Send out sitreps on a regular cadence (high: hourly; medium: 2x daily; low: daily).
- Go into work shifts if the incident lasts longer then 3 hours.
- [Hand off IC](#handing-off-ic) if the incident lasts longer than 3 hours.

Once the incident is resolved:

- Update the ticket, set status → "Ready for QA".
- Schedule a retrospective.
- Send a final sitrep vie email to stakeholders.
- Thank everyone involved for their service!

## Special situations

Extra checklists for special situations that don't always occur during incidents:

### False Alarm

Follow this checklist if an event turns out not to be a security incident:

- Notify [`#general`](https://civicactions.slack.com/messages/general/) of the false alarm.
- Update the GitHub/GitLab/JIRA issue (if one exists) setting status to `Done`.
- If any sitreps have been sent out, send a final sitrep to all previous recipients, noting the false alarm.

### Handing off IC

Follow this checklist if you need to hand over IC duties:

- Old IC: brief New IC on the situation.
- New IC: confirm that you're taking over.
- New IC: update the GitHub/GitLab/JIRA issue, noting that you're now the IC.
- New IC: send out a sitrep, noting that you're taking over IC.
- Old IC: stick around for 15-20 minutes to ensure a smooth handoff, then log off!
