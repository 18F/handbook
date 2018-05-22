---
version: 1.1.2
---

# CivicActions Security Policy

CivicActions has established the following policy to safeguard the security, confidentiality, availability and integrity of CivicActions data, as well as that of our personnel, clients and client website users. All CivicActions employees and contractors are expected to accept and abide by this policy. This policy will be reviewed and updated from time to time. If you have questions or comments about this policy please contact your supervisor. We invite your feedback.

## Our primary goals

* Protect clients' confidential and personal information;
* Reduce potential liability of CivicActions;
* Craft a consistent policy that is easy to understand, implement and follow;
* Educate/disseminate our best practices for security throughout the CivicActions community;
* Demonstrate to clients that we are trustworthy and satisfy contractual requirements for security.

## Information Classification Policy

We can group information into two classes:

1. *Confidential information:*

   * Personal information - for example: name, e-mail address, mailing address, telephone, passwords, and all records and files directly relating to a person that are not publicly available.
   * Proprietary client information - for example: intranet/extranet content, files or data, unpublished/staged content, project planning/design documents or source code produced by the client or 3rd party vendors. This may include information covered by a non-disclosure agreement (NDA), but even in the absence of such an agreement we should treat information provided by clients as confidential unless instructed otherwise.
   * Confidential business information of CivicActions or a client, including engagement terms.
   * Communications involving legal advice or discussions that are intended to be protected by attorney client privilege or the work product doctrine.
   * Internal CivicActions information - for example: information regarding our IT security, accounting, finance or human resources, unless by prior agreement by a member of the management team.

2. *Non-confidential information:*

   * Free and open source ("FOSS") licensed source code (e.g. GPL/AGPL), such as projects downloaded from drupal.org. This also includes all FOSS source code written by CivicActions, with the exception of files containing credentials.
   * Free and open source licensed creative assets (e.g. Creative Commons). This also includes project planning/design documents authored by CivicActions, as well as training materials and other incidentals, that have been designated open source.
   * Information that is publicly available, including client information on public facing web site pages.

From the point of view of a typical client project, this means that:

* The Drupal and CiviCRM databases (and database exports) should always be treated as confidential, since these contain personal information.
* The uploaded files directory may need to be treated as confidential if the client site has any access-controlled content.
* The site source code can normally be treated as non-confidential, unless this includes proprietary code from the client or 3rd parties.
* The contents of the project management site (e.g. Trac, JIRA, Trello, etc.), e-mail lists and related communication tools, will normally contain a mixture of confidential and non-confidential information:
    * Information authored by CivicActions for clients will generally be non-confidential, unless we are bound by an NDA. However, CivicActions may from time to time produce content for a client that is owned by the client, and/or includes proprietary IP (such as trademarks, or copyrighted text), which should not be disseminated to third parties or used by CivicActions except by express permission of the client.
    * Information authored by clients or 3rd parties should generally be treated as confidential, unless it is clearly public-facing, and then its use other than as set forth in the engagement agreement may still require client permission. If in doubt, ask your supervisor or the General Counsel.
    * Non-confidential materials can be sourced for distribution or repurposing, but should be reviewed and redacted, if needed, to ensure no confidential information remains.

If you are unsure about the confidentiality of a piece of information you should ask someone who is able to give a qualified answer (if in doubt who this is, consult with the General Counsel) - in the meantime, work from the assumption that it is confidential.

## Acceptable Use Policy

It is each person's responsibility to ensure they understand and follow the data security policy. This is true for CivicActioners in both non-technical and technical roles, although there are some additional steps that need to be taken for those involved in technical work.

Broadly, dealing with confidential information involves - to the maximum extent feasible - limiting the number of places (physical and logical) where it is stored, and secondly ensuring that each of those places is as secure as reasonably possible, to prevent unauthorized access.

