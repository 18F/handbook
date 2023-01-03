const buildSidenavs = async (path, dom, verbose = false) => {
  const {
    window: { document },
  } = dom;

  const log = verbose
    ? (path) => {
        console.log(`[side nav] processing ${path}`);
      }
    : () => {};

  const isFrontPage = !!document.querySelector(".layout-table-of-contents");
  const hasNav = !!document.querySelector("nav.inline-navigation");

  if (!isFrontPage && !hasNav) {
    // Only traverse down to h3 so the table of contents is not unwieldy
    const headings = document.querySelectorAll("main > h2, main > h3");

    if (headings.length) {
      log(path);

      const body = document.querySelector("body");
      body.setAttribute(
        "class",
        [body.getAttribute("class"), "with-inline-navigation"].join(" ")
      );

      const inPageNav = document.createElement("aside");
      inPageNav.setAttribute("class", "usa-in-page-nav");
      inPageNav.setAttribute("data-title-text", "On this page");
      inPageNav.setAttribute("data-title-heading-level", "h3");
      inPageNav.setAttribute("data-scroll-offset", "0");
      inPageNav.setAttribute("data-root-margin", "0px 0px 0px 0px");
      inPageNav.setAttribute("data-threshold", "1");

      document
        .querySelector("main")
        .parentNode.setAttribute("class", "usa-in-page-nav-container");
      document
        .querySelector("main")
        .parentNode.insertBefore(inPageNav, document.querySelector("main"));
    }
  }

  return false;
};

module.exports = buildSidenavs;
