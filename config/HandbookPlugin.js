const assets = require("./plugins/assets");
const privateLinks = require("./plugins/privateLinks");
const shortCodes = require("./shortcodes");

// Wrapper for custom bits for the Handbook.
module.exports = function HandbookPlugin(eleventyConfig) {
  // Asset building
  eleventyConfig.addPlugin(assets);

  // Marking-up private links
  eleventyConfig.addPlugin(privateLinks);

  // Shortcodes
  eleventyConfig.addPlugin(shortCodes);
};
