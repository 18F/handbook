# Security Awareness and Tools

This is an appendix to the [CivicActions Security Policy](../03-policies/security.md) containing details that can and should be updated regularly as new technologies or patterns of use develop, with a goal of providing team members the best tools with which to maintain the security of company confidential and personal information.

_This is currently - and probably always will be - a work in progress. Pull Requests welcome._

## Securing your Laptop

The operating system and software applications on your laptop - and all computers, phones, tablets, etc. in your house - should be kept up to date with new versions and security patches that ensure it presents a minimal attack surface to potential adversaries. (This is mentioned in the [Security Policy](../03-policies/security.md) but is worth repeating.)

Additionally, your laptop should lock (require a password to resume) on screen close and after 15 minutes idle time.

- [GNU/Linux specific instructions](./yubikey/linux.md#screen-lock-when-idle-or-lid-closed-x-server)
- [Mac OS X specific instructions](./yubikey/macosx.md#screen-lock-on-lid-close-or-idle)

## Password Management Tools

A password manager will enable you to have unique, strong passwords for every service that you log into. Good password managers will generate new passwords for you, auto-fill web forms, allow extra protection for high-security accounts (like banking), and more. Choose a password manager that encrypts locally (in your browser, so you don't have to trust the provider to keep their data safe) and that has iPhone and Android apps that will auto-sync with the manager. At CivicActions, we currently recommend LastPass as it is the most full-featured, but we are keeping a close eye on the FOSS KeePass and Password Safe solutions.

### LastPass

- The [LastPass](https://lastpass.com/) password generator can easily create and maintain hundreds of different passwords. And LastPass has free iPhone and Android apps.
  - We recommend a minimum of 16 character passwords using all character types. (Some old systems will need you to lessen this level of security, but those are few.)
  - Once you have all your passwords in LastPass, take the "Security Challenge" - your score should be 80% or higher.
- LastPass is required for members of the CivicActions System Admins and DevSecOps Team.
- We recommend LastPass premium but do not require it. A premium account will enable unlimited sync across your devices and more robust two-factor authentication (e.g. with a [YubiKey](#yubikey) token).
- Set up Two Factor Authentication on your LastPass Account (see below). LastPass will be storing all your passwords, so make it secure.
- It is fine (and perhaps preferable, because your browser can only use one LastPass account at a time) to use a personal email address to create your LastPass account.
- CivicActions also requires that you have a [backup second factor authenticator](#two-factor-redundancy-and-tfa-backup-codes) for your LastPass account.

### Disable Browser Password Autofill

LastPass provides secure password management especially when unlocked via Two Factor Authentication. Storing new passwords created in LastPass in your browser completely defeats this security, enabling anyone with access to your browser access to all your sites. If asked by your browser "Do you want to save this password in your browser?" answer "**No**". Then disable this insecure action altogether:

- In Chrome, go to chrome://settings/ and uncheck "Offer to save your web passwords"
- In Firefox, go to about:preferences#security and uncheck "Remember logins for sites"
- In Safari, go to Preferences >> Passwords and uncheck "AutoFill user names and passwords"

## Use Two Factor (or 2-Step) Authentication (TFA, 2FA)

Two-Factor Authentication (TFA) includes something you know (e.g. your memorized password) and something you have (e.g. your smartphone or a YubiKey) and can greatly increase the security of your systems. CivicActions recommends you use Two-Factor Authentication for services that support it.

For example, as your password manager grows to have more passwords in it - not only CivicActions systems and clients but also your personal bank accounts, credit cards, school records, etc. - it becomes increasingly important to have it protected by more than just a password.

CivicActions requires that its employees and contractors that are given access to the CivicActions Google Apps - that include GMail, Hangouts and Google Docs access - use Two-Factor Authentication on their CivicActions Google Account.

### Two-Factor Authenticators (TFA)

There are many hardware and software tools for creating secure "one time passwords" (OTP). Three that we frequently use internally are described below. _(Note that Google Authenticator is no longer recommended as it does not support encrypted cloud backup.)_

Do not rely on SMS text messages for general two-factor authentication as it is less secure than others listed here. At the time of this writing, however, setting up Two-Factor Authentication on your Google account initially requires SMS verification. This is OK, and also serves as a "TFA Backup" mechanism (be sure to see the essential section below on [Two-Factor Redundancy and TFA Backup Codes](#two-factor-redundancy-and-tfa-backup-codes)).

#### LastPass Authenticator

- This provides tight integration with some apps, see: <https://lastpass.com/auth/>
- For more info, see: <https://support.logmeininc.com/lastpass/help/lastpass-authenticator-lp030014>

#### Authy

- For installation instructions (iPhone or Android), see: <https://authy.com/download/>
- Guides for setting up Two-Factor Authentication: <https://authy.com/guides/>

#### YubiKey

Once set up, your YubiKey greatly simplifies the process of Two-Factor Authentication (TFA). While at home, keep the key plugged into an unused USB port and simply touch the button if asked to authenticate. This saves time while enabling the strongest security. While on the road, the nearly indestructible YubiKey attaches easily to your keychain _(and should only be inserted when authenticating)_.

- See "[Let’s get your YubiKey to work](https://yubico.com/start)" (from Yubico) on how to use TFA with: [GMail](https://www.yubico.com/why-yubico/for-individuals/gmail-for-individuals), [LastPass](https://www.yubico.com/works-with-yubikey/catalog/lastpass-premium-and-families/), [GitHub](https://www.yubico.com/works-with-yubikey/catalog/github/) and many other services.

While YubiKey is the easiest to use on a daily basis, if you lose it you could get locked out of all your systems so be sure that you have set up [Two-Factor Redundancy and TFA Backup Codes](#two-factor-redundancy-and-tfa-backup-codes).

### Partial List of TFA-Enabled Services

- LastPass: [Multifactor Authentication Options](https://helpdesk.lastpass.com/multifactor-authentication-options/)
- Google: [2 Step Verification](https://support.google.com/accounts/topic/28786?hl=en&ref_topic=3382253)
- GitHub (especially for your [CivicActions account](https://github.com/CivicActions)): [Securing your account with two-factor authentication (2FA)](https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/)
- GitLab: See [your profile](https://git.civicactions.net/profile/account)
- iCloud: [Two-factor authentication for Apple ID](https://support.apple.com/en-us/HT204915)
- Slack: [Enabling two-factor authentication](https://get.slack.help/hc/en-us/articles/204509068-Enabling-two-factor-authentication#enablingtwofactor-authentication)

### Two-Factor Redundancy and TFA Backup Codes

As a final, crucially important step, **_you must have a backup second factor for all your TFA accounts_**. Imagine that you use a YubiKey to unlock LastPass and you lose it. Without a backup second factor, you would be effectively locked out of all of your accounts. So you need a backup.

SMS can often be an easy backup, but it is known to be insecure. Most services that provide TFA provide multiple second factor options, and we recommend that you set up at least one of several backup strategies for each TFA-enabled service you use:

- Have a second YubiKey in safe keeping (the author of this article has three).
- [Authy](#authy] and [LastPass Authenticator](#lastpass-authenticator) provide ever-changing 6-digit codes and can securely backup to the cloud, so if you lose your phone you can pull your information back out of the cloud when setting up your new phone. _Hint: store your cloud backup password in LastPass (but make sure you have another mechanism to unlock LastPass!)_
- Many services offer a downloadable set of single use "backup codes" that can be printed and kept in a safe place. _Hint: you can store backup codes from other services in LastPass in the Notes section._

## Phishing and Social Engineering

Social engineering is the most common attack vector used to compromise computer systems. Social engineering relies heavily on human interaction and often involves tricking people into breaking normal security procedures. The following is a brief reminder of some of the methods used, but is in no way complete.

- Phishing
  - Is the email from someone you know and contains expected information?
    - Emails from unknown people asking for some action on your part is the most common form of phishing.
  - Don't click on links or open attachments:
    - Unless you trust the sender and expect the link or attachment,
    - Even if you trust the source (a From: address can be spoofed) hover first and check the URL
  - If in doubt, ask an IT member (e.g. via Slack) or forward the email to an IT member
  - [More on Phishing avoidance (from EFF)](https://ssd.eff.org/en/module/how-avoid-phishing-attacks)
- Windows Technical Support
  - "Windows Technical Support has noticed that you have viruses or other malware on your computer..."
- Baiting
  - Seemingly innocent (or interesting) abandoned USB, CD, DVD media with autorun
- Public Wi-Fi (e.g., coffee shop, airport, library)
  - Turn off sharing
  - Don't automatically connect to unknown Wi-Fi hotspots
  - Confirm the network name - know the name of your hotspot!
    - Watch out for an "Evil Twin" - a hotspot that looks good but could be an access point set up by an attacker (e.g., "StarbucksGuest" or "DeltaFreeWifi")
  - Turn on your local firewall
  - Use a VPN if possible
    - CivicActions has an [internal company VPN](https://git.civicactions.net/devops/internal-it-wireguard-vpn/tree/master) that has a static exit IP that can be whitelisted to CivicActions' client sservices
    - If you always use HTTPS and SSH for connectivity, you are essentially creating a trusted VPN tunnel with every connection. There could still be metadata collection and local DNS spoofing, but [public Wi-Fi is now reasonably safe](https://www.eff.org/deeplinks/2020/01/why-public-wi-fi-lot-safer-you-think)
  - As usual, never enter your name or password information:
    - when on an insecure (non-HTTPS or SSL encrypted) connection, or
    - to a site that you have not verified is correct (by examining at the URL)
  - [More on public Wi-Fi network safety (from LifeHacker)](http://lifehacker.com/5576927/how-to-stay-safe-on-public-wi-fi-networks)

## Keep Your Systems Up-to-date

One of the best ways to protect yourself from being hacked (other than via a social engineering pathway) is to keep your software on your computers and phones up-to-date. Sometimes you may reasonably want to wait for a .1 or .2 release before updating after a new major release, but don't get far behind. Also, if you have a Windows machine, you _must_ maintain an up-to-date anti-virus package on it.

## Disk Encryption and Storage Management

Most modern disks (and SSDs) have self-encrypting drive (SED) technology built in. CivicActions highly recommends SSDs for their increased speed and the hardware-based encryption (self-encrypting drive or "SED" technology) that will protect the drive when the machine is off. This is particularly important for laptops that can be easily stolen. When you buy a new disk or configure a new laptop, turn on the disk encryption. Some CivicActions clients will demand it. (Contact your product manager to see if you are eligible for a hard disk rebate.)

### Software Disk Encryption

If you haven't set up your hard drive with hardware encryption, there are software alternatives that you can use until you get yourself a new drive. Note that these methods incur a small performance penalty with respect to hardware encryption, but they are relatively quick and easy to set up.

#### macOS: FileVault 2

CivicActions strongly recommends full disk encryption (FDE) with FileVault, and requires it on Macs supplied by CivicActions for specific client work.

- [Use FileVault to encrypt the startup disk on your Mac](https://support.apple.com/en-us/HT204837) - setup instructions

Much more technical detail on securing your Mac: [macOS-Security-and-Privacy-Guide](https://github.com/drduh/macOS-Security-and-Privacy-Guide/blob/master/README.md). _This is useful but well beyond what is required by CivicActions._

#### Windows: BitLocker or DiskCryptor

To see if BitLocker is supported on your version of Windows, open up Windows Explorer, right-click on C drive, and see if you have a "Turn on BitLocker" option (if you see a "Manage BitLocker" option, then congratulations, your disk is already encrypted.) If you don't have BitLocker available, google the open source DiskCryptor.

#### GNU/Linux: use the hardware

Unlike Mac and Windows, you can only encrypt your drive during system installation. Might as well buy a new SSD with hardware encryption or - during install - enable [Linux Unified Key Setup (LUKS)](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup) which comes standard with most distributions.

### Backups

With more work captured in the cloud by Slack, Gmail, Google Drive, GitHub, etc. there is less that needs to be backed up. But you won't know what you'll miss until your system doesn't boot up because of an unrecoverable hard drive (or SSD) error. At the least, back up your security keys and personal preferences directories, such as (examples in GNU/Linux):

- `~/.ssh/`
- `~/.gnupg/`
- `~/.config`

Consider committing your personalization files (like `~/.bashrc`) into a Git repository. Just make sure that you do _not_ commit any files that may contain private keys or passwords.

While it's preferable that you _not_ backup any company or client sensitive files or data, it is critical that such data is completely deleted from your machine(s) when you stop working for that client.

If you use any backup mechanism more complicated than simply copying the files to another medium, ensure that you know how to restore the files, too, as backups are worthless if you can't retrieve them.

Finally, there is no good reason not to be making backups: a one _terabyte_ external USB drive costs less than \$60 on Amazon.

### Securely Delete Files and Wipe Disks

When you delete a file, it doesn't actually go away. Usually, all that occurs is the file name and a pointer to its bits are removed from a directory listing. With the proper tools, deleted files can be recovered. For this reason, it's important that old disks be securely wiped before being given or thrown away. Some pointers are given below:

GNU/Linux:

- [How to delete file(s) in secure manner?](http://askubuntu.com/questions/57572/how-to-delete-files-in-secure-manner) (Ask Ubuntu)
- [How to: Delete your Data Securely on Linux](https://ssd.eff.org/en/module/how-delete-your-data-securely-linux) (from the EFF Surveillance Self-Defense guide)

MacOS:

- [How to erase a disk for Mac](https://support.apple.com/en-us/HT208496) - if erasing your startup disk, use macOS Recovery
- [About macOS Recovery](https://support.apple.com/en-us/HT201314) - which will lead you to reinstallation:
- [How to reinstall macOS from macOS Recovery](https://support.apple.com/en-us/HT204904)

More information and resources:

- [Guidelines for Media Sanitization](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-88r1.pdf) (pdf) (NIST SP 800-88, December 2014)
- [ATA Secure Erase](https://ata.wiki.kernel.org/index.php/ATA_Secure_Erase)

## Protecting Your Privacy

CivicActions believes that your privacy is a right, and that private communications can be beneficial to business. Here's some tips on how FOSS can help:

- [Protecting Your Privacy with Encryption](./encryption.md)
