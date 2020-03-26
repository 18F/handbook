# Git, GitLab, GitHub, and Bitbucket

## Git Overview

As you probably already know, Git is a source code versioning system that lets you locally track changes and push or pull changes from remote resources. Many projects use Git. Here are some references to review if you are unfamiliar with it.

- <https://git-scm.com/>
- <https://help.github.com/articles/git-and-github-learning-resources/>
- Getting Git Right <https://www.atlassian.com/git/>
- Version Control with Git book <http://www.amazon.com/Version-Control-Git-collaborative-development/dp/1449316387>
- Learn "how git works" at a lower level, and some useful stuff like rebasing (workflow and interactive), reflog, etc. <https://www.youtube.com/watch?v=MYP56QJpDr4>
- if you want a non-video companion to the first half, <http://git-scm.com/book/en/v2/Git-Internals-Git-Objects> is a great place to start.

## What's the difference between GitLab, GitHub, and Bitbucket?

GitLab, GitHub, and Bitbucket are services that provides remote access to Git repositories. In addition to hosting your code, these services provide additional features designed to help manage the software development lifecycle. These additional features include managing the sharing of code between different people, bug tracking, wiki space and other tools for "social coding".

- GitHub is a publicly available, free service which requires all code (unless you have a paid account) be made open. Anyone can see code you push to GitHub and offer suggestions for improvement. GitHub currently hosts the source code for tens of thousands of open source projects. CivicActions uses GitHub for all open source projects (except those which are better hosted on an open source community infrastructure), as well as internal, client or pro-bono projects that should be developed in public.

- GitLab is an open source GitHub like software that organizations can use to provide internal management of Git repositories. CivicActions has setup a GitLab server for internal and client projects that should not be developed in public. <https://git.civicactions.net>

## Can Code move between GitLab, GitHub, and Bitbucket?

Yes! All you have to do is point or rebase your local copy to the new remote source. Please note, only your source code will move. Any additional features you use (wiki, bug tracking, etc.) will need to be manually copied.

## When do we use GitLab vs. GitHub?

CivicActions uses GitHub for all open source projects (except those which are better hosted on an open source community infrastructure), as well as internal, client or pro-bono projects that should be developed in public.

Use GitLab for internal and client projects that should not be developed in public. (This is going to be most of them).
