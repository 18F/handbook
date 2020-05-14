# Git

## Git Overview

As you probably already know, Git is a source code versioning system that lets you locally track changes and push or pull changes from remote resources. All projects use Git. Here are some references to review if you are unfamiliar with it.

- <https://git-scm.com/>
- <https://help.github.com/articles/git-and-github-learning-resources/>
- Getting Git Right <https://www.atlassian.com/git/>
- Version Control with Git book <http://www.amazon.com/Version-Control-Git-collaborative-development/dp/1449316387>
- Learn "how git works" at a lower level, and some useful stuff like rebasing (workflow and interactive), reflog, etc. <https://www.youtube.com/watch?v=MYP56QJpDr4>
- If you want a non-video companion to the first half, <http://git-scm.com/book/en/v2/Git-Internals-Git-Objects> is a great place to start.

## Git best practices

_Note: your project may include additional or alternate code review practices - please review your project developer/contributor documentation!_

- Atomic commits:
  - Generally commits should be as small as possible.
  - The code should be in a functional state after each commit (even if incomplete) - avoid committing code which will won't run at all.
- Write good commit messages. A good commit message should:
  - Reference the associated ticket ID using a prefix, e.g. `ABC-123:`.
  - Have a one line (max 80 char) title/summary of the change, followed by a blank line and then further detail which should:
    - Explain the reason(s) for the change.
    - Detail what changed and any consequences of this (on code, data, users, security etc) - include any key terms that would help a future person searching commits.
    - Often this will include the same detail that you might include in code comments.
- Feature branches, pull requests (PR) & merge requests (MR):
  - These should contain a closely related series of commits that solves a single problem - avoid including changes that are unrelated.
  - Most often a single (well scoped) ticket will be resolved in a single PR/MR.
    - However it is good to break larger changes over multiple PRs/MRs that each addresses a logical piece of the whole - this can make the code easier to review.
  - When merging PRs and MRs we prefer a fast-forward/rebase (rather than a merge commit or squash) since this retains a clean and linear commit history.
- Rebasing commits on a feature branch - we do this for 2 reasons:
  - To update the feature branch on top of more recent changes in master so that it can be easily merged when ready.
  - To adjust the commits on the branch with an interactive rebase - for example:
    - Squashing 2 together that make more sense as one change.
    - Splitting a large commit into 2+ smaller ones.
    - Adjusting the wording of commit messages (see above).
    - Dropping any temporary/scratch commits.
  - When rebasing a feature branch, it's encouraged to leave commits showing earlier attempts, even if you later found a better approach.
    - This helps "tell the story" of the change - someone digging though the history may wonder why the first approach didn't work.
    - It also leaves the code available in the history in case you later find a use for that work.

### Git best practice resources

- https://blog.mocoso.co.uk/talks/2015/01/12/telling-stories-through-your-commits/
- https://about.gitlab.com/blog/2018/06/07/keeping-git-commit-history-clean/

## Code review

_Note: your project may include additional or alternate code review practices - please review your project developer/contributor documentation!_

- Code reviews are shared between all developers - if you finish a ticket (or just want a break) check for outstanding PRs/MRs before picking up a new ticket.
  - This is because getting shared awareness of the code others are working on helps the team learn and become more able to work across all areas of the codebase.
  - If reviewing code that is outside your area of expertese you can always ask for a second set of eyes.
  - On most projects, code review is done at the same time as some level of functional testing using a review environment specific to the PR/MR.
