export const QUESTIONS = [
  {
    name: "tempChose",
    type: "list",
    message: "Chose a template to create:",
    choices: ["basic", "ts", "vue"],
  },
  {
    name: "projectName",
    type: "input",
    message: "Project name:",
    default: "my-project",
    validate(input: string) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else return "Project name may only include letters, numbers, underscores and hashes.";
    },
  },
];
