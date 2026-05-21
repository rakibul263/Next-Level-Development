import type { Request, Response } from "express";
import { signToken } from "../../utils/jwt";
import { sendResponse } from "../../utils/sendResponse";
import authService from "../services/auth.Service";

export const signUp = async (req: Request, res: Response) => {
  const user = await authService.createUser(req.body);
  if (!user) {
    sendResponse(res, { message: "Failed to create user." }, 400);
  } else {
    sendResponse(res, { message: "account create successfully." }, 201);
  }
};
export const login = async (req: Request, res: Response) => {
  // check user email anassword
  const { email, password } = req.body;
  const user = await authService.validateUser(email, password);
  if (!user) {
    sendResponse(res, { message: "Invalid email or password." }, 401);
    return;
  }
  const { access_token, refresh_token } = signToken(user);
  res.cookie("refresh_token", refresh_token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  const result = {
    access_token,
    refresh_token,
    user,
  };
  sendResponse(res, { message: "Login successful.", data: result }, 200);
};
