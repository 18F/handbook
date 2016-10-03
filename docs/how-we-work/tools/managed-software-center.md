---
title: Managed Software Center
---

You can think of Managed Software Center as 18F's internal App Store.

## Installation

This software requires a restart after installation, so be sure to save all of your work before you begin.

1. Download and install the [latest Munki release](https://github.com/munki/munki/releases).
2. Open the `.pkg` file.
3. You you may receive an `untrusted developer` warning. That's okay. In the Apple menu, navigate to System Preferences > Security > Privacy > General.
4. Near the bottom of the window, you'll see `munkitools-2.4...pkg` was blocked from opening. Click **Open Anyway** and continue the installation.
5. Restart your computer.

## Setup

1. Open the Terminal.
2. Copy the text below, paste it into the Terminal window, and press **Return**:
``` 
curl https://munki.18f.gov/munki.sh | sudo sh
```
3. Enter your password to install some system preferences.
4. Press **Command-Q** to quit Terminal and click **Close** to confirm.
5. Open Managed Software Center. Upon first launch, you'll see [ClamXav](/clamxav) attempting to download to your system.
6. Click **Update** to continue.  ![Screenshot of Managed Software Center]({{ site.baseurl }}/images/managed-software-center/1.png)

## Usage

- After the initial setup, Managed Software Center will check your system daily for updates, and occasionally offer optional software approved by [#infrastructure](https://18f.slack.com/messages/infrastructure). If there's a required security update or serious vulnerabilty with any of our software, Managed Software Center will either patch or remove the software automatically.
- You can launch Managed Software Center any time to check for updates or available downloads.
- You can request to add software titles to the 18F Managed Software Center. Message [Kimber Dowsett](https://18f.slack.com/team/kimber) with requests.
- You can browse software by title or category. There's not a lot on the server right now, but with your input and feedback, expect to see it look more like the App Store over the next few months.
