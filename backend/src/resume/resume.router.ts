import express from "express";

const router = express.Router();

import { getResumeData } from "./resume.controller.js";

router.get("/", getResumeData);

export const resumeRouter = router;