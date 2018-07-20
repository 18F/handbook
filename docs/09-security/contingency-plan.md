# CivicActions Common Contingency Plan

Table of Contents
=================

* [Overview](#overview)
* [Recovery objective](#recovery-objective)
* [Incident Response Team information](#incident-response-team-information)
   * [Contact information](#contact-information)
* [Contingency plan outline](#contingency-plan-outline)
   * [Activation and notification](#activation-and-notification)
   * [Recovery](#recovery)
   * [Reconstitution](#reconstitution)
* [External dependencies](#external-dependencies)
* [How this document works](#how-this-document-works)

## Overview

This Contingency Plan provides baseline guidance for the CivicActions Team when managing the disruption, compromise, or failure of any component of a CivicActions maintained system, product or service ("system"). As a general guideline, we consider "disruption" to mean unexpected downtime or significantly reduced service lasting longer than:
* 30 minutes 0900 - 2100 Eastern Time Monday through Friday (standard U.S. business hours)
* 90 minutes at other times

Scenarios where that could happen include unexpected downtime of key services, system data loss, or improper privilege escalation. In the case of a security incident, the team uses the [Security Incident Response Procedure](incident-response-plan.md) as well.

Note that some clients will have created their own Contingency Plan defining procedures specfic to their system. In such a case, that Contingency Plan takes precedence.

## Recovery objective

Short-term disruptions lasting less than 30 minutes are outside the scope of this plan.

More than 3 hours of any system being offline during standard U.S. business hours (0900 - 2100 Eastern Time) is considered unacceptable. Our objective is to recover from any significant problem (disruption, compromise, or failure) within that span of time.

## Incident Response Team information

### Contact information

Team contact information is available in the Google Drive:

* [CivicActions Incident Response Team contact sheet](https://drive.google.com/open?id=1P9TePYm2Gkly8EjxCzA2EmlTjUIBypE7-CbCZrRN1EA) with names and roles for CivicActions' Incident Response Team members. All CivicActions employees have access to this sheet.

## Contingency plan outline

### Activation and notification

The first Incident Response Team member who notices or reports a potential contingency-plan-level problem becomes the **Incident Commander** (IC) until recovery efforts are complete or the Incident Commander role is explicitly reassigned.

If the problem is identified as part of a [security incident response situation](incident-response-plan.md) (or becomes a security incident response situation), the same Incident Commander (IC) should handle the overall situation, since these response processes must be coordinated.

The IC first notifies and coordinates with the people who are authorized to decide that te system is in a contingency plan situation:

* From CivicActions:
   * Incident Commander
   * Project Manager
   * CivicActions Incident Response Team

The IC keeps a log of the situation in the [`#general`](https://civicactions.slack.com/messages/general/) Slack channel or within a client-specific Slack channel, JIRA ticket, or GitHub issue. If this is also a security incident, the IC also follows the [security incident communications process](incident-response-plan.md#initiate). The IC should delegate assistant ICs for aspects of the situation as necessary.

### Recovery

The Incident Response Team assesses the situation and works to recover the system. See the list of [external dependencies](#external-dependencies) for procedures for recovery from problems with external services.

If this is also a security incident, the IC also follows the [security incident assessment](incident-response-plan.md#initiate) and [remediation](incident-response-plan.md#remediate) processes.

If the IC assesses that the overall response process is likely to last longer than 3 hours, the IC should organize shifts so that each responder works on response for no longer than 3 hours at a time, including handing off their own responsibility to a new IC after 3 hours.

### Reconstitution

The Incident Response Team tests and validates the system as operational.

The Incident Commander declares that recovery efforts are complete and notifies all relevant people. The last step is to schedule a postmortem to discuss the event. This is the same as the [security incident retrospective process](incident-response-plan.md#retrospective).

## External dependencies

CivicActions managed systems often depend on several external services. In the event one or more of these services has a long-term disruption, the team will mitigate impact by following this plan. 

**Slack** <https://civicactions.slack.com/messages/general/>

There is no direct impact to the platform if a disruption occurs. Primary incident communications will move to either:
* The IT Zoom <https://zoom.us/j/865708118> Meeting ID: 865 708 118
* The IT Google Hangout <https://hangouts.google.com/hangouts/_/civicactions.net/it_is>

## How this document works

This plan is most effective if all CivicActions team members know about it, remember that it exists, have the ongoing opportunity to give input based on their expertise, and keep it up to date.

* The CivicActions team is responsible for maintaining this document and updating it as needed. Any change to it must be approved and peer reviewed by at least another member of the team.
   * All changes to the plan should be communicated to the rest of the team.
   * At least once a year, and after major changes to our systems, we review and update the plan.
* How we protect this plan from unauthorized modification:
   * This plan is stored in the CivicActions Handbook GitHub repository (<https://github.com/CivicActions/handbook/tree/master/docs/09-security>) with authorization to modify it limited to the Incident Response Team by GitHub access controls. CivicActions policy is that changes are proposed by making a pull request and ask another team member to review and merge the pull request.