Users are responsible for carefully tracking any confidential information stored on personal devices (including backup/offline storage). Periodically during and after each project, confidential information stored on personal devices should be reviewed, and anything that is no longer needed should be deleted (after being archived to a CivicActions service, if needed). Users should ensure files are actually deleted (and not stored in a recycle/trash area), ideally running [a secure delete on the files](../09-security/awareness.md#securely-delete-files-and-wipe-disks), which is available out of the box on OS X and GNU/Linux based systems.

There are also a number of security concerns with non-confidential information. Even though we don't need to protect it from viewing, it is critical that any copies in active use are protected from unauthorized changes.

It is important that our information technology systems, service and network infrastructure are used in ways that maintain:

* Security from unauthorized access and use
* Data integrity
* Compliance with the law
* Compliance with our hosting provider(s) acceptable use policies

CivicActions IT services provide a number of general user accounts. This includes:

* CivicActions Google Apps (Gmail, Hangouts, Docs, Drive, etc.)
* Web based collaboration accounts such as
    * Our home site
    * Intranet (internal team collaboration)
    * Project management site (Trac, JIRA, Balsamiq, GitLab, ...)
    * 3rd party collaboration tools (such as Slack, Trello, ...)
    * IP telecommunications/conferencing accounts

Usage of CivicActions user accounts should be as follows:

* Usage must be directly related to your work with CivicActions - personal use (including personal projects) must be approved in advance by the CIO.
* Use in any way harmful to CivicActions or our clients is forbidden.
* Storing confidential personal information from client website users (for example CSV exports from CiviCRM) on internal collaboration systems should be avoided wherever possible, especially on 3rd party services such as Google Docs.
* Confidential information (other than personal information) should only be stored in areas restricted by access control, such as the project management area.
* Binary software executable files should not be distributed via internal collaboration systems, as we do not have anti-virus scanning in place. Uploading human readable source code and scripts (php, bash, perl etc) is acceptable (but nevertheless should be considered a risk).

In addition to user accounts we provide developer and system administrator access to system and service accounts, such as administrator web-access and SSH access to client sites, version control systems such as SVN/Git and MySQL database access. Usage for these accounts is covered in our server security policy, below.

## Access Policy

The security of our systems is only as strong as the weakest link. Hence it is important that all devices that connect and are authenticating to any CivicActions IT system are as secure as possible. Specifically:

* This includes access to web based accounts, such as our intranet - as well as developer accounts.
* This covers both desktop and laptop machines, as well as devices such as mobile phones and network routers (including home/office Internet gateways). This also includes 3rd party sourced servers/services that employees and contractors may employ as part of their workflow.
* CivicActions is responsible for maintaining the security of our own systems, as well as supporting computers or other devices that may be provided to staff as a part of their employment.
* Employees and contractors are responsible for maintaining their own systems to the highest standards of security. This includes (but is not limited to) the standards described in this document.
* The civicactions.com Google docs and domain must be accessed via your civicactions.com email address. In particular, it is not permitted to add a personal email address to shared civicactions.com domain Google docs.

Before connecting and authenticating to any CivicActions IT system or storing confidential information on your systems, all users must ensure that:

* Operating systems, and all software that makes network connections (such as web browsers), or opens files that have been downloaded from the Internet (such as PDF readers) is patched or updated to resolve critical publicly known vulnerabilities, or, when an older version of a program is used on purpose (such as for interoperability testing), it is run in a sandbox (typically a virtual machine).
* Systems vulnerable to malware infections (primarily Windows, but may include other systems and mobile devices) are running a high-quality virus scanner (such as Avast or ClamAV) that automatically updates its virus definitions at least every 24 hours, detects malware in a real-time fashion, and completes a full system scan at least every week. In addition, Windows users are expected to run a general malware scanner (which may be integrated into the virus scanner, or may be separate, such as Ad-aware or Spybot - Search & Destroy) that detects accidentally installed malware that does not qualify as a virus.
* A firewall is configured to block all unsolicited incoming connections to systems that store confidential information (or contain saved passwords that provide access to confidential information, although we discourage saving of passwords). This can be a network router NAT based firewall, or a software based firewall running on your local machine. This applies to all operating systems.
    * For laptops that are used in hostile network environments (including public places such as cafes or airports) a software based firewall is mandatory.
    * For users of Unix based systems, such as GNU/Linux and OS X, it is acceptable to open port 22 to allow external SSH access to home/office computers, as long as these systems are up-to-date with security patches and they use strong account passwords or SSH keys.
    * It is particularly important to ensure that network shares, databases and local development sandbox versions of web sites are not publicly visible, both when working from home/office and when working in public places.
* User accounts on all systems must be password protected (using passwords that adhere to our password policy) and require entering the password on initial startup, as well as on resume from "sleep" mode.
* Whenever practical, work should be done from under a relatively non-privileged (user) account, not from an account with administrative privileges on the computer. Working under the latter is more likely to result in unintended installation of malicious software that would be harder for an anti-virus program to detect and cure. Thus, even if you're the only person using a computer (such as a laptop), it is a good practice to create two accounts on the computer: a "user" and an "administrator", and use the "user" account for most activities.
* Untrusted software should not be installed - this includes software you have never heard of, as well as known software that was downloaded from sources other than the author's site or a trusted, established repository.
* Be cautious opening e-mail attachments or files sent over instant messengers or similar systems. Even if the attachment is from a contact you recognize, if it is unexpected and does not indicate a project or discussion you recognize it is wise to e-mail the person separately to confirm that they sent the message. The reason for this is that it is common for malware to use e-mail software contact lists to send e-mails masquerading as a known contact with the malware attached.
* Do not access CivicActions IT systems using an untrusted computer (for example an Internet cafe or library system). This is because these systems can easily be infected with malware that transmit user activity to a 3rd party.
* If technically possible, additional protections such as encryption of your home directory (with a strong passphrase not reused for another purpose) and "remote wipe" of lost mobile devices are encouraged.
* When connected to wired or wireless Internet connections associated with CivicActions (for example while at company sprints/retreats or when visiting client site offices), users are expected to follow the appropriate terms and conditions of that provider, and to avoid initiating network traffic (e.g. by visiting specific websites or running file sharing software) that may bring our reputation into question.

If a system is believed to be compromised, either through theft, loss, remote access, virus/malware infection, CivicActions IT should be informed immediately.

## Password Policy

Passwords are used to protect many of our systems and services.

All passwords at CivicActions must follow this policy, including passwords used for:

* Personal computers or devices that access CivicActions services or store confidential information.
* Passphrases used for PGP or SSH encryption keys.
* Personal accounts on any CivicActions internal or client site or service.
* CivicActions accounts on 3rd party vendor sites.

### Strong Passwords are Important

* Consider using a password manager (see below). If you use a password manager, you can skip the rest of this sub-section.
* Consider using a passphrase even where a "password" is requested. These tend to be easier to remember and stronger than passwords. A reasonable passphrase consists of 4 words or more (3 words is the minimum, allowed only if the word combination is extremely uncommon and additional non-letter characters are used along with the words). You may separate the words with arbitrary characters of your choice (digits, symbols, whitespace, even letters), which adds extra security. You may also purposely misspell or mangle the words, but only in a way you can remember.
* If you choose to (or are forced to) use a short "password", include a mix of upper and lowercase letters, numbers, and symbols in it.
* Password length should be around 10 to 14 characters if permitted, and longer still if possible while remaining memorable.
* Avoid any passwords based on usernames, people or pet names, dictionary words in any language (unless meeting requirements for a passphrase, above), dates, ID numbers, repetition (too few different characters), letter or number sequences, keyboard patterns, etc.
* Password should be easy to remember – you can use mnemonics (the first letters of a line from a poem or song, for example), but you also need to add multiple non-letter characters - or better yet, just use a passphrase as suggested above.
* Avoid using the same password for multiple sites or purposes – passwords for client sites should substantially differ from passwords for internal accounts, and neither should ever be used for third party or non-CivicActions accounts.
* A passphrase that you use for encryption (such as on a GnuPG/PGP or SSH private key, or with an encrypted file system) must not be reused for authentication to a system. In general, an encryption passphrase should typically be stronger than those used for authentication.

### Password Managers and Two Factor Authentication

A password manager (such as LastPass) can easily create and maintain hundreds of different 16 character (or more!) passwords. It is not required to use a password manager at CivicActions but we highly recommend it. (Exception: IT staff must have a LastPass account for password sharing.) Be sure to choose a strong password for your password manager.

Modern password managers - and many other services such as Google Apps, GitHub, Slack and more) now accept Two Factor Authentication that can greatly increase the security of the protected assets. CivicActions requires TFA for access to the CivicActions Google Apps such as GMail and Docs as well as OATH-authenticated apps such as GitLab.

