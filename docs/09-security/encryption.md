# Protecting Your Privacy with Encryption

The following offers a brief overview of a few FOSS encryption tools that you can download and install to enhance the privacy of your interactions online.

> This is important. If we only use encryption when we're working with important data, then encryption signals that data's importance. If only dissidents use encryption in a country, that country's authorities have an easy way of identifying them. But if everyone uses it all of the time, encryption ceases to be a signal. No one can distinguish simple chatting from deeply private conversation. The government can't tell the dissidents from the rest of the population. Every time you use encryption, you're protecting someone who needs to use it to stay alive.
> _[Why We Encrypt](https://www.schneier.com/blog/archives/2015/06/why_we_encrypt.html)_ by Bruce Schneier

This document is light in content but the links contain added documentation that may be helpful. An hour or two of your time should be enough to set up your GnuPG key pair and encrypted email communications.

If you'd like some background on how encryption works, start by reading [An Introduction to Public Key Cryptography and PGP](https://ssd.eff.org/en/module/introduction-public-key-cryptography-and-pgp), a [Surveillance Self-Defense](https://ssd.eff.org/en) (also an excellent read) tutorial from your friends at the [Electronic Frontier Foundation](https://www.eff.org/) \[[Donate!](https://supporters.eff.org/donate/)]

Finally, keep an eye out for anti-encryption bills such as [Burr-Feinstein](https://www.techdirt.com/articles/20160527/08343534565/burr-feinstein-anti-encryption-bill-has-no-support-wont-be-moving-forward-anytime-soon.shtml) (also [here](https://www.wired.com/2016/04/senates-draft-encryption-bill-privacy-nightmare/), [here](https://www.engadget.com/2016/09/10/anti-encryption-bill-proposed-changes/) and [here](https://www.google.com/webhp#q=anti-encryption+bill)) and be prepared to take action when it resurfaces to protect your rights to privacy and security.

Thank you!

## Brief Introduction to GnuPG

The [GNU Privacy Guard](https://www.gnupg.org/) (GnuPG) is a complete and free implementation of the [OpenPGP standard](https://www.ietf.org/rfc/rfc4880.txt) (also known as PGP).

The current recommended version is GnuPG 2.x

- Mac OS X installers:
  - [GnuPG for OSX](https://sourceforge.net/p/gpgosx/docu/Download/) _(more recent)_
  - [GPG Suite](https://gpgtools.org/) _(integrates into Apple Mail)_
- GNU/Linux installers:
  - Ubuntu: `sudo apt-get install gnupg2`
  - Arch: `pacaur -S gnupg2`
  - Fedora/CentOS: `sudo yum|dnf install gnupg2`

### Creating your public/private key pair

_Command line forms are shown here: Mac, Windows and even GNU/Linux have GUIs available._

After installing GnuPG, you'll need to [generate a new key pair](https://www.apache.org/dev/openpgp.html#key-gen-generate-key):

```
$ gpg --gen-key
```

Choose:

- (1) RSA and RSA (default)
- keysize = 4096 bits
- 0 = key does not expire
- use your civicactions.com email address (you can add more email addresses later)
- use a strong pass phrase to protect your secret key

The generated key is actually a _key pair_: a _public_ key that you can give to anyone, and a _private_ key that you protect with a passphrase. A file encrypted with someone's public key can only be decrypted by a person who possesses the associated private key. You can also _sign_ a document (encrypted or not) with your private key so that others who have your public key can verify that the document was signed by you - and only you.

For quick help on the command line, do:

```
$ gpg --help
```

Note that the email integrations below do not require the command line; you just have to have created your key pair and shared your public key. But we show a few more commands first.

### Encrypting a file so only your friend can read it

First, you have to look up your friend's public key on a key server:

```
$ gpg --keyserver pool.sks-keyservers.net --search-keys 'fen labalme'
```

This will list all the keys that match "fen labalme". You could call Fen (or look at his business card on which he included his key id) and see that (1) is the correct key, and anyway, the others two are (revoked), (expired) or just plain ancient. Entering the number "1" will import that key into your public keyring so that you can use it in the future. Look up some other co-workers or friends - if you're not sure of the key don't import it without verifying _at least_ the last eight hex digits of the key id with them directly.

Now you can encrypt a file so only your friend (in this case, Fen) can read it (the optional `--armor` argument creates an easy-to-cut-and-paste version of the encrypted document):

```
$ gpg --armor --output doc.asc --encrypt --recipient fen@civicactions.com doc
```

You can go a step further and _sign_ the encrypted file by adding the `--sign` argument:

```
$ gpg --armor --output signed.asc --encrypt --sign --recipient fen@civicactions.com doc
```

### Decrypting a file encrypted with your public key

To decrypt a file, simply do:

```
$ gpg --decrypt signed.asc --output newfile
```

### Upload your public key to GPG key servers

You'll want to upload your public key to a keyserver so others can send you encrypted files. To [send your key to a keyserver](https://debian-administration.org/article/451/Submitting_your_GPG_key_to_a_keyserver), you need to know your key ID. You can print the information on all keys you have the private key for by running

```
$ gpg --list-secret-keys
```

This will generate output like the following:

```
$ gpg --list-secret-keys
/home/fen/.gnupg/pubring.kbx
----------------------------
sec   rsa4096/446DB63655C12656 2016-03-23 [SC]
uid                 [ultimate] Fen Labalme <fen@civicactions.com>
uid                 [ultimate] Fen Labalme <fen.labalme@gmail.com>
ssb   rsa4096/F5176136558CF34A 2016-03-23 [E]
```

You can see the key ID, `446DB63655C12656`, on the first line describing the key after the text `sec rsa4096/` (where `sec` is short for "secret" and `rsa4096` describes the key type and length). Now you can send your public key to the key servers with this command (using, of course, your key id):

```
$ gpg --send-keys 446DB63655C12656
```

After some time for propagation (give it a few hours to a day) you can look up your public key by entering your email address or key id into a key search engine like [pgp.mit.edu](http://pgp.mit.edu/)

### More GnuPG information

- [GnuPG home](https://www.gnupg.org/)
- [GnuPG Mini How-To](http://www.dewinter.com/gnupg_howto/english/GPGMiniHowto.html)
- [(Ubuntu) OpenPGP Key Signing Party](https://wiki.ubuntu.com/KeySigningParty)
- [How To Use GPG to Encrypt and Sign Messages](https://www.digitalocean.com/community/tutorials/how-to-use-gpg-to-encrypt-and-sign-messages-on-an-ubuntu-12-04-vps)

You'll want to get your key signed and grow your [web of trust](https://en.wikipedia.org/wiki/Web_of_trust). And you'll want to integrate your key with your email client.

## Encrypting your email

You use email every day. Sending normal (un-encrypted) email is like sending a post card via the Post Office, as the mail will pass through many hands from sender to recipient and could be read by any of those people along the way. Largely because of the volume (and assuming that neither party is particularly famous) both the post card and the email is expected to pass along its way without anyone reading it. But they could.

In the case of post cards, generally it would be celebrity or a particularly interesting photo that might cause the card to be read. Email, however, can be easily be scanned for specific content by sophisticated computer programs residing anywhere along the path. Scanning is most prevalent at internet hubs like your ISP, and the justification (usually not made public) for scanning your email may include a search for:

- illegal music or movie downloads (in cooperation with the RIAA or MPAA)
- suspicious "terrorist" activities (in cooperation with the DHS, FBI or NSA)
- social security numbers and account passwords (by illegal black hat hackers)

Bottom line: while your post cards are likely not being read, your emails are at the least being scanned by automated sniffers. But it is possible to wrap your _post card_-like email in a secure envelope known as encryption. If you use strong encryption, it can actually be impossible for even the NSA to decrypt the ciphertext without your cooperation (or perhaps NSA-injected malware in your computer that steals your private key and passphrase).

Once you have created a GnuPG key pair and have added public keys of people you want to correspond with, there are many ways that you can integrate GPG with your email, several are described here:

### Mailvelope (for Gmail in Chrome & Firefox)

[Mailvelope](https://www.mailvelope.com/) integrates GPG with your Gmail using a Chrome or Firefox extension.

### GPG Suite (for Mac OSX Mail App)

See [GPGTools](https://gpgtools.org/) _(not yet fully integrated with Sierra)_

### Enigmail (Mozilla Thunderbird)

[Enigmail](https://www.enigmail.net/index.php/en/) works with Mozilla Thunderbird and GPG to deliver a seamless encrypted email experience.

### More Email References

- [Email Self-Defense](https://emailselfdefense.fsf.org/en/) (Free Software Foundation)
- [The Best Free Ways to Send Encrypted Email and Secure Messages](http://www.howtogeek.com/135638/the-best-free-ways-to-send-encrypted-email-and-secure-messages/) (HowToGeek)
- [Why No One Uses Encrypted Email Messages](http://www.howtogeek.com/187961/why-no-one-uses-encrypted-email-messages/) (HowToGeek)
- [Why You Should Encrypt Your Email](https://www.lifewire.com/you-should-encrypt-your-email-2486679) (LifeWire)

#### ProtonMail

[ProtonMail](https://protonmail.com/) is a free and secure email service that provides arguably better security than GPG encrypted email sent via (say) Gmail as it not only encrypts but the service does not harvest/index/resell metadata, such as who is emailing whom and when. For the best results, both sides must be using ProtonMail.

## Private Browsing

Using [Tor](https://www.torproject.org/), the [CivicActions VPN](https://git.civicactions.net/devops/internal-it-wireguard-vpn/tree/master) (for CivicActions business) or a paid VPN (such as [PIA](https://www.privateinternetaccess.com/) and there are others; be sure to choose an exit node that is not in the U.S.) is the best route, but the two simple and free services below will have little impact on your browsing experience and can go a long way to minimizing the data others collect about you:

We recommend using both of these browser add-ons.

- [Privacy Badger](https://www.eff.org/privacybadger) blocks most ads and cookie collectors. Open source and free.
- [uBlock Origin](https://ublockorigin.com) is an ad content blocker. Open source and free.

For search, we recommend changing your browser "default search" to [DuckDuckGo](https://duckduckgo.com/) as it protects privacy and avoids the filter bubble.

## Private Messaging and Calling

We recommend [Signal.org](https://signal.org/), which is free. We like that their primary "forward secrecy" algorithm, along with the rest of their code, is GPL licensed on [GitHub](https://github.com/signalapp/).

## More Links

- [Protecting Your Privacy Online](https://duckduckgo.com/?q=protecting+your+privacy+online) (a DuckDuckGo search)
- [How to encrypt your entire life in less than an hour](https://medium.freecodecamp.com/tor-signal-and-beyond-a-law-abiding-citizens-guide-to-privacy-1a593f2104c3) (includes [Tor Browser](https://www.torproject.org/projects/torbrowser.html.en) and [DuckDuckGo](https://duckduckgo.com/))
- [The Privacy Enthusiast's Guide to Using Android](http://lifehacker.com/the-privacy-enthusiasts-guide-to-using-android-1792432725)
- [The Privacy Enthusiast's Guide to Using an iPhone](http://lifehacker.com/the-privacy-enthusiasts-guide-to-using-an-iphone-1792386831)
- [Tails - the amnesic incognito live system](https://tails.boum.org/)
- [Bitcoin](https://bitcoin.org/) and [Zcash](https://z.cash/) - Private digital cash (advanced)
- [Hardware that respects your freedom](https://www.fsf.org/resources/hw/endorsement/respects-your-freedom) (Free Software Foundation)
