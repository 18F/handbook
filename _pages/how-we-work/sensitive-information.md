---
title: Sensitive information
questions:
  - questions
---

Here's what you need to know about sensitive information at TTS.

## What is considered sensitive?

Anything that would make our systems vulnerable or would impact the privacy of others if it fell into the wrong hands. To learn what information we consider sensitive, see [our Open Source Policy practices guide](https://github.com/18F/open-source-policy/blob/master/practice.md#protecting-sensitive-information). See also: [the GSA Controlled Unclassified Information (CUI) Guide](https://insite.gsa.gov/employee-resources/information-technology/security-and-privacy/controlled-unclassified-information-cui/cui-guide).

## Tools
TTS offers a few different tools for protecting sensitive information. As you learned in your Security Awareness and Privacy training in [GSA Online University (OLU)](https://gsaolu.gsa.gov), only share sensitive information with the people who absolutely need it and are authorized to see it.

### Git secrets

To prevent committing sensitive data to your Git repository, install [Caulking](https://github.com/cloud-gov/caulking).

### Google Drive

You can use [GSA Google Drive](../google-drive/) to share sensitive files, spreadsheets, and documents. This includes personally identifiable information (PII) of either federal staff or the public, but it _does not_ include classified information of any kind. If you're handling PII, be absolutely sure you are only sharing Drive files with GSA staff and that those staff members have a direct need for the information.

### OMB MAX

You can use [OMB MAX](https://max.omb.gov/) to share sensitive files (in appropriate "workspaces" within MAX). We typically use MAX for working with partners who don't have access to — or who don't feel comfortable putting the information in — Google Drive. Some workspaces in MAX are available to private organizations (for example, cloud service providers in the FedRAMP workspaces) and many other government agencies. Anyone with a `@gsa.gov` email can self-register on [Max.gov](https://portal.max.gov/portal/home); register your HSPD-12/PIV card or set up 2-factor authentication via SMS. Max.gov document sharing uses [Confluence](https://www.atlassian.com/software/confluence) so you may need to read Max.gov's documentation on how to manage permissions and upload documents.

Be sure you know who you need to share with before posting. Only .gov/.mil/.fed.us users can self-register to Max.gov; other email domains can be individually granted access, but you'll have to personally sponser them by making a request to MAXsupport@omb.eop.gov.

### Cloud.gov

You can create an S3 service instance on cloud.gov and issue credentials for partners to access it. See [interacting with your S3 bucket](https://cloud.gov/docs/services/s3/#interacting-with-your-s3-bucket-from-outside-cloud-gov).

### Password-protected file

Follow the linked instructions to password-protect a:

- [PDF](https://support.apple.com/guide/preview/password-protect-a-pdf-prvw587dd90f/mac)
- [ZIP](https://osxdaily.com/2012/01/07/set-zip-password-mac-os-x/) (which can be a folder full of files)
  - [Information from GSA IT](https://insite.gsa.gov/employee-resources/information-technology/do-it-yourself-self-help/google-g-suite-apps/email-with-gmail/how-to-create-fipscompliant-zip-files)

Send the encrypted file and password to the recipient separately, with the latter ideally through something ephemeral like a phone call.

### Git-based workflows and Continous Integration and Deployment (CI/CD)

Preventing the leak/exposure of secrets and sensitive information must always be our top priority. For TTS Engineers and Developers, `Sensitive Information` also includes protecting the development and operations of TTS Systems. TTS strongly encourages Continous Integration and Deployment (CI/CD). However, when using a git-based workflow, it is most important to protect branches and enforce reviewer approval before any automation of code changes 

#### CircleCI
CircleCI has a [Build Pull Request from Forked repos setting](https://circleci.com/docs/2.0/oss/#build-pull-requests-from-forked-repositories) and a [Pass Secrets to Builds from Forked Pull request setting](https://circleci.com/docs/2.0/oss/#pass-secrets-to-builds-from-forked-pull-requests). Both are disabled by default, but any repo owner can enable them.

#### Github Actions
GitHub has a [pull_request_target workflow trigger that can be misused by any repo owner](https://securitylab.github.com/research/github-actions-preventing-pwn-requests).

#### Other references for protecting Sensitive Information in CI/CD
* https://sprocketfox.io/xssfox/2021/01/18/pipeline/
