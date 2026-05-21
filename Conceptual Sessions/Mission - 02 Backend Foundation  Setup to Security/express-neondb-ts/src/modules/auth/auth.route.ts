import { Router } from "express";
import { authLoginController } from "./auth.controller";

const router = Router();
router.post("/login", authLoginController);

export default router;
