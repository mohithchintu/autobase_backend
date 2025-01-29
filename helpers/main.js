import { generateDotNetCode } from "./code_generators/routes/dotnet.js";
import { generateGoCode } from "./code_generators/routes/go.js";
import { generateExpressCode } from "./code_generators/routes/javascript.js";

export const route_generate = (method, path, func) => {
  const expressCode = generateExpressCode(method, path, func);
  const goCode = generateGoCode(method, path, func);
  const dotNetCode = generateDotNetCode(method, path, func);

  return json({
    express: expressCode,
    go: goCode,
    dotnet: dotNetCode,
  });
};
