const mongoose = require('mongoose');
const Reservation = require('./Reservation'); // Update the path accordingly

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
  phoneNumber: { 
    type: String, 
    required: true
   },
  isAdmin: { 
    type: Boolean,
     default: false 
    },
  codeAdmin: { type: String },
  reservations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }],
  reservationHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }],
});

module.exports = mongoose.model('User', userSchema);