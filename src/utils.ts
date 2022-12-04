import { execSync } from "node:child_process";
import fetch from "node-fetch-native";

export async function npmLatestVersion(name: string) {
  return (await (await fetch(`https://registry.npmjs.org/${name}`)).json())!["dist-tags"].latest;
}

export function commandResult(cmd: string) {
  return execSync(cmd).toString().replace("\n", "");
}

export function eslintSetup(temp: string) {
  let res = "@kovsu/eslint-config-basic";
  if (temp === "vue")
    res = "@kovsu/eslint-config-vue";
  else if (temp === "ts")
    res = "@kovsu/eslint-config-ts";

  return res;
}

