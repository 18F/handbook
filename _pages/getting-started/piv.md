---
title: PIV card
---

All personal computers at GSA need to use PIV (a.k.a. Smart) cards to log in. This means you'll use a PIN when logging into your Mac, as well as when you perform other actions on your Mac that require a password. It is not a replacement for your ENT password. Here are some common questions (and answers) that may help.

## Password vs. PIN

When the computer first turns on from off/restart, you will use your Mac password. Past that, the PIV+PIN should be used. When the card reader is connected (and working properly), the prompt will change from "password" to "PIN". PIV + PIN authentication will be required:

- at login
- when unlocking your screensaver
- when running the `sudo` command in the terminal (mostly needed for development tasks)
- when installing certain applications
- when making changes in System Preferences
- when performing any other action that currently requires your laptop password that isn't covered above

If you are prompted on your laptop to "reset your password", it is referring to your "local" Mac password, not your ENT or PIN. Please complete those steps right away, as there's a timeout.

The GSA Self Service app uses your ENT credentials.

## PIV readers

### Types

GSA has a few different types of USB-C readers:

- [Stanley Global "pigtail"](https://www.amazon.com/gp/product/B074TCZ1XG/ref=oh_aui_search_detailpage?ie=UTF8&psc=1&pldnSite=1)
- [ACS "butterfly"](https://www.amazon.com/ACR39U-NF-PocketMate-USB-C-Smart-Reader/dp/B06X9NTGYV/ref=sr_1_2?ie=UTF8&qid=1546874760&sr=8-2&keywords=ACR39U-NF+PocketMate)
- [ACS "pigtail"](https://www.amazon.com/Smart-Card-Reader-ACS-ACR39U-I1/dp/B016IY2P7M)

Since the new Macs only have two USB-C ports, and you'll find one of them is taken up by power and the other taken up by the PIV reader, you'll probably end up needing a dongle after all, if only to regain a spare USB port.

If you do need to use a dongle, there's one more wrinkle: The dongle may not provide enough juice to power the USB-C PIV reader. In that case, you'll need to plug the PIV reader directly into computer. You can plug the power cord into the dongle, then plug the dongle into the computer, so you are powering the computer through the dongle.

If you get the folding kind of reader, it will appear to block the second USB-C port, but you can thread the power cable or dongle cable through the reader's frame to access the second port.

### Issues

If the card is lost, follow [these instructions]({{site.baseurl}}/equipment/#lost-or-stolen-equipment).

#### Card reader unreliable

Everyone should have two readers (so they have a backup) --- [request a backup and/or replacement]({{site.baseurl}}/equipment/#peripherals) if you don't.

#### "SmartCard certificate is not trusted" error

If this error message appears after a period of working, functional PIV login and authentication, it could be a poor connection between the PIV and the reader. Try cleaning the contact pad on the PIV with a pencil eraser. Wipe any eraser debris off afterwards, and reinsert the card into the reader and try again.

## Forgot your card

Please [contact the Help Desk]({{site.baseurl}}/gsa-internal-tools/#it-service-desk) and they will assist you in logging into your Mac by temporarily enabling your computer to use a username and password. This can be done remotely, as long as you are connected to the internet. They can also help get a new card reader mailed to you.
