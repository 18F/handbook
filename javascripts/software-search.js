// if running in Node
if (typeof require === "function") {
  Papa = require("./papaparse.min");
  lunr = require("./lunr");
}

const getSoftware = async () => {
  const source =
    "https://raw.githubusercontent.com/GSA/data/master/enterprise-architecture/it-standards.csv";
  const response = await fetch(source);
  const csv = await response.text();
  const results = Papa.parse(csv, { header: true });
  return results.data;
};

const buildIndex = (software) => {
  return lunr(function () {
    const idx = this;
    idx.ref("Standard Name");
    idx.field("Standard Name", { boost: 2 });
    idx.field("Description");

    software.forEach((item) => {
      idx.add(item);
    });
  });
};

// https://medium.com/dailyjs/rewriting-javascript-converting-an-array-of-objects-to-an-object-ec579cafbfc7
const arrayToObject = (array, keyField) =>
  array.reduce((obj, item) => {
    obj[item[keyField]] = item;
    return obj;
  }, {});

const toClassStr = (str) => str.replace(/[^\w]+/, "-").toLowerCase();

const addNameCell = (row, entry) => {
  const th = document.createElement("th");
  th.setAttribute("scope", "row");
  const text = document.createTextNode(entry["Standard Name"]);
  th.appendChild(text);
  row.appendChild(th);
};

const addCell = (row, entry, field) => {
  const cell = row.insertCell();
  const text = document.createTextNode(entry[field]);
  cell.appendChild(text);
};

const addRow = (tBody, entry) => {
  const row = tBody.insertRow();

  const status = toClassStr(entry["Status"]);
  row.classList.add(`status-${status}`);

  addNameCell(row, entry);

  const fields = [
    "Description",
    "Category",
    "Status",
    "Deployment Type",
    "Approval Expiration Date",
  ];
  fields.forEach((field) => addCell(row, entry, field));
};

const displayResults = (software) => {
  const table = document.getElementById("software-search-results");
  const tBody = table.tBodies[0];

  // remove existing results
  tBody.innerHTML = "";

  software.forEach((entry) => addRow(tBody, entry));

  // only show table if there are results
  table.style.display = software.length == 0 ? "none" : null;
};

const getResults = (query, index) => {
  const nResults = 5;
  return index
    .query((q) => {
      // treat all words with trailing wildcard
      const tokens = lunr.tokenizer(query);
      q.term(tokens, {
        wildcard: lunr.Query.wildcard.TRAILING,
      });
    })
    .slice(0, nResults);
};

const doSearch = (query, index, softwareByName) => {
  const searchResults = getResults(query, index);
  // retrieve the matching software entries
  const softwareResults = searchResults.map(
    (result) => softwareByName[result.ref]
  );
  displayResults(softwareResults);
};

const init = async () => {
  const input = document.querySelector('#software-search input[name="search"]');
  if (location.hash) {
    // use the search value from the URL
    const hash = location.hash.replace(/^#/, "");
    input.value = decodeURIComponent(hash);
  }

  const software = await getSoftware();
  const index = buildIndex(software);
  const softwareByName = arrayToObject(software, "Standard Name");

  input.addEventListener("input", async (event) => {
    const query = event.target.value;
    doSearch(query, index, softwareByName);
    window.location = `#${encodeURIComponent(query)}`;
  });

  doSearch(input.value, index, softwareByName);
};

if (typeof module === "object") {
  // export functions for testing
  module.exports = {
    buildIndex,
    getResults,
  };
} else {
  init();
}
