# CivicActions Common Contingency Plan

## Table of Contents

- [Applicability](#applicability)
- [Overview](#overview)
- [Recovery objective](#recovery-objective)
- [Incident Response Team information](#incident-response-team-information)
  - [Contact information](#contact-information)
- [Contingency plan outline](#contingency-plan-outline)
  - [Activation and notification](#activation-and-notification)
  - [Recovery](#recovery)
  - [Reconstitution](#reconstitution)
- [External dependencies](#external-dependencies)
  - [GitHub](#github)
  - [GitLab](#gitlab)
  - [StatusCake](#statuscake)
  - [OpsGenie](#opsgenie)
  - [JIRA](#jira)
  - [Slack](#slack)
  - [AWS](#aws)
  - [Acquia Cloud Enterprise (ACE) Platform as a Service (PaaS)](#acquia-cloud-enterprise-ace-platform-as-a-service-paas)
- [How this document works](#how-this-document-works)

### Applicability

**Note:** This Contingency Plan applies only to systems for which CivicActions has negotiated and defined Incident Response/Contingency Plan (IRCP) operations. Each IRCP-managed system will have a specific, tailored version of this Contingency Plan or in some cases a completely unique Contingency Plan will be developed. All CivicActions employees are aware of the procedures outlined herein.

### Overview

This Contingency Plan provides baseline guidance for the CivicActions Team when managing the disruption, compromise, or failure of any component of a CivicActions IRCP managed system, product or service ("system"). As a general guideline, we consider "disruption" to mean unexpected downtime or significantly reduced service lasting longer than:

- 30 minutes 0900 - 2100 Eastern Time Monday through Friday (standard U.S. business hours)
- 90 minutes at other times

Scenarios where that could happen include unexpected downtime of key services, system data loss, or improper privilege escalation. In the case of a security incident, the team uses the [Security Incident Response Plan](incident-response-plan.md) as well.

Some clients will create and maintain a Contingency Plan defining procedures specific to their system. In such a case, the client-specific Contingency Plan takes precedence.

### Recovery objective

Short-term disruptions lasting less than 30 minutes are outside the scope of this plan.

More than 3 hours of any system being offline during standard U.S. business hours (0900 - 2100 Eastern Time) is considered unacceptable. Our objective is to recover from any significant problem (disruption, compromise, or failure) within that span of time.

### Incident Response Team information

#### Contact information

Team contact information is available in the Google Drive:

- [CivicActions Incident Response Team contact sheet](https://drive.google.com/open?id=1P9TePYm2Gkly8EjxCzA2EmlTjUIBypE7-CbCZrRN1EA) with names and roles for CivicActions' Incident Response Team members. All CivicActions employees have access to this sheet.

### Contingency plan outline

#### Activation and notification

The first Incident Response Team member who notices or reports a potential contingency-plan-level problem becomes the **Incident Commander** (IC) until recovery efforts are complete or the Incident Commander role is explicitly reassigned.

If the problem is identified as part of a [security incident response situation](incident-response-plan.md) (or becomes a security incident response situation), the same Incident Commander (IC) should handle the overall situation, since these response processes must be coordinated.

The IC first notifies and coordinates with the people who are authorized to decide that the system is in a contingency plan situation:

- From CivicActions:
  - Incident Commander
  - Project Manager
  - CivicActions Incident Response Team
- From the customer:
  - Product Owner
  - Users, when applicable

The IC keeps a log of the situation in the [`#general`](https://civicactions.slack.com/messages/general/) Slack channel or within a client-specific Slack channel, JIRA ticket, or GitHub issue. If this is also a security incident, the IC also follows the [security incident communications process](incident-response-plan.md#initiate). The IC should delegate assistant ICs for aspects of the situation as necessary.

#### Recovery

The Incident Response Team assesses the situation and works to recover the system. See the list of [external dependencies](#external-dependencies) for procedures for recovery from problems with external services.

If this is also a security incident, the IC also follows the [security incident assessment](incident-response-plan.md#assess) and [remediation](incident-response-plan.md#remediate) processes.

If the IC assesses that the overall response process is likely to last longer than 3 hours, the IC should organize shifts so that each responder works on response for no longer than 3 hours at a time, including handing off their own responsibility to a new IC after 3 hours.

#### Reconstitution

The Incident Response Team tests and validates the system as operational.

The Incident Commander declares that recovery efforts are complete and notifies all relevant people. The last step is to schedule a postmortem to discuss the event. This is the same as the [security incident retrospective process](incident-response-plan.md#retrospective).

### External dependencies

CivicActions managed systems often depend on several external services. In the event one or more of these services has a long-term disruption, the team will mitigate impact by following this plan. Zero or more of the following services may be involved:

#### GitHub

- **Service:** <https://github.com>
- **Status:** <https://status.github.com/>
- **Status:** <https://twitter.com/githubstatus>

If GitHub becomes unavailable, systems will continue to operate in its current state. The
disruption would only impact the team's ability to update code on the instances.

#### GitLab

- **Service:** <https://git.civicactions.net/>
- **Status:** <https://app.statuscake.com/AllStatus.php?tid=1702974>

If GitLab becomes unavailable, systems will continue to operate in their current state. The disruption would impact the team's ability to update code on the instances, which could have significant impact.

#### StatusCake

- **Service:** <https://app.statuscake.com/>
- **Status:** <https://twitter.com/StatusCakeTeam>

If there is a disruption in the StatusCake service, the Incident Response team will be notified by email.

#### OpsGenie

- **Service:** <https://app.opsgenie.com/alert/>
- **Status:** <https://status.opsgenie.com/>
- **Status:** <https://twitter.com/opsgenie>

If there is a disruption in the OpsGenie service, all alerts automatically get delivered to the team via email.

#### JIRA

- **Service:** <https://PROJECT.atlassian.net/>
- **Status:** <https://twitter.com/JIRA>

There is no direct impact to the platform if a disruption occurs. Primary incident communications will move to the [CivicActions `#general`](https://civicactions.slack.com/) Slack channel.

#### Slack

- **Service:** <https://civicactions.slack.com/>
- **Status:** <https://status.slack.com/>
- **Status:** <https://twitter.com/SlackStatus>

There is no direct impact to the platform if a disruption occurs.
Primary incident communications will move to one of:

- IT Zoom: <https://zoom.us/>
- Google Meet: <https://meet.google.com/>
- Google Chat: <https://chat.google.com/>

#### AWS

- **Service:** <https://signin.aws.amazon.com/console>
- **Status:** <http://status.aws.amazon.com/>

If needed, you can [manage and create new servers](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1).

In case of a **significant** disruption, after receiving approval from our Authorizing Official, the CivicActions team will deploy a new instance of the entire system to a [different region](https://us-west-1.console.aws.amazon.com/ec2/v2/home?region=us-west-1).

#### Acquia Cloud Enterprise (ACE) Platform as a Service (PaaS)

- **Service:** <https://docs.acquia.com/en/stable/support/status/>
- **Status:** <https://status.acquia.com/>

Some sites are hosted on the Acquia Cloud Enterprise (ACE) PaaS
<https://cloud.acquia.com/app/develop> which is layered on top of the Amazon Web Services
(AWS) FedRAMP-certified cloud in the us-east region. See [ACE
Status](https://status.acquia.com/) and [AWS status](http://status.aws.amazon.com/).

- **Acquia Security:** <https://docs.acquia.com/acquia-cloud/arch/security>
- **Acquia Monitoring:** <https://docs.acquia.com/acquia-cloud/arch/security/monitor>
- **Acquia Availability:** <https://docs.acquia.com/acquia-cloud/arch/security/availability>
- **Acquia Backups:** <https://docs.acquia.com/acquia-cloud/arch/security/availability/backups>

Acquia Cloud takes hourly snapshots of EBS volumes that are saved to Amazon S3 providing
geographically distributed data centers.

In case of a significant disruption, after receiving approval from our Authorizing
Official, the CivicActions and Acquia teams will deploy a new instance of the entire
system to a different region.

### How this document works

This plan is most effective if all CivicActions team members know about it, remember that it exists, have the ongoing opportunity to give input based on their expertise, and keep it up to date.

- The CivicActions team is responsible for maintaining this document and updating it as needed. Any change to it must be approved and peer reviewed by at least another member of the team.
  - All changes to the plan should be communicated to the rest of the team.
  - At least once a year, and after major changes to our systems, we review and update the plan.
- How we protect this plan from unauthorized modification:
  - This plan is stored in the CivicActions Handbook GitHub repository (<https://github.com/CivicActions/handbook/tree/master/docs/09-security>) with authorization to modify it limited to the Incident Response Team by GitHub access controls. CivicActions policy is that changes are proposed by making a pull request and ask another team member to review and merge the pull request.
