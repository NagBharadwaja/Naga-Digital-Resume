import type { Request, Response } from "express";
import { fetchResumeData } from "./resume.service.js"

export const getResumeData = async (_request: Request, response: Response) => {
    const resumeData = await fetchResumeData();
    response.json(resumeData);
}