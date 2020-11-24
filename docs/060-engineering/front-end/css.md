# CSS (and SASS etc.)

> @todo this is a first pass and needs a lot of cleanup.

## Principles

- Our CSS should be:
  - Predictable
  - Reusable
  - Maintainable
  - Scalable

## Methods

- We practice responsive design starting mobile first, so our attention and practice is placed on the constrained environment and progressively enhanced.
- We use Sass to preprocess our CSS.
- We organize our Sass partials in a logical file structure convention that follows [Drupal 8 file organization practices](https://www.drupal.org/node/1887922):

  - **Base** — CSS reset/normalize plus HTML element styling.
  - **Layout** — macro arrangement of a web page, including any grid systems.
  - **Component** — discrete, reusable UI elements.
  - **State** — styles that deal with client-side changes to components.
  - **Theme** — purely visual styling ("look-and-feel") for a component.

    Example:

    ```
     base: css/base/normalize.css css/base/elements.css
     layout: css/layout/layout.css css/layout/layout--medium.css css/layout/layout--wide.css
     component: css/components/button.css css/components/dropdown.css css/components/pagination.css css/components/tabs.css ...
     theme: css/theme/theme--light.css css/theme/theme--dark.css
    ```

- We write modular CSS that supports design components.

  - Classes should be named to reflect the intent and purpose of the design element they represent. Eg. instead of using `button--red`, we can ask "Why is the button red?" and name it `notification__button`.

    ```/* Component Rules */
    .component-name
    .component-name--variant
    .component-name__sub-object
    .component-name__sub-object--variant // this configuration should be uncommon.

    // Layout Rules
    .layout-layout-method /* e.g. ".layout-container" \*/
    .grid-\*
    ```

- State Classes
  - These are always applied via JavaScript, and describe a non-default state. For example:
    ```
    .is-state // e.g. '.is-active'
    ```
- Functional JavaScript Hooks
  - When querying or manipulating the DOM from JavaScript, prefer dedicated classes not used for styling (or the id attribute).
  - If using classes, prefix them with "js-" to mark them for JS use.
  - These "js-" classes should not appear in stylesheets.
    ```
      .js-behaviour-hook // e.g. .js-slider, .js-dropdown
    ```

## Cross-Browser Compatibility

- We incorporate cross-browser testing and fixes into each chunk of theming work - this prevents build up, and keeps things agile and releasable.
- We use <http://crossbrowsertesting.com/> (credentials on civicactions.net) to test.
- We do both specific, interactive cross-browser testing, as well as automated broad tests of all major sections and page types.
- If a client complains about UI problems, we get details on their system setup, including screen resolution and installed character sets.
- We aim to have an HTML and CSS layout that works cross-browser "naturally" as much as possible, keeping browser specific tweaks as exceptions.
- We test to see that CSS aggregation is enabled: IE has limit on the number of stylesheets that can load.
- We avoid position: absolute
- IE typically requires more explicit "position" statements.
- Negative margins frequently cause trouble.
- Use IE background position values for best compatibility.
- Take care to include browser specific prefixes where needed <http://caniuse.com/>
- We generally pretend IE &lt; 11 do not exist, although it depends on the client.
- We use respond.js when necessary to make older browsers respect CSS3. <https://github.com/scottjehl/Respond>
- We use autoprefixes.
