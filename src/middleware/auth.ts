import { NextFunction, Request, Response } from "express";
import jwt, { decode, JwtPayload } from "jsonwebtoken";
import config from "../config";

const auth = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      console.log({ authToken: token });
      if (!token) {
        return res.status(403).json({
          status: false,
          message: "Forbidden Access!!",
        });
      }

      const decoded = jwt.verify(
        token,
        config.jwt_token as string
      ) as JwtPayload;

      req.user = decode;

      // rejecting other roles except "admin"

      if (roles.length && !roles.includes(decoded.role as string)) {
        res.status(500).json({
          error: "Unauthorize!!!",
        });
      }

      console.log({ varifyIs: decoded });

      next();
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };
};
export default auth;
