import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

interface JwtPayload {
  id: number;
  name: string;
  email: string;
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
  try {
    const decode = jwt.verify(token, config.jwt_secret as string) as JwtPayload;
    (req as any).user = decode;
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
  next();
};
