---
title: Doing research at 18F
navtitle: Research guidelines
---

Research isn’t only usability testing. Testing our assumptions by actively engaging with the world around us is at the heart of how 18F works. We do research when we meet with stakeholders to learn about a project, when we investigate and compare tools and systems, and when we find members of the public to tell us about their experiences with the federal government. Research includes questionnaires and surveys, as well as analytics.

These guidelines should be familiar to anyone who's done research in the private sector or in academia. However, as public servants, we need to make sure that we're following a few basic principles. 

- **Respect for Persons**: We honor people's opinions and choices, only blocking actions that are obviously going to harm others. We make sure that anyone participating in our research is doing so of their own free will, and that they have enough information to make that decision responsibly.  
- **Beneficence**: We do our best to further people's best interests, and we avoid actions that might hurt them. This goal extends to society at large: before doing research, we need to consider whether what we're doing is in the best interests not just of individual participants but of the organizations and the country that we serve.  
- **Justice** We do our best to ensure that we compensate research participants in some way for the time and energy that they contribute. We don't have to pay money, but we do have to give something back to participants. Sometimes that means just saying "thank you" and letting them know how much their input has helped improve government services. Other times, it can mean making a card or handing out cookies or fruit. Participation incentives, which are common in the private sector, are more tricky here in government. So please ask one of the Research Guild leaders if you think they're necessary for a specific study.

While only scholarly researchers are strictly obligated to follow these principles, they are widely accepted in the United States as [a set of overaching values](http://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/index.html#xethical) guiding all investigations involving humans. 

These guidelines focus on two main tasks that support that goal: gaining participant consent and managing personally identifiable information (PII). 

## Getting informed consent 

"Informed consent" is a fancy way of saying "make sure that participants know what they're getting into and are okay with it." There's a lot to know about informed consent, but what we basically need to do is get clear, concrete statements from the participant about:

1. The types of information given to us from the participant during the activity that we may record (this could be legal name, direct quotations, photos, and so on).
2. How we can share that information (with no one ever, within the immediate project, and with the general public are the usual limits)

### Consent forms

* [Printable form](https://methods.18f.gov/assets/downloads/18FResearchParticipantConsentForm.docx). If you are going to use the printable form, offer your participant one copy and keep another for yourself. Then store the signed consent form somewhere secure, like a locked office cabinet.
* [Google Forms version](https://docs.google.com/forms/d/13ra4T0BVWbjSPBfOuNj8zVclU5J4TquX_tFbHUQWUpc/viewform). Copy this file and put it into your own project folder. At the moment, for some reason, the "move to folder" option appears to disabled in Google Forms, so you need to do this manually:

1. Copy file
2. Go to recent files in Drive and look for your copy  
3. Drag and drop to your project folder. 
4. Once you've got the form in your project folder, edit all the bits in <CAPITAL LETTERS> to apply to your project. It will automatically create it's own responses spreadsheet. Make sure to restrict access to the responses spreadsheet to ​*only the people who really need access on your team*​ which is probably only YOU. And then give out the link as needed. *Caveat: many federal employees will not be able to access Google Forms on their work computers.*

Feel free to adapt our form as needed to make sure that we are following the three principles above, but don't change any of the legal language without asking #legalstuff first. If your participants are likely not fully literate in English, consider having the form translated to the correct language or working out a process for verbal consent using a translator.

Consent forms often have Personally Identifiable Information (PII). Read more below for how to manage PII. 

## Managing Personally Identifiable Information (PII)

We work in the open, but we need to be mindful of discussing agency partners, collecting any PII, or accidentally disclosing PII. 

### What is PII? 

PII is any piece of data, singly or in combination, that can identify unique individuals. PII is defined contextually. So a full name given without context, such as "Elizabeth Goodman," may not necessarily be PII. It's a common name, after all. "Elizabeth from GSA" is not necessarily PII, either. There are a lot of people named Elizabeth who work for the GSA. But "Elizabeth at 18F" is _definitely_ PII. There's only one. For that reason, Social Security Numbers, Alien Registration Numbers, and driver's license numbers are always PII. Email addresses, phone numbers, and mailing addresses are sometimes PII, and presented in combination with a first name often become PII. Photos of people's faces are almost always PII, and that's why we always ask before taking photos, and we get explicit statements about we can share them. [Sensitive PII](https://pages.18f.gov/before-you-ship/security/pii/) is information which, if shared, could seriously harm or embarrass someone. Unique identifying numbers and biometric data is always sensitive: In general, combining:

- Citizenship or immigration status
- Ethnic or religious affiliation
- Medical information
- Sexual orientation
- Criminal history

with PII always makes that PII sensitive. However, determining what is and isn't PII, and what is or isn't sensitive PII can often require some reflection. 

Much of our research involves federal employees. When we are talking to federal employees (not contractors, and not vendors) about their work, they have, as Noah has said [elsewhere](/intro-to-18f-infrastructure/):

> practically no right to privacy in connection with your work. Anything you say or do — in an email, a phone call, a private GitHub repo, a Slack direct message, etc — can be monitored, recorded, and turned into a Federal record. 

As researchers, however, we need to follow the principle of beneficence. So just following the legal guidelines on PII isn't enough if you are collecting information that you know might harm or embarrass your participants if it became generally known, _whether or not those participants are federal employees_. Different agencies and organizations may have different levels of sensitivity and exposure concerns about types of personal information (identifying or not) you collect and how you use it. Attributing quotations with agency affiliation, for example, may be more sensitive than first name and photo. In those cases, the principle of beneficence demands that we think carefully about protecting participants before sharing working notes or finished reports, even if we have satisfied the law.   

### Storing PII and sharing research data

The best place to store PII is not to store it at all. The best place online, if you _must_ collect it, is in a locked-down document on Google Drive that is only accessible to the immediate research team. Using that document, link each participant to a pseudonym form (eg a codename or number such "PO1") Research reports and notes should contain only those pseudonyms. When it comes time to release reports outside of the immediate research team, refer back to your locked-down file for the correct sharing permissions. Our consent forms by default ask participants to approve sharing quotations with the public, but it's always possible for someone to edit or adapt the forms to give more options. If you have any paper documents with PII, they always go into a locked file cabinet. 

A good rule is to check with your project lead before sharing information outside the immediate team. What has been approved by the GSA may not be approved by partners. Check the Appendix in [Design page](/design/) for detailed information about who can see what, when. The social media, collaboration, and security classes in GSA's Online University can also be helpful in managing access. 

Be especially mindful as you post meeting notes or sidebar conversations during interviews in Slack channels. No PII should go into Slack channels unless your participant has explicitly consented to have PII shared with the general public. And even then, be aware of the potential level of visibility any information will have once you post it in Slack.

Carefully restricting access to personally identifiable information is a matter not just of people's right to respect but of their right to [privacy](https://methods.18f.gov/privacy/). 

**Bottom line: If you have questions about sharing information, just ask.** If you're not sure if you're collecting PII, you can ask on Slack in [#research](https://18f.slack.com/archives/research) to get other researchers' perspectives, and in [#legalstuff](https://18f.slack.com/archives/legalstuff) to track down relevant policy guidance. If you are not sure where the right place might be to store any given file, or what access permissions to grant, you can post a question to [#infrastructure](https://18f.slack.com/archives/infrastructure).

## Join the research guild!

The Guild talks in [#research](https://18f.slack.com/archives/research) and meets once a week to discuss the theory and practice of asking questions. The current guild leader is [Jeremy Canfield](https://18f.slack.com/team/jeremy).

