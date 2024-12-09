const express = require("express");

const app = express();
const PORT = 3006;

app.get("/", (req, res) => {
  res.send("Khud say change karo");
});

app.get("/checking", (req, res) => {
  res.send("This is Checking Route");
});

app.get("/second", (req, res) => res.send("this is second Route"));

app.listen(PORT, () => console.log(`Sever is running in ${PORT}`));
