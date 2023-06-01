// Given a target file path and a current page path, returns the usa-current
// CSS class if they are the same. Otherwise returns an empty string. This is a
// convenience for identifying when a navigation item refers to the current page
module.exports = (navItemMainFilePath, pagePath) => {
  if (pagePath.includes(navItemMainFilePath)) {
    return `usa-current`;
  }
  return "";
};
