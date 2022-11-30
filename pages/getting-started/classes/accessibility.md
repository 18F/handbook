---
title: Accessibility
questions:
  - g-accessibility
redirect_from:
  - /accessibility/
---

The federal government is accountable for making all of its products 508
compliant, which means everything we make (or buy) needs to be accessible to all
users, regardless of their abilities or disabilities. This usually means making
sure our products can be used with screen readers and alternate input devices,
and that they’re logically easy to follow.

## Leadership

Pia Zaragoza, PIF/CISA and Claire Annan, 18F lead the
[accessibility guild](https://github.com/18F/accessibility).

## Communication

### Slack room

{% slack_channel "g-accessibility" %} — Ask about any accessibility-related
topic.

### GitHub repo

[Accessibility](https://github.com/18F/accessibility)

### Documentation

- [Accessibility Guide](https://accessibility.18f.gov/)
- [Working Groups and Guilds]({% page "/working-groups-and-guilds-101" %})

## Training

TTS hosts monthly training sessions to help you learn how to build accessible
products. The class is required for all developers, who must attend the class at
least once (but can attend as many times as they like). Folks from other teams
are encouraged to attend as well. Find the class schedule on the
[Working Groups and Guilds calendar](https://www.google.com/calendar/embed?src=gsa.gov_o1aqcv28k1f0nmca5bkch8los4%40group.calendar.google.com&ctz=America/New_York).

## Making a project accessible

The easiest way to make a project accessible is to think about accessibility
from the start. Retrofitting accessibility is very costly. As you might expect,
certain libraries and tools are not great for accessibility — for example,
Bootstrap's color scheme and some of its form elements are not accessible by
default. These are things that should be taken into consideration at the start
of a project, before you've dedicated substantial time and energy to it.

As you think about accessibility, here are some good rules to follow:

- Everything on your project should be usable with a keyboard.
- All form elements should have explicit labeling (not visible — they can be
  hidden if needed, but they have a `label` with a `for` attribute.
- Text should have a contrast ratio of 4.5:1 in most cases.

If you remember these three things, you'll avoid 90% of accessibility issues
right off the bat.

Everything else in 508 is about improving the user experience. To learn more,
sign up for our monthly training session, review the
[Accessibility Guide](https://accessibility.18f.gov/), and come to one of our
meetings.
