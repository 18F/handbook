---
title: Navigation tips
skip_index: true
---
### Mouse-free search

To jump to the search box, press the `/` key. On the search results page, the
tab focus will be on the first result. Use `Tab` to navigate to a result
further down the list, and`Shift+Tab` to navigate back up. Once the focus is
on the result you want, press `Enter` to go to that page.

Use `Command+F` on OS X to search within a page. Then use `Command+G` to move
to the next search result, and `Shift+Command+G` to move to the previous
result. On systems other than OS X, swap the `Control` key for `Command`.

### Breadcrumbs

At the top of the page, you will see a list of breadcrumb links reflecting the
current document's position within the information architecture. Clicking on
one of these links will take you either to a page dedicated to that category,
or to the corresponding section of the homepage.

### Automatic headline anchors

The [`guides_style_18f`](https://github.com/18F/guides-style) gem includes
[AnchorJS](http://bryanbraun.github.io/anchorjs/), and configures it to
automatically create link anchors for &lt;h3&gt;, &lt;h4&gt;, and &lt;h5&gt;
headline elements. Hovering the mouse over one of these elements will expose a
link icon. Click on or hover over the icon to access the link, which you can
then copy and paste.

To create these headline elements in our
[Markdown](https://daringfireball.net/projects/markdown/syntax) sources, begin
a line containing a headline with `###`, `####`, or `#####`, respectively.
