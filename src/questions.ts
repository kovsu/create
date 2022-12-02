import fs from "fs";
import path from "path";

const CHOICES = fs.readdirSync(path.resolve(path.resolve(), "src/templates"));

export const QUESTIONS = [
  {
    name: "create-project",
    type: "list",
    message: "Chose a template to create",
    choices: CHOICES,
  },
  {
    name: "project-name",
    type: "input",
    message: "Project name:",
    validate(input: string) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else return "Project name may only include letters, numbers, underscores and hashes.";
    },
  },
];
