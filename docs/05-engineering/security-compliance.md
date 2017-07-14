# Security and Compliance

## Security Policy

All engineers understand and abide by the [CivicActions Employee/Contractor Security Policy](../03-policies/security.md). Further, we have taken care in following all the steps laid out in the [Security Training](../01-welcome-to-civicactions/training/security-training.md).

In particular:

* We practice [Server & Site Security](../03-policies/security.md#server--site-security)
  * using only sanitized databases
  * taking care to not install restricted access files on development or personal instances outsite the project defined security boundary
  * and scrubbing unneeded data from our development systems

## As Developers

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

* We use Nagios, Cloudwatch, StatusCake and OpsGenie
* We implement log analysis procedures that enable better/more timely capture of system anomalies.
  * fail2ban
  * aide
  * logwatch
  * graylog

* We implement automated security scanning of the OS. See:
  * <http://www.open-scap.org/>
  * <https://github.com/GovReady>

## Incident Response

* Every project has an Incident Response Team
* We ensure that at least one member of the Incident Response Team has access to the Internet at all times.
* We train new employees and perform yearly quizzes of employees on the Incident Response procedures.
* Each project can extend or replace the default IRP.

