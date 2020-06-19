const express = require("express");
const app = expresss();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("hello from ndoe");
});

const port = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
