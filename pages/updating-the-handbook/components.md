---
title: Components
sidebar:
  navigation: updating-the-handbook
  current: Components
questions:
  - tts-handbook

demo_steps:
  - text: 1st Step
    href: "#"
  - text: Second step
    href: "#"
  - text: Step 3
    href: "#"
---

The Handbook comes with some reusable components to make it easier to display
certain kinds of information in a consistent way. To use them, you will use the
`{{ "{%include%}" }}` directive to indicate which component you want and to give
it the information it needs.

## Alert

The Handbook alert component is a convenience wrapper around the
[USWDS Alert component](https://designsystem.digital.gov/components/alert/).

- Name: `alert.html`
- Arguments:
  - `level` - the alert level. Allowed values are `info`, `warning`, `error`,
    `success`, or `info`. If not provided, defaults to `info`.
  - `heading` - the alert heading or title. If omitted, no heading is shown.
  - `content` - the body of the alert. If omitted, no body is shown.

**Example**:

```
{% raw %}{% include "alert.html"
  level:"warning"
  heading:"Example"
  content:"Oh no, an example!"
%}{% endraw %}
```

{% include "alert.html"
  level:"warning"
  heading:"Example"
  content:"Oh no, an example!"
%}

---

## FISMA low banner

This component simply lets page visitors know that a system being described is
FISMA low.

**Example:**

```
{% raw %}{% include "low-system.html" %}{% endraw %}
```

{% include "low-system.html" %}

---

## Side navigation {#side-nav}

To add additional navigation to your page on the left side (like on this page),
you can use the side navigation (or "sidebar") component. This component does
**_not_** use the `{% raw %}{%include%}{% endraw %}` directive and instead
relies entirely on front matter and the contents of the `_data/navigation.yml`
file.

**Example:**

```
---
sidebar:
  navigation: updating-the-handbook
  current: Components
---
```

The `navigation` sub-element indicates what key in the `_data/navigation.yml`
file to use to populate the side navigation. The `current` sub-element is used
to associate the current page with an element in the `_data/navigation.yml` so
that it can be styled appropriately.

To see how this works, look at the left side navigation on this page.

---

## Questions

If there is contact information or resources visitors can visit for more
information about your page, you can use the questions component. Note that this
component does **_not_** use the `{% raw %}{%include%}{% endraw %}` directive
and instead relies entirely on front matter.

To use the questions component, include a `questions` element in your front
matter. This element must be a list of contacts or resources. Each item in the
list can be an email address, a link URL and name, or a Slack channel.

**Example:**

```
---
questions:
  - tts@gsa.gov
  - text: GSA
    url: https://www.gsa.gov
  - tts-handbook
---
```

**Questions?**

<ul>
  <li><a href="mailto:tts@gsa.gov">tts@gsa.gov</a></li>
  <li><a href="https://www.gsa.gov">GSA</a></li>
  <li>{% slack_channel "tts-handbook" %}</li>
</ul>

(Or see the bottom of this page for a live example!)

---

## Software warning

This component is used to alert users that software must be approved before
being used on government computers.

**Example:**

```
{% raw %}{% include "software-warning.html" %}{% endraw %}
```

{% include "software-warning.html" %}

---

## Step indicator

The step indicator is a useful tool for showing readers where they are in a
process to help orient them in time. This is perhaps the most complex component
in the Handbook, but it's not too difficult to use and the benefits are
enormous!

For example, imagine you have a 3-step process that you're documenting and the
current page is the second step. You might use a step indicator to show the user
that there are 3 steps, they've completed the first, are on the second, and the
third remains with a step indicator:

{% include "step-indicator.html" steps:demo_steps current_step:2 %}

---

The step indicator requires two pieces of information and supports two
additional pieces of information to help make it clearer, as needed.

First, you'll need to define the complete list of steps. This is done with a
YAML file in the `_data` directory. Create a file there with a name that is
appropriate for the list of steps you are creating, and the put your steps into
it. The steps should look like this:

```yaml
steps:
  - text: 1st Step
    href: path/to/step 1/page
  - text: Second step
    href: path/to/step 2/page
  - text: Step 3
    href: path/to/step 3/page
  - etc.
```

You can look at the file at `_data/healthy-conflict.yml` for an example of how
to do it.

Then, when including the step indicator component, you also must tell it which
step the current page represents. This is the **_number_** of the current step in
the list, not its text, so it will be 1, 2, 3, etc. If you put your steps into a
file called `my-new-steps.yml`, you would put it all together like this, on the
first page of your steps:

```
{% raw %}{% include "step-indicator.html"
  steps:my-new-steps.steps
  current_step:1 %}{% endraw %}
```

On the second page, you could put the exact same code, except you'd change
`current_step:1` to `current_step:2`. Easy-peasy!

There are also two additional pieces of information you can provide to the step
indicator to further refine how it shows up for readers. If your process has
_sub_ steps, you can indicate that the current page is a substep like so:

```
{% raw %}{% include "step-indicator.html"
  steps:my-new-steps.steps
  current_step:1
  substep:'1a' %}{% endraw %}
```

This will change the step number shown in the circle, like so:

{% include "step-indicator.html" steps:demo_steps current_step:1 substep:'1a' %}

You can aso modify the step number header to include the total number of steps
to further help orient the reader where that is helpful. To do that, you can
simply disable step-hiding:

```
{% raw %}{% include "step-indicator.html"
  steps:my-new-steps.steps
  current_step:1
  hide_steps:false %}{% endraw %}
```

{% include "step-indicator.html" steps:demo_steps current_step:1 hide_steps:false %}

Remember that `steps` and `current_step` are required, by `substep` and
`hide_steps` are optional. You can use both `substep` and `hide_steps` at the
same time, too.
