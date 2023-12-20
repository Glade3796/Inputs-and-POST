import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

const app = express();
app.use(express.json());
app.use(cors());

const db = new Database("database.db");

app.get("/messages", (req, res) => {
  const messages = db
    .prepare(
      `
SELECT * FROM messages`
    )
    .all();
  res.json(messages);
});

app.post("/messages", (req, res) => {
  // res.json({ status: "message received :) x" });
  let msg = req.body;
  console.log(res.body, req.body);
  const insMsg = db.prepare(`
INSERT INTO messages (name, content) VALUES (? , ?)`);
  insMsg.run("user", `${msg.message}`);
  console.log(msg.message);
  res.json({ message_added: `${msg.message}` });
});

app.listen(2023, () => {
  console.log("Running on server 2023 x");
});
