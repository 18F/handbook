---
title: Software
---

Are you interested in using a particular piece of software? Do the following, in order. If it’s software you know TTS uses already, skip to [Provisioning](#provisioning).

## Determine whether it needs to be approved

The first thing to know is whether the piece of software you want to use needs to be approved or not. A “web site”, for example, doesn’t need to be approved before using it - official clarification on this will be coming from the GSA CTO soon.

Per the [IT Standards policy](https://www.gsa.gov/directives-library/gsa-information-technology-it-standards-profile-21601f-chge-2-cio) (part 2a), “collaboration with another agency through software or cloud services which they use for managing non-GSA data (either data owned by that agency or public data) does not require security or [accessibility] review” by GSA.

Per the [IT Standards policy](https://www.gsa.gov/directives-library/gsa-information-technology-it-standards-profile-21601f-chge-2-cio) (part 2c), “Software libraries, application program interfaces, binaries...that can be installed without administrator-level access or are included as part of higher level packaged software (e.g., operating systems, Open Source Software and Commercial off-the shelf programs, etc.) are excepted and determined to be approved”.

If the software doesn’t need to be approved but you need a license, jump down to the [Provisioning](#provisioning) section. If you don’t need a license, you are good to go!

If it does need to be approved...

## Check existing status

...and find [alternatives](#alternatives) that may already be approved.

### IT Standards

Check if the software is listed in [the IT Standards list](https://ea.gsa.gov/#!/itstandards). You will need to be on the [GSA network](../networks/). Alternatively, you can find [an export of the data on GitHub](https://github.com/GSA/data/blob/master/enterprise-architecture/it-standards.csv), though note this may be slightly out-of-date.

#### Versions

Minor upgrades don’t require going through the software request process. Skip to [Provisioning](#provisioning), if necessary.

Major upgrades of already approved products will need to be submitted as requests, but will generally be approved. The IT Standards group will add it in Request Tracker and notify the Security team and present it as an informational brief to the TSC and CTO. They will then go through an expedited process.

#### Statuses

Here are what the different `Status`es mean:

- Approved-Preferred - GSA's preferred solution for a specific IT function (e.g., Document Mgmt). Unconstrained usage is allowed until a date to be determined by the TSC/CTO. You may request software with this status.
- Approved-Maintain - acceptable for use until a date to be determined by the TSC/CTO. You may request software with this status.
- Exception - the solution is not allowed for use other than under the predefined conditions resulting from the TSC/CTO decision. You may request software with this status.
- Denied - software is not allowed for use within GSA. You may not request software with this status.
- Proposed - a request has been submitted and is currently under review. You should wait for this software to complete final review before requesting it.
- Sunsetting - the Technology has reached end of life and will be moved to Denied status. You may not request software with this status.
- Pilot - the Technology is approved for only 'Pilot' purposes for limited duration. You may request software with this status.
- Not yet Submitted - Technology in use at GSA but has not been through the approval process yet. You may request software with this status.
- Grandfathered Exception - this is a recently added status recommended by CTO and Security. This status is used for technologies which are determined by CTO/TSC that they can be approved without going through the whole process. You may request software with this status.

Be sure to read the listed comments for the software as some items listed as Approved may only be usable through VDI. Skip to the [Provisioning](#provisioning) section.

### Chrome extensions

Use only extensions on [this list of OCSIO Approved extensions](https://docs.google.com/spreadsheets/d/178_jEmJgfjbIF4GCKPn0iSPrln-4B3AWBSxq3ivnW4Y/pub?hl=en_US&pli=1&hl=en_US&hl=en_US&single=true&gid=3&output=html&pli=1). If you'd like to request a Chrome extension, you can complete [this form to request an extension for review](https://docs.google.com/a/gsa.gov/forms/d/e/1FAIpQLSeviBt7bnriQz3iQRn1dUyg-8KUR7jRgG5eJbc7nHxa1D_ciw/viewform?pli=1).

### Pending requests

The software may already be going through the process. Search in [Salesforce Request Tracker](https://gsa.my.salesforce.com/a1Z?fcf=00B30000009TGJc) for any outstanding/existing tickets. These should show up in GEAR as `Proposed`, though there may be a delay.

### Alternatives

As you’re checking for availability of the software you want to use, also keep an eye out for alternatives that are approved (or in progress). Software review is laborious, so if there is another tool that will/could work, you are strongly encouraged to give it a try.

Feel free to continue requesting the original if the already-approved option doesn’t work for you. Make sure to include why any existing options won’t work for you in your request.

Procuring a specific application will generally only happen after Market Research has been performed to the level that will allow a Contracting Officer (CO) to draft a “determination” that no other application will satisfy the Government’s needs.

This “determination” process can take weeks, if not months, if you leave it until the acquisition phase. To make life easier for everyone, document your thought process and what you went through in terms of testing and review of the various available options. [Here's a great example.](https://docs.google.com/document/d/1VOwxKgykd2hEvqGbh907mSKPEtbwnykdtUAI7SYZqDY/edit)

## Pilot Software Requests

If you want to try out a software tool but aren’t sure if you want it to go through a full review yet, you may request to evaluate the software on a trial basis. This type of request is know as a Pilot. Pilot requests can be much faster to process, but there are several requirements it must meet in order to be considered for evaluation.

- Pilot software must never be on a production network or contain sensitive federal data
- The cost for a Pilot may not exceed $25k

Pilot requests require a Security review and will need to be approved by the TSC. If approved, GEAR will be updated to include the software information along with a status of Pilot. Approval for all Pilot software expires after 90 days. At the conclusion of the pilot, the requestor will need to provide to the CTO the following key outcomes:

- Determination of whether or not the requester believes that the piloted technology is acceptable and should be a candidate for full approval
- Path to attain full security, and Section 508 approval
- Evidence that all costs have been identified and budgeted within the requesting office and as required by other affected offices, to include out-year operations and maintenance

Follow the instructions in Submit for Approval and mention that you’re interested in testing the software as a Pilot where you provide your business justification in the form.

## Submit for approval

Once you have identified the software you would like, you will need to take some time to gather all the information needed to request it. This information includes reasons why the software you like would be necessary over alternatives, so documenting your software review process to create something [like this](https://docs.google.com/document/d/1VOwxKgykd2hEvqGbh907mSKPEtbwnykdtUAI7SYZqDY/edit#) would help make the acquisition package creation process much easier.

Fill out the new [Software Request form](https://gsa--c.na21.visual.force.com/apex/TechnologyRequestForm). Completing this form in its entirety will ensure that the the review team(s) have all of the required information, thus speeding up the review process. You will be contacted if more information is needed, and as it moves through the process.

If the product contains any type of desktop add-on that will be required for use, please note this in your initial request so that these components may be evaluated together.

Using our new Software Request form creates the Request Tracker (RT) ticket in Salesforce.  Once submitted the requester receives an automated email that includes the RT ticket number and a link to go into Salesforce and view their ticket.

You can ask in #infrastructure if you have any questions or want to check on the status. Once the request is in Salesforce, your best bet will be to ask questions in there.

### Details

Here’s what will happen behind the scenes:

1. 18F Infrastructure responds to the request
2. TTS: (via #infrastructure-leads) + OCTO prioritizes
3. Passes to the CTO’s office (Cindy A. Smith, in particular), who reaches out to the vendor
    1. [The email template(s)](https://docs.google.com/document/d/1haAhbPnE20W8ptJdZGIFjoQP-b2Xr7Yn3Ki-gwXzwgY/edit)

4. If vendor responds within two weeks and is game, continues. Otherwise, stops.
5. Cindy [submits the request in Salesforce](https://gsa--c.na21.visual.force.com/apex/TechnologyRequestForm)
6. Goes through normal IT Standards process
    1. In parallel:
        1. Legal
            - [Terms of Service compatibility](https://www.digitalgov.gov/resources/negotiated-terms-of-service-agreements/)

        2. 508
            - Only done when not a Pilot
            - Accessibility review can be conducted by GSA (theoretically), but ideally a [Voluntary Product Assessment Template (VPAT)](https://www.section508.gov/content/sell/vpat) is provided by the vendor

        3. Security

    2. Technology Steering Committee (TSC)
    3. CTO

7. Once a request is approved/rejected (can check [here](https://gsa.my.salesforce.com/a1Z?fcf=00B30000009TGJc)):
    1. It will be put in [the IT Standards list](https://ea.gsa.gov/EAWEB/#!/itstandards).

#### Legal

Some of these are GSA/government-wide policy, some are ones we’re (trying to) establish at the TTS level.

- If the service does not have a Privacy Policy, it will not be authorized.
- If the service does not have a Terms of Service, it will not be authorized.
- If the application has a previously [Negotiated Terms of Service](http://www.digitalgov.gov/resources/negotiated-terms-of-service-agreements/), it can be authorized.
- If the application has an "[indemnification clause](http://www.startuplawtalk.com/what-is-indemnification/)" in its Terms of Service (look for the words “indemnification”, “indemnify”, “hold harmless”, or “defend”):
  - If we are not paying for the application, it will not be authorized.
  - If we are paying for the application, it can be authorized.

- If the application is owned by a foreign entity, and it has a “governing law” or “jurisdiction” clause in its Terms of Service, that either puts the current relationship or any future disagreements or suits outside the legal boundaries of the United States:
  - If we are not paying for the application, it will not be authorized.
  - If we are paying for the application through a US company, it can be authorized.

Ask in [#legalstuff](https://18f.slack.com/messages/legalstuff/) if you need help with any of the above. There’s an experiment to automate these checks in the [legalese](https://github.com/18F/legalese) repository.

## Provisioning

_This section is TTS-specific._

Send an email to [tts-software@gsa.gov](mailto:tts-software@gsa.gov) (goes to TTS Acquisitions) saying that the software is approved for use, and that you need a license/access. They will direct you to what you should do next.

### Details

Here’s what will happen behind the scenes:

#### Software we already own

Software, domains, and SSLs currently managed by OPP are being migrated into the [TTS software library](https://docs.google.com/spreadsheets/d/1KhPN9gmDJYjp0sqQA3_OFto45MzlqGkb1R2YDKedpC8/edit#gid=164775379) over the next month. New requests for software that is in the library may be made via email to [tts-software@gsa.gov](mailto:tts-software@gsa.gov) or Slack message in #acquisition. A license for software currently in the TTS Software Library will generally be provided to you within 1-2 business days.

#### Software we need to acquire more of

If your request is under $10,000, the Acquisition team may direct you to submit [a simple purchase request in C2](https://requests.18f.gov/gsa18f/procurements/new).

Once you have filled out and submitted the requested information, please attach an email from your director or portfolio lead approving the request. Upon completion of your submission, please add Anthony Hong as an observer to the C2 request who will follow up with you directly about the purchase. At the same time, Jackie Xu will review the request for funds availability, and then your request will be routed to the TTS purchase team for review and purchase.

The purchase team will review the request and verify that technical approval (ATO) has been secured (and the software has undergone FITARA review where applicable or currently exists in the [GSA IT Standards Profile](https://ea.gsa.gov/#!/itstandards)) before making the purchase. If the software already exists in the GSA IT Standards Profile, the timeframe between request and purchase will be about one week. HOWEVER, most software requests not in the Profile will require significant additional review which may take several months. GSA IT is working to streamline this.

Final approval for any license issuance or purchase lies with the Operations Director and the management team.

See also: the [Software Request Chart](https://app.mural.ly/t/gsa6/m/gsa6/1472757223327/2c42a9c9a53f4e07fd10eda6f01df6016645c24f) showing the process.

##### Above $10,000 purchase

If Acquisitions determines that the purchase of the software must go through the acquisition process, it may take a longer time to process the request. You will be directed to go through the acquisition process for buying software over $10,000 by starting with this [Acq Intake Form](https://docs.google.com/forms/d/e/1FAIpQLSeGoLWQ_6yEmxlrHuztlZWH6sX3t_0J0PPnzZxhwlK6nq1KoQ/viewform). These purchases are tracked in the [TTS Internal Buys Trello board](https://trello.com/b/H5H156mO/tts-internal-buys-board).

## Integrations

Does the software integrate with any of the following, beyond basic scopes (things like email and name)? Follow the following guides:

- [GitHub](https://docs.google.com/document/d/1HcLbl37j3VGoiphtUb492MWtFGCGIf1aRiuvdDlTgYE/edit)
- [Slack](../slack/#integrations)
- [Google OAuth](https://insite.gsa.gov/portal/content/526805)
- [Google Apps Scripts](../google-drive/#google-apps-scripts)
- Trello Add-ons

This includes OAuth, webhooks, etc.

## Post-Pilot

Once a pilot is complete and has been selected as the preferred software, then a new ServiceNow ticket should be submitted. The business justification should include that it was a pilot and the reason selected.
