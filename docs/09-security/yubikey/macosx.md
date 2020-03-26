# YubiKey Support for Mac OS X

This is the Mac OS X specific documentation for [YubiKey](README.md).

_Please help make this page more useful by adding links you found useful (describe exactly how they are useful) and specific steps you used to install, configure, and test your YubiKey._

## Install apps

See:

- <https://www.yubico.com/start/mac-os/>
- <https://www.yubico.com/why-yubico/for-businesses/computer-login/mac-os-login/>
- <https://www.yubico.com/2016/09/yubikey-smart-card-support-for-macos-sierra-2/>

_tbd..._

## Set up PAM TFA

_tbd..._

## Screen lock on lid close or idle

_tbd..._

### Away detection ideas

Exceptions to the "idle timeout lock" can be made if you are on your home network and feel that it is secure. Adapt the below script if you only want to lock your screen when you are away from home.

Assuming `~/bin/` is in your `$PATH`, and you want to see if a file is on a Windows server, create executable file `~/bin/out-lock`:

```
#!/bin/sh
MOUNT="$HOME/mountain"
# Checks if server is mounted.
if [ ! -d "$MOUNT" ]
then
  SERVER_IP="192.168.1.1"
  SHARE_NAME="share"
  USERNAME="admin"
  PASSWORD="password"
  FILE="home.txt"
  mount_smbfs //$USERNAME:$PASSWORD@$SERVER_IP/$SHARE_NAME $MOUNT
fi
contents=$(cat $MOUNT/$FILE)
hash=`echo -n $contents | shasum -a 256`
cuthash=`echo $hash | cut -c1-64`
if [ "$cuthash" != "7147a8f255f49cb7693dcd19b6b46e139680d48a03e0a075ea237deb7e6bacc9" ]
then
  # Lock Screen
  /System/Library/CoreServices/Menu\ Extras/User.menu/Contents/Resources/CGSession -suspend
fi
```

The "cron" or launchctl file located at \$HOME/Library/LaunchAgents/com.dan.outlock.plist might look like this to run every 15 minutes:

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.dan.outlock</string>

  <key>ProgramArguments</key>
  <array>
    <string>/bin/out-lock</string>
  </array>

  <key>Nice</key>
  <integer>1</integer>

  <key>StartInterval</key>
  <integer>900</integer>

  <key>RunAtLoad</key>
  <true/>
</dict>
</plist>
```

## YubiKey removal lock

_tbd..._
