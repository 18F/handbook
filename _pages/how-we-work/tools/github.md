---
title: GitHub
---

GitHub is a closed-source platform for [open-source](https://github.com/18F/open-source-policy) communities. It allows us to collaborate on documentation and code, both internally and with a broader audience.

## Documentation

- Greg Boone gives [a brief class on GitHub and the 18F website](/github-and-18f-site).

- Melody Kramer and Greg Boone co-wrote [a guide to using GitHub and the Terminal](https://18f.gsa.gov/2015/03/03/how-to-use-github-and-the-terminal-a-guide/).

- Will Slack [explains the basics](https://docs.google.com/document/d/18b-4VPTcuqat-enGQSVzivGH2CsqdQVG0K0eToRM39I/edit) of version control and GitHub. Slides are available [here](https://pages.18f.gov/slides/github-basics/#/18); course materials are [here](https://docs.google.com/document/d/18b-4VPTcuqat-enGQSVzivGH2CsqdQVG0K0eToRM39I/edit).

- The [18F Open Source Style Guide](https://pages.18f.gov/open-source-guide/) covers conventions and best practices.


## <a id="setup">Setup</a>

Because GitHub is a web application, there&rsquo;s no installation necessary, but you may find the [desktop app](https://desktop.github.com/) useful.

If you don&rsquo;t have a GitHub account, you must use your work email (rather than your personal email) to [sign up](https://github.com/join), as this helps us with [records retention](/federal-records) and identification. If you do have a GitHub account, please [add your work email to your profile](https://github.com/settings/emails) as your primary email, and ensure it is visible on your public GitHub profile.

### 1. Complete your profile

Include the following:

- Name: Your first or first and last name.
- Company: Your government agency. (If you also use GitHub for personal projects, consider specifying &ldquo;<code>agency</code> (work) + personal projects&rdquo; to make it clear that some of your GitHub projects may be personal in nature.)
- Location: Your primary work location (city, state).
- Photo: A headshot photo, or an image that is unique to you.

### 2. Set up two-factor authentication

[Enable two-factor authentication (2FA)](https://github.com/settings/security):

- [Use your work email](https://help.github.com/articles/setting-your-email-in-git) rather than your personal email for work-related commits. This only applies to people with more than one email address tied to their GitHub account. Note that this is different than [setting notifications to go to a specific email address](https://help.github.com/articles/configuring-notification-emails-for-organizations). If you make commits via GitHub&rsquo;s web interface, it will use your &ldquo;primary&rdquo; email address for those commits, so check your [email settings](https://github.com/settings/emails) before making web commits.

- If you're using your work computer for personal projects on GitHub and want your personal email tied to those commits, you can set your GSA email as part of the global `.gitconfig`, then [override on a repository level](http://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration) with your personal email, or use a tool like [karn](https://github.com/prydonius/karn). If you have both emails in your [GitHub settings](https://github.com/settings/emails), they will both be tied to your GitHub account anyway.

### 3. Turn notifications on

**[Turn notifications on](https://github.com/settings/notifications)** and adjust the settings as needed. Some people watch every repo; others only watch when they're mentioned.

You will get a lot of emails when you turn notifications on. To help stem the tide, you can set up a Gmail filter to automatically archive emails from `notifications@github.com`. However, you probably want to let through those emails that contain your GitHub username or are posted to a repo you're watching. Since on GitHub, each repo is considered its own mailing list, checking for that identifier is one reliable way to allow these notifications through. For example, if the repo name in GitHub is `18F/calc`, the mailing list will be `calc.18F.github.com`. You can also find this by opening an email from the desired repo, clicking the "more info" arrow in the "To" field, and copying the bracketed address in the "mailing list" field. Adding `list:(calc.18F.github.com)` to your filter's exceptions will allow any issues posted to that repo to reach your inbox.

### 4. Join the 18F organization

After you&rsquo;ve enabled 2FA and added your government email address to your profile, hop into [#admins-github](https://18f.slack.com/messages/admins-github/) on Slack and **post the following**: "I've enabled two-factor authentication – please add me (`@username`) to https://github.com/orgs/18F/teams/18f on GitHub." An admin will add you, after which you&rsquo;ll need to accept their invite by going [here](https://github.com/orgs/18F/invitation?via_email=1).

### 5. Make your membership public

Go to the [18F people page](https://github.com/orgs/18F/people). Click where it says **private** next to your name. Change that to **public**.


## Rules

- **Abide by [the 18F Code of Conduct](/code-of-conduct).** If you see anyone violating our Code of Conduct, please contact [Noah Kunin](https://18f.slack.com/messages/noah/) or [Hillary Hartley](https://18f.slack.com/messages/hillary/).

- **Do not grant Admin rights to anyone but 18F staff.**

- **Do not store sensitive information in GitHub**, including environment variables, private configuration data, or sensitive information about the public (including but not limited to PII). In the event that such variables or configuration data is pushed to a GitHub repository accidentally, even momentarily, consider it compromised and revoke or change the credentials immediately. Do not delete the commit itself. Then immediately follow the directions in the `Purpose` field of in [#incident-response](https://18f.slack.com/messages/incident-response/). If you&rsquo;re unsure how to protect this information, consult with Infrastructure on GitHub or in the [#admins-github](https://18f.slack.com/messages/admins-github/) channel in Slack. Some projects use [Citadel](https://github.com/poise/citadel) to store secrets.

- **Ask Infrastructure before integrating a service with GitHub or creating private repositories.** Many websites offer the option to &ldquo;Sign in with GitHub&rdquo; and may further request permission to access your &ldquo;personal user data.&rdquo; Providing this level of access can not only share your public or private email address, but it can also grant the ability to access 18F&rsquo;s private repositories. For this reason, we ask that all organization members refrain from authorizing integrations and request any desired integrations through a [Infrastructure issue](https://github.com/18F/infrastructure).

- **Ask Infrastructure before creating private repositories.** We pay GitHub for the ability to create private repositories and need to bill clients for repositories created on their behalf. Before you do anything, drop into [#admins-github](https://18f.slack.com/messages/admins-github) and explain what you&rsquo;d like to do and why.

- **Ask Infrastructure before deleting repositories.** Deleting repositories isn&rsquo;t as simple as deleting them from GitHub. Before you do anything, drop into [#admins-github](https://18f.slack.com/messages/admins-github/) and explain what you&rsquo;d like to do and why. Note that we do use [BackHub](https://backhub.co/) for backups of repositories, just in case.

### Working with outside collaborators

Giving contractors and federal partners read or write access to your repository is both allowed and _encouraged_ to facilitate the flow of ideas and build a stronger, more decentralized community.

Here&rsquo;s our current process to address both operational and security concerns:

1. If the user is a member of the federal government, confirm we have an active [inter-agency agreement (IAA)](https://pages.18f.gov/iaa-forms/primer.html) or other legal document authorizing the work.
1. If the user is a contractor, confirm we have an active and valid contract with them, or their company.
1. Ask the collaborator(s) to go through [the setup steps](#setup).
    * They will need to confirm they've done this before you continue.
2. (Ask #admins-github to) [create a team](https://help.github.com/articles/adding-people-to-teams-in-an-organization/) whose access we can turn off/on with one button. Separate a staff-only team from a contractor/mixed/collaborator team for a project, and name it something like `Project name - Collaborators | Skillset`.
3. In the &ldquo;Description&rdquo; of the team, put something reasonable plus a point-of-contact email address for the collaborators.
    * Ideally this is the address of someone senior — someone you can email if issues come up and who can rally the troops.
5. (Ask #admins-github to) add the members.
    * The 18F GitHub Organization requires 2FA for its members. Users without 2FA cannot be added to the GitHub Organization.
6. Give the team read/write permissions on the relevant repositories. Admin rights should be limited exclusively to 18F staff.

When the engagement is over, you must let #admins-github know so the access can be removed.


## Usage

Git and GitHub are the [standard](https://github.com/18F/Infrastructure#approved-toolchain) tools for revision control at 18F. Git is an open-source version control system, and GitHub is a closed-source, commercial service that hosts Git repositories and adds extra features to support them, such as pull requests and issue tracking. Although this _sounds_ super technical, these tools are _not_ just for developers hacking code; 18F employees use GitHub to author blog posts, manage documentation, and comment on one another&rsquo;s work.

In other words, you&rsquo;ll probably use GitHub a lot at 18F. We recommend you get familiar with the basics. If you&rsquo;re new to GitHub and feel confused at first, that&rsquo;s normal. Try a few guides, review our documentation, and ask your teammates for help. GitHub also has a handy document that explains the typical [GitHub Workflow](https://guides.github.com/introduction/flow/).

## Process

- **Document your workflow.** There are many different ways to use GitHub, and each different team of people at 18F (likely) uses it differently. That said, teams should document their desired git workflow for each project, such as in your repository&rsquo;s ```contributing.md``` file. The 18F-Site team offers a good example with  [their GitHub wiki](https://github.com/18F/18f.gsa.gov/wiki/How-we-Git). In 18F's [development guide](https://pages.18f.gov/development-guide/), there are [code review questions](https://pages.18f.gov/development-guide/code-review/) that your team may want to go over as you think about documentation.

- **Do you fork or you do branch?** Git allows you to both &ldquo;fork&rdquo; and &ldquo;branch&rdquo; repositories to make a place to work on changes before you submit them for integration into the main code. **[Making a fork](https://help.github.com/articles/fork-a-repo/)** creates a copy of the repository in your own GitHub account. **Making a branch** of the main repository means you&rsquo;re working in your own little space, but it&rsquo;s still part of the main repository &mdash; which helps keep the project organized, since everyone can easily see what teammates are working on.

### Pull requests

18F defaults to using branches, though teams are welcome to decide they prefer using forks instead. Regardless of whether you branch or fork, changes happen via [pull requests](https://help.github.com/articles/using-pull-requests/).  

In the process of receiving feedback in a pull request, some individuals on some teams may choose to amend, reorder, or squash commits. This type of &ldquo;re-writing history&rdquo; is compliant with the Freedom of Information Act (FOIA) when it occurs on a pull request because git branches are considered a work in progress. These actions are not allowed on the master branch because that is considered the canonical source of information.

### Issues

If you want to make a suggestion to an 18F project without making a specific change to its code, such as if you aren&rsquo;t sure how to fix a problem or want clarification before fixing something, file an issue on that project via GitHub. Try searching the list of open issues before you add one; the error you see might already be on the team&rsquo;s radar.

### Permissions

Teams can give groups of people administrative, write, or read permissions to 18F repositories. Even if you have write access into a repository, we strongly encourage the submission of pull requests for improvements or fixes (see &ldquo;we prefer branching to forking when we&rsquo;re working together on 18F projects,&rdquo; above).

Contractors or external government collaborators should only be added to teams with scoped write permissions to the repositories they're working on. They should never have administrative-level rights. In order to separate out these permissions, create a team in the format of `projectname-admins` for government staff, if necessary.

## Resources

- [Githug](https://github.com/Gazler/githug) is designed to give you a practical way of learning git. It has a series of levels, each requiring you to use git commands to arrive at a correct answer.

- [This self-paced training provided by GitHub](https://github.com/blog/2083-start-learning-git-and-github-today-with-self-paced-training) could be helpful to note in these GitHub materials for newcomers as well.

- [Try Git](https://try.github.io/levels/1/challenges/1)

---

#### Still have questions?

Ask in Slack: [#git](https://18f.slack.com/messages/git), [#admins-github](https://18f.slack.com/messages/admins-github), [#dev](https://18f.slack.com/messages/dev)
