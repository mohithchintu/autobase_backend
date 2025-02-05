import express from "express";
import { generete_code } from "../../controllers/generator/generator.controller.js";

const admin_router = express.Router();

admin_router.post("/routes", generete_code);

export default admin_router;
