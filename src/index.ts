import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();
import express from "express";

import "./db";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(routes);

app.get("/", (_req, res) => {
  console.log(process.env.URL);
  return res.json({ msg: "hello world" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