- Review using a [phased process](https://sage.thesharps.us/2014/09/01/the-gentle-art-of-patch-review/) that starts at the big picture, giving feedback (as needed) and getting alignment (as needed) on one phase before moving on. This avoids excessive detail early on and is more helpful to the developer.
  1. Is the idea behind the PR/MR sound?
  2. Is the PR/MR architected correctly?
  3. Is the PR/MR polished?
- For code that touches complex or risky areas (e.g. security or performance implications), it's great to have 2 or even 3 reviewers take a look before merging.
- Most coding standards should generally be implemented automatically using code auto-formatting tools and/or reviewed automatically using code linting and code quality checking tools.
  - If this is not the case on your project, implement this in your CI pipeline!
- Quality code is human friendly (self documenting, maintainable, adaptable)
- Try to make at least one point for improvement: encourage conversation
- Call out good code: praise is valuable feedback
- Put feedback in the form of questions: encourage collaboration

### Core review resources

- https://sage.thesharps.us/2014/09/01/the-gentle-art-of-patch-review/
- https://mtlynch.io/human-code-reviews-1/
- https://mtlynch.io/human-code-reviews-2/
- https://martinfowler.com/books/refactoring.html
- https://www.pearson.com/us/higher-education/program/Martin-Clean-Code-A-Handbook-of-Agile-Software-Craftsmanship/PGM63937.html

## Standard git workflow

_Note: your project may include additional or alternate git workflows - please review your project developer/contributor documentation!_

- Our overall workflow is:
  - Trunk based development with a a single `master` branch - i.e. no additional long lived branches (e.g. `stable`) that get repeated merges
  - Use short lived feature branches with PRs/MRs for all work
  - Feature branches should be prefixed with the related ticket ID (i.e. `abc-123-my-feature`).
  - We frequently rebase feature branches and use fast-forward merges
- We follow an [upstream first](https://www.chromium.org/chromium-os/chromiumos-design-docs/upstream-first) practice for all development - this means:
  - If the code you want to change is in an external library or module, contribute the change to that library first before bringing it into your actual project (e.g. by adding the patch to a build tool or adjusting the source to point to an upstream that includes the change)
  - If you need to make a hotfix make a PR/MR to the main `master` branch first before creating/patching a hotfix branch.
- Feature branches undergo both automatic and manual testing before being merged - this ensures that master always passes tests.
  - Testing often includes linting, unit and functional tests as well as specialised tests such as security and accessibility scans.
  - On most projects a dedicated review environment for each feature branch or PR/MR is created automatically and can be used for manual testing as well as stakeholder demos and user testing as needed to validate functionality before the branch is merged.

Compared to other documented workflows:

- [https://docs.gitlab.com/ee/topics/gitlab_flow.html](Gitlab Flow) - very similar, although we prefer tags over environment branches
- [https://guides.github.com/introduction/flow/](GitHub Flow) - very similar, although we prefer rebase/fast-foward merges and don't deploy feature branches into production (but to review environments instead)
- [Git flow](https://nvie.com/posts/a-successful-git-branching-model/) - not very similar - ours is much simpler, avoids long lived branches and repeated merges

## Versioning releases

_Note: your project may include additional or alternate versioning practices - please review your project developer/contributor documentation!_

For libraries, we use [semantic versioning](https://semver.org/).

For web sites or applications we use an `vX.Y.Z` syntax with the following meaning:

- X: The sprint number
- Y: A zero-based counter indicating the number of releases to the stage environment
- Z: A zero-based counter indicating the number of hotfix releases to the prod environment

So in the normal release flow:

- First sprint, pushes to stage has tag v1.0.0
- Further work and a v1.1.0 tag is created and pushed to stage
- Over the course of the sprint you might get v1.2.0, v1.3.0 etc
- Sprint 1 ends, v1.3.0 looks good, gets pushed to prod

In the case a subsiquent hotfix is required:

- In Sprint 2 work continues on master, v2.0.0 tag gets pushed to stage etc.
- Meanwhile, critical bugfix needed on prod, so the v1.3.0 is branched to v1.
  - There is no need for further suffixes in the branch name, since it's the only branch for sprint 1
  - We don't typically create these branches until they are needed, since it's hopefully rare to need critical hotfixes and we have a tag documenting the state of the release.
- Fix is pushed to master (i.e. upstream-first workflow), then cherry-picked to v1.
- Tag v1.3.1 is then created from the v1 branch, pushed to stage (or some dedicated hotfix stage environment) and then to prod.
- If another hotfix is needed, that commit would also be merged to master, cherry-picked into v1 and tagged v1.3.2 etc.

In a continuous deployment project these tags can be created automatically, or some other mechanism may be used to track releases.

## GitLab, GitHub, and Bitbucket

GitLab, GitHub, and Bitbucket are services that provides remote access to Git repositories. In addition to hosting your code, these services provide additional features designed to help manage the software development lifecycle. These additional features include managing the sharing of code between different people, bug tracking, wiki space and other tools for "social coding".

- GitHub is a publicly available, free service which requires all code (unless you have a paid account) be made open. Anyone can see code you push to GitHub and offer suggestions for improvement. GitHub currently hosts the source code for tens of thousands of open source projects. CivicActions uses GitHub for all open source projects (except those which are better hosted on an open source community infrastructure), as well as internal, client or pro-bono projects that should be developed in public.

- GitLab is an open source GitHub like software that organizations can use to provide internal management of Git repositories. CivicActions has setup a GitLab server for internal and client projects that should not be developed in public. <https://git.civicactions.net>

### Can Code move between GitLab, GitHub, and Bitbucket?

Yes! All you have to do is point or rebase your local copy to the new remote source. Please note, only your source code will move. Any additional features you use (wiki, bug tracking, etc.) will need to be manually copied.

### When do we use GitLab vs. GitHub?

CivicActions uses GitHub for all open source projects (except those which are better hosted on an open source community infrastructure), as well as internal, client or pro-bono projects that should be developed in public.

Use GitLab for internal and client projects that should not be developed in public. (This is going to be most of them).
