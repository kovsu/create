import inquirer from "inquirer";
import { QUESTIONS } from "./questions";

inquirer.prompt(QUESTIONS).then((answers) => {
  console.log(answers);
});
