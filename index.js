import express from "express";
import connectDb from "./config/connectDB.js";
import router from "./routes/routes.js";

const app = express();

connectDb();

const PORT = process.env.PORT || 5000;

app.use(router);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
