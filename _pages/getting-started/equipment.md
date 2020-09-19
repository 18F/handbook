---
title: Equipment
questions:
  - equipment
  - tts-equipment@gsa.gov
---

GSA issues every TTS employee a badge, laptop, and phone. Your MacBook should be ready before your first day, but your phone may not be. The Operations Team submits phone requests to IT on your behalf, and you'll receive a confirmation email within a few weeks when your phone is ready for pickup.

### Distributed employees

Badges are shipped to your local GSA office. You will receive an email once your badge has been shipped. At that point, you can make an appointment to pick it up. Your badge may be available during your orientation -- send an email to [hspd12.security@gsa.gov](mailto:hspd12.security@gsa.gov) to save yourself a trip. You may also ask your orientation leader to show you where to pick it up.

## Laptop

TTS employees are issued an Apple MacBook Air/Pro computer. Note that this is not the norm for GSA. See [information about using PIV card readers]({{site.baseurl}}/piv/).

### Operating System

Your laptop will come preloaded with the latest, GSA-approved Mac operating system. At this time, GSA is not ready to upgrade to the [Catalina macOS](https://www.apple.com/macos/catalina/). The TTS Tech Portfolio will send out a TTS-wide email and update the most recent [notification](https://gsa-tts.slack.com/files/T025AQGAN/FP49NEXMY?origin_team=T025AQGAN) in Slack when it is appropriate to upgrade.

### Rules

**Lock your computer before leaving it.** Press the **Control + Shift + Power** keys on newer MacBooks or **Control + Shift + Eject** on older MacBooks with optical drives. If you use Alfred, you can open Alfred and type lock.

**Back up your machine.** Make a copy of your startup disk before you encrypt it. Your Mac has a built-in backup system called Time Machine (accessible from System Preferences) that will regularly back up the main disk to any compatible network server, connected hard drive, or partition you choose. Please ensure Time Machine backups are encrypted by selecting the **Encrypt backups** checkbox when you choose the destination disk.

**Encrypt all portable media that will connect to any TTS system.** You can apply FileVault encryption to removable USB drives and external hard drives by right-clicking the drive on your desktop and clicking **Encrypt**. You must choose a strong password you can remember, as your drive will require the password to mount and retrieve data once encrypted.

### Loaners

You can [request a loaner PC through the IT Service Desk](https://gsa.servicenowservices.com/sp/?id=sc_cat_item&sys_id=403e07527897a400ce3ddff91a649427&sysparm_category=2318125b7cec0100a6e757fe35f45f9f).

### Admin rights

People doing technical work often have a need to install software dependencies and utilities like command line tools. These vary greatly from task to task and developer to developer and change frequently, and thus it is not realistic to have them packaged by GSA IT for installation. Similarly, there are occasions where a developer may need to make modifications to their operating system that require `sudo`, such as modifying the `/etc/hosts` file. For these reasons, people doing technical work at GSA have a need for administrative rights.

A user can be granted administrative rights on a GSA-issued Mac if they need to run/edit any custom software locally. This custom software can be web applications, static site generators, scripts, etc. for things like:

- Software development
- Infrastructure maintenance
- Prototyping
- Content auditing
- Testing
- Data science
- etc.

"Engineer" (or similar) being part of their title is not required.

See the [**procedures to request admin rights**](https://docs.google.com/document/d/1xepZsh83lxPDykrb1NXoeHxj8m78qsdW-9KqzO_CHOQ/edit).

### Tips

- Run the [laptop script](https://github.com/18F/laptop) which will turn your Mac into an awesome web development machine.

## Phone

TTS employees are issued an Apple iPhone. The TTS Talent Team will already have submitted a request to GSA IT for your work phone before you join TTS. Within a few weeks of starting at TTS, you should receive a confirmation email letting you know that your phone is ready for pickup. If you work in an office besides D.C. or are remote, please contact the [Talent Team](mailto:tts-talentteam@gsa.gov) when you receive this email and a team member have your phone mailed to you.

### Rules

- GSA IT will ask for your Apple ID and password. **Do not send your personal Apple ID or password to IT.** Ask them to set up a new Apple ID with your GSA email address, or set one up for yourself and use Google Hangouts to send them your password. (Never share passwords over email.)

- Change the phone's passcode. The new code should be known only to you.

- **Activate [Find My iPhone](https://support.apple.com/kb/PH2697?locale=en_US).** If you're on an Android phone, activate [Android Device Manager](https://www.google.com/android/devicemanager).

- After GSA IT provisions your phone, set up two-factor verification:
  - To get started, email [hspd12.security@gsa.gov](mailto:hspd12.security@gsa.gov) and ask them to add your work cell phone number (which you may or may not have) and your personal cell phone number to your GCIMS profile.
  - Once you have access to [HR Links]({{site.baseurl}}/gsa-internal-tools/#hr-links), you can update your contact information there. You'll find it under **Navigator > Self Service > Personal Information > Phone Number Change (USF)**; make sure to set the phone type as "Business Mobile" so it correctly populates GCIMS and works for 2FA.
  - You can learn more about using your phone for two-factor authentication in our [Slack]({{site.baseurl}}/tools/slack), [GitHub]({{site.baseurl}}/github), and [Gmail]({{site.baseurl}}/gmail) guides. For two-factor authentication with this applications, you can use SMS, [Authy](https://www.authy.com/), or [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en).

### Tips

- **You can use your phone to access your email.** You should be prompted to sign in with your ENT username and password. Note that the GSA IT Service Desk does not support this connection, so please do not ask them about it as they will reject your request.
- **[You can tether to your laptop to iPhone](https://support.apple.com/en-us/HT204023)** for internet access when you're on the go.
- If you can't send email with your new work iPhone, create a new email and check the From field. If it's a jumble of letters and numbers `@secure.mass360.com`, tap on it to change it to your `@gsa.gov` email address. Then go **Settings > Mail > Default Account > GSA Account** to switch the default address.
- If you stop getting email on your phone and can't log into your account, [contact the Service Desk]({{site.baseurl}}/gsa-internal-tools/#it-service-desk).
- To reduce waste, GSA IT will [disable mobile service for inactive accounts](https://insite.gsa.gov/portal/content/663074). The consumed minutes is the metric used to determine activity, so if you only use the phone for data, you'll still need to make an occasional call on your mobile phone to prevent the account from going inactive.
- If you need help with your phone, [contact the GSA IT Service Desk]({{ "/gsa-internal-tools/#it-service-desk" | relative_url }}).
- For information on which mobile phones are available on GSA's current contract, employee discounts, voicemail setup, commonly used apps to install, mobile security, traveling with your smartphone, the GSA smartphone replacement process, and more, see [Mobile Devices](https://insite.gsa.gov/employee-resources/information-technology/do-it-yourself-self-help/mobile-devices-phones-tablets).

## Software

See the [software](../software/) page.

## Peripherals

If you are based in an office, you can check out mice, keyboards, and trackpads to assist you in your work. They are already available, so there is no need to make a purchase request. Ask in the Slack channel corresponding to your office.

To get replacement/additional peripherals (chargers, dongles, etc.), open a [micropurchase request]({{site.baseurl}}/purchase-requests/).

## Equipment to accommodate disability

GSA provides equipment to accommodate an injury or disability under these conditions:

- You have supporting medical documentation for the need for a certain piece of equipment.
- You only need the equipment to do your work.

To purchase this type of equipment, attach a doctor's note. If you have questions, ask in [#equipment](https://gsa-tts.slack.com/messages/equipment) or [tts-equipment@gsa.gov](mailto:tts-equipment@gsa.gov). [More information.](https://insite.gsa.gov/topics/information-technology/508-accessibility/center-for-information-technology-assistance-cita)

## Repairs

For issues with any GSA-provided hardware (such as laptops or phones), [contact the GSA IT Service Desk]({{ "/gsa-internal-tools/#it-service-desk" | relative_url }}).

## Lost or stolen equipment

If TTS-issued equipment is lost or stolen, follow these mandatory steps. Employees must follow the GSA procedures for lost or stolen equipment or missing PIV cards, and alert TTS in [#equipment](https://gsa-tts.slack.com/messages/equipment):

### Access card

See [InSite page](https://insite.gsa.gov/employee-resources/safety-and-security/background-investigation-access-card-process/gsa-access-card/report-lost-or-stolen-gsa-access-card).

### Other

For lost work laptops, phones, etc., do the following as quickly as possible:

1. Follow the [GSA-wide steps](https://insite.gsa.gov/topics/information-technology/assistance-and-help-desks/report-stolen-equipment).
1. Inform your team.
   - Your access to various systems may need to be temporarily removed.
1. Inform [#equipment](https://gsa-tts.slack.com/messages/equipment).

If your equipment is returned to you, it may have been tampered with and should not be used. Return the equipment to GSA IT so they can inspect it, and if necessary, re-image it.

## Requirements for passwords

Read the guide on [setting and managing passwords](../password-requirements/).
