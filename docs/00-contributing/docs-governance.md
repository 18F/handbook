# Documentation Governance

Every team member with a GitHub account is empowered to make [pull requests](git-workflow.md) to change any part of the documentation, and every team member is encourage to review any pull request.

Ideally, pull requests should be assigned to team members who are subject matter experts. For example, changes to the LICENSE.md file were assigned to a lawyer (who happens to be a copyleft and FLOSS expert). If you're not sure who to assign the PR too, you might want to ask in the #docs channel.

## Governance driven by practice area and working groups.

We encourage each team at CivicActions (aka Working Group, Practice Area, Guild, etc.) to take ownership over their respective documentation. To that end, changes to files in certain directories require at least one review and approval from a member of the respective team, and members of those teams will be notified of that PR. For example, changes to the [05-engineering](../05-engineering/) directory requires at least one review and approval from a member of the [Engineering Team](https://github.com/orgs/CivicActions/teams/engineering/members).

These teams are listed on GitHub as [subteams](https://github.com/orgs/CivicActions/teams/civicactions-team/teams) of the main [CivicActions team](https://github.com/orgs/CivicActions/teams/civicactions-team). If you want to join one of those teams, you can go to the team page and "Request to join". A maintainer of that team will receive a notification and can approve you. You can see the maintainers from the team page, feel free to bug them for an approval.

| **Directory in `docs/`**                                       | **Subteam (Working group / Practice Area)**                                    |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`00-contributing`](../00-contributing/)                       | [Docs](https://github.com/orgs/CivicActions/teams/docs/members)                |
| [`01-welcome-to-civicactions`](../01-welcome-to-civicactions/) | [Anyone](https://github.com/orgs/CivicActions/teams/civicactions-team/members) |
| [`02-about-us`](../02-about-us/)                               | [Anyone](https://github.com/orgs/CivicActions/teams/civicactions-team/members) |
| [`03-policies`](../03-policies/)                               | [Management](https://github.com/orgs/CivicActions/teams/management/members)    |
| [`04-how-we-work`](../04-how-we-work/)                         | [Anyone](https://github.com/orgs/CivicActions/teams/civicactions-team/members) |
| [`05-engineering`](../05-engineering/)                         | [Engineering](https://github.com/orgs/CivicActions/teams/engineering/members)  |
| [`06-project-management`](../06-project-management/)           | [Project Managers](https://github.com/orgs/CivicActions/teams/pm/members)      |
| [`07-sales-and-marketing`](../07-sales-and-marketing/)         | [Anyone](https://github.com/orgs/CivicActions/teams/civicactions-team/members) |
| [`08-hr-admin`](../08-hr-admin/)                               | [Management](https://github.com/orgs/CivicActions/teams/management/members)    |
| [`09-security`](../09-security/)                               | [Security](https://github.com/orgs/CivicActions/teams/security/members)        |

Ideally, each of the above working groups have their own backlog of documentation tasks, and make documentation a regular part of their workflow.

> @todo or will we use GitHub issues, with issue tags for each team?

The [CODEOWNERS](https://github.com/civicactions/handbook/blob/master/CODEOWNERS) file in the top level of this repo maps the governance of `docs/` directories to their respective GitHub teams and CivicActions practice areas, and automatically assigns pull requests to that team for review, when a PR is submitted that.

## GitHub team management

GitHub team management is an ongoing responsibility of the Docs working group, but is generally [taken care of during onboarding](https://trello.com/c/I5L6gPiQ/174-add-to-github).

To add someone to a team, to go the [subteam page](https://github.com/orgs/CivicActions/teams/civicactions-team/teams) and click _Add a member_.
