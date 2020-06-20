const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
  console.log("DB Connected");
});

mongoose.connection.on("error", err => {
  console.log(`DB connection error: ${err}`);
});

app.get("/", (req, res) => {
  res.send("hello from ndoe");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
