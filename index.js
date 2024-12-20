import express from "express";
import connectDb from "./config/connectDB.js";
import router from "./routes/routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

connectDb();

const allowedOrigins = ["http://localhost:5174"];

const corsOptions = {
  origin: allowedOrigins,
  exposedHeaders: ["Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use(router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
