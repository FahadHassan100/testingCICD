const express = require("express");

const app = express();
const PORT = 3006;

app.get("/", (req, res) => {
  res.send("Great Work! you near to get Success");
});

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Everything going good! v6" });
});

app.get("/second", (req, res) => res.send("this is second Route"));

app.listen(PORT, () => console.log(`Sever is running in ${PORT}`));
