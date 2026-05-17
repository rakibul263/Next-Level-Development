import { Router} from "express";
import { userController } from "./users.controller";

const router = Router();

// post method
router.post("/", userController.createUser);

// get method
router.get("/", userController.getUser);

// get user by id
router.get("/:id", userController.getUserById );

// update user
router.put("/:id", userController.updateUser );

// delete user
router.delete("/:id", userController.deleteUser);

export const userRoute = router;
