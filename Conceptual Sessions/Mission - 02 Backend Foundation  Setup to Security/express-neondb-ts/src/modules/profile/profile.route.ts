import { Router } from "express";
import { createProfileController } from "./profile.controller";

const router = Router();
router.post("/", createProfileController);

export default router;
