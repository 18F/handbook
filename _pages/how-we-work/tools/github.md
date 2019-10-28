---
title: GitHub
tag:
  - Git
---

GitHub is a closed-source platform for [open-source](https://github.com/18F/open-source-policy) communities. It allows us to collaborate on documentation and code, both internally and with a broader audience.

## Setup

GitHub is a web application, and you may be able to do all of your work within the [github.com](https://github.com) website. Optionally, you may also install the GitHub [desktop application](https://desktop.github.com/).

If you don't have a GitHub account, you must use your work email (rather than your personal email) to [sign up](https://github.com/join), as this helps us with [records retention]({{site.baseurl}}/records-management) and identification. If you do have a GitHub account, please [add your work email to your profile](https://github.com/settings/emails) as your primary email.

### 1. Complete your profile

Include the following:

- Name: Your first or first and last name.
- Company: Your government agency. (If you also use GitHub for personal projects, consider specifying "<code>agency</code> (work) + personal projects" to make it clear that some of your GitHub projects may be personal in nature.)
- Location: Your primary work location (city, state).
- Photo: A headshot photo, or an image that is unique to you.

### 2. Set up two-factor authentication

[Enable two-factor authentication (2FA)](https://github.com/settings/security):

- [Use your work email](https://help.github.com/articles/setting-your-email-in-git) rather than your personal email for work-related commits. This only applies to people with more than one email address tied to their GitHub account. Note that this is different than [setting notifications to go to a specific email address](https://help.github.com/articles/choosing-the-delivery-method-for-your-notifications/). If you make commits via GitHub's web interface, it will use your "primary" email address for those commits, so check your [email settings](https://github.com/settings/emails) before making web commits.

- If you're using your work computer for personal projects on GitHub and want your personal email tied to those commits, you can set your GSA email as part of the global `.gitconfig`, then [override on a repository level](http://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration) with your personal email, or use a tool like [karn](https://github.com/prydonius/karn). If you have both emails in your [GitHub settings](https://github.com/settings/emails), they will both be tied to your GitHub account anyway.

### 3. Turn notifications on

**[Turn notifications on](https://github.com/settings/notifications)** and adjust the settings as needed. Some people watch every repo; others only watch when they're mentioned.

You will get a lot of emails when you turn notifications on. To help stem the tide, you can set up a Gmail filter to automatically archive emails from `notifications@github.com`. However, you probably want to let through those emails that contain your GitHub username or are posted to a repo you're watching. Since on GitHub, each repo is considered its own mailing list, checking for that identifier is one reliable way to allow these notifications through. For example, if the repo name in GitHub is `18F/calc`, the mailing list will be `calc.18F.github.com`. You can also find this by opening an email from the desired repo, clicking the "more info" arrow in the "To" field, and copying the bracketed address in the "mailing list" field. Adding `list:(calc.18F.github.com)` to your filter's exceptions will allow any issues posted to that repo to reach your inbox.

### 4. Join the 18F organization

All TTS staff should be added here. Ask in [#admins-github](https://gsa-tts.slack.com/messages/admins-github/) to "please add me (`https://github.com/username`) to [team]," which will be one of the following:

- [`18f-staff`](https://github.com/orgs/18F/teams/18f-staff)
- One of the [TTS teams](https://github.com/orgs/18F/teams/tts-gsa-partners/teams)

An admin will add you, after which you'll need to accept their invite from the email or by going [here](https://github.com/orgs/18F/invitation?via_email=1).

You may need access to [other GitHub organizations](#organizations), depending on your job. If that applies to you, your team will get you added as part of their onboarding.

### 5. Make your membership public

Go to the [18F people page](https://github.com/orgs/18F/people). Click where it says **private** next to your name. Change that to **public**.

## Rules

- **Abide by [the TTS Code of Conduct]({{site.baseurl}}/code-of-conduct).** If you see anyone violating our Code of Conduct, see the reporting section.

- **Do not grant Admin rights to anyone but 18F staff.**

- **Do not store sensitive information in GitHub**, including environment variables, private configuration data, or sensitive information about the public (including but not limited to PII). In the event that such variables or configuration data is pushed to a GitHub repository accidentally, even momentarily, consider it compromised and revoke or change the credentials immediately. Do not delete the commit itself. Then immediately follow the directions on the [incident response handbook page]({{site.baseurl}}/security-incidents). If you're unsure how to protect this information, consult with Infrastructure on GitHub or in the [#admins-github](https://gsa-tts.slack.com/messages/admins-github/) channel in Slack. Some projects use [Citadel](https://github.com/poise/citadel) to store secrets. Also refer to the [18F Handbook page on sensitive information]({{site.baseurl}}/sensitive-information) and [guidance on sensitive information in our open source policy.](https://github.com/18F/open-source-policy/blob/master/practice.md#protecting-sensitive-information)

  - To help you not commit sensitive information to Github, [please read about Git
    Seekrets]({{site.baseurl}}/sensitive-information#git-seekret).

- **Ask Infrastructure before integrating a service with GitHub.** Many websites offer the option to "Sign in with GitHub" and may further request permission to access your "personal user data." Providing this level of access can not only share your public or private email address, but it can also grant the ability to access 18F's private repositories. For this reason, we ask that all organization members refrain from authorizing integrations and request any desired integrations through an [Infrastructure issue](https://github.com/18F/infrastructure).

- **Ask Infrastructure before creating private repositories.** We pay GitHub for the ability to create private repositories and need to bill clients for repositories created on their behalf. Before you do anything, drop into [#admins-github](https://gsa-tts.slack.com/messages/admins-github) and explain what you'd like to do and why. Be sure to include a link in your repo README to a document that explains why it is private. (See the **Exceptions** section of the [18F Open Source policy](https://18f.gsa.gov/open-source-policy/).)

- **You do not need approval to create public repositories.**

- **Ask Infrastructure before deleting repositories.** As a government team, we can’t delete repositories without Infrastructure first reviewing them for information that they may need to retain/archive (including issues, pull request comments, commit history, and other information). If you want to delete a repository, go to [#admins-github](https://gsa-tts.slack.com/messages/admins-github/) and explain what you'd like to do and why, and wait for approval before deleting it.

- **You do not need approval to transfer a repository.** In some cases, it may make sense to transfer a repository to a client. The person performing the transfer will need to be a member of both organizations. After transferring the repository to the client's organization, create a fork of it in the 18F organization. This is so that:
  - We have a record of the repository in our GitHub organization
  - We have a copy of the code, should the decide to delete the transferred repository, make it private, etc.

## How-to

### Documentation

- [Brief onboarding class about GitHub]({{site.baseurl}}/intro-to-github).

- The 18F [Open Source Policy](https://github.com/18F/open-source-policy/blob/master/policy.md) and accompanying [practice guide](https://github.com/18F/open-source-policy/blob/master/practice.md) explain why and how we write code and documentation in the open.

- [A guide to using GitHub and the Terminal from 18F's blog](https://18f.gsa.gov/2015/03/03/how-to-use-github-and-the-terminal-a-guide/).

- Will Slack [explains the basics](https://docs.google.com/document/d/18b-4VPTcuqat-enGQSVzivGH2CsqdQVG0K0eToRM39I/edit) of version control and GitHub. Slides are available [here](https://pages.18f.gov/slides/github-basics/#/18); course materials are [here](https://docs.google.com/document/d/18b-4VPTcuqat-enGQSVzivGH2CsqdQVG0K0eToRM39I/edit). It's also available [in video form](https://www.youtube.com/watch?v=uNa9GOtM6NE).

- The [18F Open Source Style Guide](https://pages.18f.gov/open-source-guide/) covers conventions and best practices.

### Git and GitHub Usage

Git and GitHub are the [standard](https://github.com/18F/Infrastructure#approved-toolchain) tools for revision control at 18F. Git is an open-source version control system, and GitHub is a closed-source, commercial service that hosts Git repositories and adds extra features to support them, such as pull requests and issue tracking. Although this _sounds_ super technical, these tools are _not_ just for developers hacking code; 18F employees use GitHub to author blog posts, manage documentation, and comment on one another's work.

In other words, you'll probably use GitHub a lot at 18F. We recommend you get familiar with the basics. If you're new to GitHub and feel confused at first, that's normal. Try a few guides, review our documentation, and ask your teammates for help. GitHub also has a handy document that explains the typical [GitHub Workflow](https://guides.github.com/introduction/flow/).

### Working with outside collaborators

Giving contractors and federal partners read or write access to your repository is both allowed and _encouraged_ to facilitate the flow of ideas and build a stronger, more decentralized community.

Confusingly, no one should be an "outside collaborator" in GitHub parlance. Instead, we should manage repo access exclusively via teams.

Here's our current process to address both operational and security concerns:

1. If the user is a member of the federal government, confirm we have an active [inter-agency agreement (IAA)](https://pages.18f.gov/iaa-forms/primer.html) or other legal document authorizing the work.
1. If the user is a contractor, confirm we have an active and valid contract with them, or their company.
1. Ask the collaborator(s) to go through [the first three setup steps](#setup).
   - They will need to confirm they've done this before you continue.
   - They will also need to add an e-mail address to the GitHub profile so we can contact them later when doing clean-up in our org.
   - Do not ask the admins to add the collaborator to the 18F or OPP teams as detailed in step 4.
1. (Ask #admins-github to) [create a team](https://help.github.com/articles/setting-up-teams/) whose access we can turn off/on with one button. Separate a staff-only team from a contractor/mixed/collaborator team for a project, and name it something like `Project name - Collaborators | Skillset`. You only need to set a `parent team` for your new team if you need your team to inherit existing permissions from an existing team (for example, if this team should automatically have access to a base set of repos). If your new team is for external collaborators, you will generally not want to add a parent team.
1. In the "Description" of the team, put something reasonable plus a point-of-contact email address for the collaborators.
   - Ideally this is the address of someone senior — someone you can email if issues come up and who can rally the troops.
1. (Ask #admins-github to) [add the members to the team](https://help.github.com/articles/maintaining-teams/).
   - The 18F GitHub Organization requires 2FA for its members. Users without 2FA cannot be added to the GitHub Organization.
1. Give the team read/write permissions on the relevant repositories. Admin rights should be limited exclusively to 18F staff.

When the engagement is over, you must let [#admins-github](https://gsa-tts.slack.com/messages/admins-github) know so the team can be deleted and access removed.

### Pull requests

18F defaults to using branches, though teams are welcome to decide they prefer using forks instead. Regardless of whether you branch or fork, changes happen via [pull requests](https://help.github.com/articles/using-pull-requests/).

In the process of receiving feedback in a pull request, some individuals on some teams may choose to amend, reorder, or squash commits. This type of "re-writing history" is compliant with the Freedom of Information Act (FOIA) when it occurs on a pull request because git branches are considered a work in progress. These actions are not allowed on the master branch because that is considered the canonical source of information.

### Issues

If you want to make a suggestion to an 18F project without making a specific change to its code, such as if you aren't sure how to fix a problem or want clarification before fixing something, file an issue on that project via GitHub. Try searching the list of open issues before you add one; the error you see might already be on the team's radar.

### Permissions

Teams can give groups of people administrative, write, or read permissions to 18F repositories. Even if you have write access into a repository, we strongly encourage the submission of pull requests for improvements or fixes (see "we prefer branching to forking when we're working together on 18F projects," above).

Contractors or external government collaborators should only be added to teams with scoped write permissions to the repositories they're working on. They should never have administrative-level rights. In order to separate out these permissions, create a team in the format of `projectname-admins` for government staff, if necessary.

### Archiving

As discussed in the [18F open source policy](https://github.com/18F/open-source-policy/blob/master/practice.md), we [archive](https://help.github.com/articles/archiving-repositories/) repositories to deprecate them. No approval is needed archive/unarchive a repository. Feel free to do so yourself, or ask [#admins-github](https://gsa-tts.slack.com/messages/admins-github) for help. Note that archiving a repository is _not_ the same as deleting it.

If the repository is published as a package, please also mark it as deprecated.

- NPM: Use [`npm deprecate`](https://docs.npmjs.com/deprecating-and-undeprecating-packages-or-package-versions)
- PyPI: Publish with a `Development Status :: 7 - Inactive` [classifier](https://pypi.org/classifiers/)
- Ruby gem: Publish with a [post-install message](https://guides.rubygems.org/specification-reference/#post_install_message)

## Tips

- **Document your workflow.** There are many different ways to use GitHub, and each different team of people at 18F (likely) uses it differently. That said, teams should document their desired git workflow for each project, such as in your repository's `contributing.md` file. The 18F-Site team offers a good example with [their GitHub wiki](https://github.com/18F/18f.gsa.gov/wiki/How-we-Git). In 18F's [development guide](https://pages.18f.gov/development-guide/), there are [code review questions](https://pages.18f.gov/development-guide/code-review/) that your team may want to go over as you think about documentation.

- **Do you fork or do you branch?** Git allows you to both "fork" and "branch" repositories to make a place to work on changes before you submit them for integration into the main code. **[Making a fork](https://help.github.com/articles/fork-a-repo/)** creates a copy of the repository in your own GitHub account. **Making a branch** of the main repository means you're working in your own little space, but it's still part of the main repository---which helps keep the project organized, since everyone can easily see what teammates are working on.

## For admins

In GitHub parlance, where repos all have admins, org-wide administrators are called "owners."

- When you take care of an ask, give it a :check: reaction in Slack. If you have questions about an ask, please start a thread so that the channel stays clean.
- Whenever possible, owners should push decisions as to be as close as possible to those most affected - like whoever owns or last worked on a repo.
- If you aren't sure about the answer to something, its always better to check with someone else instead of guessing.
- If you aren't helping out as an owner, please give up your permissions to help minimize our risk.

### Organizations

TTS is heavily involved in the following GitHub organizations:

| Organization                                                                           | Government-owned<sup>1</sup> | TTS-managed<sup>2</sup>                           |
| -------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------- |
| [@18F](https://github.com/18F)                                                         | Y                            | Y                                                 |
| [@cloudfoundry-community](https://github.com/cloudfoundry-community)                   | N                            | N                                                 |
| [@digital-analytics-program](https://github.com/digital-analytics-program)             | Y                            | Y                                                 |
| [@digitalgov](https://github.com/digitalgov)                                           | Y                            | Y                                                 |
| [@eregs](https://github.com/eregs)                                                     | Y                            | N                                                 |
| [@federalist-users](https://github.com/federalist-users)                               | Y                            | Y                                                 |
| [@fedramp](https://github.com/fedramp)                                                 | Y                            | Y                                                 |
| [@fellows-in-innovation](https://github.com/fellows-in-innovation)                     | Y                            | Y                                                 |
| [@fisma-ready](https://github.com/fisma-ready)                                         | N                            | N                                                 |
| [@GSA](https://github.com/GSA)                                                         | Y                            | [N](https://github.com/GSA/GitHub-Administration) |
| [@opencontrol](https://github.com/opencontrol)                                         | N                            | N                                                 |
| [@project-open-data](https://github.com/project-open-data)                             | Y                            | Y, shared with OMB                                |
| [@presidential-innovation-fellows](https://github.com/presidential-innovation-fellows) | Y                            | Y                                                 |
| [@usagov](https://github.com/usagov)                                                   | Y                            | Y                                                 |
| [@uswds](https://github.com/uswds)                                                     | Y                            | Y                                                 |

<sup>1</sup>: TTS staff, contractors, and partners who are offboarding need to be removed from all government-owned GitHub organizations.

<sup>2</sup>: For the ones that are TTS-managed, get help in [#admins-github](https://gsa-tts.slack.com/messages/admins-github).

We automate some administration of our repositories - see [`ghad`](https://github.com/18F/ghad) for more info.

## Resources

- [Githug](https://github.com/Gazler/githug) is designed to give you a practical way of learning git. It has a series of levels, each requiring you to use git commands to arrive at a correct answer.

- [Try Git](https://try.github.io/levels/1/challenges/1)

---

#### Still have questions?

Ask in Slack: [#git](https://gsa-tts.slack.com/messages/git), [#admins-github](https://gsa-tts.slack.com/messages/admins-github), [#dev](https://gsa-tts.slack.com/messages/dev)
