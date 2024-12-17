const findSectionFilter = require("./findSection");
const renderFilter = require("./render");

const filterPlugin = (eleventyConfig) => {
  eleventyConfig.addFilter("find_section", findSectionFilter);
  eleventyConfig.addFilter("render", renderFilter);
};

module.exports = filterPlugin;
