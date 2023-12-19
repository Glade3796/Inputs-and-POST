import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let message

app.get("/messages", (req, res) => {
  res.json(message);
});

app.post("/messages", (req, res) => {
  res.json({ status: "message received :) x" });
  message = req.body
  console.log(res.body, req.body);
});

app.listen(2023, () => {
  console.log("Running on server 2023 x");
});
