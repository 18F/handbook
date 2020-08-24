---
version: 1.1.4
---

# CivicActions Security Policy

CivicActions has established the following policy to safeguard the security, confidentiality, availability and integrity of CivicActions data, as well as that of our personnel, clients and client website users. All CivicActions employees and contractors are expected to accept and abide by this policy. This policy will be reviewed and updated from time to time. If you have questions or comments about this policy please contact your supervisor. We invite your feedback.

## Our primary goals

- Protect clients' confidential and personal information;
- Reduce potential liability of CivicActions;
- Craft a consistent policy that is easy to understand, implement and follow;
- Educate/disseminate our best practices for security throughout the CivicActions community;
- Demonstrate to clients that we are trustworthy and satisfy contractual requirements for security.

## Confidential Information Agreement

CivicActions does most things out in the open, and we strive to reduce the amount of Confidential Information (defined below) we get from third parties. Despite that, during your time as an employee or independent contractor you will be exposed to certain Confidential Information owned by CivicActions, owned by third parties, or provided to us by users and governed by our privacy policy. This section of the Agreement describes the responsibilities you have with regards to such information. Accordingly, you agree that Confidential Information:

- is owned by CivicActions, or (where appropriate) by the third party from whom it originated
- will only be used as necessary to perform your job
- will be protected by you with reasonable measures (such as not letting it out of your control)
- will not be disclosed to anyone outside of CivicActions

You further agree that you will promptly notify your manager if you know of unauthorized use of Confidential Information.

"Confidential Information" means information or material which is proprietary to CivicActions and not generally known outside CivicActions, including information or material that you create, learn, or obtain, as well as information we receive in confidence from third parties. For example, this may include without limitation any information disclosed that is subject to applicable non-disclosure protections of CivicActions privacy policies, non-public product plans of CivicActions or 3rd parties, technical and business information, personnel information like salaries, or other sensitive information. Material need not be marked confidential for it to be considered Confidential Information.

Personally Identifiable Information (PII) should be considered confidential by default, but that may depend upon the project and data usage; PII generally falls into one of two classes:

1.  Sensitive Personally Identifiable Information (SPII) - for example: Social Security or Passport numbers, financial account numbers, biometric identifiers, passwords, and all records and files directly relating to a person that are not publicly available.
2.  "Rolodex" Personally Identifiable Information (PII) - for example: publicly available personal data such as name, email, home address and phone number.

The exact definition of PII varies from jurisdiction to jurisdiction and depends on the project, so consult with your project manager or the security team if you have questions.

Not all information or material you encounter is confidential information. Generally, Confidential Information does not include any information which is subject to free and open source software licenses, or similar licenses including without limitation, GNU General Public License, MIT License, GNU Affero General Public License, or Creative Commons ShareAlike licenses. This may depend on CivicActions' agreements with third parties, though, so if the free and open source licensed material does not fall into one of the categories below you should check with your project manager to determine if the material is considered Confidential Information. Confidential Information does not include (i) information communicated that is publicly known at the time you received the information or has become publicly known other than by a breach of this Agreement; (ii) information you independently developed unrelated to your relationship with CivicActions and without violation of this Agreement; and (iv) information that becomes known to you from a source other than CivicActions, provided any such source is legally entitled to have and to disclose such information to you without restriction. CivicActions believes strongly in openness and transparency and we strive to release source code publicly under a free and open source license agreement, but there may be circumstances where we choose not to; for instance we may be prevented from doing so by the terms of an agreement with a third-party.

From the point of view of a typical client project, this means that:

- Database exports should always be treated as confidential, since these may contain personal information that is not publicly available.
- The uploaded files directory may need to be treated as confidential if the client site has any access-controlled content.
- The site source code can normally be treated as non-confidential, unless this includes proprietary code from the client or 3rd parties.
- The contents of the project management site (e.g. Trac, JIRA, Trello, etc.), e-mail lists and related communication tools, will normally contain a mixture of confidential and non-confidential information:
  - Information authored by clients or 3rd parties should generally be treated as confidential, unless it is clearly public-facing, and then its use other than as set forth in the engagement agreement may still require client permission. If in doubt, ask your supervisor or the legal team.
  - Project management material can be sourced for distribution or repurposing, but should be first reviewed and redacted, if needed, to ensure no confidential information remains.

