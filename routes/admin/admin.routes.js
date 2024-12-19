import express from "express";
import {
  loginAdmin,
  registerAdmin,
} from "../../controllers/admin/adminauth.controller.js";
import { verifyadmin } from "../../middleware/admin.middleware.js";

const admin_router = express.Router();

admin_router.post("/register", verifyadmin, registerAdmin);
admin_router.post("/login", loginAdmin);

export default admin_router;
