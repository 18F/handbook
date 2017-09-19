---
title: Network time sync in OS X with NTP
navtitle: NTP
---

How to use both internal and external sources for all network conditions

_Note that this guidance is no longer applicable to any system that is managed by Jamf Pro. Any change to the time server is reverted to *time.gsa.gov* by Jamf._

By default, OS X automatically corrects the system clock using Apple's own time server, *time.apple.com*, which works just fine on the Internet at large. 

However, when your computer is inside the GSA network (when sitting in a GSA office or on the VPN), connections to time servers outside the network are blocked. This can allow your computer's clock to drift pretty far out of sync, which can not only cause you to miss meetings but also create problems with time-sensitive applications.

The GSA network does have its own time server, *time.gsa.gov*, but it is inaccessible outside the GSA network. As a result, the ideal time server configuration is a mix of internal and external sources. Here's how to set that up on your Mac, using [NIST](https://www.nist.gov/)'s own time servers for an external source.

### Syncing your Mac with internal and external time sources

1. Open the Date & Time Preferences panel by clicking on the clock in the upper right of your menu bar:
<img src="/images/ntp/clock.png" class="ntp" alt="date and time prefs">

2. Click the lock to make the "Set date and time automatically" field editable:
<img src="/images/ntp/prefspane.png" class="ntp" alt="preferences pane">

3. In the now-editable field, enter the following exactly as shown:
    `time.gsa.gov time-a.nist.gov time-b.nist.gov time-c.nist.gov`

4. **Important**: Hit Return/Enter while your cursor is still in the text field. The text you entered will become highlighted, which signifies that you successfully input your changes.
<img src="/images/ntp/field.png" class="ntp" alt="highlighted field">

5. Click the lock to re-lock the text field.

Extra credit:

* This preferences panel modifies a file on your file system, `/etc/ntp.conf`.
* If you want to see the time service in action, open a terminal window and type `ntpq -p`. Here's a very detailed [explanation of the output](http://nlug.ml1.co.uk/2012/01/ntpq-p-output/831). Note that depending where your computer is, you will see your workstation failing to connect to either the internal or external time servers, and that's as it must be.
