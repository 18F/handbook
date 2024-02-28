---
title: TTS Pages
questions:
  - tts-tech-operations
  - cg-pages
redirect_from:
  - /tts-pages/
---
# TTS Pages - Authority to Use (ATU) Process

"TTS Pages" is [GSA's Implementation of the Cloud.gov FEDRAMP Package](https://marketplace.fedramp.gov/products/F1607067912). As such it adds the Security Controls around the Source Code and Contents for the Website (e.g. Github). It provides TTS users with a fast and secure approach to getting a Web Presence for your projects/programs. 

## Incident Response
Follow [TTS Incident Response Plan](https://handbook.tts.gsa.gov/general-information-and-resources/tech-policies/security-incidents/)

## Contingency Plan
1. Sign up for [Cloud.gov Pages Status](https://cloudgov.statuspage.io/) notifications
1. Follow [Cloud.gov Contingency Plan](https://cloud.gov/docs/ops/contingency-plan/)

## Launching a New Static Website at TTS

- [ ] Determine who will serve as the `Website Manager`

>`Website Manager` is defined by the [GSA's Digital.gov Program](https://digital.gov/2023/03/24/who-is-your-website-manager/) 

- [ ] Turn on [Github Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security) for the Site's Repository and `Enable`:
    - [ ] CodeQL
    - [ ] Dependabot
    - [ ] Secret Scanning
- [ ] Designate (One) Github Team with `Admin` Access to the repository
- [ ] Designate (One or More) Github Team(s) with `Write` Access to the repository
- [ ] Submit a Pull Request to add the Github Repository for the Website to [GSA](https://github.com/GSA/.allstar/blob/main/allstar.yaml) or [GSA-TTS](https://github.com/GSA-TTS/.allstar/blob/main/allstar.yaml) .allstar Github Configuration Scanner)
- [ ] Complete [Digital Lifecycle Program](https://insite.gsa.gov/employee-resources/communications/websites/strategy-policy-and-standards/digital-lifecycle-program?term=DLP) Self-Assessment for the Website

## Authority to Use (ATU) Review
Submit an [Authority to Use (ATU) Request](https://github.com/GSA-TTS/tts-pages/issues/new?)

- [ ] Resolve any Critical or High security findings from Security Scanners
- [ ] Resolve any Web Scan findings provided by GSA Security Team

Once the review is completed the Site Manager will be sent their ATU Approval package via Docusign. The Site Manager will be responsible for managing Security Findings over the lifecycle of the Website.

POAMs and potentially a Correct Critical or High

## Maintaining Approved Sites 
Sites hosted on TTS Pages are required to have their URLs scanned in accordance with CIO-IT Security-06-30: Managing Enterprise Cybersecurity Risk and GSA’s parameter for National Institute of Standards and Technology (NIST) Special Publication (SP) 800-53, control RA-5, Vulnerability Scanning. 

>This is performed after the ATU request is submitted

## 	Reassessment 
A Site’s ATU will have to be reassessed and an ATU reissued if the Site is found `NOT` to be in conformity with the requirements within this guide.

Conditions/events that may require a reassessment and ATU reissuance include:
- New third party integrations not on the approved list are added.
- The data types or information presented on the site changes.
- A significant security incident occurs.
- There are deviations from the ATU maintenance requirements.

>This Determination is made by the TTS Pages System Owner `tts-tech-operations@gsa.gov`. Generally, this is done if security findings are not being addressed promptly.

Website Managers will be notified, the following steps are only in the event that the Website Manager is none responsive.

## Failure to Maintain Site - Site Removal
Sites that fail to maintain the ATU requirements will be issued a formal notice. The TTS Pages team may take steps to disable the site or remediate the vulnerabilities. ATU site owners who hit certain triggers of overdue POA&Ms and/or failure to maintain alignment to ATU requirements will be required to provide a **Corrective Action Plan (CAP)** addressing the plan to address the deficiencies. 

The CAP must be approved by the Site owner, System Owner, ISSM, and IST Director. Sites or Site owners who fail to respond to a CAP, or complete approved actions will be removed from the ATO boundary, and will no longer be authorized. The removal process steps are further described below: 
- **Detailed Finding Review (DFR)** - Site owners will be issued a DFR upon failing to address a deficiency within the site or alignment with the ATU requirements.
- **Corrective Action Plan** - Site Owners who fail to adequately respond or address a DFR, will be issued a CAP request. 
The Site Owner must provide a CAP to the System owner within 30 days of the CAP request. The CAP must detail how the team will address the deficiencies and the timeline for completion.

The Site Owners CAP must be approved by the TTS Pages system owner, the ISSM, and IST Director.

## Site Disablement
Site Owners who fail to respond to the CAP within the 30 day timeframe, or fail to provide an adequate CAP, or fail to comply with the provisions, timeline and duration of their CAP will have their site Disabled.
- Disabling a site consists of unpublishing the site within the Cloud.gov Pages Platform which will result in a site being unreachable. 

## Site Removal
Site Owners who fail to address deficiencies within 90 days of disablement will have their site removed from the TTS Pages ATO boundary and the site will be deleted. 
- Deleting a site removes the published site from TTS Pages servers and from the dashboards of all site users. This will bring the entire site offline and make it inaccessible for users.
- A Site Removal letter will be issued indicating that the site is no longer authorized to operate. 
