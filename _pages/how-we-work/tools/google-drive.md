---
title: Google Drive
---

Google Drive is a cloud storage and file backup system. We keep a lot of documentation, project work, and templates in Google Drive.

## Setup

Because Google Drive is a web application, you don't need to install anything.

## Usage

We use Google Drive to keep track of our work and collaborate on documents, presentations, and spreadsheets.

* **Abide by [the TTS Code of Conduct]({{site.baseurl}}/code-of-conduct).**  If you see anyone violating our Code of Conduct, see the reporting section.
* When you’re at work, make sure you're on the 18F Google Drive and not your private account, especially when working with outside partners. Official 18F documents must live on the GSA/18F shared drive for compliance reasons.
* Everything in Google Drive can be FOIA’ed.
* Offline syncing for Google Drive/Docs has been disabled for GSA.

### 18F Drive specifics

* Visit [the 18F brand guide](https://brand.18f.gov/templates/) for default 18F document styles/templates.

* 18F blog drafts are written in Google Drive in the Blog folder. [Instructions are here](https://github.com/18F/blog-drafts/blob/master/README.md).

* For 18F folks, the main way we collaborate on documents is by adding them to the [18F Team Folder](https://drive.google.com/drive/u/0/folders/0B84F26FpUP0lR1B2VVNGSi1MMVk) in a relevant sub-folder. (You can make a new sub-folder if it wouldn't fit into the existing folders.) This automatically gives the document the right permissions and makes it easy for the rest of the team to find.

## Permissions and sharing

Make sure you set the permissions on new documents so that the appropriate people can view and edit them.

* Grant editing or commenting access to the entire team by adding <mailto:tts@gsa.gov>, <mailto:opp-team@gsa.gov>, or <mailto:18f-team@gsa.gov> in the Share menu. Disable the notification email if you don’t wish to bring it to the team’s attention right away. (You can also create and share whole folders; new files in a folder auto-inherit the sharing settings.)
* You can share documents with any GSA employee — but don't default to sharing with _all_ of GSA. GSA will change your permissions if they are too open, and files that contain sensitive information will also be blocked via Cloudlock.

* You can&rsquo;t publish docs to the web. You can&rsquo;t share docs with the public, only GSA or specific users. Even just to view.

* If another agency employs Google Docs, documents can be shared directly with them.

* If the agency does not use Google Docs, [here are approved instructions for sharing documents with them](https://insite.gsa.gov/portal/content/517805). Agency staff can also create a google account using their work email [by using this form](https://accounts.google.com/SignUpWithoutGmail?hl=en) or creating a [GSA Affiliated Customer Account (GACA)](https://insite.gsa.gov/portal/content/517805?term=gaca). Ask in [#teamops](https://gsa-tts.slack.com/messages/teamops) or [#it-issues](https://gsa-tts.slack.com/messages/it-issues) if you need help.

### Google Forms

If you create a Google form that is intended for employees of another agency, keep in mind that in a few agencies, Google Forms are blocked. Among the largest agencies that are known to currently block Forms are: DHS, VA, and EOP. In the case that you intend to involve those agencies in an initiative where a Google Form is being used, it's smart to create a version in another format, like a Word doc or fillable PDF.

## Security

If you're using a non-Google service and it requests access to your GSA Google Drive (such as to enable an integration feature), please deny that request. In other words, don't grant OAuth access to GSA Google Drive. Here's an example of what this kind of request might look like:

![don't click "allow"]({{ site.baseurl }}/images/google-drive/google-drive-oauth.png)

We have more explanation of why this is our policy in [this blog post about how we handle information security and third party applications](https://18f.gsa.gov/2016/05/13/how-18f-handles-information-security-and-third-party-applications/).

To be sure you haven't enabled this access accidentally in the past, you can check [Google's list of "Apps connected to your account"](https://security.google.com/settings/security/permissions), expand each item, and look for the Google Drive icon.

## Google Apps Scripts

To use a [Google Apps Script](https://developers.google.com/apps-script/), please fill out [this form](https://docs.google.com/a/gsa.gov/forms/d/e/1FAIpQLSdOCtxCaSKJC87CedZW1FKGspMvnRzyOauMvKIOfrSV7PBdag/viewform).

## Tips

- The Shift-Z command allows you to add folders to "My Drive" (shortcut) and to other folders at the same time - which is great for organizing documents in different ways.
- **Finding recent documents** To find recently documents, use [this link](https://drive.google.com/drive/recent), which you can find by clicking on the "AZ" button and selecting "Last opened by me."
-  To find and access things you use frequently, you can ["Add to My Drive"](https://support.google.com/drive/answer/2375057?hl=en) or star the folder or document.
-  Searching in Drive goes through all of the files that have been shared with you.
- If a folder looks empty, try refreshing your browser a few times. :shrug:

---

## Still have questions?

Ask in Slack: [#questions](https://gsa-tts.slack.com/messages/questions), [#teamops](https://gsa-tts.slack.com/messages/teamops), [#it-issues](https://gsa-tts.slack.com/messages/it-issues)
