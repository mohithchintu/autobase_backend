import { dotNet_route } from "./code_generators/routes/dotnet.js";
import { go_route } from "./code_generators/routes/go.js";
import { javascript_route } from "./code_generators/routes/javascript.js";
import { python_route } from "./code_generators/routes/python.js";

export const route_generate = (req, res) => {
  const { method, path, func, lang } = req.body;
  switch (lang) {
    case "go":
      res.status(200).json(go_route(method, path, func));
    case "javascript":
      res.status(200).json(javascript_route(method, path, func));
    case "python":
      res.status(200).json(python_route(method, path, func));
    case "dotnet":
      res.status(200).json(dotNet_route(method, path, func));
    default:
      return "Error: Language not supported";
  }
};
