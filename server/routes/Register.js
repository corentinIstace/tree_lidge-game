import register from "../controllers/ControllerRegister.js";
import express from "express";

const router = express.Router();

router.post("/", register);

export default router;
