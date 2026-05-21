import type { Request, Response } from "express";
import { authLoginIntoDB } from "./auth.service";

export const authLoginController = async (req: Request, res: Response) => {
  try {
    const result = await authLoginIntoDB(req.body);
    res.status(201).json({
      success: true,
      message: "Login user successfully.",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Can't login. Invalid User",
      error: error.message,
    });
  }
};
