---
title: Citrix
redirect_from:
  - /virtual-desktop/
---

Citrix is a Windows virtual desktop client that can be used to connect to GSA's
intranet, or test something in Internet Explorer.

## Setup

In order to launch Citrix, you will need to have the Citrix Client installed on
your device. If you are connecting from a GSA Laptop you will already have the
Citrix Client installed.

If this is a non-GSA Device you should install the Citrix Workspace App before
moving to the next step. The Citrix Workspace App can be downloaded from Citrix
at the below links for Windows or Apple Mac respectively:

[Citrix Workspace app for Windows](https://www.citrix.com/downloads/workspace-app/windows/workspace-app-for-windows-latest.html)

[Citrix Workspace app for Mac](https://www.citrix.com/downloads/workspace-app/mac/workspace-app-for-mac-latest.html)

## Logging into the Citrix VDI

These instructions are pulled from the
[InSite page](https://insite.gsa.gov/employee-resources/information-technology/do-it-yourself-self-help/telework-technology/citrix/citrix-and-citrix-workspace):

1. Access the Citrix VDI at
   [vdi.anywhere.gsa.gov](https://vdi.anywhere.gsa.gov).
   - Alternatively, if you don't want to launch the virtual desktop, and would
     rather launch individual apps through Citrix (such as Chrome or Internet
     Explorer), you can go to [anywhere.gsa.gov](https://anywhere.gsa.gov/)
1. Go to [otp.gsa.gov](https://otp.gsa.gov) and enter your ENT info to get the
   Tokencode
   - You can also obtain a Tokencode by installing SecureAuth OTP on your phone,
     as described in the [Get a one-time
     password?]({% page "/general-information-and-resources/distributed/#get-a-one-time-password" %})
     handbook section
1. Enter your ENT info and the Tokencode back into Citrix login-in screen

#### If this is the first time connecting in from your Web Browser:

You may be prompted with a Welcome to Citrix window. If so:

1. Select `Detect Receiver`.
1. When prompted to Open in Citrix Workspace Launcher click `Cancel`.
1. Click the `Already Installed` hyperlink.
1. The Citrix VDI Desktops you have available will be presented to you (these
   vary by person). Click on the monitor icon for the VDI desktop you wish to
   launch.
1. You will notice a file downloaded in your browser. Click on the `^` to the
   right of the file name and select Always open files of this type.
1. Click on the monitor icon for the Desktop you want to launch. This time (and
   going forward) the Desktop should launch without showing a downloaded file.

## Usage

See the
[InSite page](https://insite.gsa.gov/employee-resources/information-technology/do-it-yourself-self-help/telework-and-remote-access/citrix/citrix-web-interface).

## Software

Citrix is the easiest way to use software that's available for Windows but not
Mac. If the software you need isn't already pre-installed, you can request
installation by
[opening a Software request with the GSA IT Service Desk](https://gsa.servicenowservices.com/sp/?id=sc_cat_item&sys_id=1bfdfdca78d3a400ce3ddff91a64940b).

On that form, the answer for "Where is the Software going to be installed?" is
`VDI`, even though you might think Citrix would be correct. The answer for
"Enter VDI or Citrix here" is `Standard Desktop`.

## Tips

- To move files between your laptop and your Citrix desktop, use Google Drive.
  You can use Chrome in the Citrix desktop to download and upload files.

---

#### Still have questions?

Ask in Slack: {% slack_channel "it-issues" %} or
{% slack_channel "distributed" %}
