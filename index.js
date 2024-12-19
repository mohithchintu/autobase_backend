import express from "express";
import connectDb from "./config/connectDB.js";
import router from "./routes/routes.js";

const app = express();

connectDb();

const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use(router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
