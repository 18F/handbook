---
title: Intro to GitHub
navtitle: Intro to GitHub
---

_This section provides a brief overview of GitHub._


### Documentation

- [GitHub]({{site.baseurl}}/github/) - A detailed guide on how we use GitHub at TTS.

- [GitHub for Beginners](https://www.youtube.com/watch?v=uNa9GOtM6NE&t=1s) - Intended for beginners, this video class is led by Will Slack. Slides are available [here](https://pages.18f.gov/slides/github-basics/#/18) and course materials are [here](https://docs.google.com/document/d/18b-4VPTcuqat-enGQSVzivGH2CsqdQVG0K0eToRM39I/edit).

- [How to use GitHub, the terminal, and the 18F site](https://18f.gsa.gov/2015/03/03/how-to-use-github-and-the-terminal-a-guide/) - This tutorial from Melody Kramer and Greg Boone walks you through using GitHub to contribute to our blog. It's intended for beginners, but includes tips for intermediate GitHub users, too.

## GitHub

[GitHub](https://github.com) is a publicly accessible place to share and collaborate on (primarily) open source software projects. GitHub interacts with a program on your computer called Git that tracks every change ever made in a software project.

You've probably already noticed there's a lot happening on GitHub at TTS. That's because it's so useful! In fact, it's very likely you'll interact with GitHub in _some_ way, even if you're not writing code. The remainder of this post will help you get squared away with creating your GitHub account, setting up some basic stuff, and will show you some of the ways you might use GitHub, even if it's not committing code.

### 1. Set up your account

Follow the instructions [here]({{site.baseurl}}/github/).

### 2. Basics

If you're a developer, you might have very strong feelings about The Right Way to Use Git, but TTS doesn't (yet) have One Way of Using Git, so ask your teammates how they work with GitHub.

If you're not a developer or came from a place that didn't use Git, here are some GitHub-related terms you should be familiar with:

- **Repo** is short for repository, or a project on GitHub. Anybody at TTS can create repos in the 18F organization and you should _always_ create new projects as 18F, not as yourself. You can create new repos in GitHub by clicking the + next to your profile picture. Then, choose New Repository and change the owner to 18F.

- The **license** on every repo must be Creative Commons 0, or CC0. That&rsquo;s shorthand for Public Domain. TTS is not only committed to working in the public domain by our own policies, but is also committed [by law](https://www.usa.gov/government-works). (Though we are allowed to by law, we don&rsquo;t trademark our logo.) There are a few exceptions to that rule, so check with [#admins-github](https://gsa-tts.slack.com/archives/admins-github) and [#wg-opensource](https://gsa-tts.slack.com/archives/wg-opensource) before putting any license _other_ than CC0 on your project. For more details about licensing, see our [open source policy](https://github.com/18F/open-source-policy), [our blog posts about open source](https://18f.gsa.gov/tags/open-source/), and the [Open Source Style guide](https://pages.18f.gov/open-source-guide/). You&rsquo;ll hear more about open source during [Gray&rsquo;s seminar on Product and Open Source]({{site.baseurl}}/intro-to-product-and-open-source).

Once you&rsquo;re a member of the 18F organization, you&rsquo;ll have access to many of our repos.  You&rsquo;ll also have at least read-only access to a few of our private repositories. Check with your team on how to interact with a project. In some cases, the repos themselves have information in a `CONTRIBUTING.md` file for guidance.

- A **fork** is a copy of the main project that is fully separate from 18F&rsquo;s. You might be asked to fork a repo and work off your own copy, or you might be asked to commit directly to your team&rsquo;s original repo. This is the kind of thing you should ask your teammates about — don't make assumptions!

- There are a few exceptions to this, but generally speaking, you will submit any changes to a project through a pull request. A **pull request,** or **PR,** is a way of saying  &ldquo;here are some changes I&rsquo;d like to contribute &rdquo; and letting the repo&rsquo;s owner decide whether to accept (or merge) them or give feedback. Sometimes your pull request will go from your fork to the main project, sometimes from a _branch._ Again, make sure you understand your team&rsquo;s Git workflow. On [#18f-site](), nobody forks and everybody works off of branches; we submit pull requests to the staging branch.

- Developer, designer, editor, manager: Whatever your role is, you&rsquo;ll want to get used to **filing issues on GitHub.** Issues are a common way of submitting feedback on projects at 18F. For example, if you want to write a blog post, you&rsquo;ll be asked to submit an issue to the blog repo. If filing an issue seems more difficult for some reason, head to Slack. Or vice versa.

- You may find it helpful to bookmark the repos, issues, and pull request pages you access frequently.

### 3. Working with GitHub

If you&rsquo;re working with an agency, you'll need to find ways to collaborate with them on the project you're tasked with. Typically, the way we give outside agencies and contractors access to GitHub repos is by making those repositories public. Once they&rsquo;re public, anybody can access them; we just need to add people as a collaborators. [#admins-github](https://gsa-tts.slack.com/archives/admins-github) can help you with that.

You can use GitHub for almost anything, but consider the resources available to agency partners or other stakeholders before deciding to use it. Are your agency partners used to using GitHub? Will they need to create accounts and jump through hoops? Can they even access it from their agency computers? These are the kinds of things we consider when deciding if GitHub is the right thing to use.

TTS sometimes adds contractors and agency partners to the 18F organization on Github. We sometimes use forks to collaborate with contractors. Sometimes we do both. Again, check with your team on how to do this.

Most projects/repositories have a `CONTRIBUTING.md` file in their root directory that explains how the team invites people to contribute to the project. They might prefer chats over pull requests, for example.

Another pro tip: Search the existing issues before you add one. It may make more sense to comment on that issue rather than create a new one.

To submit an issue, Log in, find the appropriate repo on GitHub, and click the Issues tab in the right column. Then, click the New Issue button. Your issue should have a title and explainer text. You&rsquo;ll probably know what to put there, but teams sometimes have guidance on how to format issues or things to include. The [#blog](https://gsa-tts.slack.com/archives/blog), for example, has [a specific set of things we require](https://github.com/18F/blog-drafts#readme) submissions to have before we&rsquo;ll consider them.

Final pro tip: If your project wants issues formatted in a specific way, you can add an issue template file. [This is the one we have for filing new blog post ideas](https://github.com/18F/blog-drafts/blob/master/ISSUE_TEMPLATE.md). Every new post auto-fills with that information.
