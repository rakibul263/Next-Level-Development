import { Router } from "express";
import { auth } from "../../middlewares/auth";
import {
  createUserController,
  deleteUserController,
  getAllUserController,
  getSingleUserController,
  updateUserController,
} from "./user.controller";

const router = Router();

router.post("/", createUserController);
router.get("/", auth, getAllUserController);
router.get("/:id", auth, getSingleUserController);
router.put("/:id", auth, updateUserController);
router.delete("/:id", auth, deleteUserController);

export default router;
