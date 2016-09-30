---
title: Networks
---

Learn how to connect to the GSA network on campus and remotely.

## GSA wireless

GSA has two networks: GSA Guest and GSA Wireless. 100% of your browsing is tracked when you're connected to a GSA network.

### Connect to GSA Guest

The password for `gsa-guest` changes monthly and is available on [Insite](http://insite.gsa.gov). You can get the password by typing `guest wifi` in any Slack channel.

### Connect to GSA Wireless

`gsa-wireless` is not broadcast; you'll need to enter it manually.

1. In the Wi-Fi menu, click **Join Other Network...**
2. Enter the following:
  - Network name: `gsa-wireless`
  - Security: WPA2 Enterprise
  - Username and password: your ENT username is your first name, middle initial, and last name on a Mac, and `ENT\username` on Linux.
3. Click **Join**.

### Update your preferred networks

To automatically connect to GSA Wireless in the future:

1. Open **System Preferences > Network**.
2. Click **Advanced...**
3. Drag `gsa-wireless` to the top of the list.
4. Click **OK**.
5. Click **Apply**.

## Remote access

Connecting to the GSA network remotely over VPN (virtual private network) grants you access to Insite, BookIt, ALOHA, and Salesforce. You do not need a VPN connection for email, Slack, or GitHub.

### 1. Add your phone number to your IT profile

Before you set up VPN, send your personal phone number to [accesscard@gsa.gov](mailto:accesscard@gsa.gov) from your GSA account. This will prevent an IT disaster where you can't connect to the network remotely.

If you have any questions, call IT at 202-501-4459.

### 2. Connect to the network

There are a few ways to access the GSA network remotely. Your colleagues prefer:

- [AnyConnect](/anyconnect/), a desktop VPN client
- [Horizon](https://horizon.gsa.gov/)'s browser-based virtual (Windows) desktop

Alternatively, you can try one of these:

- [VMware Horizon](/vmware-horizon/), a desktop client that connects to GSA Horizon
- Citrix: Use [internal.anywhere.gsa.gov](https://internal.anywhere.gsa.gov/) when connected to VPN and [anywhere.gsa.gov](https://anywhere.gsa.gov/) when **not** connected to VPN.

### 3. Sign in

Each time you sign in, you’ll need a one-time password (sometimes called a token or answer) and your ENT username and password.

* To get your one-time password, visit [otp.gsa.gov](https://otp.gsa.gov) or set up the [SecureAuth Authenticate](https://itunes.apple.com/us/app/secureauth-otp/id615536686?mt=8) app on your iPhone.
* Your ENT username is your first name + middle initial + lastname (with no spaces, such as: firstmlast).
* To reset your ENT password, visit [secureauth.gsa.gov](https://secureauth.gsa.gov) and click **GSA AD Password Reset**.

## Troubleshooting

If you see an Official Use Only warning screen from GSA, delete your GSA and Salesforce cookies. Here's how to do that in Chrome:

1. In Preferences menu, open **Show advanced settings...**
2. Click **Content settings...**
3. Click **All cookies and site data...**
4. Search for `gsa` and click **Remove all shown**. Repeat that for `salesforce`. This will keep your Google and MyUSA cookies, which should save you some time.

----

#### Still have questions?

Ask in Slack: [#it-issues](https://18f.slack.com/messages/questions/) or [#distributed](https://18f.slack.com/messages/distributed/)
