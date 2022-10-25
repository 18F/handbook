document.addEventListener("DOMContentLoaded", () => {
  // The .layout-table-of-contents element only exists on the front page, and we
  // don't want the sidenav on the front page. So if the element does NOT exist,
  // add the sidenav!
  if (!document.querySelector(".layout-table-of-contents")) {
    // Only traverse down to h3 so the table of contents is not unwieldy
    const headings = document.querySelectorAll("main > h2, main > h3");

    if (headings.length) {
      const body = document.querySelector("body");
      body.setAttribute(
        "class",
        [body.getAttribute("class"), "with-inline-navigation"].join(" ")
      );

      const nav = document.createElement("nav");
      nav.setAttribute("role", "navigation");
      nav.setAttribute("class", "inline-navigation");

      const h1 = document.createElement("h1");
      h1.innerText = "On this page:";
      nav.appendChild(h1);

      const list = document.createElement("ul");
      nav.appendChild(list);

      for (const heading of headings) {
        const title = heading.innerText.replace(/\s*#$/, "");
        const id = heading.getAttribute("id");

        const item = document.createElement("li");
        item.setAttribute("class", heading.tagName.toLowerCase());
        item.innerHTML = `<a href="#${id}">${title}</a>`;
        list.appendChild(item);
      }

      const title = document.querySelector("main > h1[page-title]");
      if (title) {
        title.insertAdjacentElement("afterend", nav);
      } else {
        document.querySelector("main").insertAdjacentElement("afterbegin", nav);
      }
    }
  }
});
