---
title: Trello
---

[Trello](https://trello.com/18f3/) is a collaborative task and project-management tool.

## Setup

Because Trello is a web application, there&rsquo;s no installation necessary. You will need to set up an account.

Trello accounts support multiple email addresses, so you can use an existing account (if you have one) by adding your GSA email address. Otherwise, you can sign in with your GSA Google account. Make sure to [set up two-factor authentication](https://trello.com/2fa).

To get access to the 18F Trello board, ask for an invite in [#admins-trello](https://18f.slack.com/messages/admins-trello).

There is no 18F-wide access to paid Trello features or add-on services yet. If you're interested in those things, you may have to work it out with your team.

## Rules

**Abide by [the 18F Code of Conduct](/code-of-conduct).** If you see anyone violating our Code of Conduct, please contact [Noah Kunin](https://18f.slack.com/messages/noah/) or [Hillary Hartley](https://18f.slack.com/messages/hillary/).

## Usage

People use Trello to track ideas from conception through execution. It's common to see a working group using Trello to collaborate in creating documentation. Sometimes we track business development leads on a Trello board. Some individuals use Trello to help track and prioritize their own queue of work. Most commonly, Trello is used by 18F teams applying agile processes like Scrum and Kanban to deliver software.

## Tips

- Check out Trello's [extensive keyboard shortcuts](https://trello.com/shortcuts). Trello has a notion of a "card focus" attached to your mouse, so you can just point at a card to highlight it, then press a single key (not button) to interact with it in common ways. It's like you have a hundred-button mouse! Definitely check out (E)dit description, edit (T)itle, (N)ew card next, ar(C)hive, (L)abel, (M)embers, and the most critical of all, Space (to quickly toggle yourself in or out of the card member list).

- Set a board background (Show Menu > Change Background) to easily distinguish that board in bookmark favicons, when flipping tabs, and generally make people happier. (Trello's paid-but-cheap Gold plan allows you to set custom backgrounds and stickers if you're bored with the ones that are there.)

- Use stickers (Show Menu > Stickers) to indicate cards that are blocked (exclamation point), need clarification (uncertain orange face), waiting for something (clock), represent a milestone/launch being reached (rocket).

- Doing prioritization within a labeled set of cards (an epic)? Use the filter (keyboard shortcut 'F') to show just that label, then sort cards, then turn the filter back off.

- Are there GitHub issues or pull-requests associated with the work you're doing for certain cards? Check out the [GitHub power-up](http://blog.trello.com/github-and-trello-integrate-your-commits/) in Trello's (paid) Business Class plan. It allows you to "attach" Issues, PRs, and Commits to a card. Summarized details from the GitHub side will be surfaced on the Trello card. (Sadly, there is no way to map GitHub issues and status directly to Trello cards and vice-versa. (You might prefer [waffle.io](https://waffle.io/) if that's what you're after.)

- Looking for feedback on card priority? [Turn on the card-voting power-up](http://help.trello.com/article/788-voting-on-cards) and set the voting permissions appropriately (eg to allow non-members to vote on a public-facing roadmap board). Note that there's no easy way to clear votes, so only use this for collecting long-lived data, eg votes on items in your backlog. Also sadly, there's no way to sort by votes; you have to do that by hand.

- Want to create a bunch of similar cards easily? Make one "template" card and label it clearly. When you want to make a new one, copy that card to the appropriate location. Want to do it quickly? See the "Shortcuts for Trello" Chrome extensions tip below.

### Chrome extensions

Chrome extensions can dramatically increase the usability and functionality of Trello. You'll need your board's whole team to install the same Chrome extensions in order for everyone to see the board consistently.

**Caution**: [Chrome extensions can be security hazards!](http://www.howtogeek.com/188346/why-browser-extensions-can-be-dangerous-and-how-to-protect-yourself/) Pay careful attention to information about permissions when you install them, and consider using an Incognito browser session when you are accessing sensitive information.

- Add [Shortcuts for Trello](https://chrome.google.com/webstore/detail/shortcuts-for-trello/pfkeglfbhfmlnapfjfjfkiipclpmanim?hl=en) to get even more keyboard goodness for operations like copying a template card without opening it, and many more. (Be sure to set up the keyboard shortcuts via the link at the bottom of your [list of installed Chrome extensions](chrome://extensions).)

- [Show card numbers on cards](https://chrome.google.com/webstore/detail/trello-card-numbers/kadpkdielickimifpinkknemjdipghaf) makes it easy for people to refer to cards definitively in remote screen-sharing meetings. (Just make sure everyone realizes these are card IDs, not the card's priority!)

- [Show labels as text as well as color](https://chrome.google.com/webstore/detail/card-color-titles-for-tre/hpmobkglehhleflhaefmfajhbdnjmgim) in order to make it really clear to your team what your label colors represent. (Once everyone knows them cold, you can turn this off to avoid visual noise.)

- Need to export your entire board for use in another tool? Normally you'd have to buy a paid Trello plan for this, but if you don't need the other features in the paid plans, install the [Export for Trello](https://chrome.google.com/webstore/detail/export-for-trello/nhdelomnagopgaealggpgojkhcafhnin) Chrome extension to get your board data into CSV and JSON easily.

- Tracking stories for multiple sub-components/teams/projects on the same board? Install the [Projects for Trello](https://chrome.google.com/webstore/detail/projects-for-trello/mholjhodapabhdbchonjjoecmfhobfoa) extension, then prefix card names with {component} to put a badge on the card referring to a sub-component or project.

- Doing Kanban? You'll want the [CardCounter for Trello](https://chrome.google.com/webstore/detail/cardcounter-for-trello/miejdnaildjcmahbhmfngfdoficmkdhi) Chrome extension. Document your Work-in-Progress (WIP) limit for a column in a bracket at end of the title, for example, "In Progress [3]". Trello will show how many cards you have in progress and the marker will turn red when you exceed the limit. Looking for a Continuous Flow Diagram or other metrics? Check out [Trello-CFD](http://trello-cfd.azurewebsites.net/) for the bare minimum and [Corello](https://getcorrello.com/) for a more deluxe option.

- Using estimates as part of your process? Install the [Points for Trello](https://chrome.google.com/webstore/detail/points-for-trello/mkcpchladphoadhaclmnlphhijboljjk?hl=en) Chrome extension. Then when you edit the title for cards, you can append/prepend the estimate in parentheses, for example, "(3) Do this thing". If you use numbers, then the total will be shown at the top of the column. Also want to track points burndown? Use the [Burndown for Trello](https://www.burndownfortrello.com/). (If you also want to track effort spent, use the [Scrum for Trello](https://chrome.google.com/webstore/detail/scrum-for-trello/jdbcdblgjdpmfninkoogcfpnkjmndgje) Chrome extension in place of both of these.)

---

#### Still have questions?

Ask in Slack: [#admins-trello](https://18f.slack.com/messages/admins-trello/)
