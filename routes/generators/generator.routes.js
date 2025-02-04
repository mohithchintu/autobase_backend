import express from "express";
import { route_generate } from "../../helpers/main.js";

const admin_router = express.Router();

admin_router.post("/routes", route_generate);

export default admin_router;
