# Security and Compliance

## Security Policy

All engineers understand and abide by the [CivicActions Employee/Contractor Security Policy](../03-policies/security.md). Further, we have taken care in following all the steps laid out in the [Security Training](../01-welcome-to-civicactions/training/security-training.md).

In particular:

* We practice [Server & Site Security](../03-policies/security.md#server--site-security)
    * using only sanitized databases
    * taking care to not install restricted access files on development or personal instances outside the project defined security accreditation boundary
    * and scrubbing unneeded data from our development systems

## As Developers

* When creating test or exploratory accounts on staging or production systems, we:
    * use a user name derived from your name like `first.lastname` or `flastname` or `flastname-admin`
    * use your `civicactions.com` email address (can add an identifier, e.g. `first.lastname+project-admin@civicactions.com` -- everything after the `+` is ignored by the mailer)
* We minimize custom code, always preferring to use community maintained modules and contribute patches when needed
* When necessary for new functionality, we strive to create generic modules and contribute them to the parent project
* Custom code must:
    * have an associated Jira (or other ticketing system) ticket
    * include testing mechanisms, ideally hooked into the continuous integration pipeline
    * conform to coding standards (use static code analysis where possible (such as [DCQ](https://www.drupal.org/project/dcq))
    * undergo security peer review

### As Drupal Developers

* We follow [Drupal coding standards and best practices](https://www.drupal.org/developing/best-practices)
* We write [Secure Code in Drupal 7](https://www.drupal.org/docs/7/security/writing-secure-code)
* We understand [Security in Drupal 8](https://www.drupal.org/docs/8/security)
* Note that alpha, beta and rc versions are not considered stable and not subject to security team support. In my experience in many cases it is preferable to run a dev than alpha/beta releases where there has been significant number of bug fixes done, and the security profile is identical.
* Each dev release is tied to a specific git commit which is tracked in our repository, and that commit is just as unchangeable as an alpha or beta release (all the latter has is a human readable label for the commit).
* We periodically audit sites to determine if the set of enabled modules are all still in use on the site.

## Privileged Access

* We ensure that access to documents/sites/dashboards is limited to those that should have access.
* This includes our Google Docs!
* We ensure that users with enhanced privileges (to sites and/or servers)
   * must use TFA for authentication/authorization
   * are appropriately adjusted upon separation from CivicActions.

## Continuous Monitoring

We use tools to support continuous monitoring for performance and efficiency, and to ensure proper operation and security. These tools include (not an exhaustive list):

* Event and error log capture: auditd (SELinux), fail2ban and AIDE.
* Continuous monitoring dashboards: LogWatch, LogStash/GrayLog, Nagios, Cloudwatch, Pingdom, StatusCake, OpsGenie and New Relic.
* Automated security scanning: [OpenSCAP](http://www.open-scap.org/), [ansible-role-800-53](https://github.com/RedHatGov/ansible-role-800-53), and [GovReady](https://github.com/GovReady).

## Incident Response

* Every project has an Incident Response Team
* We ensure that at least one member of the Incident Response Team has access to the Internet at all times.
* We train new employees and perform yearly quizzes of employees on the Incident Response procedures.
* Each project can extend or replace the default IRP.
