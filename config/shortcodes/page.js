const path = require("path");

// Given a page reference, turn it into a link on the published site.
module.exports = (link) => path.join(process.env.BASEURL ?? "/", link);
