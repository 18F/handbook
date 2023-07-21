const assets = require("./plugins/assets");
const filters = require("./filters");
const privateLinks = require("./plugins/privateLinks");
const shortCodes = require("./shortcodes");

// Wrapper for custom bits for the Handbook.
module.exports = function HandbookPlugin(eleventyConfig) {
  // Asset building
  eleventyConfig.addPlugin(assets);

  // Marking-up private links
  eleventyConfig.addPlugin(privateLinks);

  // Filters
  eleventyConfig.addPlugin(filters);

  // Shortcodes
  eleventyConfig.addPlugin(shortCodes);
};
