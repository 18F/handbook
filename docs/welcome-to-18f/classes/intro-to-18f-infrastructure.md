---
title: Intro to 18F Infrastructure
navtitle: Infrastructure
---

_Hi! I&rsquo;m [Noah Kunin](https://18f.slack.com/messages/@noah/), the Director of Infrastructure at 18F and one of 18F&rsquo;s founding members. In this seminar, I&rsquo;ll cover the basics of Infrastructure._

### TL;DR

- Infrastructure is not just for engineers; it fundamentally shapes how we work.
- If you&rsquo;re an engineer of any kind, the most important part of your job in the government is security. Start here.
- If you&rsquo;re not sure you can do something, please ask first. We promise to get you an answer very quickly.

### What you’ll learn

1. How to make sure you&rsquo;re not breaking the law
2. How to secure your laptop
3. What it means to work in the public

## About Infrastructure

Infrastructure is the blending of skill sets from development (people who build new stuff) and operations (people who are responsible for making sure existing stuff doesn't break). Historically, both in government and in industry, these two teams did not get along because in order for one team to do their job they&rsquo;d often have to block or frustrate the other. Eventually everyone developed better tools and methodologies and today these two disciplines are getting along much better.

That said, government is far behind in implementing newer ways of doing things. My team is here to accelerate that, but we face some unique challenges. When I joined government in 2010 (pre 18F), for example, even talented technology teams had trouble managing change and shipping: sometimes a relatively moderate change would take over 6–14 months to actually release! Such a long cycle time is a disaster.

I set out to understand why the “federal compliance architecture" frustrated so many technology teams in government. The first problem I discovered was simply the length of everything you&rsquo;d need to read to understand how to build technology in the federal government. [Here is a somewhat complete list](https://docs.google.com/spreadsheets/d/1kv7DW9-lu7Zl1wAhSzU4pmWXVjTpp4swNTl1OSYPmAs/edit). It&rsquo;s over 4,000 pages, and that&rsquo;s _before_ adding agency-specific rules or guidance.

No one can keep that in their head at the same time, of course, which means &mdash; just like how dev and ops used to operate in opposition &mdash; people with a partially complete knowledge of the federal compliance architecture often operate at odds with one another. To help 18F achieve its mission we&rsquo;ve collapsed all of that authority into one team, 18F Infrastructure (18FI). 18FI&rsquo;s work applies to much more than technology; it applies to our entire operation, including how we work inside the law, how we secure our systems, how we collect data from the public, and how we spend money.

## <a id="obeying-the-law">Obeying the law</a>

 Rule #1 is if you don&rsquo;t see us doing something already, and you can&rsquo;t find express authorization to do it, please ask first. We promise to get you an answer very quickly. If there is software or hardware you need that you don&rsquo;t have or don&rsquo;t know how to get, for example, hop into [#infrastructure](https://18f.slack.com/messages/infrastructure/) and ask. If no one knows, tag me and I&rsquo;ll point you at the process we will follow if I&rsquo;m willing to approve it.

---

_If you don&rsquo;t see us doing something already, and you can&rsquo;t find express authorization to do it, please ask first._

---

We help ensure you don&rsquo;t accidentally break the law while doing your job. If you&rsquo;re a researcher, for example, you might also hear people grumble about something called the Paperwork Reduction Act (PRA). The PRA basically does the opposite of what it says on the label (seriously, there's actual data on this). It was originally written to reduce the paperwork burden placed on the public by the government but, in practice, operating inside of the PRA can make it difficult for researchers to actually research.

At the risk of sounding like a broken record: please ask before you begin any research project &mdash; before you solicit any kind of input from the public, really. The [#pra](https://18f.slack.com/messages/pra/) and [#research](https://18f.slack.com/messages/research/) channels on Slack are good places to start, and our Design Method Cards were specifically designed to reflect the legal implications of certain types of user research methodologies.

## <a id="security">Security</a>

You&rsquo;ve probably heard about the recent [Office of Personnel Management (OPM) data breach](https://en.wikipedia.org/wiki/Office_of_Personnel_Management_data_breach), and you probably know about the NSA (by way of Ed Snowden, perhaps). Everyone at 18F is responsible for our organization&rsquo;s security and ensuring that the private data of the public is safe.

The most important part of your job is security. 18F has begun to document its own [security standards](https://pages.18f.gov/before-you-ship/security/), and we&rsquo;re hard at work on improving them (you&rsquo;ll hear more about this in the coming months). In the meantime, be sure to [secure your Macbook](/equipment/#laptop) and [turn on FileVault](https://support.apple.com/en-us/HT204837). 

Take care when connecting applications to each other. While such connections can provide workflow conveniences, they also open us up to security violations. Often times this is an OAuth integration. Before connecting applications together, for example enabling a Slack-to-Google Docs plugin, please consult us in #infrastructure.

## <a id="the-public-interest">The public interest</a>

As a federal employee, you yourself have practically no right to privacy in connection with your work. Anything you say or do &mdash; in an email, a phone call, a private GitHub repo, a Slack direct message, etc &mdash; can be monitored, recorded, and turned into a Federal record. If you don&rsquo;t want the government to know something, use a personal device or service. If you&rsquo;re using 18F, GSA, or Gov-wide provided anything (software, tools, devices, etc), you are actively consenting to being monitored.

This is an easy place to make mistakes, but it&rsquo;s also another great place to introduce another rule of thumb. Rule #2 is: Either everyone in the public can participate, or no one can.

---

_Either everyone in the public can participate, or no one can._

---

There&rsquo;s already extensive discussion of this in various Slack channels&rsquo; history, but the long and short is that **you alone cannot decide why Person A has access to something but not Person B.** You alone, for example, can&rsquo;t decide if a friend of yours, especially a friend outside of government, can help on a project (this includes things like contributing code and reviewing a Google Doc) if that project itself is not already contributable by the public at large. There are multiple laws and regs that interact with each other around this space, but the bottom line is that a democratic government cannot make capricious decisions around who gets in.

That isn&rsquo;t to say that 18F can&rsquo;t solicit public input. We absolutely can. We can also limit access through a process, but we need a process that is both (1) initially open to everyone and (2) is clearly documented. This also applies to acquisitions or procurement, and the very byzantine laws around government finance.

This brings us to Rule #3: You cannot spend a single penny &mdash; or create the expectation for a single penny to be spent &mdash; without prior authorization from Congress. Anything involving money must trace back to a Congressional decision; the Constitution is abundantly clear on this. (Anything else is a direct violation of the Constitution, and [the Constitution is our ultimate boss](http://cgbpexamprep.com/wp-content/uploads/USG-Organizational-Chart.jpg).) Connections to Congress are often very complicated and almost never direct. So again, if you're worried about Rule #3, see Rule #1.

---

_You cannot spend a single penny, create the expectation that a penny will be spent, or cause a penny to be spent, unless Congress has appropriated the funds._

---

## <a id="infrastructure-rules">Infrastructure rules</a>

Here are some things that you might have been used to doing outside of government that you cannot do now:

1. You cannot use or deploy to whatever third party tool you want without asking in [#infrastructure](https://18f.slack.com/messages/infrastructure/)
2. You are limited in the political activities you can do (see the Hatch Act).
3. Ethics rules are in place for accepting gifts and payment. When in doubt, ask [#legalstuff](https://18f.slack.com/messages/legalstuff/).

If you&rsquo;re an engineer of any kind, the most important part of your job in the government at the moment is **security.** If you&rsquo;re building anything, a good place to start is [18F&rsquo;s security standards](https://pages.18f.gov/before-you-ship/security/).

The three rules of Infrastructure are:

1. If you don&rsquo;t see us doing it already and you can't find express authorization to do something, please ask first.
2. Either everyone in the public can participate, or no one can.
3. You cannot spend a single penny, or or create the expectation for a single penny to be spent, without prior authorization from Congress.

## Questions

### I&rsquo;ve had to list my personal phone number in many of the forms I've been submitting. Just to be clear, does that constitute me using my personal device as an engine for my work?

No, that&rsquo;s for emergencies and ID verification and what not. Similarly, if you access a cloud based system via a personal device, that doesn't count either. So feel free to check email, Slack, on any computer as long as you&rsquo;re coming in via 2-factor authentication. And that you remember to sign out if you're not on a device you control.


### I create a Chrome profile on my work laptop that is my personal account, and so far have only used it to: (1) use my Google Play Music account (2) check email one time to get my GitHub 18F invitation (3) access my LastPass account for my GitHub password. How much of my personal information has been made available to you (or anyone else who can see my account stuff) by doing this?

In general, most HTTPS connections ensure that no one in the Gov, including the network owners, has access to those packets. At GSA, that&rsquo;s true, at least for 18F-issued laptops. That is often not true for employees on other Gov networks, including, at the moment, the White House. Those agencies give their employees work computers specially configured to allow intercepting and MITM of all internet activity, whether it's HTTP or HTTPS.

Personally, I maintain two separate Chrome profiles (18F Noah, and Personal Noah) and segregate sessions, extensions, data, etc that way. If I need to access something personal (like my bank or personal servers), I usually only do that via tethering or a internet access point I personally trust.  There is no "on the wire" MITM intercept on any tethered device.

We&rsquo;re going to start managing MacBooks centrally, so imminently this won&rsquo;t be an issue. But please don&rsquo;t use iCloud for anything sensitive right now (don&rsquo;t sync your Gov OSX Keychain to it either yet).

### I&rsquo;m using my private GitHub account right now to access the 18f repo. Should I change that now?

What you do with GitHub on your own time is just you. Just don&rsquo;t make a GitHub repo for work under your own user - always have it made in the 18F GitHub Org, and you're fine. And if you do that by accident, no worries, transferring repos is easy.


### Am I violating federal records law if I delete a project from my personal computer?

If that&rsquo;s the canonical and only source of that information, yes. If that information is stored elsewhere, no.


### What do I ask Team Ops vs Infrastructure?

Team Ops focuses on what would normally be considered the &ldquo;back office:&rdquo; financial matters, procurement, and space operations. Infrastructure focuses on our digital infrastructure and development methodologies. All operations teams work very closely together and there many areas we have joint ownership. Don&rsquo;t worry about the specifics; we&rsquo;re always happy to direct you in the right direction.


### How does this all overlap with things related to our Ethics and Legal training?

There&rsquo;s no one answer here. It&rsquo;s a complicated Venn diagram. One easy way to think about it is that GSA&rsquo;s legal team focuses on what you **as a person** can and cannot do. 18FI is more concerned about the behavior of **systems we use or build.**

---

Ask in Slack: [#infrastructure](https://18f.slack.com/messages/infrastructure/); Before you start a research project: [#pra](https://18f.slack.com/messages/pra), [#research](https://18f.slack.com/messages/research).
