const { JSDOM } = require("jsdom");

// URLs with these domain patterns are not public.
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
  eleventyConfig.addTransform(
    "private_links",
    // This transform function is called for every output file that is rendered.
    // Its single argument is the rendered content, before it is written to the
    // filesystem.
    //
    // The function needs to be defined this way (rather than an anonymous
    // function) so that it will correctly get a "this" variable. The "this"
    // variable tells us the input and output paths of the rendered file.
    async function privateLinks(content) {
      // We're only interested in HTML output files, and we can also ignore the
      // files that are created by the redirect template.
      if (
        this.inputPath !== "./pages/redirect.html" &&
        this.outputPath.endsWith(".html")
      ) {
        // Load the content into a DOM
        const dom = new JSDOM(content);
        let processed = false;

        // Find all the links
        const links = dom.window.document.querySelectorAll("a[href]");

        for (const link of links) {
          const url = link.getAttribute("href");

          // For any links that aren't public, add a title and the private-link
          // CSS class.
          if (privateUrlSlugs.some((slug) => url.indexOf(slug) >= 0)) {
            processed = true;
            link.setAttribute("title", "This link is private to TTS");
            link.setAttribute(
              "class",
              [link.getAttribute("class"), "private-link"].join(" ")
            );
          }
        }

        // If we modified anything, return the updated content.
        if (processed) {
          return dom.serialize();
        }
      }

      // For everything else, just return the original content.
      return content;
    }
  );
};
