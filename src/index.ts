import { resolve } from "path";
import inquirer from "inquirer";
import { downloadTemplate } from "giget";
import { readPackageJSON, writePackageJSON } from "pkg-types";
import { createSpinner } from "nanospinner";
import { QUESTIONS } from "./questions";
import { commandResult, ending, eslintSetup, npmLatestVersion } from "./utils";

interface IAnswers {
  tempChose: string
  projectName: string
  tailwindSetup?: boolean
}

async function tempRes() {
  const res: IAnswers = {
    tempChose: "",
    projectName: "",
  };

  const { tempChose, projectName } = await inquirer.prompt(QUESTIONS);

  res.tempChose = tempChose;
  res.projectName = projectName;

  if (tempChose === "vue") {
    const { tailwindSetup } = await inquirer.prompt({
      name: "tailwindSetup",
      type: "confirm",
      message: "Tailwind setup:",
      default: false,
    });

    res.tailwindSetup = tailwindSetup;
  }

  return res;
}

export async function run() {
  const spinner = createSpinner();
  const { tempChose, projectName, tailwindSetup } = await tempRes();

  spinner.start({ text: "Downloading template...", color: "green" });

  await downloadTemplate(`kovsu/create/templates/${tempChose}#master`, {
    provider: "github",
    dir: projectName,
  }).catch((err) => {
    spinner.error({ text: err, mark: "×" });
    process.exit(1);
  });

  spinner.success({ text: "Template downloaded!", mark: "√" });

  spinner.start({ text: "Init package.json...", color: "green" });
  const pkgPath = resolve(process.cwd(), projectName);

  let pkg = await readPackageJSON(pkgPath);

  const dev = ["eslint"];

  if (tailwindSetup) {
    pkg.scripts!["tailwind:init"] = "tailwindcss init -p";
    dev.push(...["tailwindcss", "postcss", "autoprefixer"]);
  }

  const eslintRes = eslintSetup(tempChose)!;

  dev.push(eslintRes);
  pkg.eslintConfig = {
    extends: eslintRes,
  };

  pkg.devDependencies = { ...pkg.devDependencies };
  for (const d of dev)
    pkg.devDependencies[d] = `^${await npmLatestVersion(d)}`;

  const name = commandResult("git config --get user.name");
  const email = commandResult("git config --get user.email");

  pkg = {
    name: projectName,
    type: "module",
    author: `${name} <${email}>`,
    ...pkg,
  };

  await writePackageJSON(resolve(pkgPath, "package.json"), pkg);
  spinner.success({ text: "Done! Now Run:", mark: "√" });
  spinner.clear();

  console.log(ending(tempChose, projectName, tailwindSetup));
}

