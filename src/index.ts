import inquirer from "inquirer";
import { downloadTemplate } from "giget";
import { QUESTIONS } from "./questions";

async function tempRes() {
  return await inquirer.prompt(QUESTIONS);
}

export async function run() {
  const { tempChose, projectName, tailwindSetup } = await tempRes();

  await downloadTemplate(`kovsu/create/templates/${tempChose}#master`, {
    provider: "github",
    dir: projectName,
  });
}
