# Frontend Development

## Table of Contents
* [CSS/Sass](#css-sass)
* [Javascript](#javascript)
* [Drupal](#drupal)
	- [Javascript in Drupal](#javascript-drupal)
* [Accessibility](#accessibility)
* [Images](#images)
* [Relationship with UX/Design](#ux-design)

## <a name="css-sass"></a>CSS/Sass
* Our CSS should be:
	- **Predictable**
	- **Reusable**
	- **Maintainable** &
	- **Scalable**
* We practice responsive design starting mobile first, so our attention and practice is placed on the constrained environment and progressively enhanced.
* We use Sass to preprocess our CSS.
* We organize our Sass partials in a logical file structure convention that follows [Drupal 8 file organization practices](https://www.drupal.org/node/1887922)
	- **Base** — CSS reset/normalize plus HTML element styling.
	- **Layout** — macro arrangement of a web page, including any grid systems.
	- **Component** — discrete, reusable UI elements.
	- **State** — styles that deal with client-side changes to components.
	- **Theme** — purely visual styling (“look-and-feel”) for a component.
	- Example: 
	
```css:
 base: css/base/normalize.css css/base/elements.css
 layout: css/layout/layout.css css/layout/layout--medium.css css/layout/layout--wide.css
 component: css/components/button.css css/components/dropdown.css css/components/pagination.css css/components/tabs.css …
 theme: css/theme/theme--light.css css/theme/theme--dark.css ```

* We write modular CSS that supports design components.
* Classes should be named to reflect the intent and purpose of the design element they represent. Eg. instead of using `button--red`, we can ask "Why is the button red?" and name it `notification__button` .

``` 
/* Component Rules */
.component-name
.component-name--variant
.component-name__sub-object
.component-name__sub-object--variant  /* this configuration should be uncommon */

/* Layout Rules */
.layout-layout-method  /* e.g. '.layout-container' */
.grid-*

/**
 * State Classes
 *
 * These are always applied via JavaScript, and describe a non-default state.
 */
.is-state  /* e.g. '.is-active' */

/**
 * Functional JavaScript Hooks
 *
 * When querying or manipulating the DOM from JavaScript, prefer dedicated 
 * classes not used for styling (or the id attribute). 
 * If using classes, prefix them with 'js-' to mark them for JS use. 
 * These 'js-' classes should not appear in stylesheets.
 */
.js-behaviour-hook  /* e.g. .js-slider, .js-dropdown */```


_from [CSS Architecture for Drupal 8](https://www.drupal.org/docs/develop/standards/css/css-architecture-for-drupal-8)_


* We avoid reliance on HTML structure. CSS should define the appearance of an element anywhere & everywhere it appears (regardless of its position in the DOM). (eg. we avoid `.sidebar > .component` or `ul > li > a`. This is easy to break and hard to reuse.
* We prefer the child selector `component__list > some__class` over the descendant selector `component__list some__class`, to avoid unintentionally affecting nested elements. (We can also avoid this by naming elements in a component with the BEM syntax)
* Class names should use full words rather than abbreviations. Eg. .buttons instead of .btn
* We avoid generic class names eg. `.widget .title`. "Class names should communicate useful information to developers." – Nicolas Gallagher
* We avoid using the !important selector except as a last resort. 
* We avoid using ids to style elements, as id's should be reserved for Javascript (except in the case of JS-related classes , or anchor tags)
* We prefix classes used for Javascript with `.js-class`

## <a name="javascript"></a>Javascript
* We structure Javascript so that libraries, custom simple code and longer section specific code is well organized

## <a name="drupal"></a>Drupal
* We use a standard starter theme.
	- Drupal 7: Zen
	- Drupal 8: Classy
* For Drupal 7, we prefer preprocess and alter functions over templates to alter HTML structure, so that we avoid brittle templates that break as configuration changes. Templates are good for when you need a very specific HTML output, but unnecessary for typical changes that need to affect a small specific change to the default output.

### <a name="javascript-drupal"></a>Javascript in Drupal
* One off scripts should be placed in theme js dir, and indicated in theme .info file.
* Plugins to be placed in /libraries
* If we want more targeted scripts, on option is to use drupal_add_js inside of block that makes use of said script.

## <a name="accessibility"></a>Accessibility
* We create accessible themes (see Accessibility for more information).

## <a name="images"></a>Images
* We use graphic file formats that are optimized for their intended use:
	- jpg: Continuous tone images
	- gif: Non-continuous tone images, supports transparency.
	- png: high quality images that support transparency. PNGs are the best suited for the web, except where svgs can be used.
	- svg: Vector graphics format, which means its scalable without any degradation. Use when possible so that we can version control graphics. 

## <a name="cross-browser-compatibility"></a>Cross-Browser Compatibility

* We incorporate cross-browser testing and fixes into each chunk of theming work - this prevents build up, and keeps things agile and releasable
* We use [http://crossbrowsertesting.com/](http://crossbrowsertesting.com/) (credentials on civicactions.net) to test
* We do both specific, interactive cross-browser testing, as well as automated broad tests of all major sections and page types.
* If a client complains about UI problems, we get details on their system setup, including screen resolution and installed character sets.
* We aim to have a HTML and CSS layout that works cross-browser "naturally" as much as possible, keeping browser specific tweaks as exceptions
* We test to see that CSS aggregation is enabled: IE has limit on the number of stylesheets that can load.
* We avoid position: absolute
* IE typically requires more explicit "position" statements
* Negative margins frequently cause trouble
* Use IE background position values for best compatibility
* Take care to include browser specific prefixes where needed http://caniuse.com/
* We pretend IE < 8 doesn't exist
* We use respond.js when necessary to make older browers respect CSS3. https://github.com/scottjehl/Respond
* We use autoprefixes

## <a name="ux-design"></a>Relationship with UX/Design
* We communicate early and often with UX and design team members
* We maintain a repository of graphic assets, UX wireframes and design comps and refer to specific assets in our tickets
* We use flowcharting to illustrate complex workflows
	- Sometimes you need a flowchart to run by all the designers/developers involved in a project to ensure that everyone is on the same page with regards to how data should flow through the system.

