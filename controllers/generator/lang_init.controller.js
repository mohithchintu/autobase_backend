import { generateProject } from "../../helpers/code_generators/main.js";

export const lang_init = (req, res) => {
  const { lang, name, backend_service } = req.body;
  const code_status = generateProject(name, backend_service);
  res.status(200).json(code_status);
};
