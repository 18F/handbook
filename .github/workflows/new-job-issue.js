const makeBody = (body) => {
  return {
    getValueForHeader: (header) => {
      const regex = new RegExp(
        `^### ${header
          .replace("?", "\\?")
          .replace(".", "\\.")
          .replace("*", "\\*")}\n\n([^\n]+)\n`,
        "m"
      );
      console.log(regex);
      console.log(body);
      console.log(body.match(regex));

      const [, value] = body.match(regex) ?? [];
      return value;
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
