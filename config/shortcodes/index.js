const downloadShortcode = require("./download");
const imageShortcode = require("./image");
const imageWithClassShortcode = require("./imageWithClass");
const linkShortcode = require("./link");
const pageShortcode = require("./page");
const slackChannelShortcode = require("./slackChannel");
const usaCurrentShortcode = require("./usaCurrent");
const uswdsIconShortcode = require("./uswdsIcon");

const shortcodePlugin = (eleventyConfig) => {
  eleventyConfig.addShortcode("download", downloadShortcode);
  eleventyConfig.addShortcode("image", imageShortcode);
  eleventyConfig.addShortcode("image_with_class", imageWithClassShortcode);
  eleventyConfig.addShortcode("link", linkShortcode);
  eleventyConfig.addShortcode("page", pageShortcode);
  eleventyConfig.addShortcode("slack_channel", slackChannelShortcode);
  eleventyConfig.addShortcode("uswds_icon", uswdsIconShortcode);
  eleventyConfig.addShortcode("usa_current", usaCurrentShortcode);
};

module.exports = shortcodePlugin;
