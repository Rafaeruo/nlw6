import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let token = req.headers["authorization"];

  if (!token) {
    return res.status(401).end();
  }

  token = token.split(" ")[1];

  try {
    const payload = verify(token, process.env.SECRET) as IPayload;

    req.user_id = payload.sub;

    return next();
  } catch (error) {
    return res.status(401).end();
  }
}
