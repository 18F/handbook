# Git and SSH

## Git

Many projects use Git. Here are some references to review if you are unfamiliar with it.

- [Getting Git Right](https://www.atlassian.com/git/)
- [Version Control with Git book](http://www.amazon.com/Version-Control-Git-collaborative-development/dp/1449316387)
- Learn "how git works" at a lower level, and some useful stuff like rebasing (workflow and interactive), reflog, etc. [Video](https://www.youtube.com/watch?v=MYP56QJpDr4)
- If you want a non-video companion to the first half, [this](http://git-scm.com/book/en/v2/Git-Internals-Git-Objects) is a great place to start.

## ssh config

ssh'ing to `*.civicactions.net` requires port 940. You can add `-p 940` with every ssh command, or you can do this to make use port 940 every time:

1.  Create a `~/.ssh/config` file if you don't already have one.
2.  Then add these lines.

```
Host *.civicactions.net
Port 940
```

## GitLab and SSH

- Someone will have created a GitLab account for new employee, they should search email for git.civicactions.net for the welcome email
- Upload public key to git.civicactions.net
- Create a ~/.ssh/config file if you don't already have one, then add one, and add the lines in the description of this card up above.

## Sandbox

[Coding Standards](../../05-engineering/back-end-development/#coding-standards.md)
