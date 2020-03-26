# Drupal Frontend Development

## Base Themes

- We use a standard starter theme.
  - Drupal 7: Zen is used on many projects.
  - Drupal 8: Classy/Stable
- For Drupal 7, we prefer preprocess and alter functions over templates to alter HTML structure, so that we avoid brittle templates that break as configuration changes. Templates are good for when you need a very specific HTML output, but unnecessary for typical changes that need to affect a small specific change to the default output.

## CSS Architecture

- From [CSS Architecture for Drupal 8](https://www.drupal.org/docs/develop/standards/css/css-architecture-for-drupal-8):
  - We avoid reliance on HTML structure. CSS should define the appearance of an element anywhere & everywhere it appears (regardless of its position in the DOM). (eg. we avoid `.sidebar > .component` or `ul > li > a`. This is easy to break and hard to reuse.
  - We prefer the child selector `component__list > some__class` over the descendant selector `component__list some__class`, to avoid unintentionally affecting nested elements. (We can also avoid this by naming elements in a component with the BEM syntax).
  - Class names should use full words rather than abbreviations. Eg. .buttons instead of .btn
  - We avoid generic class names eg. `.widget .title`. "Class names should communicate useful information to developers." – Nicolas Gallagher
  - We avoid using the !important selector except as a last resort.
  - We avoid using ids to style elements, as id's should be reserved for JavaScript (except in the case of JS-related classes , or anchor tags).
  - We prefix classes used for JavaScript with `.js-class`

### Javascript

- One off scripts should be placed in theme js dir, and indicated in theme .info file.
- Plugins to be placed in /libraries
- If we want more targeted scripts, on option is to use drupal_add_js inside of block that makes use of said script.

> @todo This is a stub, and much of it is antiquated. Contribute something!
