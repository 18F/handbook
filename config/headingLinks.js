// Given a Markdown node, recursively find all of the child text nodes and
// append them together. This will produce a similar result to the .innerText
// property of DOM elements.
const getText = (node) => {
  const texts = [];

  for (const child of node.children ?? []) {
    if (child.type === "text") {
      texts.push(child.content);
    } else {
      texts.push(getText(child));
    }
  }

  return texts.join("");
};

// https://www.npmjs.com/package/markdown-it-anchor#custom-permalink
//
// * slug  | the slugified id of the heading
// * _     | options passed into markdown-it-anchor; we don't use them
// * state | a complete tree of the Markdown document as parsed by markdown-it
// * index | the index of the token in the state of the current heading
const headingLinks = (slug, _, state, index) => {
  // Heading elements do not have children in Markdown. Instead, they have a
  // sibling whose type is "inline." That inline element has children that
  // represent the contents of the heading. The "inline" element always comes
  // immediately after the heading element, so... we can just grab the next
  // item in the list of tokens.
  const headingContent = state.tokens[index + 1];
  const headingText = getText(headingContent);

  // We also need to find the index of the element that closes the header. We'll
  // put our link stuff right before that.
  let closeIndex = index + 1;
  while (state.tokens[closeIndex].type !== "heading_close") {
    closeIndex += 1;
  }

  // Insert an HTML block into the markdown tree. This way markdown-it won't
  // try to parse it, it'll just dump it directly into the output.
  const headingLink = {
    type: "html_block",
    content: `
  <span aria-hidden="true">
    <a href="#${slug}"
      class="heading-permalink"
      aria-label="permanent link to ${headingText.replace(
        /"/g,
        "&quot;"
      )} heading">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="#svg-link"></use>
      </svg>
    </a>
  </span>
`,
  };

  // Splice the new stuff directly into the tree.
  state.tokens.splice(closeIndex, 0, headingLink);
};

module.exports = { headingLinks };
