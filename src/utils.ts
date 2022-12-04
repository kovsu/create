import { execSync } from "node:child_process";
import fetch from "node-fetch-native";

export async function npmLatestVersion(name: string) {
  return (await (await fetch(`https://registry.npmjs.org/${name}`)).json())!["dist-tags"].latest;
}

export function commandResult(cmd: string) {
  return execSync(cmd).toString().replace("\n", "");
}

export function eslintSetup(temp: string) {
  switch (temp) {
    case "vue":
      return ["@kovsu/eslint-config-vue"];
    case "ts":
      return ["@kovsu/eslint-config-ts", "typescript"];
    case "basic":
      return ["@kovsu/eslint-config-basic"];
  }
}

