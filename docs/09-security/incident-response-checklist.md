# CivicActions Incident Response Procedure Checklist

*This is a short, actionable checklist for the* **Incident Commander** *(IC) and* **Responders** *to follow during incident response. It's a companion to the [Incident Response Plan](incident-response-plan.md) where you can find the full details of each step.*

## Step 1: *Breathe*

* No one's life is in danger.
* ***Document your steps and findings!*** *(A client specific or [`#general`](https://civicactions.slack.com/messages/general/) slack channel is recommended - `#general` will be used in the rest of this document.)* This eases communications and handoffs.
* Consult with the *Incident Commander* (or other team members) if you have questions.

## Roles

*There is often overlap between these two roles, especially at the beginning of an incident response.*

* **Incident Commander (IC)**
   * is the first CivicActions team member to notice or respond to the incident
   * forms the team (for the first 15-30 minutes the IC may also be the only *Responder*)
   * escalates communication to additional team members and/or the Product Owner when needed.
   * ensures steps are documented (usually in [`#general`](https://civicactions.slack.com/messages/general/) slack)
   * ensures a ticket is created and a record of the Incident process is maintained

* **Responders**
   * primarily responsible for the *Assess* and *Remediate* steps
   * document *in real time* measurements, theories, steps taken in [`#general`](https://civicactions.slack.com/messages/general/) slack.
   * seek out a separate **Incident Commander** if the incident will take longer than 15-30 minutes to resolve

## Initiate

At this point, the *Incident Commander* (aka the first *Responder*) is usually working alone:

* Determine if you can whether or not this may be a false alarm.
* If you believe it may be a real incident (best to err on the side of *"it is an incident"*) and you can't resolve yourself in under 15-30 minutes, find either a *Responder* or replacement *Incident Commander* to help share the load:
  * Slack: [`#general`](https://civicactions.slack.com/messages/general/) using `@channel` (notifies the team of an incident)
  * [CivicActions Incident Response Team contact sheet](https://drive.google.com/open?id=1P9TePYm2Gkly8EjxCzA2EmlTjUIBypE7-CbCZrRN1EA)

## Assess

The *Responders* (more than one is OK) work to:

* Confirm the incident — *is it a real incident?*
   * Was the event triggered by an [external dependency](contingency-plan.md#external-dependencies)?
   * If it's not a real incident, go to [False Alarm](#false-alarm).
* Assess the severity, using [the rubric in the IR guide](incident-response-plan.md#incident-severities) *(CivicActions system incidents are generally* **Low** *severity.)*

The *Incident Commander*:

* Forms a team (*responders*) to determine if the event is actually a confirmed incident, and if so [assesses the severity](incident-response-plan.md#incident-severities).
* Determines whether to also activate the [contingency plan](contingency-plan.md) - *is a system failure causing the disruption?*
* Posts an initial situation report ("sitrep") ([example sitrep](incident-response-plan.md#assess)) to [`#general`](https://civicactions.slack.com/messages/general/) slack including the a descriptive name, Commander and Responders

## Remediate

The *Responders* work to determine cause, find resolution and return the system(s) to normal operations.

* If ***suspicious activity*** is suspected or other unanswered questions exist, create database dumps, take disk snapshots of relevant volumes, get screen captures of anomalous activity ***before making changes*** such that post-remedation forensic analysis is supported.
* Determining the cause can drive followup measures to prevent incident reccurence.
  * A *containment* strategy may be implemented by the Information Security Group for the instance to drop all ingress and egress traffic except from specific IPs (like yours) until forensics can be performed.

The *Incident Commander* coordinates activity:

* Keep the ticket/docs updated as people work, tracking:
   * Leads, and who's following them
   * Remediation items, and who's working on them, including customer notification (if appropriate to the situation)
* Send out sitreps on a regular cadence (high: hourly; medium: 2x daily; low: daily).
* Go into work shifts if the incident lasts longer then 3 hours.
* [Hand off IC](#handing-off-ic) if the incident lasts longer than 3 hours.

Once the incident is resolved:

* Update the ticket, set status → "Ready for QA".
* Schedule a retrospective.
* Send a final sitrep vie email to stakeholders.
* Thank everyone involved for their service!

## Special situations

Extra checklists for special situations that don't always occur during incidents:

### False Alarm

Follow this checklist if an event turns out not to be a security incident:

* Notify [`#general`](https://civicactions.slack.com/messages/general/) of the false alarm.
* Update the GitHub/GitLab/JIRA issue (if one exists) setting status to `Done`.
* If any sitreps have been sent out, send a final sitrep to all previous recipients, noting the false alarm.

### Handing off IC

Follow this checklist if you need to hand over IC duties:

* Old IC: brief New IC on the situation.
* New IC: confirm that you're taking over.
* New IC: update the GitHub/GitLab/JIRA issue, noting that you're now the IC.
* New IC: send out a sitrep, noting that you're taking over IC.
* Old IC: stick around for 15-20 minutes to ensure a smooth handoff, then log off!
