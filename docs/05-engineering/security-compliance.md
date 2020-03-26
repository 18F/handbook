# Security and Compliance

## Security Policy

All engineers understand and abide by the [CivicActions Employee/Contractor Security Policy](../03-policies/security.md). Further, we have taken care in following all the steps laid out in the [Security Training](../01-welcome-to-civicactions/training/security-training.md).

In particular:

- We practice [Server & Site Security](../03-policies/security.md#server--site-security)
  - using only sanitized databases
  - taking care to not install restricted access files on development or personal instances outside the project defined security accreditation boundary
  - and scrubbing unneeded data from our development systems

## As Developers

- When creating test or exploratory accounts on staging or production systems, we:
  - use a user name derived from your name like `first.lastname` or `flastname` or `flastname-admin`
  - use your `civicactions.com` email address (can add an identifier, e.g. `first.lastname+project-admin@civicactions.com` -- everything after the `+` is ignored by the mailer)
- We minimize custom code, always preferring to use community maintained modules and contribute patches when needed
- When necessary for new functionality, we strive to create generic modules and contribute them to the parent project
- Custom code must:
  - have an associated Jira (or other ticketing system) ticket
  - include testing mechanisms, ideally hooked into the continuous integration pipeline
  - conform to coding standards (use static code analysis where possible (such as [DCQ](https://www.drupal.org/project/dcq))
  - undergo security peer review

### As Drupal Developers

- We follow [Drupal coding standards and best practices](https://www.drupal.org/developing/best-practices)
- We write [Secure Code in Drupal 7](https://www.drupal.org/docs/7/security/writing-secure-code)
- We understand [Security in Drupal 8](https://www.drupal.org/docs/8/security)
- Note that alpha, beta and rc versions are not considered stable and not subject to security team support. In my experience in many cases it is preferable to run a dev than alpha/beta releases where there has been significant number of bug fixes done, and the security profile is identical.
- Each dev release is tied to a specific Git commit which is tracked in our repository, and that commit is just as unchangeable as an alpha or beta release (all the latter has is a human readable label for the commit).
- We periodically audit sites to determine if the set of enabled modules are all still in use on the site.

## Privileged Access

- We ensure that access to documents/sites/dashboards is limited to those that should have access.
- This includes our Google Docs!
- We ensure that users with enhanced privileges (to sites and/or servers)
  - must use TFA for authentication/authorization
  - are appropriately adjusted upon separation from CivicActions.

### Advanced: Connecting to TFA-enabled Sevices/Apps

Some applications and services may need to connect to your Civicactions google account but they might not be able to handle TFA. An example of this would be a personal Gmail account trying to send e-mails through your civicactions' account. For this purpose Google has created something called [App Passwords](https://support.google.com/accounts/answer/185833?hl=en). [App Passwords](https://support.google.com/accounts/answer/185833?hl=en) allows you to create a unique password for each of your services/apps. If this password is used while authenticating your service/app to access your CivicActions' account it will bypass TFA.

There are some instructions at <https://support.google.com/accounts/answer/185833?hl=en> on how to use App Passwords with Google. Several other TFA-enabled services also support app passwords -- see their respective documentation.

### IT: Sharing Service Accounts

- If a service allows individual accounts, use only individual accounts and not shared credentials.
- Prefer services that allow individual accounts, services that allow TFA and secure password policies.
- If a service only allows a single account, have a shared LastPass master account that ideally only 2-3 trusted people have access to. From there share passwords out on an "as needed" basis only, including to individual day-to-day LastPass accounts for the 2-3 trusted people.
- If the LastPass master account is a paid account it also allows sharing credentials in a way that makes the password harder for the person who you shared it with to recover/view/share (but still allow them to log in with it).
- Shared account passwords should rotate to ensure that only those users needing access continue to have access, revoking individual accounts particularly when people leave.

## Continuous Monitoring

We use tools to support continuous monitoring for performance and efficiency, and to ensure proper operation and security. These tools include (not an exhaustive list):

- Event and error log capture: auditd (SELinux), fail2ban and AIDE.
- Continuous monitoring dashboards: LogWatch, LogStash/GrayLog, Nagios, Cloudwatch, Pingdom, StatusCake, OpsGenie and New Relic.
- Automated security scanning: [OpenSCAP](http://www.open-scap.org/), [ansible-role-800-53](https://github.com/RedHatGov/ansible-role-800-53), and [GovReady](https://github.com/GovReady).

## Incident Response

- Every project has an Incident Response Team
- We ensure that at least one member of the Incident Response Team has access to the Internet at all times.
- We train new employees and perform yearly quizzes of employees on the Incident Response procedures.
- Each project can extend or replace the default IRP.