Please see the [Security Awareness and Tools](../09-security/awareness.md) document for details on these subjects and more.

### Handling Passwords

* Passwords to personal system accounts must never be given to anyone, including IT team personnel and management. IT staff will never ask for your password.
* Passwords should not be "written down" in a non-encrypted file (if you feel you have to start writing down some "low-value" passwords in order to maintain a large number of different ones, which is a reasonable tradeoff, then please use an encrypted file protected with a strong passphrase, or only write down password hints rather than the actual passwords). Or use a password manager.
* Passwords must never be transmitted or stored in a clear text (i.e. readable) format.
* Passwords can be stored and transmitted by computer when encrypted with GnuPG public key encryption. IT services can offer support getting this set up if needed.
    * The unencrypted clear text contents of a GnuPG encrypted file/message should only ever be viewed then discarded, but not saved in decrypted form.

### Some Exceptions

* On occasion, "starter" passwords for new accounts on web sites may be transmitted/stored in clear text, on condition that the recipient immediately logs in and sets a new strong password. Both the starter and new passwords must adhere to the strong password policy. If possible it is preferable to use a "one time" login link, or transmit "starter" passwords with GnuPG or via phone, email, SMS, Slack, etc. When transmitting a password electronically in clear text, do not include the username or website URL in the same message.
* The MySQL vhost password is stored in clear text form on the vhost for usage by Drupal and deployment/testing scripts (e.g. drush).
* The "basic auth" pop-up credentials used on dev/qa and pre-launch instances of client sites can be stored in plain text on the project management system, for easy client reference.
* There are a few 3rd party services that we have shared accounts for, and which store no confidential information - for example: CrossBrowserTesting.com. These passwords can be stored/transmitted in clear text within the team.
* If you suspect a password has been compromised (for example, it was accidentally typed into an unencrypted chat session), change the password immediately yourself if possible, or inform IT right away, so that the password can be changed by a sysadmin.
    * This includes the case when a client sends a name/password pair in the clear in an email.

