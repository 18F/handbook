"use strict";

// This is inspired by https://github.com/sparkartgroup/quality-docs/

var unified = require("unified");
var remark2retext = require("remark-retext");
var english = require("retext-english");
var quotes = require("retext-quotes");
var sentenceSpacing = require("retext-sentence-spacing");
var repeated = require("retext-repeated-words");
var indefinite = require("retext-indefinite-article");

module.exports = attacher;

function attacher() {
  this.use(
    remark2retext,
    unified()
      .use(english)
      .use(sentenceSpacing, { preferred: 1 })
      .use(quotes, { preferred: "straight" })
      .use(repeated)
      .use(indefinite)
  );
}
