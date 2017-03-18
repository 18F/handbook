# Security and Compliance

### Table of Contents

* [Security Policy](#security-policy)
* [Awareness and Tools](#awareness-and-tools)
* [Training](#training)
* [As Developers](#as-developers)
  * [As Drupal Developers](#as-drupal-developers)
* [Privileged Access](#privileged-access)
* [Continuous Monitoring](#continuous-monitoring)
* [Incident Response](#incident-response)

## Security Policy

We understand and abide by the [CivicActions Employee/Contractor Security Policy](https://github.com/CivicActions/security-policy). In particular:

* We practice [Server & Site Security](https://github.com/CivicActions/security-policy#server--site-security)
  * using only sanitized databases
  * taking care to not install restricted access files on development or personal instances outsite the project defined security boundary
  * and scrubbing unneeded data from our development systems

## Awareness and Tools

We enhance our [Security Awareness with Tools](https://github.com/CivicActions/security-policy/blob/master/tools/README.md#tfa-backup-codes) by:

* [Securing our Laptops](https://github.com/CivicActions/security-policy/blob/master/tools/README.md#securing-your-laptop)
* [Using Password Management Tools](https://github.com/CivicActions/security-policy/blob/master/tools/README.md#password-management-tools)
* [Using Multi-Factor Authentication](https://github.com/CivicActions/security-policy/blob/master/tools/README.md#use-two-factor-or-2-step-authentication-tfa-2fa)
* [Increasing our awareness of Phishing and Social Engineering](https://github.com/CivicActions/security-policy/blob/master/tools/README.md#phishing-and-social-engineering)
* [Keeping our Personal Systems up-to-date](https://github.com/CivicActions/security-policy/blob/master/tools/README.md#keep-your-systems-up-to-date)
* [Employing Disk Encryption and Secure Storage Management](https://github.com/CivicActions/security-policy/blob/master/tools/README.md#disk-encryption-and-storage-management)

## Training

* We perform a yearly review of the [CivicActions Employee/Contractor SecurityPolicy ](https://github.com/CivicActions/security-policy)
* We train all our employees and contractors in PII Awareness

## As Developers

* We minimize custom code, always preferring to use community maintained modules and contribute patches when needed
  * When necessary for new functionality, we strive to create generic modules and contribute them to the parent project
* Custom code must:
  * have an associated Jira (or other ticketing system) ticket
  * include testing mechanisms, ideally hooked into the continuous integration pipeline
  * conform to coding standards (use static code analysis where possible (such as [DCQ](https://www.drupal.org/project/dcq))
  * undergo security peer review

### As Drupal Developers

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
  * [elk-in-docker](https://git.civicactions.net/devops/elk-in-docker) *(internal link - fix...)*


* We implement automated security scanning of the OS. See:
  * <http://www.open-scap.org/>
    <https://github.com/GovReady>

## Incident Response

* We have a default CivicActions Incident Response Plan:
  * We ensure that at least one member of the Infrastructure Support Team (currently Owen, Fen, David, Josh, Karen and Marc) has access to the Internet at all times.
  * We train new employees and perform yearly quizzes of exiting employees on the IRP procedures.


* Each project can extend or replace the default IRP.
  * [GlobalNET Incident Response Plan](https://docs.google.com/a/civicactions.net/document/d/1hk2rODDPrbc7P-J-1l1UyCyx8cjEVQALd1MC53BijsA) *(internal link - fix...)*
