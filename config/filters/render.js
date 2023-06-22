const MarkdownIt = require("markdown-it");

module.exports = async (content) => {
  const md = new MarkdownIt();
  return md.render(content);
};
