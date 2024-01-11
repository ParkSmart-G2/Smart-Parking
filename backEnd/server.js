const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/user");
const reservationRoute = require("./routes/reservation");
const adminRoute = require("./routes/admin");
const spotRoute = require("./routes/spot");
const profileRoute = require("./routes/profile"); // Add the new profile route
const dotenv = require("dotenv");

mongoose.connect("mongodb://0.0.0.0/SmartPark", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("Error connecting to DB:", err));

const app = express();
dotenv.config();
const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api", adminRoute);
app.use("/api/reservation", reservationRoute);
app.use("/api/spot", spotRoute);
app.use("/api/profile", profileRoute); // Use the new profile route

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});

