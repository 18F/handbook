---
title: MailChimp
---

We use MailChimp and its [Mandrill](../mandrill/) add-on to send transactional emails.

## Communication

* Slack: [#admins-mailchimp](https://gsa-tts.slack.com/messages/admins-mailchimp/)

## Setup

1. Create a [MailChimp](https://login.mailchimp.com/signup) account associated
   with your GSA email address.
1. [File a new issue in the 18F/Infrastructure repository](https://github.com/18F/Infrastructure/issues/new?title=Please%20add%20me%20to%20the%20MailChimp%20account&assignee=erik-burgess), stating:
    * What you need the account for
    * The approximate volume of emails you expect to be sending/receiving

See also: [the Handbook page on Mandrill](../mandrill/).

## Limitations

GSA will block any messages that are sent with a From address of `@gsa.gov`, if the SMTP server is not managed (or whitelisted) by GSA. In other words, you can't send an email with a From address of `@gsa.gov` from MailChimp/Mandrill. Use a `.gsa.gov` subdomain or another second-level domain instead.

#### Still have questions?

Ask in Slack: [#admins-mailchimp](https://gsa-tts.slack.com/messages/admins-mailchimp).
