---
title: Logging in
tags:
- ent
- OAuth
- Logging
- login
- access
---

This content provides best practices for logging into your various government accounts and apps.  The official GSA Policy can be found [here](https://insite.gsa.gov/portal/content/526805).

## ENT (enterprise) login

This is your account for signing into systems administered by GSA, including your email, calendar, and Google Drive.  Your ENT account name is in the form FirstnameMiddleinitialLastname (Ex: JohnASmith).  For guidance on secure passwords, reference this [page]({{site.baseurl}}/password-requirements).

When you login with ENT while not connected to a GSA wireless network, you will be prompted to select "This is a public computer" or "This is a private computer" (see image below).  You should always select "This is a private computer" unless you are logging in on a computer that's not your government computer or a computer that you personally own (Ex: a library computer).  

![Ent login screen]({{ site.baseurl }}/images/ENTloginsmaller.png)

### Changing your ENT password

You must change your ENT password immediately after you start with GSA and every 90 days thereafter. This is your password for signing into systems administered by GSA, including your email, calendar, and Google Drive. Go to [reset.gsa.gov](https://reset.gsa.gov) to change your password.

Detailed ENT password reset instructions can be found [here on InSite](https://insite.gsa.gov/portal/content/677810).

## Change or reset your Macbook login password

You can change the password that you use to log into your Mac or reset the password if you don't remember it by following [these instructions](https://support.apple.com/en-us/HT202860).

## Logging into apps with your GSA Google account

Applications such as Trello, Zoom, Favro, and Circle.ci can be logged into using your GSA Google account.  Just make sure that you don't grant Google access to anything beyond basic data; "Basic Info" or "Limited Access to Data and Files" are both approved options that are considered basic data.      

You can check your account permissions [here](https://myaccount.google.com/permissions).

##VMware Horizon (VPN) login

VMware is utilized to access your GSA Microsoft Windows desktop.  Some government sites can only be accessed through VPN.

* Click on the VMware Horizon icon (on your desktop)
* Enter horizon.gsa.gov for server
* Use ENT info for initial VMware Horizon login-in screen
* Go to [otp.gsa.gov](https://otp.gsa.gov/) (enter ENT) to get Token
* Enter token back into VMware Horizon login-in screen


##Cisco AnyConnect login

AnyConnect is utilized as a GSA VPN client so that you can use a variety of systems that require a VPN directly from your local computer. Go [here]({{site.baseurl}}/anyconnect) for more information on configuring this tool.

--------------------------------------------------------------------------------

### Still have questions?

Please ping: [Infrastructure](https://gsa-tts.slack.com/messages/infrastructure)
