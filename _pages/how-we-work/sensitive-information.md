---
title: Sensitive information
---

Here's what you need to know about sensitive information at TTS.

## What is considered sensitive?

To learn what information we consider sensitive, see [our Open Source Policy practices guide](https://github.com/18F/open-source-policy/blob/master/practice.md#protecting-sensitive-information).

## Tools

TTS offers a few different tools for protecting sensitive information. As you learned in your Security Awareness and Privacy training in [GSA Online University (OLU)](https://gsaolu.gsa.gov), only share sensitive information with the people who absolutely need it and are authorized to see it.

### Git Seekret

To prevent committing sensitive data to your Git repository, install
`git-seekrets` and pre-commit hooks. Please install the `git-seekrets` binary,
which prevents the committing of certain sensitive information to your Git
repository. Examples include environment variables and private configuration data.

Refer to [the official installation guide for Git Seekrets](https://github.com/18F/laptop#want-to-install-just-git-seekret). You can use the installed binary with either the command-line or with the GitHub Desktop interface.

Git Seekret does verification of the current files that will be committed to your repository using the git `precommit-hook`. This runs for every commit and will not allow you to commit your changes if any secrets are found.

To contribute regular-expressions to match new rules, [see the documentation](https://github.com/18F/laptop#git-seekret).

### Google Drive

You can use [GSA Google Drive](../google-drive/) to share sensitive files, spreadsheets, and documents. This includes personally identifiable information (PII) of either federal staff or the public, but it *does not* include classified information of any kind. If you're handling PII, be absolutely sure you are only sharing Drive files with GSA staff and that those staff members have a direct need for the information.

### OMB MAX

You can use [OMB MAX](https://max.omb.gov/) to share sensitive files (in appropriate "workspaces" within MAX). We typically use MAX for working with partners who don't have access to — or who don't feel comfortable putting the information in — Google Drive. Some workspaces in MAX are available to private organizations (for example, cloud service providers in the FedRAMP workspaces) and many other government agencies. Anyone with a `@gsa.gov` email can self-register on [Max.gov](https://portal.max.gov/portal/home); register your HSPD-12/PIV card or set up 2-factor authentication via SMS. Max.gov document sharing uses [Confluence](https://www.atlassian.com/software/confluence) so you may need to read Max.gov's documentation on how to manage permissions and upload documents.

Be sure you know who you need to share with before posting. Only .gov/.mil/.fed.us users can self-register to Max.gov; other email domains can be individually granted access, but you'll have to personally sponser them by making a request to MAXsupport@omb.eop.gov.

### Cloud.gov

You can create an S3 service instance on cloud.gov and issue credentials for partners to access it. See [interacting with your S3 bucket](https://cloud.gov/docs/services/s3/#interacting-with-your-s3-bucket-from-outside-cloud-gov).

### Password-protected file

Follow the linked instructions to password-protect a:

* [PDF](https://support.apple.com/guide/preview/password-protect-a-pdf-prvw587dd90f/mac)
* [ZIP](http://osxdaily.com/2012/01/07/set-zip-password-mac-os-x/) (which can be a folder full of files)

Send the encrypted file and password to the recipient separately, with the latter ideally through something ephemeral like a phone call.