If you are unsure about the confidentiality of a piece of information you should ask someone who is able to give a qualified answer (if in doubt who this is, consult with the legal team) - in the meantime, work from the assumption that it is confidential.

## Acceptable Use Policy

It is each person's responsibility to ensure they understand and follow the data security policy. This is true for CivicActioners in both non-technical and technical roles, although there are some additional steps that need to be taken for those involved in technical work.

Broadly, dealing with confidential information involves - to the maximum extent feasible - limiting the number of places (physical and logical) where it is stored, and secondly ensuring that each of those places is as secure as reasonably possible, to prevent unauthorized access.

Users are responsible for carefully tracking any confidential information stored on personal devices (including backup/offline storage). Periodically during and after each project, confidential information stored on personal devices should be reviewed, and anything that is no longer needed should be deleted (after being archived to a CivicActions service, if needed). Users should ensure files are actually deleted (and not stored in a recycle/trash area), ideally running [a secure delete on the files](../09-security/awareness.md#securely-delete-files-and-wipe-disks), which is available out of the box on OS X and GNU/Linux based systems. Note that if a personal device is used in the performance of some of our contracts, you may be required to provide a copy of stored information or the device itself (such as the disk drive containing the information) if requested by CivicActions or the client. As always, if you have questions, talk to your project manager or the legal team.

There are also a number of security concerns with non-confidential information. Even though we don't need to protect it from viewing, it is critical that any copies in active use are protected from unauthorized changes.

It is important that our information technology systems, service and network infrastructure are used in ways that maintain:

- Security from unauthorized access and use
- Data integrity
- Compliance with the law
- Compliance with our hosting provider(s) acceptable use policies

CivicActions IT services provide a number of general user accounts. This includes:

- CivicActions GSuite Google Apps (Gmail, Hangouts, Docs, Drive, etc.)
- Web-based collaboration accounts such as
  - Our home site
  - Intranet (internal team collaboration)
  - Project management site (Trac, JIRA, Balsamiq, GitLab, ...)
  - 3rd party collaboration tools (such as Slack, Trello, Zoom, ...)
  - IP telecommunications/conferencing accounts

Usage of CivicActions user accounts should be as follows:

- Usage must be directly related to your work with CivicActions - personal use (including personal projects) must be approved in advance by the CTO.
- Use in any way harmful to CivicActions or our clients is forbidden.
- Storing confidential personal information from client website users (for example CSV exports from CiviCRM) on internal collaboration systems should be avoided wherever possible, especially on 3rd party services such as Google Docs.
- Confidential information (other than personal information) should only be stored in areas restricted by access control, such as the project management area.
- Binary software executable files should not be distributed via internal collaboration systems, as we do not have anti-virus scanning in place. Uploading human readable source code and scripts (php, bash, perl etc.) is acceptable (but nevertheless should be considered a risk).

In addition to user accounts we provide developer and system administrator access to system and service accounts, such as administrator web-access and SSH access to client sites, version control systems such as SVN/Git and MySQL database access. Usage for these accounts is covered in our server security policy, below.

## Access Policy

The security of our systems is only as strong as the weakest link. Hence it is important that all devices that connect and are authenticating to any CivicActions IT system are as secure as possible. Specifically:

- This includes access to web based accounts, such as our intranet, as well as developer accounts.
- This covers both desktop and laptop machines, as well as devices such as mobile phones and network routers (including home/office Internet gateways). This also includes 3rd party sourced servers/services that employees and contractors may employ as part of their workflow.
- CivicActions is responsible for maintaining the security of our own systems, as well as supporting computers or other devices that may be provided to staff as a part of their employment.
- Employees and contractors are responsible for maintaining their own systems to the highest standards of security. This includes (but is not limited to) the standards described in this document.
- The civicactions.com Google docs and domain must be accessed via your civicactions.com email address. In particular, it is not permitted to add a personal email address to shared civicactions.com domain Google docs.

Before connecting and authenticating to any CivicActions IT system or storing confidential information on your systems, all users must ensure that:

- Operating systems, and all software that makes network connections (such as web browsers), or opens files that have been downloaded from the Internet (such as PDF readers) is patched or updated to resolve critical publicly known vulnerabilities, or, when an older version of a program is used on purpose (such as for interoperability testing), it is run in a sandbox (typically a virtual machine).
- Systems vulnerable to malware infections (primarily Windows, but may include other systems and mobile devices) are running a high-quality virus scanner (such as Avast or ClamAV) that automatically updates its virus definitions at least every 24 hours, detects malware in a real-time fashion, and completes a full system scan at least every week. In addition, Windows users are expected to run a general malware scanner (which may be integrated into the virus scanner, or may be separate, such as Adaware or TotalAV) that detects accidentally installed malware that does not qualify as a virus.
- A firewall is configured to block all unsolicited incoming connections to systems that store confidential information. This can be a network router NAT based firewall, or a software based firewall running on your local machine. This applies to all operating systems.
  - For laptops that are used in hostile network environments (including public places such as cafes or airports) a software based firewall is mandatory.
  - For users of Unix based systems, such as GNU/Linux and OS X, it is acceptable to open port 22 to allow external SSH access to home/office computers, as long as these systems are up-to-date with security patches and they use strong account passwords or SSH keys.
  - It is particularly important to ensure that network shares, databases and local development sandbox versions of web sites are not publicly visible, both when working from home/office and when working in public places.
- User accounts on all systems must be password protected (using passwords that adhere to our password policy) and require entering the password on initial startup, as well as on resume from "sleep" mode.
- Whenever practical, work should be done from under a relatively non-privileged (user) account, not from an account with administrative privileges on the computer. Working under the latter is more likely to result in unintended installation of malicious software that would be harder for an anti-virus program to detect and cure. Thus, even if you're the only person using a computer (such as a laptop), it is a good practice to create two accounts on the computer: a "user" and an "administrator", and use the "user" account for most activities.
- Untrusted software should not be installed. This includes software you have never heard of, as well as known software that was downloaded from sources other than the author's site or a trusted, established repository.
- Be cautious opening e-mail attachments or files sent over instant messengers or similar systems. Even if the attachment is from a contact you recognize, if it is unexpected and does not indicate a project or discussion you recognize it is wise to e-mail the person separately to confirm that they sent the message. The reason for this is that it is common for malware to use e-mail software contact lists to send e-mails masquerading as a known contact with the malware attached.
- Do not access CivicActions IT systems using an untrusted computer (for example an Internet café or library system). This is because these systems can easily be infected with malware that transmit user activity to a 3rd party.
- If technically possible, additional protections such as encryption of your home directory (with a strong passphrase not reused for another purpose) and "remote wipe" of lost mobile devices are encouraged.
- When connected to wired or wireless Internet connections associated with CivicActions (for example while at company sprints/retreats or when visiting client site offices), users are expected to follow the appropriate terms and conditions of that provider, and to avoid initiating network traffic (e.g. by visiting specific websites or running file sharing software) that may bring our reputation into question.

If a system is believed to be compromised, either through theft, loss, remote access, virus/malware infection, CivicActions IT should be informed immediately.

## Password Policy

Passwords are used to protect many of our systems and services.

All passwords at CivicActions must follow this policy, including passwords used for:

- Personal computers or devices that access CivicActions services or store confidential information.
- Passphrases used for your password manager, PGP or SSH encryption keys.
- Personal accounts on any CivicActions internal or client site or service.
- CivicActions accounts on 3rd party vendor sites.

### Password Managers and Two Factor Authentication

CivicActions requires unique, strong passwords for every service that you log into. For this reason, CivicActions requires use of a password manager and recommends LastPass as it is currently the most full-featured password manager. Note that LastPass is required for use by IT staff and management.

Use both a unique, strong password (or multi-word passphrase) _and_ two-factor authentication (TFA or 2FA) to secure your password manager.

CivicActions supplies all employees with a YubiKey for two-factor authentication, and we require two-factor authentication for access to your password manager, the CivicActions GSuite of applications, and OAuth-authenticated apps such as GitHub and GitLab. You can also use second factor authentication apps such as Authy and Duo, and in fact, for backup reasons we suggest using more than one second factor.

Please see the [Security Awareness and Tools](../09-security/awareness.md) document for details on these subjects and more.

### Some Password Exceptions

- On occasion, "starter" passwords for new accounts on web sites may be transmitted/stored in clear text, on condition that the recipient immediately logs in and sets a new strong password. Both the starter and new passwords must adhere to the strong password policy. If possible it is preferable to use a "one time" login link, or transmit "starter" passwords with GnuPG or via phone, email, SMS, Slack, etc. When transmitting a password electronically in clear text, do not include the username or website URL in the same message or thread.
- The MySQL password is stored in clear text form on the instance for usage by the application (e.g. Drupal) and deployment/testing scripts (e.g. drush).
- The "basic auth" pop-up credentials used on dev/qa and pre-launch instances of client sites can be stored in plain text on the protected project management system, for easy client reference.
- There are a few 3rd party services for which we have shared accounts but store no confidential information, for example, CrossBrowserTesting.com. These passwords can be stored/transmitted in clear text within the team.

### Mitigation

- If you suspect a password has been compromised (for example, it was accidentally typed into an unencrypted chat session), change the password immediately yourself if possible, or inform IT right away, so that the password can be changed by a sysadmin.
  - This includes the case when a client sends a name/password pair in the clear in an email.

### Private Keys

- SSH public/private key pairs are used to access CivicActions servers.
- GnuPG (PGP compatible) public/private key pairs may be used to transmit and store credentials to CivicActions client sites and internal services.
- The private key files themselves should be kept in as few places as possible (ideally just your primary computer; a home server is also acceptable for storage of a backup copy of the encrypted key, but not for use of the key).
- Private keys should never be placed on external servers – if you need SSH access to one server from another server (typically for a large data transfer), generate a dedicated key pair for that purpose or tunnel SSH over SSH port forwarding (ask IT for instructions).
- If you suspect a private key file (or its passphrase) has been compromised, inform IT immediately, so that we can revoke the corresponding public key on our servers.
- Keys must be 2048 bits as a minimum (keys using lower strengths must be replaced). 4096 bits or higher is recommended for new keys and will soon become required.
- Passphrases may be cached, but should expire after 1-2 hours or at the end of each login session for desktops and laptops and after 5-15 minutes for mobile devices.

## Server & Site Security

Web administrator access to websites, working on source code, and access to servers (SSH/shell, file system, database), carries a high-level of responsibility and trust. You are expected to be familiar with and follow our best practices and processes, as well as maintain your skills and know your own limits.

Usage of CivicActions developer accounts should be as follows:

- Usage must be directly related to your work with CivicActions - personal use (including personal projects) must be approved in advance by the CTO.
- Use in any way harmful to CivicActions or our clients is forbidden.

Web administrator account holders (Drupal, CiviCRM or other) must also:

- Be familiar with how to maintain configuration security as described in Drupal's [securing your site](http://drupal.org/security/secure-configuration) page.
- Test the site after changing site permissions, by logging in as a user with each affected role and ensuring that access is limited correctly.
- Test the site to ensure settings are correct after changing settings affecting content/data access control.
- Avoid the use of PHP in the web administration interface when at all possible (as this code is harder to find and hence audit).
- Respect the privacy of site users, avoiding accessing personal data such as private messages.

Developers and themers working on the site codebase (and committing code to Git) must also:

- Ensure their own code and development practices follow accepted secure coding standards as described in the Handbook under [Engineering > Security and Compliance](../05-engineering/security-compliance.md).
- Ensure the standard dev-qa-live process is always followed, such that all changes that may affect site security can be thoroughly tested before being made live.
- Ensure that external developers (client or 3rd party) working on the site codebase are either:
  - A full part of our developer team, such that they been assessed/trained to have the appropriate skills and are subject to TL code review.
  - OR: The client confirms understanding that we have neither assessed their skills nor are we reviewing their code. This scenario is best avoided, but is sometimes necessary if the site is being transitioned to another developer.
- Review all contributed code they have not previously used for basic quality - this is not a formal security audit in most cases, but rather checking the usage stats, issue queue, skimming the module code for readability and adherence to good practices etc. Code that is actively used and maintained and follows best practices is less likely to have serious security issues.
- Check for security advisories ([drupal.org/security](http://drupal.org/security)) for modules used on each active development site and ensure they are upgraded where necessary, before the site is made live.
- Understand common attack vectors and the best practices for preventing them, including:
  - SQL injection, prevented by proper query construction and placeholder usage.
  - XSS (cross site scripting) attacks, prevented by ensuring user data is always sanitized as appropriate on output.
  - XSRF (cross site request forgery), mitigated by ensuring URLs that perform actions (including pages that process GET/querystrings) carry an unpredictable token included on URL generation.
  - Session hijacking, prevented by using SSL and correct site/session settings.
  - Data disclosure, prevented by carefully setting and testing access control, as well as using SSL as needed.
  - Password guessing attacks, mitigated by using strong passwords.
- Software that is not licensed under an approved CivicActions open source license may not be used on a project without prior approval from the legal team.

The project technical lead (or a designated lead engineer/lead themer or peer-review process) is responsible for reviewing all new/modified code each sprint, and ensuring it meets a high standard of quality.

Developers and themers maintaining local sandbox copies of client sites must also:

- Ensure that our standard tools for creating, sanitizing and transferring database dumps for sandboxes are used.
- Ensure that unsanitized mysql data (extracted via mysqldump or phpmyadmin) is not downloaded from the server to a local sandbox.
- Ensure that all confidential data associated with a project (such as databases, database dumps and other files) are securely deleted from their system(s) when leaving or completing a project.

Developers and themers working on the site server instance (SSH/shell, file system, database) must also:

- Follow best practices with respect to SSH keys, passphrases and passphrase caching (see above).
- Access the server only by methods (e.g. SSH, SFTP, SCP) configured by designated admins. Access by password, manually installed SSH keys (other than by admins), web based "shell" script, port forwarding to 3rd parties or other methods are forbidden, unless authorized in advance by the CTO.
- Restrict SSH port forwarding to temporary use for the purpose of accessing the server MySQL from your own desktop.
- Prefer the initiation of SSH connnections from CivicActions servers to 3rd party servers, avoiding the reverse as much as possible.
- Obtain prior approval from a member of the IT team before running non-standard software on a server instance. This includes:
  - Daemons (persistent, long running processes)
  - Binary software (compiled on the server instance or elsewhere)
  - Web accessible scripts/CGIs that do not use solely an established framework
- Inform the IT team as soon as possible if unusual resource usage is anticipated, so that we can monitor resource utilization and ensure backup processes run correctly. This can include high traffic events, large data/media file uploads or high CPU/RAM usage (e.g. during large imports).

IT team system administrators working on CivicActions servers must also:

- Take the utmost caution when working on server configuration - document and test each change.
- Non-urgent yet risky changes (those with significant risk of introducing undesired side-effects) should only be made when the person expects to remain online and available for a while after the change.
- Not work on site/user files as root - but "su" to the account first.
- Respect the privacy of server users, avoiding accessing others' personal data such as e-mails.
- Work with the IT team to ensure server and backup health is monitored and alerts are responded to promptly.
- Ensure offsite backups are transferred and stored only in encrypted form.
- Ensure the Hurricane Electric and RimuHosting access list (that controls remote hands and physical server access) is maintained.

## Security Awareness and Tools

We maintain a [Security Awareness and Tools](../09-security/awareness.md) document that dives deeper into some additional topics, including:

- Password Management Tools
- Two Factor Authentication
- Phishing and Social Engineering
- Backups
- Secure Delete Files and Wiping Disks
