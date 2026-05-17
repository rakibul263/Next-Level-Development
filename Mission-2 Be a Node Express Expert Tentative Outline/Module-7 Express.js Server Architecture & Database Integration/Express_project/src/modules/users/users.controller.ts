import type { Request, Response } from "express";
import { userService } from "./users.services";

// create user
const createUser = async (req: Request, res: Response) => {
  try {
    const insertData = await userService.createUserIntoDB(req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: insertData.rows[0],
    });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Failed to create user", error });
  }
};

// get user
const getUser = async (req: Request, res: Response) => {
  try {
    const getData = await userService.getUserIntoDB();
    res.status(200).json({
      success: true,
      data: getData.rows,
    });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Failed to create user", error });
  }
};

// get user by id
const getUserById = async (req: Request, res: Response) => {
  try {
    const getUserById = await userService.getUserByIdIntoDB(req.params);
    if (getUserById.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Data Found Successfully.",
      data: getUserById.rows[0],
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Data not found.",
    });
  }
};

// update user
const updateUser = async (req: Request, res: Response) => {
  try {
    const updateUserUsingId = await userService.updateUserIntoDb(req);
    res.status(201).json({
      success: true,
      message: "Data update successfully.",
      data: updateUserUsingId.rows[0],
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Data cannot update successfully. Please check",
    });
  }
};

// delete user
const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleteUser = await userService.deleteUserIntoDb(req.params);
    res.status(200).json({
      success: true,
      message: `User delete successfully.`,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Something want wrong. Data not deleted.",
      error: error,
    });
  }
};

export const userController = {
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
};
