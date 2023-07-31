import { downloadTemplate } from "giget";

export const useDownload = async (name: string, template: string) => {
  await downloadTemplate(`github:kovsu/starter-${template}#main`, {
    dir: name,
  });
};
