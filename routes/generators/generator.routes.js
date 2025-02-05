import express from "express";
import { lang_init } from "../../controllers/generator/lang_init.controller.js";

const generator_router = express.Router();

generator_router.post("/init", lang_init);

export default generator_router;
