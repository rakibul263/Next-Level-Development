import type { NextFunction, Request, Response } from "express";
import fs from "fs";

export const logger = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`,
    );
    fs.appendFileSync("logs.txt", `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });
  next();
};
