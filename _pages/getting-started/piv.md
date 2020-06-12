---
title: PIV card
---

GSA is rolling out a new requirement that everyone uses a PIV card to access Macs. This means you'll use a PIN (plus the PIV card) when logging into your Mac, as well as when you perform other actions on your Mac that require a password. It is not a replacement for your ENT password. Here are some common questions (and answers) that may help explain what this means to you.

# Do I have to do this?

Yes. There's no getting out of it. It's happening. It's not the end of the world. It'll be OK. ([Here's why.](https://gsa.service-now.com/sp/?id=kb_article&sys_id=78a10bd1dba1b70058c2fd721f961900#Additional)) You may even find that putting in a few digits for your passcode is a lot easier than a lengthy and oft-rotating passphrase.

# When do I have to do this?

The rollout started in waves in May, with additional users changing over in groups through September. If you're part of a group that is changing over, you'll get a PIV card reader and instructions on how to map your PIV smart card to your Mac beforehand.

# How do I do this?

GSA has provided full [instructions about how to set everything up](https://gsa.service-now.com/sp/?id=kb_article&sys_id=78a10bd1dba1b70058c2fd721f961900). If the certificates on your card aren't updated yet, you need to first email Phil Ahn  (phillip.ahn@gsa.gov) to get the certificates updated, then [schedule a "card update" appointment](https://portal.usaccess.gsa.gov/scheduler/).

# When do I need to use my PIV card?

PIV + PIN authentication will be required:

- at login

- when unlocking your screensaver

- when running the sudo command in the terminal (mostly needed for development tasks)

- when installing certain applications

- when making changes in System Preferences

- when performing any other action that currently requires your laptop password that isn't covered above

# How do I know when I should be entering my password vs. my PIN?

Logging in: When the computer first turns on from off/restart, you will use your Mac password. Past that, the PIV reader should be used. When the card reader is connected (and working properly), the prompt will change from "password" to "PIN".

If you are prompted on your laptop to "reset your password", it is referring to your "local" Mac password, not your ENT or PIN. Please complete those steps right away, as there's a timeout.

The GSA Self Service app uses your ENT credentials.

# What if I don't have a PIV reader?

If you don't have a PIV reader at this point, you need to [request one](https://handbook.18f.gov/equipment/#peripherals). GSA IT will work with you to get one to you. You can elect to have a card reader mailed directly to you or sent to you via your local GSA office.

At some point after receiving your PIV reader, you will be contacted by GSA IT about setting up PIV on your Mac.

If you need a new/replacement/additional PIV reader, some offices may have some extras, but it's probably better to follow [the general peripheral request process](https://handbook.18f.gov/equipment/#peripherals) to request one.

# What if my card reader is unreliable?

The Stanley Global readers have been having issues for some people. Everyone should have two readers (so they have a backup) --- [request one](https://handbook.18f.gov/equipment/#peripherals) if you don't. You can use [the general peripheral request process](https://handbook.18f.gov/equipment/#peripherals) to ask for a replacement.

# What if I forget or lose my PIV card?  What if my card reader breaks?

Please [contact the Help Desk](https://docs.google.com/document/d/16bXKMpjHk4mtMbYim3Zf9EIriobdB75EIDKZPPmPIvs/edit#heading=h.k3yceju8ynx7) and they will assist you in logging into your Mac by temporarily enabling your computer to use a username and password. This can be done remotely, as long as you are connected to the internet. They can also help get a new card reader mailed to you.

If the problem is an unexpected failure (as opposed to you forgetting the card or something), please also add a row to [this spreadsheet](https://docs.google.com/spreadsheets/d/1U2k67fH_gKFAsuOK2GpiDzqB1ACeAvD5poZ5bm0usEk/edit?ts=5d30c437#gid=0).

# What if I have a new Mac that doesn't have a standard USB-A port for a PIV reader?

GSA has thoughtfully procured USB-C readers just for those Macs, so you won't need a special dongle, just the reader itself.

In fact, GSA has ordered a few different types of readers, which they will be testing and recommending one or two specific types based on needs.

- [Stanley Global "pigtail"](https://www.amazon.com/gp/product/B074TCZ1XG/ref=oh_aui_search_detailpage?ie=UTF8&psc=1&pldnSite=1)

- [ACS "butterfly"](https://www.amazon.com/ACR39U-NF-PocketMate-USB-C-Smart-Reader/dp/B06X9NTGYV/ref=sr_1_2?ie=UTF8&qid=1546874760&sr=8-2&keywords=ACR39U-NF+PocketMate)

- [ACS "pigtail"](https://www.amazon.com/Smart-Card-Reader-ACS-ACR39U-I1/dp/B016IY2P7M)

But, here's the catch: since the new Macs only have two USB-C ports, and you'll find one of them is taken up by power and the other taken up by the PIV reader, you'll probably end up needing a dongle after all, if only to regain a spare USB port. We're gonna blame Apple for that lack of basic functionality. And we're going to thank GSA IT, who will make dongles available that will give you back a spare USB-C port.

And if you do need to use a dongle, there's one more wrinkle: The dongle may not provide enough juice to power the USB-C PIV reader. In that case, you'll need to plug the PIV reader directly into computer. Then --- and this gets a little weird --- you can plug the power cord into the dongle, then plug the dongle into the computer, so you are powering the computer through the dongle. It's strange, but it works. Just like a lot of us.

If you get the folding kind of reader, it will appear to block the second USB-C port, but you can thread the power cable or dongle cable through the reader's frame to access the second port.

# Do I need to update my machine?

You need to be on 10.14 Mojave. By now, you should be updated already. If you're not, [reach out to the Help Desk](https://docs.google.com/document/d/16bXKMpjHk4mtMbYim3Zf9EIriobdB75EIDKZPPmPIvs/edit#heading=h.k3yceju8ynx7) ASAP so they can get you fixed up.

# Is this why I was getting calls from GSA IT to update my card?

Yup. Sure was.

# How do I Tock the time spent dealing with this?

969 -- GSA-Mandated.

# What will this be like when I start up? How do I know it's working?

[Here are detailed installation and login instructions and screenshots](https://docs.google.com/document/d/1ydUrnjDPLzmpEzrW1oF1xcAbKpZZNQfRZPeBSn0AeVw/edit) but the short version looks a lot this:

When you start up (with PIV reader and card plugged in):

1.  Enter your macOS username/password as usual on the "macOS login screen."

2.  Dismiss the required GSA message as usual.

3.  You may see the "macOS login screen" again for awhile (and it may seem like a long while) during which it will not accept your username/password. Just wait for your card to be read and a new screen with only one input for your PIV PIN will be displayed. You've done nothing wrong, just be patient.

4.  Enter your PIV PIN number to finish booting.

When you unlock your computer or wake from sleep, you'll only need to enter your PIV PIN. There won't be a lag as described above.

# What if I get a "SmartCard certificate is not trusted" error message when I enter my PIV PIN ?

If this error message appears after a period of working, functional PIV login and authentication, it could be a poor connection between the PIV and the reader. Try cleaning the contact pad on the PIV with a pencil eraser. Wipe any eraser debris off afterwards, and reinsert the card into the reader and try again.

# What if I still have questions?

[Contact the Help Desk](https://docs.google.com/document/d/16bXKMpjHk4mtMbYim3Zf9EIriobdB75EIDKZPPmPIvs/edit#heading=h.k3yceju8ynx7) via [email](mailto:itservicedesk@gsa.gov), by phone(866-450-5250), or visit [the web site](https://gsa.service-now.com). There is also a Slackbot response for "GSA IT Help Desk" that provides this info.
