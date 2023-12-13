const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");

mongoose
  .connect("mongodb://localhost:27017/SmartPark")
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("Error connecting to DB:", err));

const app = express();
const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
