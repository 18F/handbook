---
title: Software Under $10,000
questions:
  - infrastructure
  - tts-software@gsa.gov
redirect_from:
  - /software/
---

Do you need software to do your job or make sure TTS is running smoothly? Follow
the steps below to access software we own or request a software purchase of
under \$10,000.

If you need to purchase more expensive software, see [procurements over
$10,000]({% page "/procurements-over-10000/" %}).

{% include "software-warning.html" %}

Almost all software in use at GSA needs to be approved through the
[GSA IT Standards process](https://sites.google.com/a/gsa.gov/it_standards/it-standards).
There are a few exceptions:

- Software-as-a-Service (SaaS). Where federal information is _not_ being stored
  by the third party.
- Open source software (e.g. dependencies and libraries) if it meets the
  following criteria:
  - When it is used as a component within a TTS system and is assessed as part
    of its System Security Plan (SSP), and is thereby covered by its
    Authorization to Operate (ATO).
  - Free and open source development packages (e.g. brew, npm packages, ruby
    gems, python, or other dependencies, etc.)
  - In general, open source development libraries are exempt from IT Standards
    review. See
    [GSA’s IT Standards review process](https://sites.google.com/a/gsa.gov/it_standards/software-approvals#h.eubg8a2e9b5)
    for more details.

If the software you are looking for is not one of the above, you will need to
determine if it is already approved for use at GSA, or if there is a similar
software product already approved that offers the same functionality.

Please note: In the past, the Tech Portfolio team had a major role in procuring
software for programs, but the team is no longer able to provide this service
due to staff shortage.

It is ultimately the program’s responsibility to work with the software vendor
to determine whether or not they will comply with the IT Security requirements
set by GSA prior to requesting software. Getting a vendor's upfront commitment
to work with our Security team in “good faith and in a timely manner” will be
critical to the approval process.

Search the GSA IT Standards list in the
[GSA Enterprise Architecture Analytics and Reporting (GEAR)](https://ea.gsa.gov/#!/itstandards)
(requires VPN) to check if software is approved for use at GSA. You can also
search for similar software already approved in GEAR if it meets most of your
needs.

## Software already approved in [GEAR](https://ea.gsa.gov/#!/itstandards)

Review the following if the software has been listed as approved in GEAR.

#### For Desktop software

Step 1 - Search for the software in the
[TTS Handbook](https://search.usa.gov/search?utf8=%E2%9C%93&affiliate=tts-handbook)
to see if there are instructions or guidance already available for installing
the software.

Step 2 - Search the GSA Self Service Application pre-installed on your
Government issued device.

- If the software you are looking for is available in the Self Service
  Application, then you can directly install it yourself.

Step 3 - If it is not located in the TTS Handbook or the GSA Self Service
application, submit a service desk request to have it installed:
[Start a Software request here](https://gsa.servicenowservices.com/nav_to.do?uri=%2Fsp%3Fid%3Dkb_article%26sys_id%3D18833608db0e3b040e1d368d7c9619fb).

#### For Software-as-a-Service (SaaS)

If the software is already approved, there is no guarantee that licenses are
available for your use/deployment. If GSA does not have any available licenses
for this software, you and your supervisor will receive an email informing you
that this software will need to be purchased before it can be used.

If you cannot find the software you are looking for on that list and you believe
it is approved/in use at GSA, or if you would like to inquire about alternative
software that is approved that may have the functionality you are looking for,
please contact the IT Service Desk itservicedesk@gsa.gov for assistance.

Also reach out in #infrastructure in Slack or by emailing tts-software@gsa.gov
for more information about getting access to SaaS products currently in use
across TTS.

## Software not yet approved or listed in GEAR

#### Step 1: Submit the software for an IT Standards review

If the software is not already approved, submit a
[Software Review Request (SRR)](https://gsa.servicenowservices.com/sp?id=sc_cat_item&sys_id=e32824291bd234d47adac808624bcb44&sysparm_category=bd9a5672f8087000ce3de67bda527122&catalog_id=-1)
to have it reviewed by GSA IT.

If your request is for a new technology/software that is not yet approved for
use in GSA, please also review the guidance provided in
[GSA’s IT Standards review process](https://sites.google.com/a/gsa.gov/it_standards/it-standards).

Once all analysis has been completed, you will receive an email from ServiceNow
regarding your request. You will receive justification for why your request for
the tool was granted an Authorization to Operate (ATO) or not. Once an ATO has
been granted, the tool will be listed in GEAR.

#### Step 2: Submit the TTS Micropurchase Request

If there will be a cost associated with the software you are submitting for IT
Standards review, you will need to also
[submit a Micropurchase request](https://docs.google.com/forms/d/e/1FAIpQLSd-GoOE9xWWfJvdZNRP3SE7mj5ysI_RfM8brxdG8YpyJV9yKA/viewform),
ideally at the same time.

The Micropurchase team reviews the status of all requests and will coordinate
directly with the IT Standard’s team. The [Federal Information Technology
Acquisition Reform Act
(FITARA)]({% page "/general-information-and-resources/tech-policies/fitara/" %})
review will also start during the Micropurchase request process.

## Considerations

- Vendor compliance and cooperation with GSA-IT staff is needed in order to
  grant the necessary ATO. If the vendor chooses not to provide required
  material or information requested by GSA-IT, the tool cannot be approved for
  use within GSA.
- When a LiSaaS Authorization to Operate (ATO) is granted, it is limited to one
  year only. If the software requester wishes to continue using the software
  beyond one year, the software requester must ensure the vendor will work
  towards getting FedRAMP authorization. If the vendor does not wish to pursue
  FedRAMP authorization, or if the software does not receive FedRAMP
  authorization, the tool will no longer be approved for use within GSA.

## Links & policies

- [Chrome extensions](https://insite.gsa.gov/topics/information-technology/assistance-and-help-desks/service-catalog/it-service-catalog-google-chrome-extension-request?term=google%20extensions)
- [GitHub integrations]({% page "/tools/github/#rules" %})
- [Google Cloud / G Suite services, including APIs](https://docs.google.com/spreadsheets/d/1h0338doPlHIfslS7Huypzs7TlJTFVw_-98oPnum0Cvo/edit#gid=467863101)
- [Slack integrations]({% page "/tools/slack/integrations/" %})
- [GSA Information Technology (IT) Standards Profile](<https://www.gsa.gov/directive/gsa-information-technology-(it)-standards-profile>)
- [GSA IT Security Policies](https://www.gsa.gov/policy-regulations/policy/information-integrity-and-access/gsa-it-security-policies)
