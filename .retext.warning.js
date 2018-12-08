'use strict';

// This is inspired by https://github.com/sparkartgroup/quality-docs/

var unified = require('unified');
var remark2retext = require('remark-retext');
var english = require('retext-english');
var contractions = require('retext-contractions');
var readability = require('retext-readability');
var simplify = require('retext-simplify');
var equality = require('retext-equality');
var intensify = require('retext-intensify');

var ignoreWords = [
]

module.exports = attacher;

function attacher() {
  this.use(remark2retext, unified()
    .use(english)
    .use(contractions, { straight: true })
    .use(readability, {
      "age": 18,
      "minWords": 7,
      "severity": "fatal"
    })
    .use(simplify, { ignore: ignoreWords || [] })
    .use(equality, { ignore: ignoreWords || [] })
    .use(intensify, { ignore: ignoreWords || [] })
  );
}