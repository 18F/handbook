'use strict';

// This is inspired by https://github.com/sparkartgroup/quality-docs/

var unified = require('unified');
var remark2retext = require('remark-retext');
var english = require('retext-english');
var quotes = require('retext-quotes');
var sentenceSpacing = require('retext-sentence-spacing');
var repeated = require('retext-repeated-words');
var indefinite = require('retext-indefinite-article');
var contractions = require('retext-contractions');
var readability = require('retext-readability');
var simplify = require('retext-simplify');
var equality = require('retext-equality');
var intensify = require('retext-intensify');

var ignoreWords = [
    "address",
    "attempt",
    "capability",
    "combined",
    "contains",
    "effect",
    "expiration",
    "function",
    "host",
    "hosts",
    "initial",
    "minimize",
    "minimum",
    "multiple",
    "option",
    "previous",
    "request",
    "require",
    "requires",
    "submit",
    "transmit",
    "try",
    "type"
  ]

module.exports = attacher;

function attacher() {
  this.use(remark2retext, unified()
    .use(english)
    .use(sentenceSpacing, {preferred: 1})
    .use(quotes, {preferred: 'straight'})
    .use(repeated)
    .use(indefinite)
    .use(contractions, {straight: true})
    .use(readability, {
      "age": 18,
      "minWords": 7,
      "severity": "fatal"
    })
    .use(simplify, {ignore: ignoreWords || []})
    .use(equality, {ignore: ignoreWords || []})
    // Leaving disabled for now - seems a bit noisy
    // could be useful to play with once we have a cleaner baseline though.
    //.use(intensify, {ignore: ignoreWords || []})
  );
}
