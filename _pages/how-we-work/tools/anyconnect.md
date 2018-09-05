---
title: AnyConnect
---

AnyConnect is a VPN client that we use to connect to GSA's intranet.

## Setup

1. Download [AnyConnect](https://drive.google.com/open?id=0B4CdALyekcYXOWNaeVRSZy05TXM) and launch the installer.
2. Follow the prompts to install the VPN client.
3. Install only the following components:
      * VPN
      * Diagnostics and Reporting Tools
      * Posture

Your install screen should look like this:

![AnyConnect Installation Screen]({{ site.baseurl }}/images/anyconnect/1.png)

## Usage

1. Make sure you are not connected to a GSA network, otherwise the connection will fail.
2. Launch the Cisco AnyConnect Secure Mobility Client.
3. Enter either `vpn.gsa.gov/adcontractors` or `vpn.gsa.gov/gfeotp` (this is an old url that may not work) or select `GSA Access OTP` in the Site Name field.
4. Click **Connect**.
5. Sign in with your ENT username and password. Your username is your full name, including your middle initial.
6. You'll be prompted for an answer or token. Enter the [OTP code](/distributed#otp).
7. Accept the Government Warning Banner.

## Troubleshooting

Sometimes AnyConnect will hang while trying to authorize your credentials. If your starting screen looks like this:

![Bad AnyConnect Starting Connection Screen]({{ site.baseurl }}/images/anyconnect/bad.png)

instead of like this:

![Good AnyConnect Starting Connection Screen]({{ site.baseurl }}/images/anyconnect/good.png)

you'll probably hang. If you do, **delete the `/opt/cisco/anyconnect/profile/gsa_cp-gfe.xml` file on your system.** You'll need to enter your admin credentials to delete it, but that's ok. In the future, you can prevent this error simply by never quitting AnyConnect (the bad XML file seems to be created upon quit). Disconnect AnyConnect when you don't need it, but leave the application running in the background.

If you're still having trouble, try these recommendations from [@moncef](https://gsa-tts.slack.com/team/moncef):

1. Open the Terminal.
2. Type `cd /opt` and press **Return**.
3. Type `sudo rm -rf cisco` and press **Return**.
4. Search the Finder for `cisco` ([including system files](https://support.apple.com/en-us/HT202121)) and delete the files.
5. Restart your computer.
6. Reinstall AnyConnect without any add-ons.

If your Cisco AnyConnect client hangs up (and loops "waiting for host scans") after entering credential on OSX, you might have large number of certs in your mac's cert manager. Try deleting unused certs.  

If you get the "a newer version of Cisco AnyConnect was already installed" error when trying to reinstall, tell macOS to forget the package:

```
sudo pkgutil --forget com.cisco.pkg.anyconnect.vpn
```

---

#### Still have questions?

Ask in Slack: [#questions](https://gsa-tts.slack.com/messages/questions/) or [#distributed](https://gsa-tts.slack.com/messages/distributed/)
