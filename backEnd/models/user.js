const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    spotNumber: {
      type: Number,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
  });

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },
      firstName: {
        type: String,
        required: true,
        trim: true,
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
      },
      plateNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      reservations: [reservationSchema],
      reservationHistory: [reservationSchema],
})

module.exports = mongoose.model('User', userSchema)