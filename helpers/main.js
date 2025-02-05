import fs from "fs";
import path from "path";
import { dotNet_route } from "./code_generators/routes/dotnet.js";
import { go_route } from "./code_generators/routes/go.js";
import { javascript_route } from "./code_generators/routes/javascript.js";
import { python_route } from "./code_generators/routes/python.js";

export const route_generate = ({ method, url_path, func, lang }) => {
  let code = "";
  let ext = "";

  switch (lang) {
    case "go":
      code = go_route(method, url_path, func);
      ext = ".go";
      break;
    case "javascript":
      code = javascript_route(method, url_path, func);
      ext = ".js";
      break;
    case "python":
      code = python_route(method, url_path, func);
      ext = ".py";
      break;
    case "dotnet":
      code = dotNet_route(method, url_path, func);
      ext = ".cs";
      break;
    default:
      throw new Error("Language not supported");
  }

  const folderPath = "./codes/routes";
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const filePath = path.join(folderPath, `route${ext}`);
  fs.writeFileSync(filePath, code, "utf8");
  return { msg: "File created successfully", path: filePath };
};
