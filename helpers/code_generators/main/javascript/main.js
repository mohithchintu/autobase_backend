export const js_index = () => {
  const data = `
import express from "express";
import connectDb from "./config/connectDB.js";
import cors from "cors";

const app = express();

connectDb();

const allowedOrigins = ["*"];

const corsOptions = {
    origin: allowedOrigins,
    exposedHeaders: ["Authorization"],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

const PORT = process.env.PORT || 5007;
app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});

`;

  return data;
};
