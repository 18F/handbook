---
title: Git commit signing
tag:
  - git
  - signing
  - ssh
questions:
  - admins-github
  - dev
cSpell: ignore allstar
---

TTS strongly encourages all git commits to be cryptographically signed. A
cryptographic signature is a strong indication that that the work was authored
by the person claiming to have authored it and that it has not been changed
since they authored it. GitHub repositories throughout TTS are monitored by a
configuration-management tool called
[Allstar]({%link "https://github.com/18F/.allstar" %}). If your team's
repository is managed by Allstar, it will _require_ commit signing.

We also strongly recommend
[using a password manager]({% page "general-information-and-resources/tech-policies/password-requirements/#1-use-a-password-manager" %})
to manage your signing keys. [KeePassXC]({% link "https://keepassxc.org/" %})
is approved for use at GSA and it fully supports managing keys.

If you only use GitHub from the web interface, you do not need to configuring
signing because the web interface automatically signs your work for you. If you
do any work with git repos on your local computer, however, you need to setup
commit signing.

## Create your keys

Cryptographically signing your commits requires creating a pair of keys. One of
them is your private key, and you are obligated to keep it secret. Think of it
much like a password – only you should ever have access to it. Anyone with this
private key can sign with your identity, so protect it! The other key is your
public key, and it may be shared widely. In fact, in order to verify your signed
commits, others will need access to your public key.

Open a terminal window and enter the following command, substituting your own
email address:

```sh
ssh-keygen -C "[YOUR EMAIL]@gsa.gov"
```

You will be asked where to save the key.

- If you are using a password manager like KeePassXC, it will be more convenient
  if you change this path. Type `/Users/[username]/Desktop/git-signing-key`.
  `[username]` is your login name on your laptop. You will be able to see it in
  the prompt, which will look like this:  
  `Enter file in which to save the key (/Users/[username]/.ssh/[key name])`
- If you are not using a password manager, type `~/.ssh/git-signing-key`.

Next you will be asked to provide a password for your key file.

- If you are using a password manager, simply press enter to have an empty
  password. You will need to press enter a second time to confirm. Since it will
  be stored in your password manager, the key is protected by the password
  manager itself and does not need its own password.
- If you are not using a password manager, enter a strong password. You will
  have to confirm the password. This step protects your key in the event that a
  bad actor obtains it – they won't be able to use it without the password.

## Backup your private key in Google Drive

If you are not using a password manager, you can copy the keys to Google Drive
as a backup. However, you need to also keep the files on your computer. If you
are using a password manager, be sure to periodically backup your password
database to [Google Drive]({% page "tools/google-drive/" %}). This will
automatically include your signing keys.

## Setup your keys for use

### Using KeePassXC

#### Setup KeePassXC to manage your SSH keys

Open KeePassXC and open the settings (`⌘+,` on macOS, or the settings are
locatedunder Tools -> SSH Agent in Keepass for Windows) and click the button on
the left sidebar that says "SSH Agent." Ensure the "Enable SSH Agent
integration" checkbox is checked, then click the OK button at the bottom.

#### Add your keys to KeePassXC

If you already have an entry in KeePassXC for your GitHub account, double-click
it to open it in editing mode. Otherwise, create a new entry. On the left side
of the window, click the "Advanced" button. On the bottom half of the new
screen, there is a section titled "Attachments." Click the "Add" button on the
right side, and use the file browser to find the key you created above. Look for
the files called `git-signing-key` and `git-signing-key.pub`, and add them both.

Once you have added the files to KeePassXC, you can delete them from your
desktop. You will only be using them from KeePassXC from here onwards.

#### Tell KeePassXC that these are keys

Click the button that says "SSH Agent" on the left sidebar. Look for the section
labeled "Private key" that includes a drop-down box labeled "Attachment." Click
in the drop-down box and select the private key you added as an attachment.
(**IMPORTANT:** Use the _private_ key, the one that is just `git-signing-key`,
not the public key!). The sections below should then populate with information
such as "Fingerprint," "Comment," and "Public key." Click the OK button at the
bottom to save your entry.

Finally, right-click on your entry and click the option near the bottom of the
pop-up menu that says "Add key to SSH Agent."

### Setup your keys manually

#### macOS

Open a terminal window and enter the following command:

```sh
ssh-add --apple-use-keychain ~/.ssh/git-signing-key
```

You will be prompted to enter the password you created for your key. Using the
`--apple-use-keychain` option will store your password securely in the macOS
keychain where it will only be available when you are logged into your computer.

#### Linux

Open a terminal window and enter the following command:

```sh
ssh-add ~/.ssh/git-signing-key
```

Note that you may be required to enter the password associated with your key
every time you create a new git commit.

## Configure git to sign commits

By default, git uses a format called GPG for commit signing. However, GPG keys
are more cumbersome to create and manage, so we recommend SSH keys, which is
what you created in the previous steps. We must tell git to use SSH keys instead
of GPG keys. In a terminal, enter this command:

```sh
git config --global gpg.format ssh
```

Next, tell git to sign your commits. Enter this command to enable commit signing
in all of your repos by default:

```sh
git config --global commit.gpgsign true
```

### Tell git about your key

#### Copy your key from KeePassXC

Double-click your GitHub entry in KeePassXC, then click the button that says
"SSH Agent" in the left sidebar. Find the large text area labeled "Public key."
Select all of the text in the text area then right-click and click "Copy."

{%
  include "alert.html"
    level: "warning"
    heading: "Do not use Ctrl+C"
    content: "Be careful to use the right-click method. KeePassXC will copy your password when you press Ctrl+C, even if you have selected other text."
%}

Now, back in your terminal window, enter this command:

```sh
git config --global user.signingkey "key::[PASTE]"
```

The `key::` part is required! Paste your public key after the two colons. The
`key::` portion tells git that you are specifying a key directly. Otherwise, it
assumes you are specifying a file that contains your key.

#### Manually

Enter this command into a terminal window:

```sh
git config --global user.signingkey ~/.ssh/git-signing-key
```

### Tell git your key is allowed

Before git will accept your key to sign a commit, the key must be listed in an
"approved signers" list.

#### KeePassXC

[Copy your public
key]({% page "tools/git-signing#copy-your-key-from-keepassxc" %}) again, if
necessary. Then enter this command in your terminal, using your own email address:

```sh
echo "[YOUR EMAIL]@gsa.gov [PASTE]" >> ~/.gitsigners
```

#### Manually

Enter this command in your terminal, using your own email address:

```sh
echo "[YOUR EMAIL]@gsa.gov $(cat ~/.ssh/git-signing-key.pub)" >> ~/.gitsigners
```

## Tell GitHub about your key

Git may be configured to sign your commits, but GitHub will mark them as
`Unverified` and they will not be accepted under the Allstar policy. In order to
verify your signed commits, you must associate the public key with your GitHub
account. To do that, go to your [GitHub SSH and GPG keys settings
page]({% link "https://github.com/settings/keys" %}). Follow the [instructions
provided by
GitHub]({% link "https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account" %})
to add your signing key.

{%
  include "alert.html"
    level: "warning"
    heading: "Add a signing key"
    content: "When you add your key to GitHub, it presents a drop-down for key types. By default, it will add an authentication key. Be sure to click the drop-down and select the signing key option instead."
%}
