---
title: Google Drive
redirect_from:
  - /google-docs/
---

_a.k.a. G Suite_

Google Drive is a cloud storage and file backup system. We use Google Drive to keep track of our project work and templates as well as collaborate on documents, presentations, and spreadsheets. You don't need to install anything to use our Google Drive.

## Permissions and sharing

* Everything in Google Drive can be FOIA’ed.
* You can share files with the entire TTS team by adding <mailto:tts@gsa.gov>, <mailto:opp-team@gsa.gov>, or <mailto:18f-team@gsa.gov> in the Share menu.
* You can share files with any GSA employee — but don't default to sharing with _all_ of GSA. GSA will change your permissions if they are too open, and files that contain sensitive information will also be blocked via Cloudlock.
* Disable the notification email if you don’t wish to bring it to the team’s attention right away.
* You can create and share whole folders; new files in a folder auto-inherit the sharing settings.
* Most business units have a team folder in Drive to faciliate collaboration.
* You can't publish files to the web or share them with the public, even just to view; only GSA or specific users.
* If another agency employs Google Docs, documents can be shared directly with them.
* If the agency does not currently use Google Drive, agency staff may be able to create a google account using their work email [by using this form](https://accounts.google.com/SignUpWithoutGmail?hl=en). Staff may alternatively be able to create a GSA Affiliated Customer Account (GACA). This will allow you to share Drive files with them. Note that GACA accounts are intended to allow us to share Drive files with other agency staff, not for them to create those files themselves. Any files they create in Drive through their GACA accounts are NOT within the boundaries of the FedRamp ATO. You should refer to these [internal instructions for setting up a GACA account](https://insite.gsa.gov/portal/content/517805?term=gaca) and send agency staff [these PDF instructions](https://docs.google.com/document/d/19MDy1K6FfHNEvVvQ8Wgd9zmpyjpFPvshr3SHWARYKo8/). If Staff aren't able to access [this form](https://accounts.google.com/SignUpWithoutGmail?hl=en), that likely means their agency expressly blocks Google Drive. 
* If you create a Google form that is intended for employees of another agency, keep in mind that in a few agencies, Google Forms are blocked. Among the largest agencies that are known to currently block Forms are: Department of Homeland Security (DHS), Veterans Affairs (VA), and Executive Office of the President (EOP). In the case that you intend to involve those agencies in an initiative where a Google Form is being used, it's smart to create a version in another format, like a Word doc or fillable PDF.

## Usage

* **Abide by [the TTS Code of Conduct]({{site.baseurl}}/code-of-conduct).**  If you see anyone violating our Code of Conduct, see the reporting section.
* When you’re at work, make sure you're on the 18F Google Drive and not your private account, especially when working with outside partners. Official 18F documents must live on the GSA/18F shared drive for compliance reasons.
* Visit [the 18F brand guide](https://brand.18f.gov/templates/) for default 18F document styles/templates.

### Google Drive Tips

- The Shift-Z command allows you to add folders to "My Drive" (shortcut) and to other folders at the same time - which is great for organizing documents in different ways.
- **Finding recent documents** To find recently opened documents, use [this link](https://drive.google.com/drive/recent), which you can find by clicking on the "AZ" button and selecting "Last opened by me."
-  To find and access things you use frequently, you can ["Add to My Drive"](https://support.google.com/drive/answer/2375057?hl=en) or star the folder or document.
-  Searching in Drive goes through all of the files that have been shared with you.
- If a folder looks empty, try refreshing your browser a few times. :shrug:

### Google Form Tips
Google forms handle a variety of use cases like account requests, sign ups, contact us, feedback, bug reporting, support requests, data calls, and project submittals.

* Link or embed you form on a government website using [iframes](https://www.w3schools.com/tags/tag_iframe.asp).
* Let users know upfront how much time it will take to fill out your form.
* Limit your form to 5-10 fields or 2-3 sections when possible to keep user burden low.
* Reassure users your form is work-related by [using the organization's color scheme and logo](https://docs.google.com/forms/d/1xjiJCyJNFzWTieg8yUamntPeznADyfn8ZgIwHnM8PBg/viewform?edit_requested=true).
* You can [limit your form to users with a .gov or .mil email address](https://docs.google.com/forms/d/e/1FAIpQLSePimoF0RkiCP62BSIL_yj0yMXEUePNJ9AabPJqq1Xzbp_GVg/viewform); see how in [these text validation instructions](https://support.google.com/docs/answer/3378864?hl=en).
* There's a lot you can do with [Google Form's native capabilities](https://support.google.com/a/users/answer/9302965?hl=en) so try to avoid adding backend logic. If you need more, then [request permission here](https://docs.google.com/a/gsa.gov/forms/d/e/1FAIpQLSdOCtxCaSKJC87CedZW1FKGspMvnRzyOauMvKIOfrSV7PBdag/viewform) to use [Google scripts](https://developers.google.com/apps-script/).
* Create a form response spreadsheet before publishing your form, to ensure your data is in the format you need.
* If you want users to select one response to your form question, format your question as a drop down rather than multiple choice, and your data will already be categorized for you in the response spreadsheet.
* Avoid asking users for data you can otherwise match or derive from an existing field(s).
* Set up email notifications to trigger by new form submissions or edits to the response spreadsheet, to cut down your response time.

## Security

If you're using a non-Google service and it requests access to your GSA Google Drive (such as to enable an integration feature), please deny that request. In other words, don't grant OAuth access to GSA Google Drive. [Here's a blog post on this policy](https://18f.gsa.gov/2016/05/13/how-18f-handles-information-security-and-third-party-applications/). To ensure no access is enabled, you can check [Google's list of "Apps connected to your account"](https://security.google.com/settings/security/permissions), expand each item, and look for the Google Drive icon. Here's an example of what an OAuth access request might look like:

![don't click "allow"]({{site.baseurl}}/images/google-drive/google-drive-oauth.png)

## Local editing

[Drive File Stream](https://support.google.com/drive/answer/7329379?hl=en) can be used for local editing of files on Drive, though offline editing is not yet supported for Macs at GSA. [InSite page.](https://insite.gsa.gov/employee-resources/information-technology/do-it-yourself-self-help/google-g-suite-apps/google-drive-and-shared-drive?term=drive%20file%20stream#Drive%20File%20Stream)

---

## Still have questions?

Ask in Slack: [#questions](https://gsa-tts.slack.com/messages/questions), [#teamops](https://gsa-tts.slack.com/messages/teamops), [#it-issues](https://gsa-tts.slack.com/messages/it-issues)
