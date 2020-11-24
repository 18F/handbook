# Git and SSH

## GitLab setup

- Someone will have created a GitLab account for - search email for git.civicactions.net for the welcome email
- Set up your account
- Upload public key to git.civicactions.net
- Add a profile image

## SSH config

SSH'ing to `*.civicactions.net` (for example, when using Git) requires port 940. You can add `-p 940` with every ssh command, or you can do this to make use port 940 every time:

1.  Create a `~/.ssh/config` file if you don't already have one.
2.  Then add these lines.

```
Host *.civicactions.net
Port 940
```
