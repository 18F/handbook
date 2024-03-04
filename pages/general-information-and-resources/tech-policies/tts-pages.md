---
title: TTS Pages
questions:
  - tts-tech-operations
  - cg-pages
redirect_from:
  - /tts-pages/
---
# Authority to Use (ATU) Process

>This guide is for **GSA Employees** operating a GSA Website using [Cloud.gov Pages](https://pages.cloud.gov).

"TTS Pages" is **GSA's internal "System"** with an Authority to Operate (ATO) of [Cloud.gov's FEDRAMP Authorization](https://marketplace.fedramp.gov/products/F1607067912) for their [Cloud.gov Pages](https://pages.cloud.gov) service. As such, it adds the Security Controls around the Source Code and Contents for the Website (e.g. Github). It provides **GSA employees** with a fast and secure approach to getting a Web Presence for your projects/programs. This page defines the requirements for launching a new website at GSA using [Cloud.gov Pages](https://pages.cloud.gov)

>Follow this link for more information about using [Cloud.gov Pages](tools/pages)

## Launching a [Cloud.gov Pages](http://pages.cloud.gov) Website at GSA

- Identify a Federal GSA Employee as the **GSA Website Manager**

> Note: **GSA Website Manager** is defined here [GSA's Digital.gov Program](https://digital.gov/2023/03/24/who-is-your-website-manager/) 

- Turn on all [Github Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security) for the Site's Repository and `Enable`:
  - [CodeQL](https://docs.github.com/en/code-security/code-scanning)
  - [Dependabot](https://docs.github.com/en/code-security/dependabot/)
  - [Secret Scanning](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning)
- Designate (One) Github Team with `Admin` Access to the repository
- Designate (One or More) Github Team(s) with `Write` Access to the repository
- Submit a Pull Request to add your Repository to our Github Configuration Scanner to [GSA](https://github.com/GSA/.allstar/blob/main/allstar.yaml) or [GSA-TTS](https://github.com/GSA-TTS/.allstar/blob/main/allstar.yaml)
- Create a [`SECURITY.md` file](https://docs.github.com/en/code-security/getting-started/adding-a-security-policy-to-your-repository) - [Example](https://github.com/GSA-TTS/.allstar/blob/main/SECURITY.md)
- Follow GSA's [Digital Lifecycle Program](https://insite.gsa.gov/employee-resources/communications/websites/strategy-policy-and-standards/digital-lifecycle-program?term=DLP) for the Website
- Confirm your Website is listed on https://touchpoints.digital.gov
  - if not Submit a [new website request](https://touchpoints.app.cloud.gov/admin/websites/new)

## Authority to Use (ATU) Review
Submit an [Authority to Use (ATU) Request](https://github.com/GSA-TTS/tts-pages/issues/new?)

- Resolve any Critical or High security findings from Security Scanners

Once the ATU review is completed the **GSA Website Manager** will be sent an ATU Approval package for signature. The **GSA Website Manager** will be responsible for managing Security Findings over the lifecycle of the Website.

## Maintaining Approved Sites 
Sites hosted on TTS Pages are required to have their URLs scanned in accordance with CIO-IT Security-06-30: Managing Enterprise Cybersecurity Risk and GSA’s parameter for National Institute of Standards and Technology (NIST) Special Publication (SP) 800-53, control RA-5, Vulnerability Scanning. 

>This is performed after the ATU request is submitted

## Reassessment 
A Site’s ATU will have to be reassessed and an ATU reissued if the Site is found `NOT` to be in conformity with the requirements.

Conditions/events that may require a reassessment of the ATU include:
- New third party integrations not on the approved list are added.
- The data types or information presented on the site changes.
- A significant security incident occurs.
- There are deviations from the ATU maintenance requirements.

>This Determination is made by the TTS Pages System Owner `tts-tech-operations@gsa.gov`. Generally, this is done if security findings are not being addressed promptly.

**GSA Website Manager** will be notified, the following steps are only in the event that the **GSA Website Manager** is none responsive.

## Failure to Maintain Site - Site Removal
Sites that fail to maintain the ATU requirements will be issued a formal notice. The TTS Pages team may take steps to disable the site or remediate the vulnerabilities. ATU **GSA Website Manager** who hit certain triggers of overdue POA&Ms and/or failure to maintain alignment to ATU requirements will be required to provide a **Corrective Action Plan (CAP)** detailing the steps that will be taken to address the deficiencies. 

The CAP must be approved by the **GSA Website Manager**, System Owner, ISSM, and IST Director. Sites or **GSA Website Managers** who fail to respond to a CAP or complete approved actions will be removed from the ATO boundary, and will no longer be authorized. The removal process steps are further described below: 
- **Detailed Finding Review (DFR)** - **GSA Website Managers** will be issued a DFR upon failing to address a deficiency within the site or alignment with the ATU requirements.
- **Corrective Action Plan** - **GSA Website Managers** who fail to adequately respond or address a DFR will be issued a CAP request. 
The **GSA Website Manager** must provide a CAP to the System owner within 30 days of the CAP request. The CAP must detail how the team will address the deficiencies and the timeline for completion.

The **GSA Website Manager** CAP must be approved by the TTS Pages system owner, the ISSM, and IST Director.

## Site Disablement
**GSA Website Manager**who fail to respond to the CAP within the 30 day timeframe, or fail to provide an adequate CAP, or fail to comply with the provisions, timeline and duration of their CAP will have their site Disabled.
- Disabling a site consists of removing the site from the [Cloud.gov Pages Platform](https://pages.cloud.gov) which will result in a site being unreachable. 

## Site Removal
**GSA Website Manager** who fail to address deficiencies within 90 days of disablement will have their site removed from the TTS Pages ATO boundary and the site will be deleted. 
- Deleting a site removes the published site from the [Cloud.gov Pages Platform](https://pages.cloud.gov) and from the dashboards of all site users. This will bring the entire site offline and make it inaccessible for users.
- A Site Removal letter will be issued indicating that the site is no longer authorized to operate. 

## Incident Response
Follow [TTS Incident Response Plan](https://handbook.tts.gsa.gov/general-information-and-resources/tech-policies/security-incidents/)

## Contingency Plan
1. Sign up for [Cloud.gov Pages Status](https://cloudgov.statuspage.io/) notifications
1. Follow [Cloud.gov Contingency Plan](https://cloud.gov/docs/ops/contingency-plan/)