import { useQuestions } from "./utils";

async function run() {
  const res = await useQuestions();
  console.log(res);
}

run();
