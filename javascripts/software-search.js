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
    idx.field("Description");

    software.forEach((item) => {
      idx.add(item);
    });
  });
};

const getIndex = async () => {
  const software = await getSoftware();
  return buildIndex(software);
};

const indexPromise = getIndex();

const input = document.querySelector('#software-search input[name="search"]');
input.addEventListener("input", async (event) => {
  indexPromise.then((index) => {
    const results = index.search(event.target.value);
    console.log(results);
  });
});
