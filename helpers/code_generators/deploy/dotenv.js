export const dotenv_init = (backend_service, backend_uri) => {
  let dbEnvVars = "";

  switch (backend_service) {
    case "mongodb":
      dbEnvVars = `MONGO_URI=${backend_uri}`;
      break;

    case "postgresql":
      dbEnvVars = `PG_URI=${backend_uri}`;
      break;

    case "mysql":
      dbEnvVars = `MYSQL_URI=${backend_uri}`;
      break;

    case "sqlite":
      dbEnvVars = `SQLITE_DB_PATH=${backend_uri}`;
      break;

    case "firebase":
      dbEnvVars = `FIREBASE_CONFIG=${backend_uri}`;
      break;

    default:
      dbEnvVars = `# No database configuration selected`;
  }

  const data = `
  PORT=5007
  ${dbEnvVars}
  `;

  return data;
};
