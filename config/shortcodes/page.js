const path = require("path");
const baseurl = require("../baseurl");

// Given a page reference, turn it into a link on the published site.
module.exports = (link) => path.join(baseurl, link);
