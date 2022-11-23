const fs = require("fs/promises");
const { JSDOM } = require("jsdom");
const path = require("path");
const prettier = require("prettier");
const sidenav = require("./buildSidenavs");
const internalLinks = require("./privateLinks");

const SITE_DIR = "_site";

// Postbuild script, for when eleventy finishes.

// Get all HTML files recursively, from a root directory
const getFiles = async (root) => {
  const fsChildren = await fs.readdir(root);

  const files = [];
  for await (const child of fsChildren) {
    const full = path.join(root, child);
    const stat = await fs.lstat(full);

    if (stat.isFile()) {
      files.push(full);
    } else if (stat.isDirectory()) {
      files.push(...(await getFiles(full)));
    }
  }

  return files.filter((file) => file.endsWith(".html"));
};

// Get a DOM from a file path.
const getDom = async (file) => {
  const html = await fs.readFile(file, { encoding: "utf-8" });
  const dom = new JSDOM(html);

  // Some of our pages are just redirects. We don't need to do any processing
  // on those. Since we'll be checking *every* file, we can just ignore the
  // redirect files entirely.
  const redirect = dom.window.document.querySelector(
    'meta[http-equiv="refresh"]'
  );

  if (redirect) {
    // We'll ignore it by returning an empty object.
    return {};
  }

  return { path: file, dom };
};

const postbuild = async () => {
  console.log(`[postbuild] starting...`);
  const files = await getFiles(SITE_DIR);

  let privateLinksCount = 0;
  let sidenavCount = 0;

  // Keep a count of processed files to report out.
  let processedFiles = 0;
  const fileWritePromises = [];

  for (const file of files) {
    const { path, dom } = await getDom(file);

    // If for any reason there is no DOM or the created DOM doesn't have a
    // document (that would be weird), skip this file.
    if (dom && dom.window?.document) {
      // Build the side navigation for the page. If the side nav script makes
      // any changes, capture this as a file with a modified DOM
      const processedSideNav = await sidenav(path, dom);
      if (processedSideNav) {
        processedFiles += 1;
        sidenavCount += 1;
      }

      // Modify the internal links on a page. If the internal link script makes
      // any changes, capture this as a file with a modified DOM
      const processedInternalLinks = await internalLinks(path, dom);
      if (processedInternalLinks) {
        processedFiles += 1;
        privateLinksCount += 1;
      }

      if (processedSideNav || processedInternalLinks) {
        // This DOM was modified, so we need to write it to disk.
        const promise = fs.writeFile(
          path,

          // We'll also take this opportunity to prettier the output, because why
          // not? Nobody will see it, but it's a nice touch.
          prettier.format(dom.serialize(), {
            parser: "html",
            printWidth: Infinity,
          })
        );

        fileWritePromises.push(promise);
      }
    }
  }

  console.log(`[side nav] processed ${sidenavCount} files`);
  console.log(`[private links] processed ${privateLinksCount} files`);

  await Promise.all(fileWritePromises);

  console.log(`[postbuild] wrote ${processedFiles} files`);
};

module.exports = postbuild;
