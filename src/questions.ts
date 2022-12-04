import fs from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CHOICES = fs.readdirSync(resolve(`${__dirname}`, "../templates"));

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
];
