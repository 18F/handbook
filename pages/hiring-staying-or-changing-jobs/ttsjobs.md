---
title: TTSJobs
tags:
  - TTS Jobs
  - tts jobs
  - TTSJobs
  - ttsjobs
  - details
  - Details
  - jobs
  - Jobs
  - job
  - Promotion
  - Promotions
  - promotion
  - promotions
  - staffing plan
  - Staffing Plan
  - staffing plans
redirect_from:
  - /ttsjobs/
---
This page serves as a central listing for:

* TTS Internal competitions (e.g. directors, supervisors) and developmental
  opportunities (e.g. details, leads) within TTS
* Hiring actions using the Excepted Service version of the Merit Promotion
  Process
* Links to USAJobs Announcements for hiring actions using the Competitive
  Service (Career) Merit Promotion Process
* Links to Excepted Service job announcements posted on the TTS Join site
* Links to external technology career opportunities with federal, state, and
  local government agencies

If you’d like to be notified when new opportunities are listed on this page,
please join the {% slack_channel "tts-jobs" %} (for TTS opportunities) and
{% slack_channel "wg-govcareer" %} (for opportunities with other federal
agencies) Slack channels.

If you know an awesome person for a TTS role or just know a great person that
you'd like to recommend in general, please check out the \[referring a
person]({% page "/office-of-operations/talent/#referring-a-person" %}) process.

## Announcements

### Opportunities open to the public

{% assign jobs = jobs | openJobs %} {% if jobs.length > 0 %}
{% for post in jobs %}{% include "job-posting.md" post:post %}
{% endfor %}{% else %}We will post new opportunities as they become available.
{% endif %}

### Internal only opportunities

[T﻿ribal Nations, American Indians and Alaska Natives (AI/AN) Project Support Detail](https://docs.google.com/document/d/1f1O3k36ZcaR-KSdfeGs01NaYZOa09lAx2tr7RKEDILw/edit)- Open Friday, March 3rd through Friday, March 10th 

[Login Deputy Director Detail](https://docs.google.com/document/d/14eiXe_uTNS34TLo6ba-psqJf6YhX21ny473qNJo2Xg0/edit#)- Open Tuesday, March 7th through Tuesday, March 14th  

## Opportunities with partners

**United States Digital Service (USDS)**

For any TTS staff interested in learning what it’s like to transition from TTS
to USDS or just what it's like to work at USDS in general, a few of the TTS
alums have offered to make themselves available for some informational
discussions. If you’re interested in learning more, simply fill out this
[USDS Informational Meeting Request form](https://docs.google.com/forms/d/e/1FAIpQLSfzbkhF6ahHv8-mu3BOpl6l7qg_kVyHuGUpDMcA-cPW60BfoQ/viewform?usp=sf_link)
and someone from USDS will reach out to get something set up.

Be sure to stay informed of current job postings relevant to technology
transformation in TTS and with other agencies by joining the
{% slack_channel "tts-jobs" %} Slack channel. If you want to be notified about
opportunities with other federal agencies please join the
{% slack_channel "wg-govcareer" %} Slack channel. We encourage TTS staff to post
external federal career opportunities on the {% slack_channel "wg-govcareer" %}
Slack channel to help others be aware of permanent, career opportunities. TTS
staff can post opportunities advertised by our federal partners to help them
attract the engineering, product management, and leadership talent they may
require to further facilitate their technical transformation.

**Various Federal Agencies**

- - -

### Still have questions?

**Have questions about an announcement listed?** Please reach out to the Hiring
PoC listed on the announcement

**General questions** Please reach out to TTS Talent
{% slack_channel "tts-jobs" "on Slack" %} or
[email](mailto:tts-talentteam@gsa.gov) for information regarding hiring.