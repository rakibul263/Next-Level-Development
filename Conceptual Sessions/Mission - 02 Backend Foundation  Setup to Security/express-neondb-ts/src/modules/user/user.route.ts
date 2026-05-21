import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getAllUserController,
  getSingleUserController,
  updateUserController,
} from "./user.controller";

const router = Router();

router.post("/", createUserController);
router.get("/", getAllUserController);
router.get("/:id", getSingleUserController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
