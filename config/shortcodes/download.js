const fs = require("fs/promises");
const path = require("path");
const baseurl = require("../baseurl");

// Given a path to a file that should be downloadable, copy that path into the
// output's assets directory so it'll be available. Return the resulting URL
// that will replace the shortcode.
module.exports = async (downloadPath) => {
  const filename = path.basename(downloadPath);

  // If the assets or downloads directories don't already exist, create them.
  await fs.mkdir("./_site/assets/downloads", { recursive: true });

  await fs.copyFile(
    downloadPath,
    path.join("./_site/assets/downloads", filename)
  );

  // The resulting URL should include the base URL, if any. This is necessary
  // for cloud.gov Pages previews to work correctly.
  return path.join(baseurl, `/assets/downloads/${filename}`);
};
