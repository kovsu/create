import process from "node:process";
import * as p from "@clack/prompts";

export const useQuestions = async () => {
  const { projectName, templateName } = await p.group(
    {
      projectName: () => p.text({ message: "Enter your project name:", defaultValue: "mellow-go" }),
      templateName: async ({ results: { projectName } }) =>
        p.select({
          message: `Choose a template for ${projectName}:`,
          initialValue: "ts",
          options: [
            { value: "ts", label: "Typescript" },
            { value: "vue", label: "Vue" },
          ],
        }),
    },
    {
      onCancel: () => {
        p.cancel("Operation cancelled.");
        process.exit(0);
      },
    },

  );

  return {
    projectName,
    templateName,
  };
};
