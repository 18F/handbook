const Image = require("@11ty/eleventy-img");
const path = require("path");
const baseurl = require("../baseurl");

// Given an image path, copies the file to the assets/images directory so it is
// available on the web. Returns the text for an <img> element that has the
// right CSS class, alt text, and src set. The element text will replace the
// shortcode in the rendered output.
module.exports = async (imagePath, cssClass, altText) => {
  const fileType = path.extname(imagePath).replace(".", "");

  // Eleventy provides a convenient utility for copying images and renaming them
  // in the process. It even provides us with the hash so we don't have to
  // implement that ourselves! :yay:
  const metadata = await Image(imagePath, {
    formats: [fileType],
    outputDir: "./_site/assets/images/",
    filenameFormat: (id, src, _, format) => {
      const basename = path.basename(src, `.${format}`);
      return `${basename}.${id}.${format}`;
    },
  });

  const data = metadata[fileType]?.[0] ?? metadata.jpeg[0];

  // _site/ is the filesystem root of the site, so we should strip that off
  const url = data.outputPath.replace(/^_site\//i, "");

  // Put the img attributes into an object that we'll later turn into a string.
  // We do it this way so that future maintainers don't accidentally forget to
  // put quotes around an attribute value and cause the site to go haywire in
  // unexpected, hard-to-debug ways that do not break the build.
  const attributes = {
    // We need to honor BASEURL to support cloud.gov Pages preview builds.
    src: path.join(baseurl, url),
    class: cssClass ?? false,
    alt: altText ?? false,
    loading: "lazy",
    decoding: "async",
  };

  const attributeStrings = Object.entries(attributes).map(
    ([key, value]) => `${key}="${(value || "").replace(/"/g, "&quot;")}"`
  );

  return `<img ${attributeStrings.join(" ")}>`;
};
