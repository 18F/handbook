---
title: Trello
questions:
  - tts-trello
  - admins-trello
redirect_from:
  - /trello/
---

[Trello](https://trello.com/) is a collaborative task and project-management
tool. TTS has a number of
[Workspaces](https://help.trello.com/article/927-what-are-teams) under the
`GSA IT - IDT` Enterprise account.

## Usage

People use Trello to track ideas from conception through execution. It's common
to see a working group using Trello to collaborate in creating documentation.
Sometimes we track business development leads on a Trello board. Some
individuals use Trello to help track and prioritize their own queue of work.
Most commonly, Trello is used by TTS teams applying agile processes like Scrum
and Kanban to deliver software.

## Rules

- Use your `@gsa.gov` email to sign in, if you have one. Signing in via Google
  is recommended.
- **Abide by [the TTS Code of Conduct]({% page "/code-of-conduct" %}).** If you
  see anyone violating our Code of Conduct, see the reporting section.
- All boards used for work should be created under an Enterprise Workspace, not
  as a "personal board".
- Only use [approved Power-Ups](#power-ups).
- Invite people to boards via email. It's easy to invite the wrong user
  otherwise.
- [Close boards](https://help.trello.com/article/777-closing-a-board) rather
  than [deleting](https://help.trello.com/article/801-deleting-a-board) them.
  This ensures records are retained.

## Setup

We are limited in the number of Workspace Members we can add. You will be added
as a Workspace Guest. Most changes to a board will require an Admin. You can
make requests in {% slack_channel "admins-trello" %}.

To be able to see a board, either the board needs to be
[public](https://help.trello.com/article/789-changing-the-visibility-of-a-board-to-public-private-or-team)
or people need to be added to the board explicitly.

## Tips

- Check out Trello's
  [extensive keyboard shortcuts](https://trello.com/shortcuts). Trello has a
  notion of a "card focus" attached to your mouse, so you can just point at a
  card to highlight it, then press a single key (not button) to interact with it
  in common ways. It's like you have a hundred-button mouse! Definitely check
  out (`E`)dit description, edit (`T`)itle, (`N`)ew card next, ar(`C`)hive,
  (`L`)abel, (`M`)embers, and the most critical of all, `space` (to quickly
  toggle yourself in or out of the card member list).

- [Set a board background](https://help.trello.com/article/818-changing-board-backgrounds)
  to easily distinguish that board in bookmark favicons, when flipping tabs, and
  generally make people happier.

- Use
  [stickers](https://help.trello.com/article/826-adding-and-removing-stickers-from-cards)
  to indicate cards that are blocked (exclamation point), need clarification
  (uncertain orange face), waiting for something (clock), represent a
  milestone/launch being reached (rocket).

- Doing prioritization within a labeled set of cards (an epic)? Use the filter
  (keyboard shortcut `F`) to show just that label, then sort cards, then turn
  the filter back off.

- Looking for feedback on card priority?
  [Turn on the card-voting power-up](https://help.trello.com/article/788-voting-on-cards)
  and set the voting permissions appropriately (eg to allow non-members to vote
  on a public-facing roadmap board). Note that there's no easy way to clear
  votes, so only use this for collecting long-lived data, eg votes on items in
  your backlog. Also sadly, there's no way to sort by votes; you have to do that
  by hand.

- Want to create a bunch of similar cards easily?
  [Make one "template" card](https://help.trello.com/article/1211-creating-template-cards)
  and label it clearly. When you want to make a new one, copy that card to the
  appropriate location. Want to do it quickly? See the "Shortcuts for Trello"
  Chrome extensions tip below.

## Power-Ups

The [Power-Ups](https://trello.com/power-ups) approved for use are:

- Any [`Made by Trello`](https://trello.com/power-ups/made-by-trello) that don't
  integrate with a third-party service, e.g.
  - [Card Aging](https://trello.com/power-ups/55a5d917446f517774210012/card-aging)
  - [Voting](https://trello.com/power-ups/55a5d917446f517774210013/voting)
- [GitHub](https://trello.com/power-ups/55a5d916446f517774210004)

Power-Ups that _cannot_ be used:

- [Google Drive](https://trello.com/power-ups/55a5d916446f517774210006)

If you aren't sure or want others reviewed, ask in
{% slack_channel "admins-trello" %}.

### Cloudlock warning

If you get a `Manually Banned Apps Policy` email from
[Cloudlock](https://insite.gsa.gov/employee-resources/information-technology/do-it-yourself-self-help/google-g-suite-apps/sharing-securely-in-google/cloudlock),
it's likely because you signed into Trello with Google (via OAuth), and one of
the Trello Teams you're part of has the
[Google Drive Power-Up](https://trello.com/power-ups/55a5d916446f517774210006)
enabled. That Power-Up should be removed, but this warning can otherwise be
ignored.

## For admins

- [Add general users to boards as guests](https://help.trello.com/article/1236-board-guests);
  don't add them as members of the Workspace(s).
- All Workspaces used for work at TTS should exist under the `GSA IT - IDT`
  Enterprise instance.
