---
title: Google Drive
---

Google Drive is a cloud storage and file backup system. We keep a lot of documentation on Google Drive, though we’re slowly switching material over to the Handbook.


## Setup

Because Google Drive is a web application, you don't need to install anything.

## Usage
We use Google Drive to keep track of documentation for different projects:

* The [18F Team Folder](https://drive.google.com/a/gsa.gov/folderview?id=0B84F26FpUP0lR1B2VVNGSi1MMVk&usp=sharing_eid) contains all of our Google Drive. If you haven't yet, click the option to ["Add to My Drive"](https://support.google.com/drive/answer/2375057?hl=en) for this folder.

* Everything in Google Drive can be FOIA’ed.

* Blog drafts are written in Google Drive in the Blog folder. [Instructions are here](https://github.com/18F/blog-drafts/blob/master/README.md).

* Every GSA employee can view and access docs. We cannot share Google Docs with other agencies. If you’re working with another agency, ask in #teamops or #it-issues for ways to share documents with folks at other agencies.

* Offline syncing for Google Drive/Docs has been disabled for GSA.

## Document permissions
The main way we collaborate on documents is by adding them to the 18F Team Folder in a relevant sub-folder. (You can make a new sub-folder if it wouldn't fit into the existing folders.) This automatically gives the document the right permissions and makes it easy for the rest of the team to find.

If you're working outside the 18F Team Folder, make sure you change the permission on new documents so that your collaborators can view and edit them.

## Security

If you're using a non-Google service and it requests access to your GSA Google Drive (such as to enable an integration feature), please deny that request. In other words, don't grant OAuth access to GSA Google Drive. Here's an example of what this kind of request might look like:

![don't click "allow"]({{ site.baseurl }}/images/google-drive/google-drive-oauth.png)

We have more explanation of why this is our policy in [this blog post about how we handle information security and third party applications](https://18f.gsa.gov/2016/05/13/how-18f-handles-information-security-and-third-party-applications/).

To be sure you haven't enabled this access accidentally in the past, you can check [Google's list of "Apps connected to your account"](https://security.google.com/settings/security/permissions), expand each item, and look for the Google Drive icon.

## Tips

- **Finding recent documents** To find recently documents, use [this link](https://drive.google.com/drive/recent), which you can find by clicking on the "AZ" button and selecting "Last opened by me."

---

#### Still have questions?

Ask in Slack: [#questions](https://18f.slack.com/messages/questions), [#teamops](https://18f.slack.com/messages/teamops), [#it-issues](https://18f.slack.com/messages/it-issues)
