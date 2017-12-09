---
title: AnyConnect
---

AnyConnect is a VPN client that we use to connect to GSA's intranet.

## Setup

1. Download [AnyConnect](https://drive.google.com/a/gsa.gov/file/d/0B0kAEM4mkbZ1XzMyQzdjYUdyUHM/edit) and launch the installer.
2. Follow the prompts to install the VPN client. Deselect the other components or else the installation may fail. Your install screen should look like this:

![AnyConnect Installation Screen]({{ site.baseurl }}/images/anyconnect/1.png)

## Usage

1. Make sure you are not connected to a GSA network, otherwise the connection will fail.
2. Launch the Cisco AnyConnect Secure Mobility Client.
3. Enter `vpn.gsa.gov/gfeotp` in the Site Name field.
4. Click **Connect**.
5. In the `Group` dropdown, select `GSA 18F OTP Users`.
6. Sign in with your ENT username and password. Your username is your full name, including your middle initial.
7. You'll be prompted for an answer or token. Enter the [OTP code](/distributed#otp).

## Troubleshooting

If your VPN client hangs while trying to authorize your credentials, delete the `/opt/cisco/anyconnect/profile/gsa_cp-gfe.xml` file on your system.

If you're still having trouble, try these recommendations from [@moncef](https://gsa-tts.slack.com/team/moncef):

1. Open the Terminal.
2. Type `cd /opt` and press **Return**.
3. Type `sudo rm -rf cisco` and press **Return**.
4. Search the Finder for `cisco` ([including system files](https://support.apple.com/en-us/HT202121)) and delete the files.
5. Restart your computer.
6. Reinstall AnyConnect without any add-ons.

If your Cisco AnyConnect client hangs up (and loops "waiting for host scans") after entering credential on OSX, you might have large number of certs in your mac's cert manager. Try deleting unused certs.  

If you get the "a newer version of Cisco AnyConnect was already installed" error when tring to reinstall, tell macOS to forget the package:

```
sudo pkgutil --forget com.cisco.pkg.anyconnect.vpn
```

---

#### Still have questions?

Ask in Slack: [#questions](https://gsa-tts.slack.com/messages/questions/) or [#distributed](https://gsa-tts.slack.com/messages/distributed/)
