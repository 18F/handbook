const crypto = require("crypto");
const fs = require("fs/promises");
const path = require("path");

const walk = async (dir) => {
  const entries = await fs.readdir(dir);
  let ret = [];
  for await (const entry of entries) {
    const fullpath = path.join(dir, entry);
    const info = await fs.stat(fullpath);
    if (info.isDirectory()) {
      ret = [...ret, ...(await walk(fullpath))];
    } else {
      ret = [...ret, fullpath];
    }
  }
  return ret;
};

const md5 = (plaintext) => {
  const hash = crypto.createHash("md5");
  hash.update(plaintext);
  return hash.digest().toString("hex");
};

const sleep = async (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

(async () => {
  const exclude = [
    // esbuild results are either nondeterministic or the build environment on
    // cgPages is not identical. Either way, the result is we can't compare the
    // hashes of files that esbuild assembles, so exclude.
    "assets/js/app.js",
    "assets/styles/styles.css",

    // The sitemap on full checkout will display a source file's last modified
    // date from git. In cgPages, however, it's not a normal git clone so all of
    // the last modified dates are the date of the most recent build. We could
    // parse the dates out of the sitemap and compare what's left, but that's a
    // lot of trouble for, like, no value.
    "sitemap.xml",
  ];

  const siteFiles = await walk("_site").then((list) =>
    list.filter((path) => !exclude.some((ex) => path.endsWith(ex)))
  );

  const hashes = await Promise.all(
    siteFiles.map(async (filePath) => {
      const file = await fs.readFile(filePath);
      const hash = md5(file);
      return [hash, filePath.replace(/^_site\//, "")];
    })
  );

  const mismatch = [];

  let on = 1;
  for await (const [expectedHash, path] of hashes) {
    const url = `https://handbook.tts.gsa.gov/${path}`;

    if (process.env.CI === "true") {
      console.log(`[${on} of ${hashes.length}]: ${url}`);
    } else {
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      process.stdout.write(`[${on} of ${hashes.length}]: ${url}`);
    }
    on += 1;

    const remoteBuffer = await fetch(url)
      .then((response) => response.arrayBuffer())
      .then((blob) => Buffer.from(blob));
    const remoteHash = md5(remoteBuffer);

    if (expectedHash !== remoteHash) {
      mismatch.push({ expectedHash, remoteHash, url });
    }

    await sleep(500);
  }

  if (mismatch.length > 0) {
    mismatch.forEach(({ expectedHash, remoteHash, url }) => {
      console.log(`UNEXPECTED HASH ON ${url}`);
      console.log(`   EXPECTED: ${expectedHash}`);
      console.log(`   RECEIVED: ${remoteHash}`);
      console.log("".padStart(13 + expectedHash.length, "-"));
    });
    process.exit(400);
  }
})();
