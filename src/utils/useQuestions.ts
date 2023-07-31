import select from "@inquirer/select";
import input from "@inquirer/input";

export const useQuestions = async () => {
  const answer = await input({ message: "Enter your project name:" });
  const template = await select({
    message: "Select a starter template:",
    choices: [
      {
        name: "ts",
        value: "ts",
      },
      {
        name: "vue",
        value: "vue",
      },
    ],
  });

  return {
    answer,
    template,
  };
};