### Private Keys

* SSH public/private key pairs are used to access CivicActions servers.
* GnuPG (PGP compatible) public/private key pairs are used to transmit and store credentials to CivicActions client sites and internal services.
* It is absolutely critical that all SSH and GnuPG/PGP private keys are protected by a very strong passphrase. Having such keys with no passphrase is forbidden. (As an exception to this, additional public/private key pairs may be generated for specific tasks that require full automation, subject to approval by IT.)
* SSH and GnuPG/PGP private key passphrases must not be reused for any other purpose or site.
* The private key files themselves should be kept in as few places as possible (ideally just your primary computer; a home server is also acceptable for storage of a backup copy of the encrypted key, but not for use of the key).
* Private keys should never be placed on external servers – if you need SSH access to one server from another server (typically for a large data transfer), generate a dedicated key pair for that purpose or tunnel SSH over SSH port forwarding (ask IT for instructions).
* If you suspect a private key file (or its passphrase) has been compromised, inform IT immediately, so that we can revoke the corresponding public key on our servers.
* Keys must be 2048 bits as a minimum (keys using lower strengths must be replaced). 4096 bits or higher is recommended for new keys.
* Passphrases may be cached, but should expire after 1-2 hours or at the end of each login session for desktops and laptops and after 5-15 minutes for mobile devices.

## Server & Site Security

Web administrator access to websites, working on source code, and access to servers (SSH/shell, file system, database), carries a high-level of responsibility and trust. You are expected to be familiar with and follow our best practices and processes, as well as maintain your skills and know your own limits.

Usage of CivicActions developer accounts should be as follows:

* Usage must be directly related to your work with CivicActions - personal use (including personal projects) must be approved in advance by the CIO.
* Use in any way harmful to CivicActions or our clients is forbidden.

Web administrator account holders (Drupal, CiviCRM or other) must also:

