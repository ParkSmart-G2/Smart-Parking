const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
 userEmail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
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

module.exports = mongoose.model('Reservation', reservationSchema);