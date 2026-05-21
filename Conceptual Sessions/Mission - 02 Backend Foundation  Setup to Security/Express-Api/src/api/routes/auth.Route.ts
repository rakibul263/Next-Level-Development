import { Router } from "express";
import { login, signUp } from "../controllers/auth.controller";

const router = Router();

router.post("/signup", signUp);
router.post("/login", login);
router.get("/me", () => {});
router.put("/update/:id", () => {});
router.delete("/delete/:id", () => {});

export default router;
