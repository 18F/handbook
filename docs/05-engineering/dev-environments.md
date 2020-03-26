# Development and Hosting Environments

## Intro

The development process differs slightly from project to project, but what follows is our most typical approach.

## URLS

Our URLs reflect the environment. Typical URLs follow a pattern like this:

- project.civicactions.net ("live") (or project.gov, once it's launched)
- project-qa.civicactions.net (qa)
- project-dev.civicactions.net (dev)
- project-\*.civicactions.net (eg, for a specific branch/version, if necessary)

## Live (aka Production aka Prod)

Content gets added/migrated here.

Git tags that have been QA'd are deployed here.

## QA (aka Staging)

Some QA tests, acceptance tests, stakeholder review and training.

## Dev (aka Integration)

Dev is usually kept on the master git branch, or (occasionally) a branch created specifically for integration.

Code deployed to dev should ideally contain deploy hooks (reverting Drupal features, for example).

We occasionally demo prototypes or functionality on Dev sites.

## Sandbox (aka Local)

On our local machines.

Generally kept on a branch relevant to whatever work we are doing. Consult the git workflow specific to each project for more info.

We often demo prototypes or ongoing work on our sandboxes, via google hangout.
