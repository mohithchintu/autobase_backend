export const js_config = ({ backend_service }) => {
  let dbImport = "";
  let dbConnectCode = "";

  switch (backend_service) {
    case "mongodb":
      dbImport = `import mongoose from "mongoose";`;
      dbConnectCode = `
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};`;
      break;

    case "postgresql":
      dbImport = `import { Sequelize } from "sequelize";`;
      dbConnectCode = `
const sequelize = new Sequelize(process.env.PG_URI, {
  dialect: "postgres",
  logging: false,
});

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL Connected");
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error.message);
    process.exit(1);
  }
};`;
      break;

    case "mysql":
      dbImport = `import { Sequelize } from "sequelize";`;
      dbConnectCode = `
const sequelize = new Sequelize(process.env.MYSQL_URI, {
  dialect: "mysql",
  logging: false,
});

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL Connected");
  } catch (error) {
    console.error("Error connecting to MySQL:", error.message);
    process.exit(1);
  }
};`;
      break;

    case "sqlite":
      dbImport = `import { Sequelize } from "sequelize";`;
      dbConnectCode = `
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.SQLITE_DB_PATH,
  logging: false,
});

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("SQLite Connected");
  } catch (error) {
    console.error("Error connecting to SQLite:", error.message);
    process.exit(1);
  }
};`;
      break;

    case "firebase":
      dbImport = `import admin from "firebase-admin";`;
      dbConnectCode = `
const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const connectDb = async () => {
  try {
    console.log("Firebase Connected");
  } catch (error) {
    console.error("Error initializing Firebase:", error.message);
    process.exit(1);
  }
};`;
      break;

    default:
      return `// No database configuration selected`;
  }

  const data = `
import dotenv from "dotenv";
${dbImport}
dotenv.config();

${dbConnectCode}

export default connectDb;
`;

  return data;
};
