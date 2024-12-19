import express from "express";
import test from "../controllers/test/test.controller.js";
import admin_router from "./admin/admin.routes.js";

const router = express.Router();

router.get("/", test);
router.use("/admin", admin_router);

export default router;
