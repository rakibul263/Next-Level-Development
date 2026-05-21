import type { Request, Response } from "express";
import { createProfileIntoDB } from "./profile.service";

export const createProfileController = async (req: Request, res: Response) => {
  try {
    const result = await createProfileIntoDB(req.body);
    res.status(201).json({
      success: true,
      message: "Profile create successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: "Profile can't create successfully.",
      error: error.message,
    });
  }
};
