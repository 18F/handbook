---
title: Intro to 18F Infrastructure
navtitle: Infrastructure
---
This page provides an overview of the Infrastructure team, important compliance topics, and technology best practices at TTS. As a part of TTS Classes, you will review [this document](https://docs.google.com/document/d/1iQP1S_PbJyOaeTlPEpD9oxal3kgA0bb2YNYbN56fJSk/edit#) and then complete this [confirmation survey](https://goo.gl/forms/VP4Ci9Ed3r6UxG6H3).

### TL;DR

- Infrastructure is not just for engineers; it fundamentally shapes how we work.
- If you're an engineer of any kind, the most important part of your job in the government is security. Start here.
- If you're not sure you can do something, please ask first. We promise to get you an answer quickly.

### What you’ll learn

1. How to make sure you're not breaking the law
2. How to secure your laptop
3. What it means to work in the public

## About Infrastructure

### <a id="obeying-the-law">Obeying the law</a>

Rule #1 is if you don't see us doing something already, and you can't find express authorization to do it, please ask first. We promise to get you an answer quickly. For example, if there is software or hardware you need that you don't have or don't know how to get, hop into [#infrastructure](https://gsa-tts.slack.com/messages/infrastructure/) and ask. 

### <a id="security">Security</a>

You've probably heard about the [Office of Personnel Management (OPM) data breach](https://en.wikipedia.org/wiki/Office_of_Personnel_Management_data_breach), and you probably know about the NSA. Everyone at TTS is responsible for our organization's security and ensuring that the private data of the public is safe.

The most important part of your job is security. 18F has its own [security standards](https://pages.18f.gov/before-you-ship/security/) around the software we develop. Be sure to [secure your Macbook]({{site.baseurl}}/equipment/#laptop) and [turn on FileVault](https://support.apple.com/en-us/HT204837).

Take care when connecting applications to each other. While such connections can provide workflow conveniences, they also open us up to security violations. Often times this is an OAuth integration. Before connecting applications together, for example enabling a Slack-to-Google Docs plugin, please consult us in [#infrastructure](https://gsa-tts.slack.com/messages/infrastructure/).

### <a id="the-public-interest">The public interest</a>

As a federal employee, you yourself have practically no right to privacy in connection with your work. Anything you say or do - in an email, a phone call, a private GitHub repo, a Slack direct message, etc - can be monitored, recorded, and turned into a Federal record. If you don't want the government to know something, use a personal device or service. If you're using TTS, GSA, or Gov-wide provided anything (software, tools, devices, etc), you are actively consenting to being monitored.

This is an easy place to make mistakes, but it's also another great place to introduce another rule of thumb. Rule #2 is: Either everyone in the public can participate, or no one can. You alone cannot decide why Person A has access to something but not Person B. You alone, for example, can't decide if a friend of yours, especially a friend outside of government, can help on a project (this includes things like contributing code and reviewing a Google Doc) if that project itself is not already contributable by the public at large. There are multiple laws and regs that interact with each other around this space, but the bottom line is that a democratic government cannot make capricious decisions around who gets in.

That isn't to say that TTS can't solicit public input. We absolutely can. We can also limit access through a process, but we need a process that is both (1) initially open to everyone and (2) is clearly documented. This also applies to acquisitions or procurement, and the very complex laws around government finance.

This brings us to Rule #3: You cannot spend a single penny, or create the expectation for a single penny to be spent, without prior authorization. Anything involving money must trace back to approvals. You can find out all about purchase approvals on the [Purchase Requests]({{site.baseurl}}/purchase-requests/) page.

### <a id="infrastructure-rules">Infrastructure rules</a>

There are some things that you might have been used to doing outside of government that you cannot do now. 

You cannot use or deploy to whatever third party tool you want without asking in [#infrastructure](https://gsa-tts.slack.com/messages/infrastructure/).

If you're an engineer of any kind, the most important part of your job in the government at the moment is **security.** If you're building anything, a good place to start is [18F's security standards](https://pages.18f.gov/before-you-ship/security/).

The three rules of Infrastructure are:

1. If you don't see us doing it already and you can't find express authorization to do something, please ask first.
2. Either everyone in the public can participate, or no one can.
3. You cannot spend a single penny, or or create the expectation for a single penny to be spent, without prior approval.

## Questions

### I create a Chrome profile on my work laptop that is my personal account, and so far have only used it to: (1) use my Google Play Music account (2) check email one time to get my GitHub 18F invitation (3) access my LastPass account for my GitHub password. How much of my personal information has been made available to you (or anyone else who can see my account stuff) by doing this?

Consider maintaining two separate Chrome profiles (18F and Personal) and segregate sessions, extensions, data, etc that way. In general, most HTTPS connections ensure that no one in the Gov, including the network owners, has access to those packets. At GSA, that's true, at least for 18F-issued laptops. That is not true for employees on all Gov networks. Those agencies give their employees work computers specially configured to allow intercepting and MITM of all internet activity, whether it's HTTP or HTTPS. 

### I'm using my private GitHub account right now to access the 18f repo. Should I change that now?

What you do with GitHub on your own time is just you. Just don't make a GitHub repo for work under your own user - always have it made in the 18F GitHub Org, and you're fine. And if you do that by accident, no worries, transferring repos is easy.

### Am I violating federal records law if I delete a project from my personal computer?

If that's the canonical and only source of that information, yes. If that information is stored elsewhere (like GitHub or Google Drive), no.

### What do I ask TTS Ops vs Infrastructure?

TTS Ops focuses on what would normally be considered the "back office" financial matters, procurement, and space operations. Infrastructure focuses on our digital infrastructure and development methodologies. All operations teams work very closely together and there many areas we have joint ownership. Don't worry about the specifics; we're always happy to direct you in the right direction.

---

Ask in Slack: [#infrastructure](https://gsa-tts.slack.com/messages/infrastructure/); Before you start a research project: [#pra](https://gsa-tts.slack.com/messages/pra), [#research](https://gsa-tts.slack.com/messages/research).
