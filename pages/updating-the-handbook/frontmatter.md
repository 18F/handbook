---
title: Front matter
sidebar:
  navigation: updating-the-handbook
  current: Front matter
questions:
  - tts-handbook
---

Most Handbook pages are written in Markdown. But
[shortcodes]({% page "updating-the-handbook/shortcodes/" %}) and
[components]({% page "updating-the-handbook/components/" %}) are implemented in
a templating language called [Liquid](https://shopify.github.io/liquid/). In
order to use shortcodes or components in your page, it must be pre-processed by
Liquid before it is rendered from Markdown into HTML. That might sound
complicated, but it's not so bad.

In order to ensure that your page is pre-processed with Liquid, it must begin
with front matter. The presence of front matter tells the page build system to
run Liquid before running anything else. Front matter must begin at the very
beginning of the first line of your page, and it starts with three dashes. After
that, the front matter is presented in
[YAML](https://en.wikipedia.org/wiki/YAML), an easy-to-read data format.

For example, to set a data field called `title` to the value "Front matter",
your page would begin like this:

```
---
title: Front matter
---
```

Once you have front matter, you can use it in a variety of ways, as explained on
the
[Eleventy front matter data page](https://www.11ty.dev/docs/data-frontmatter/).
But the Handbook also understands and will use certain front matter if it's
available. For example, `title` in the example above wasn't an arbitrary choice.
If your front matter includes `title` element, that will be used to create the
top-level heading text on your page automatically!

Here are the front matter elements that the Handbook knows about by default:

| front matter element | what it does                                                                                                                                                                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`              | Sets the page title and the top-level heading text on a page                                                                                                                                                                                                                                         |
| `subtitle`           | Sets a subtitle text on a page                                                                                                                                                                                                                                                                       |
| `sidebar`            | Adds a left-side navigation bar to the page. See [the side navigation component]({% page "updating-the-handbook/components/#side-nav" %}) for more information.                                                                                                                                      |
| `questions`          | Adds contact information or additional links to the bottom of the page. See [the questions component]({% page "updating-the-handbook/components/#questions" %}) for more information.                                                                                                                |
| `outdated`           | If this is set to `true`, this will cause a banner to be shown at the top of the page indicating that it is out of date. E.g.,<br><br>`outdated: true`                                                                                                                                               |
| `redirect_from`      | If present, this element causes an additional page to be created at the specified URL that will redirect to this page. This element is useful and **recommended** when pages are renamed so that links to the old URL will point to the new URL. E.g.,<br><br>`redirect_from: /handbook-frontmatter` |
| `redirect_to`        | If present, this element causes the page content to be ignored and instead a redirect page is created that will send the user to the URL specified in the element. E.g.,<br><br>`redirect_to: https://www.gsa.gov`                                                                                   |
