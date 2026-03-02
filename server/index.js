import express from "express";

const app = express();

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.listen(5174, () => {
  console.log("Backend running on http://localhost:5174");
});