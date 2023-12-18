const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const authroute = require("./routes/user");
const reservationRoute = require("./routes/reservation")
const dotenv =require("dotenv");
// mongodb://localhost:27017/SmartPark
// Establishing MongoDB connection without deprecated options
mongoose.connect("mongodb://0.0.0.0/SmartPark")
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("Error connecting to DB:", err));

const app = express();
dotenv.config()
const port = 4443;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/api/auth",authroute);
app.use("/api/reservation",reservationRoute)
app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
