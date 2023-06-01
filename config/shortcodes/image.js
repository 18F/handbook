const imageWithClass = require("./imageWithClass");

// Shortcode for referencing an image. Ultimately copies the image into the
// output assets/images directory with the filename modified to include a file
// hash to prevent duplication. Full details in the imageWithClass shortcode.
module.exports = async (src, alt) => imageWithClass(src, "", alt);
