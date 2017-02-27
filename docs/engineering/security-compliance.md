# Security and Compliance

* We train (and re-train) our staff on:
 	- Phishing awareness
 	- Password hygiene
 	- TFA
 	- Backups management
 	- Windows anti-virus
 	- Data Security Policy
 	- Slack
 	- Google docs
 	- Yubikey
 	- LastPass
 	- Google Authenticator
* We perform a yearly review of the [CivicActions Employee/Contractor Security](https://github.com/CivicActions/security-policy) Policy.
* We implement database sanitization techniques that obfuscate email addresses and other data for safer use by developers.
* We [secure deletion for DOJ laptops](https://trello.com/c/zhhjybN0/95-data-secure-deletion-documentation-for-doj-laptops).
* We use two-factor authorization for all system level access operations.
	- The CivicActions Google Account requires two-factor authentication.
* All sites have SSL (fronted with CloudFlare).
* We always apply critical OS security updates within 30 days of their release.
	- The "30 day" value is a government RMF (Risk Management Framework) requirement, but our goal is to apply critical CVEs within 1 week from their release - ideally within 24 hours.
* We implement automated security scanning of the OS. See:
	- [http://www.open-scap.org/](http://www.open-scap.org/)
	- [https://github.com/GovReady](https://github.com/GovReady)
	- [https://github.com/opencontrol](https://github.com/opencontrol)
* We have a default CivicActions Incident Response Plan:
	- Each project can extend or replace the default IRP.
	- [GlobalNET Incident Response Plan](https://docs.google.com/a/civicactions.net/document/d/1hk2rODDPrbc7P-J-1l1UyCyx8cjEVQALd1MC53BijsA/edit?usp=sharing)
	- We ensure that at least one member of the Infrastructure Support Team (currently Owen, Fen, David, Josh, Karen) has access to the Internet at all times.
	- We train new employees and perform yearly quizzes of exiting employees on the IRP procedures.
* We write secure code, following Drupal coding standards and security best practices. See:
	- [Drupal Site Building Best Practices](https://www.drupal.org/developing/best-practices)
	- [Drupal 7: Writing secure code](https://www.drupal.org/writing-secure-code)
	- [Drupal 8: writing secure code](https://www.drupal.org/node/2489544)
	- [Security of generated PHP](https://www.drupal.org/node/2097351)
* We prefer contrib modules with stable releases:
	- Note that alpha, beta and rc versions are not considered stable and not subject to security team support. In my experience in many cases it is preferable to run a dev than alpha/beta releases where there has been significant number of bug fixes done, and the security profile is identical.
	- Each dev release is tied to a specific git commit which is tracked in our repository, and that commit is just as unchangeable as an alpha or beta release (all the latter has is a human readable label for the commit).
* We periodically audit sites to determine if the set of enabled modules are all still in use on the site.
* We implement automated security scanning of the application (Drupal). See:
	- https://github.com/openprivacy/ansible-scap/tree/drupal/roles/drupal-security
* We implement log analysis procedures that enable better/more timely capture of system anomalies.
	See:
	- [Elasticsearch, Logstash, Kibana (ELK) Docker image](https://github.com/spujadas/elk-docker) (github)
	- [The ELK stack powered by Docker and Docker-compose](https://github.com/deviantony/docker-elk) (github)
	- [Splunk](http://www.splunk.com/)
* We apply Drupal security updates on our client sites that have requested this service.
* We ensure that users with enhanced privileges (to sites and/or servers) are appropriately adjusted upon separation from CivicActions.
* We ensure that access to documents/sites/etc. is limited to those that should have access. (This includes our Google Docs!)
