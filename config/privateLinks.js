const { JSDOM } = require("jsdom");

const privateUrlSlugs = [
  "18f.slack.com",
  "anywhere.gsa.gov",
  "bookit.gsa.gov",
  "calendar.gsa.gov",
  "connect.gsa.gov",
  "docs.google.com",
  "drive.google.com",
  "ea.gsa.gov",
  "email.gsa.gov",
  "eopf.opm.gov",
  "gcims.gsa.gov",
  "github.com/18F/Accessibility_Reviews",
  "github.com/18F/blog-drafts",
  "github.com/18F/codereviews",
  "github.com/18F/DevOps",
  "github.com/18F/Infrastructure",
  "github.com/18F/security-incidents",
  "github.com/18F/staffing",
  "github.com/18F/team-api.18f.gov",
  "github.com/18F/writing-lab",
  "gkey.gsa.gov",
  "gsa-tts.slack.com",
  "gsa.my.salesforce.com",
  "gsaolu.gsa.gov",
  "hrlinks.gsa.gov",
  "hrprod.hr.gsa.gov",
  "insite.gsa.gov",
  "mail.gsa.gov",
  "meet.gsa.gov",
  "sign.gsa.gov",
  "tock.18f.gov",
];

module.exports = (eleventyConfig) => {
  eleventyConfig.addTransform("private_links", async function (content) {
    if (
      this.inputPath !== "./pages/redirect.html" &&
      this.outputPath.endsWith(".html")
    ) {
      const dom = new JSDOM(content);

      const links = dom.window.document.querySelectorAll("a[href]");
      let processed = false;
      for (const link of links) {
        const url = link.getAttribute("href");
        if (privateUrlSlugs.some((slug) => url.indexOf(slug) >= 0)) {
          processed = true;
          link.setAttribute("title", "This link is private to TTS");
          link.setAttribute(
            "class",
            [link.getAttribute("class"), "private-link"].join(" ")
          );
        }
      }

      if (processed) {
        return dom.serialize();
      }
    }
    return content;
  });
};
