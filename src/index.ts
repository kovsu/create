import * as p from "@clack/prompts";
import pc from "picocolors";
import { useDownload, useQuestions } from "./utils";

export async function run() {
  p.intro(pc.blue("@kovsu/create"));

  const { projectName, templateName } = await useQuestions();

  const s = p.spinner();
  s.start("Installing");
  await useDownload(projectName, templateName as string);
  s.stop("Installed");

  p.outro(pc.blue("Completed!"));
}
