# Accessibility


## Table of Contents
* [How we do this](#how)
* [When we do this](#why)
* [Accessibility Guidelines](#guidelines)
* [Resources](#resources)

We implement 508 and WCAG compliant websites so that people with all types of disabilities, whether it be physical, mental, or visual impairment, have access to our  sites.

## <a name="how"></a>How we do this
* We use base themes which implement ADA and WCAG guidelines.
* We implement good SEO structures (which mimic good ADA structures
* We implement responsive design strategies that that can present complex data in hierarchical structures, capable of being navigated by audio cues.
* We implement modules which enable readers to change color schemes and text size displays to accomodate their visual impairments.
* We test sites using visual screen readers and accessibility testing tools
* We use good practices in using semantic markup in page templates and report design to define content hierarchy (e.g. primary head is h1, secondary head is h2, etc)

## <a name="why"></a>When we do this
* We always produce work that is accessible to people of all abilities, regardless of client. However, we recognize that the level of accessibility compliance and prioritization can be influenced by budgetary and contractual implications.
* We aim to do accessibility work continuously, as a component of each design and development task. Accessibility scans should be performed on a per-ticket basis and signed off on before work is considered complete.
* Accessibility should NOT BE left until the end of a project. 

## <a name="guidelines"></a>Accessibility Guidelines
* Form elements should have labels.
* Images should have alt text.
* Decorative images or images with no content use should either have a null alt tag (alt = “”) or rendered as background images.
* Form buttons should have descriptive values
* Color should not be used as the sole method of conveying content or distinguishing visual elements.
* Color alone is not used to distinguish links from surrounding text unless the luminance contrast between the link and the surrounding text is at least 3:1 and an additional differentiation (e.g., it becomes underlined) is provided when the link is hovered over or receives focus.
* The page should be readable and functional when the text size is doubled. We need to use rem font-sizing to make the text scales as expected when the web-page is zoomed-in. Also provides reliable text-resizing in smaller browser widths.
* Need to have adequate line spacing (at least 1/2 the height of the text) and paragraph spacing (1.5 times line spacing).

## <a name="resources"></a>Resources
* [Drupal Accessibility Guidelines](https://drupal.org/node/1637990)
* [WCAG](http://www.w3.org/WAI/intro/wcag) 
* [WAVE toolbar](http://wave.webaim.org/toolbar/)
* [Color Contrast Analyzer Chrome Extension](https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll)
* [Luminosity ratio analyzer Chrome Extension](https://chrome.google.com/webstore/detail/wcag-luminosity-contrast/lllpnmpooomecmbmijbmbikaacgfdagi)
* [Comprehensive guide for making Accessible Links](https://www.sitepoint.com/15-rules-making-accessible-links/)

