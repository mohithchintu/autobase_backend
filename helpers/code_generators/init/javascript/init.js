export const js_init = ({ name, backend_service }) => {
  let dbDependency = "";

  switch (backend_service) {
    case "mongodb":
      dbDependency = `"mongoose": "latest"`;
      break;
    case "postgresql":
      dbDependency = `"pg": "latest", "pg-hstore": "latest"`;
      break;
    case "mysql":
      dbDependency = `"mysql2": "latest"`;
      break;
    case "sqlite":
      dbDependency = `"sqlite3": "latest"`;
      break;
    case "firebase":
      dbDependency = `"firebase-admin": "latest"`;
      break;
    default:
      dbDependency = "";
  }

  const dependencies = `
    "bcryptjs": "latest",
    "cors": "latest",
    "dotenv": "latest",
    "express": "latest",
    "nodemon": "latest"
    ${dbDependency ? `,${dbDependency}` : ""}
    `;

  const data = `
{
  "name": "${name}",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [],
  "author": "Autobase",
  "license": "ISC",
  "dependencies": {
    ${dependencies}
  }
}
`;

  return data;
};
