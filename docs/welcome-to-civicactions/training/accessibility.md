# Accessibility

The federal government is accountable for making all of its products 508 compliant, which means everything we make (or buy) needs to be accessible to all users, regardless of their abilities or disabilities. This usually means making sure our products can be used with screen readers and alternate input devices, and that they’re logically easy to follow.

## Making a project accessible

The easiest way to make a project accessible is to think about accessibility from the start. Retrofitting accessibility is very costly. As you might expect, certain libraries and tools are not great for accessibility — for example, Bootstrap&rsquo;s color scheme and some of its form elements are not accessible by default. These are things that should be taken into consideration at the start of a project, before you've dedicated substantial time and energy to it.

As you think about accessibility, here are some good rules to follow:

- Everything on your project should be usable with a keyboard.
- All form elements should have explicit labeling (not visible — they can be hidden if needed, but they have a `label` with a `for` attribute.
- Text should have a contrast ratio of 4.5:1 in most cases.

If you remember these three things, you'll avoid 90% of accessibility issues right off the bat.

Everything else in 508 is about improving the user experience.
