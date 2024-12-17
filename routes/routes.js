import express from "express";
import Test from "../controllers/test/test.controller.js";

const router = express.Router();

router.get("/", Test);

export default router;
