const renderFilter = require("./render");

const filterPlugin = (eleventyConfig) => {
  eleventyConfig.addFilter("render", renderFilter);
};

module.exports = filterPlugin;
