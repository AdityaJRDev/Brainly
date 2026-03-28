import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { JWT_PASSWORD } from "./config.js";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const header = req.headers["authorization"];

  if (!header) {
    return res.status(403).json({
      message: "You are not logged in",
    });
  }

  try {
    const decoded = jwt.verify(header, JWT_PASSWORD) as jwt.JwtPayload;

    if (!decoded?.id) {
      return res.status(403).json({
        message: "You are not logged in",
      });
    }

    req.userId = decoded.id;
    next();
  } catch (e) {
    return res.status(403).json({
      message: "You are not logged in",
    });
  }
};
