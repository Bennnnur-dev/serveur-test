const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.json({ data: "salam" });
});

app.post("/", (req, res) => {
  res.json({ data: "bien reçu" });
});

app.listen(5500, () => console.log("connecté"));