* Be familiar with how to maintain configuration security ([drupal.org/security/secure-configuration](http://drupal.org/security/secure-configuration)).
* After changing site permissions, the site must be tested by logging in as a user with each affected role and ensuring that access is limited correctly.
* After changing settings affecting content/data access control, the site must be tested to ensure the settings are correct.
* The use of PHP in the web administration interface is strongly discouraged (as this code is harder to find and hence audit).
* Respect the privacy of site users, avoiding accessing personal data such as private messages.

Developers and themers working on the site codebase (and committing code to Git) must also:

* Ensure their own code follows Drupal coding standards ([drupal.org/coding-standards](http://drupal.org/coding-standards)) and security standards ([drupal.org/writing-secure-code](http://drupal.org/writing-secure-code)), and is well abstracted and commented throughout. The project technical lead (or a designated lead engineer/lead themer or peer-review process) is responsible for reviewing all new/modified code each sprint, and ensuring it meets a high standard of quality.
* Ensure the standard dev-qa-live process is always followed, such that all changes that may affect site security can be thoroughly tested before being made live.
* Ensure that external developers (client or 3rd party) working on the site codebase are either:
    * A full part of our developer team, such that they been assessed/trained to have the appropriate skills and are subject to TL code review.
    * OR: The client confirms understanding that we have not assessed their skills or are reviewing their code. This scenario is best avoided, but is sometimes necessary if the site is being transitioned to another developer.
* Review all contributed code they have not previously used for basic quality - this is not a formal security audit in most cases, but rather checking the usage stats, issue queue, skimming the module code for readability and adherence to good practices etc. Code that is actively used and maintained and follows best practices is less likely to have serious security issues.
* Check for security advisories ([drupal.org/security](http://drupal.org/security)) for modules used on each active development site and ensure they are upgraded where necessary, before the site is made live.
* Understand common attack vectors and the best practices for preventing them, including:
    * SQL injection, prevented by proper query construction and placeholder usage.
    * XSS (cross site scripting) attacks, prevented by ensuring user data is always sanitized as appropriate on output.
    * XSRF (cross site request forgery), mitigated by ensuring URLs that perform actions (including pages that process GET/querystrings) carry an unpredictable token included on URL generation.
    * Session hijacking, prevented by using SSL and correct site/session settings.
    * Data disclosure, prevented by carefully setting and testing access control, as well as using SSL as needed.
    * Password guessing attacks, mitigated by using strong passwords.
* Software that is not licensed under an approved CivicActions open source license may not be used on a project without prior approval from the legal team.

Developers and themers maintaining local sandbox copies of client sites must also:

* Ensure that our standard tools for creating, sanitizing and transferring database dumps for sandboxes are used.
* Ensure that unsanitized mysql data (created via mysqldump or phpmyadmin) to sandboxes is not downloaded from the server to a local sandbox.
* Ensure that all confidential data associated with a project (such as databases, database dumps and other files) are securely deleted from their system(s) when leaving or completing a project.

Developers and themers working on the site vhost (SSH/shell, file system, database) must also:

* Ensure they follow best practices with respect to SSH keys, passphrases and passphrase caching (see above).
* SSH, SFTP and SCP access to vhosts are managed exclusively by designated admin(s). Access by password, manually installed SSH keys (other than by admins), web based "shell" script, port forwarding to 3rd parties or other methods are forbidden by unless authorized in advance by the CIO.
* Temporary SSH port forwarding is permitted for the purpose of accessing the server MySQL from your own desktop.
* Accessing CivicActions servers by initiating an SSH connection from external client or 3rd party servers is strongly discouraged - it is preferable to SSH out from the CivicActions server.
* Running non-standard software on a vhost requires a system ticket and approval from a member of the IT team. This includes:
    * Daemons (persistent, long running processes)
    * Binary software (compiled on the vhost or elsewhere)
    * Web accessible scripts/CGIs that do not use solely an established framework
* Please inform the IT team as soon as possible if unusual resource usage is anticipated, so that we can monitor resource utilization and ensure backup processes run correctly. This can include high traffic events, large data/media file uploads or high CPU/RAM usage (e.g. during large imports).

IT team system administrators working on CivicActions servers must also:

* Take the utmost caution when working on server configuration - document and test each change.
* Non-urgent yet risky changes (those with significant risk of introducing undesired side-effects) should only be made when the person expects to remain online and available for a while after the change.
* Not work on site/user files as root - but "su" to the account first.
* Respect the privacy of server users, avoiding accessing others' personal data such as e-mails.
* Work with the IT team to ensure server and backup health is monitored and alerts are responded to promptly.
* Ensure offsite backups are transferred and stored only in encrypted form.
* Ensure the Hurricane Electric and RimuHosting access list (that controls remote hands and physical server access) is maintained.

## Security Awareness and Tools

We maintain a [Security Awareness and Tools](../09-security/awareness.md) document that dives deeper into some additional topics, including:

* Password Management Tools
* Two Factor Authentication
* Phishing and Social Engineering
* Backups
* Secure Delete Files and Wiping Disks
