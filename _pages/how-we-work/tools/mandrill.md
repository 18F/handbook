---
title: Mandrill
---

Mandrill is the transactional email service that we use at 18F. Note that the service is part of [MailChimp](../mailchimp/), which we also use.

## User setup

[Invite the new user](http://kb.mailchimp.com/accounts/multi-user/manage-user-levels-in-your-account). Note they need to be an Admin to access Mandrill (unfortunately), per the [Mailchimp documentation](http://kb.mailchimp.com/mandrill/how-to-use-mandrill-to-send-email).

## Accessing Mandrill

*Moved from [C2 documentation](https://github.com/18F/C2/blob/master/doc/production.md#mandrill).*

1. Visit [https://mandrillapp.com](https://mandrillapp.com).
1. Click "Log In Through MailChimp".
1. Log in to MailChimp.
    1. If you have multiple options, select the "General Services Administration \| 18F" account.

You should now be signed in to Mandrill with the shared account.

## SMTP setup

This needs to be done for every sub-domain.

1. [Add a new Inbound Domain](https://mandrillapp.com/inbound)
    1. Click "View Setup Instructions" to get MX record info
    1. Add DNS records in [Route 53](https://console.aws.amazon.com/route53/home?region=us-east-1#hosted-zones:) (domain needs to be delegated to us...if it isn’t, whomever controls the domain will need to do this)
        1. If domain is pointing to cloud.gov, add an A record as an alias to the same ELB that `*.18f.gov` is pointing to
        1. add the MX record
1. [Add new sending domain](https://mandrillapp.com/settings/sending-domains)
1. Set up SPF and DKIM records
    1. Click "View DKIM/SPF settings" and follow the instructions
    1. Enter TXT records in Route 53. *Make sure to surround the values in quotes.*
1. At this point, verify that you have an A record, an MX record, and two TXT records for your domain
1. Wait a little bit for the DNS records to propagate. Go get a coffee or something.
1. In [Sending Domains](https://mandrillapp.com/settings/sending-domains), click "Test DNS Settings", and the DKIM and SPF should show up as verified.
1. In [Inbound Domains](https://mandrillapp.com/inbound), click "Test DNS Settings", and the MX records should be detected as valid.
1. Verify the domain
    1. Create a new private [http://requestb.in/](http://requestb.in/)
    1. Click the inbound domain and add new route, e.g. `verify@`, and set the `Post To URL` to be the requestb.in URL
    1. On the [sending domain](https://mandrillapp.com/settings/sending-domains) page, trigger the Verify Domain, giving it that same email.
    1.  "inspect" the RequestBin and get the verification link (refresh it, and search for `verify-domain`), removing all encoding, then visit it.

#### Still have questions?

Ask in Slack: [#admins-mailchimp](https://gsa-tts.slack.com/messages/admins-mailchimp).
