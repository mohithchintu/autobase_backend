import fs from "fs";
import path from "path";
import { js_init } from "./init/javascript/init.js";
import { js_index } from "./main/javascript/main.js";
import { js_config } from "./config/javascript/config.js";
import { gitignore_init } from "./deploy/gitignore.js";
import { dotenv_init } from "./deploy/dotenv.js";

export const generateProject = (name, backend_service, backend_uri) => {
  const rootFolder = `./${name}`;

  if (!fs.existsSync(rootFolder)) {
    fs.mkdirSync(rootFolder, { recursive: true });
  }

  const ignorePath = path.join(rootFolder, ".gitignore");
  fs.writeFileSync(ignorePath, gitignore_init(), "utf8");

  const envPath = path.join(rootFolder, ".env");
  fs.writeFileSync(envPath, dotenv_init(backend_service, backend_uri), "utf8");

  const packageJsonPath = path.join(rootFolder, "package.json");
  fs.writeFileSync(packageJsonPath, js_init({ name, backend_service }), "utf8");

  const indexPath = path.join(rootFolder, "index.js");
  fs.writeFileSync(indexPath, js_index(), "utf8");

  const configFolder = path.join(rootFolder, "config");
  if (!fs.existsSync(configFolder)) {
    fs.mkdirSync(configFolder, { recursive: true });
  }

  const dbConfigPath = path.join(configFolder, "connectDB.js");
  fs.writeFileSync(dbConfigPath, js_config({ backend_service }), "utf8");

  return { msg: "Project structure created successfully", path: rootFolder };
};
