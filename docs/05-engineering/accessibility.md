# Accessibility

We implement 508 and WCAG compliant websites so that people with all types of disabilities, whether it be physical, mental, or visual impairment, have access to our sites.

## How we do this

- We use base themes which implement ADA and WCAG guidelines.
- We implement good SEO structures (which mimic good ADA structures).
- We implement responsive design strategies that that can present complex data in hierarchical structures, capable of being navigated by audio cues.
- We implement modules which enable readers to change color schemes and text size displays to accommodate their visual impairments.
- We test sites using visual screen readers and accessibility testing tools.
- We use good practices in using semantic markup in page templates and report design to define content hierarchy (e.g. primary head is h1, secondary head is h2, etc.).

## When we do this

- We always produce work that is accessible to people of all abilities, regardless of client. However, we recognize that the level of accessibility compliance and prioritization can be influenced by budgetary and contractual implications.
- We aim to do accessibility work continuously, as a component of each design and development task. Accessibility scans should be performed on a per-ticket basis and signed off on before work is considered complete.
- Accessibility should NOT BE left until the end of a project.

## General Accessibility Guidelines

- Form elements should have labels.
- Images should have alt text.
- Decorative images or images with no content use should either have a null alt tag (alt = "") or rendered as background images.
- Form buttons should have descriptive values.
- Color should not be used as the sole method of conveying content or distinguishing visual elements.
- Color alone is not used to distinguish links from surrounding text unless the luminance contrast between the link and the surrounding text is at least 3:1 and an additional differentiation (e.g., it becomes underlined) is provided when the link is hovered over or receives focus.
- The page should be readable and functional when the text size is doubled. We need to use rem font-sizing to make the text scales as expected when the web-page is zoomed-in. Also provides reliable text-resizing in smaller browser widths.
- Need to have adequate line spacing (at least 1/2 the height of the text) and paragraph spacing (1.5 times line spacing).

## Making Accessible Links

- Don't use the word "link" in your links or the term "click here".
- Don't capitalize links: Some screen readers read capitalized text letter by letter.
- Avoid ASCII characters. Text alternatives are recommended for ASCII smiley faces. If a link involves dashes (17 - 18 years), it is better to replace the hyphen with "to". Screen-readers do not read ASCII characters.
- Avoid using URLs as link text. Screen readers read URLs letter by letter. Use descriptive link text.
- Keep link text concise.
- Generally, restrict the number of text links on a page. An exception to this rule is pagination/alphabetized links and these should include further contextual information/link text.
- Be aware of pagination and alphabetized links: To make pagination links accessible, add text like "Go to page 1 | 2 | 3 .." before the pagination links. For alphabetized links (eg. glossary links), add a descriptive title before the links. See attached screenshot.
- Always alert the user when opening new windows. It is important to alert visually-challenged users that a new window has been opened. The best way to indicate that a link opens in a new window is to add text to the link, such as "(opens in new window)".
- Be mindful when using anchor links. Adding descriptive text like Jump to.. or On this page will help indicate that the link is within the same page.
- Further reading: <https://www.sitepoint.com/15-rules-making-accessible-links/>

## Accessibility Tools

Extensions for testing accessibility:

- [WAVE Evaluation Tool](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
- [Color Contrast Analyzer](https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll)
- [Luminosity ratio analyzer](https://chrome.google.com/webstore/detail/wcag-luminosity-contrast/lllpnmpooomecmbmijbmbikaacgfdagi)

## Resources

- [Drupal Accessibility Guidelines](https://drupal.org/node/1637990)
- [WCAG](http://www.w3.org/WAI/intro/wcag)
- [WAVE toolbar](http://wave.webaim.org/toolbar/)
- [Color Contrast Analyzer Chrome Extension](https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll)
- [Luminosity ratio analyzer Chrome Extension](https://chrome.google.com/webstore/detail/wcag-luminosity-contrast/lllpnmpooomecmbmijbmbikaacgfdagi)
- [Comprehensive guide for making Accessible Links](https://www.sitepoint.com/15-rules-making-accessible-links/)
