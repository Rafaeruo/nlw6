import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (_req, res) => {
  console.log(process.env.URL);
  return res.json({ msg: "hello world" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
