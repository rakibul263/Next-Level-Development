import type { Request, Response } from "express";
import {
  createUserIntoDB,
  deleteUserIntoDB,
  getAllUsersIntoDB,
  getSingleUserIntoDB,
  updateUserIntoDB,
} from "./user.service";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const result = await createUserIntoDB(req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllUserController = async (req: Request, res: Response) => {
  try {
    const result = await getAllUsersIntoDB();

    res.status(201).json({
      success: true,
      message: "Get All User Successfully.",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getSingleUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await getSingleUserIntoDB(Number(id));

    res.status(201).json({
      success: true,
      message: "Get User Successfully.",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await updateUserIntoDB(Number(id), req.body);

    res.status(201).json({
      success: true,
      message: "Get User Successfully.",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const result = await deleteUserIntoDB(Number(id))
    res.status(201).json({
      success: true,
      message: "Delete User Successfully.",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
