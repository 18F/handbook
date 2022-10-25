---
title: Requirements for Passwords
questions:
  - it-issues
redirect_from:
  - /password-requirements/
---

Follow the steps below to create and maintain secure passwords.

## Requirements for passwords

As you set up your TTS accounts and devices, we have three requirements for
making passwords that reduce security risks: use a password manager, use unique
passwords, and use stronger passwords.

### 1. Use a password manager

There's a secret to dealing with passwords: use a password manager to store your
passwords. This way, you only need to memorize a few strong passwords: your
master password for the password manager, your laptop password and phone
passcode, and maybe a few others (such as your iCloud password if that's [your
recovery method for forgetting your laptop
password]({% page "/getting-started/equipment/#laptop" %})).

Password managers approved for work at GSA:

- KeePassXC
- Google Sheets

We recommend using [KeePassXC](https://keepassxc.org/) which is open source and
runs on Windows, MacOS and Linux. You can install KeePassXC from the GSA
Self-Service app.

The KeePassXC password database is stored locally on your computer, though we
recommended that you [sync it to Google
Drive]({% page "/tools/google-drive/#local-editing" %}).

### 2. Use unique passwords

You can use your password manager to generate a random unique password for each
service you use. OS X also has a local password generator: in the **Keychain
Access** app, view the suggestions under **File > New Password Item > key
icon**.

You can use your password manager to store answers to security questions.
Instead of setting up real answers (which could be guessable by somebody with
information about you), consider setting up random nonsense answers and storing
those answers in your password manager.

Here's an interesting comparison of non-expert and expert security practices,
from
[a study done by Google](https://googleonlinesecurity.blogspot.com/2015/07/new-research-comparing-how-security.html):

{% image "_img/equipment/1.png" "secure password tips" %}

Note the second point: the experts considered unique passwords even more
important than strong/complex passwords. If hackers dump the password database
from one service, you don't want them to be able to use that password to access
your accounts on other services.

To limit this risk, use new passwords for work services instead of reusing any
passwords from your personal life (don't use your Amazon password as your ENT
password). Also use a unique password for each service you use (don't use the
same password for Slack and ENT).

### 3. Use strong passwords

Even if you use a password manager, you'll still need to memorize a few unique
passwords, such as the master password for your password manager.

This opens up a few risks: A person could try to guess your password based on
information about you, or a computer program could try to find your password by
"brute forcing" it (making a zillion guesses based on common types and patterns
of passwords). To limit these risks:

- Use passwords that are hard to guess even for people who know you -- not your
  birthday, university, pet's name, favorite TV show, or similar.
- Use passwords that probably nobody else uses. For some interesting examples of
  common passwords, check out
  [this list](https://web.archive.org/web/20151005001104/https://stricture-group.com/files/adobe-top100.txt)
  based on a real Adobe account dump; you can see dictionary words, names of
  favorite people/pets/characters/teams, words related to the service, and
  simple patterns of numbers and letters.
- Use longer passwords rather than shorter passwords, since that makes "brute
  forcing" harder.

[This XKCD comic](https://xkcd.com/936/) explains a common password pattern and
one strategy for making stronger passwords:

<img src="https://imgs.xkcd.com/comics/password_strength.png" alt="password strength comic from XKCD" />

In other words, you could use a series of random words, plus a few numbers,
capital letters, or symbols, if you like.

Or try thinking of a sentence or line from a book, song, speech, poem, or other
memorable source, then build a many-character password using the first letter of
each word, with some capitalization, numbers, and symbols thrown in. Or just use
the whole line or sentence as your password! (You'd need to pick a phrase that
nobody would guess based on knowing you.)
