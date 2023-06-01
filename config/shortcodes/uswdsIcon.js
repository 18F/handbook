// Given a USWDS icon name, return an SVG xlink to that icon. Uses the embedded
// SVG icons that are included in every page.
module.exports = (name) =>
  `<svg class="usa-icon" aria-hidden="true" role="img">
    <use xlink:href="#svg-${name}"></use>
  </svg>`;
