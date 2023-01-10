const yaml = require("js-yaml");
const fs = require("fs/promises");

const JOB_TYPE_MAPPING = new Map([
  ["public", "public"],
  ["internal-only", "internal"],
]);

const makeBody = (body) => {
  return {
    getValueForHeader: (header) => {
      const regex = new RegExp(
        `^### ${header
          .replace(/\?/g, "\\?")
          .replace(/\./g, "\\.")
          .replace(/\*/g, "\\*")}\n\n([^\n]+)`,
        "m"
      );

      const [, value] = body.match(regex) ?? [];
      return value;
    },
  };
};

module.exports = async ({ context, github }) => {
  context.issue = { number: 3380 };

  if (true || context.issue.number) {
    const {
      data: { body: rawBody },
    } = await github.rest.issues.get({
      ...context.issue,
      issue_number: context.issue.number,
    });

    const body = makeBody(rawBody);

    const type = body.getValueForHeader(
      "Is this job available to the public, or is it internal-only?"
    );
    const role = body.getValueForHeader("Role");
    const link = body.getValueForHeader("Link");
    const opens = body.getValueForHeader("Job opening date");
    const closes = body.getValueForHeader("Job closing date");
    const closesEarly =
      body.getValueForHeader(
        "Does this job close when all selections have been made?"
      ) === "yes";

    const validationErrors = [];

    if (type !== "public" && type !== "internal-only") {
      validationErrors.push(
        `The role type must be \`public\` or \`internal-only\`. It is currently \`${type}\`}`
      );
    }

    if (!role) {
      validationErrors.push(`The role must have a title.`);
    }

    if (!link) {
      validationErrors.push(`The role must have a link to more information.`);
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(opens)) {
      validationErrors.push(`Job opening date must be formatted as YYYY-MM-DD`);
    }
    if (!dateRegex.test(closes)) {
      validationErrors.push(`Job closing date must be formatted as YYYY-MM-DD`);
    }

    if (validationErrors.length > 0) {
      // post a comment about validation problems
      console.log("oh noes");
      console.log(validationErrors.join("\n"));
      return;
    }

    const jobs = yaml.load(
      await fs.readFile("_data/jobs.yaml", {
        encoding: "utf-8",
      })
    );

    const target = jobs[JOB_TYPE_MAPPING.get(type)] ?? [];
    target.push({
      role,
      link,
      opens: new Date(Date.parse(`${opens}T00:00:00.000Z`)),
      closes: new Date(Date.parse(`${closes}T00:00:00.000Z`)),
      "closes when filled": closesEarly,
    });

    jobs[JOB_TYPE_MAPPING.get(type)] = target;

    const schema = yaml.DEFAULT_SCHEMA;
    schema.compiledTypeMap.scalar["tag:yaml.org,2002:timestamp"].represent = (
      date
    ) => {
      const yyyy = date.getUTCFullYear();
      const mm = (date.getUTCMonth() + 1).toString().padStart(2, "0");
      const dd = date.getUTCDate().toString().padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    };

    await fs.writeFile(
      "_data/jobs.yaml",
      yaml.dump(jobs, {
        lineWidth: -1,
        schema,
      }),
      {
        encoding: "utf-8",
      }
    );

    await fs.writeFile(process.env.GITHUB_OUTPUT, "updated=yes");
  }
};

module.exports({});
