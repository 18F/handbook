const makeBody = (body) => {
  return {
    getValueForHeader: (header) => {
      const [, value] = body.match(
        new RegExp(
          `^### ${header
            .replace("?", "?")
            .replace(".", ".")
            .replace("*", "*")}\n\n([^\n]+)\n`,
          "m"
        )
      );
    },
  };
};

module.exports = async ({ context, github }) => {
  if (true || context.issue.number) {
    const {
      data: { body: rawBody },
    } = await github.rest.issues.get({ ...context.issue, issue_number: 3380 });
    const body = makeBody(rawBody);

    const type = body.getValueForHeader(
      "Is this job available to the public, or is it internal only?"
    );
    console.log(type);
  }
};
