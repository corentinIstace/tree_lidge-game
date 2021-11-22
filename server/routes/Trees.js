import {getTrees} from "../controllers/ControllerTrees.js";
import express from "express";

const router = express.Router();

router.post("/", getTrees);

export default router;
