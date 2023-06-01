module.exports = {
  extends: ["airbnb-base", "prettier"],
  rules: {
    // This rule is copied from the Airbnb config, but we remove the prohibition
    // on ForOf statements because they are natively supported in Node.js. The
    // remaining prohibitions are still good, though, so we don't want to just
    // completely disable the rule.
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "prefer-destructuring": [0],
  },
  env: { es6: true, node: true },
  parserOptions: { ecmaVersion: 2021 },
};
