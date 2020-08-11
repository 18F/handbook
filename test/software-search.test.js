const search = require("../javascripts/software-search");

test("matches a single result", () => {
  const index = search.buildIndex([
    {
      "Standard Name": "GitHub",
      Description: "foo bar",
    },
  ]);

  const results = index.search("github");
  expect(results.length).toBe(1);
});

test("matches a partial word", () => {
  const index = search.buildIndex([
    {
      "Standard Name": "GitHub",
      Description: "foo bar",
    },
  ]);

  const results = index.search("git");
  expect(results.length).toBe(1);
});

test("results are in descending order", () => {
  const index = search.buildIndex([
    {
      "Standard Name": "something something Git",
      Description: "foo bar",
    },
    {
      "Standard Name": "something something",
      Description: "This one is also Git.",
    },
  ]);

  const results = index.search("git");
  expect(results.length).toBe(2);
  expect(results[0].score).toBeGreaterThan(results[1].score);
});

test("matches a single word within the name", () => {
  const index = search.buildIndex([
    {
      "Standard Name": "something something Git",
      Description: "foo bar",
    },
    {
      "Standard Name": "something something",
      Description: "This one is also Git.",
    },
  ]);

  const results = index.search("git");
  expect(results[0].ref).toBe("something something Git");
});
