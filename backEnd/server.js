const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const authroute = require("./routes/user");
const dotenv =require("dotenv");

// Establishing MongoDB connection without deprecated options
mongoose.connect("mongodb://localhost:27017/SmartPark")
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("Error connecting to DB:", err));

const app = express();
dotenv.config()
const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/api/auth",authroute);

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
