const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: String,
  userLastName: String,
  userPseudo: String,
  gender: String,
  age: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => value > 12,
      message: 'Age must be greater than 12',
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: 'Invalid email format',
    },
  },
  password: String,
  imageUrl: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
