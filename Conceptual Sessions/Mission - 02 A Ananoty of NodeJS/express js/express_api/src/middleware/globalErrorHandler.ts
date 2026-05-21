import type { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res
    .status(5000)
    .json({
      success: false,
      message: err instanceof error ? Error. : "Internal server error.",
      stack: err.stack,
    });
};
