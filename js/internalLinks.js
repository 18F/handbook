document.addEventListener("DOMContentLoaded", () => {
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

  for (const link of document.querySelectorAll("a[href]")) {
    const url = link.getAttribute("href");
    if (privateUrlSlugs.some((slug) => url.indexOf(slug) >= 0)) {
      link.setAttribute("title", "This link is private to TTS.");
      link.setAttribute(
        "class",
        [link.getAttribute("class"), "private-link"].join(" ")
      );
    }
  }
});
