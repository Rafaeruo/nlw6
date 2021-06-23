import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import "./db";
import routes from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ msg: err.message });
  }

  return res.status(500).json({ msg: "Internal Server Error" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
