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

      const nav = document.createElement("nav");
      nav.setAttribute("role", "navigation");
      nav.setAttribute("class", "inline-navigation");

      const h1 = document.createElement("h1");
      h1.textContent = "On this page:";
      nav.appendChild(h1);

      const list = document.createElement("ul");
      nav.appendChild(list);

      for (const heading of headings) {
        // Remove any heading permalink content. Our 11ty build adds permalinks
        // to all headers in the main body of content. Those links are just a
        // link 🔗 icon. Those icons should NOT show up in the floating
        // navigation sidebar, so... we'll just throw them away.
        //
        // But do that on a clone because we don't mess up the real DOM.
        const clone = heading.cloneNode(true);
        for (const child of clone.querySelectorAll(".heading-permalink")) {
          child.remove();
        }

        const title = clone.textContent.trim();
        const id = heading.getAttribute("id");

        const item = document.createElement("li");
        item.setAttribute("class", heading.tagName.toLowerCase());
        item.innerHTML = `<a href="#${id}">${title}</a>`;
        list.appendChild(item);
      }

      const title = document.querySelector("main > h1[data-page-title]");
      if (title) {
        title.insertAdjacentElement("afterend", nav);
      } else {
        document.querySelector("main").insertAdjacentElement("afterbegin", nav);
      }

      return true;
    }
  }

  return false;
};

module.exports = buildSidenavs;
