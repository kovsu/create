import fs from "fs";
import path from "path";
// import chalk from "chalk";

const CHOICES = fs.readdirSync(path.resolve(path.resolve(), "templates"));

export const QUESTIONS = [
  {
    name: "tempChose",
    type: "list",
    message: "Chose a template to create:",
    choices: CHOICES,
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
  {
    name: "tailwindSetup",
    type: "confirm",
    message: "Tailwind setup:",
    default: false,
  },
];
