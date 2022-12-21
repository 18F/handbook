const fs = require("fs/promises");
const path = require("path");
const Image = require("@11ty/eleventy-img");

async function downloadShortCode(downloadPath) {
  const pathPrefix = process.env.BASEURL ?? "";
  const filename = path.basename(downloadPath);

  await fs.mkdir("./_site/assets/downloads", { recursive: true });

  await fs.copyFile(
    downloadPath,
    path.join("./_site/assets/downloads", filename)
  );

  return `${pathPrefix}/assets/downloads/${filename}`;
}

async function imageWithClassShortcode(imagePath, cssClass, altText) {
  const pathPrefix = process.env.BASEURL ?? "";
  const fileType = path.extname(imagePath).replace(".", "");

  const metadata = await Image(imagePath, {
    formats: [fileType],
    outputDir: "./_site/assets/images/",
    filenameFormat: (id, src, width, format, options) => {
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
    src: `${pathPrefix}/${url}`,
    class: cssClass ?? false,
    alt: altText ?? false,
    loading: "lazy",
    decoding: "async",
  };

  const attributeStrings = Object.entries(attributes).map(
    ([key, value]) => `${key}="${(value || "").replace(/"/g, "&quot;")}"`
  );

  return `<img ${attributeStrings.join(" ")}>`;
}

async function imageShortcode(src, alt) {
  return await imageWithClassShortcode(src, "", alt);
}

const uswdsIconShortcode = (name) =>
  `<svg class="usa-icon" aria-hidden="true" role="img">
    <use xlink:href="#svg-${name}"></use>
  </svg>`;

const slackChannelLinkShortcode = (channel, name) => {
  const cleanChannel = channel.replace(/^#/, "");
  return `<a href="https://gsa-tts.slack.com/channels/${cleanChannel}" target="_blank">${
    name ?? `#${cleanChannel}`
  }</a>`;
};

module.exports = {
  downloadShortCode,
  imageWithClassShortcode,
  imageShortcode,
  slackChannelLinkShortcode,
  uswdsIconShortcode,
};
