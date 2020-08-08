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

const addRow = (tBody, entry) => {
  const row = tBody.insertRow();

  const status = entry["Status"].replace(/[^\w]/, "-").toLowerCase();
  row.classList.add(`status-${status}`);

  // the <th> needs to be added in a different way
  const th = document.createElement("th");
  th.setAttribute("scope", "row");
  const text = document.createTextNode(entry["Standard Name"]);
  th.appendChild(text);
  row.appendChild(th);

  const fields = [
    "Description",
    "Category",
    "Status",
    "Deployment Type",
    "Approval Expiration Date",
  ];
  fields.forEach((field) => {
    const cell = row.insertCell();
    const text = document.createTextNode(entry[field]);
    cell.appendChild(text);
  });
};

const displayResults = (software) => {
  const table = document.getElementById("software-search-results");
  const tBody = table.tBodies[0];

  // empty it
  tBody.innerHTML = "";

  software.forEach((entry) => addRow(tBody, entry));

  // only show table if there are results
  table.style.display = software.length == 0 ? "none" : null;
};

const doSearch = (query, index, softwareByName) => {
  const nResults = 5;
  const searchResults = index.search(query).slice(0, nResults);
  // retrieve the matching software entries
  const softwareResults = searchResults.map(
    (result) => softwareByName[result.ref]
  );
  displayResults(softwareResults);
};

getSoftware().then((software) => {
  const index = buildIndex(software);
  const softwareByName = arrayToObject(software, "Standard Name");

  const input = document.querySelector('#software-search input[name="search"]');
  input.addEventListener("input", async (event) => {
    const query = event.target.value;
    doSearch(query, index, softwareByName);
  });
});
