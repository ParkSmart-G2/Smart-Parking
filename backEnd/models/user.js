const mongoose = require('mongoose');
const Reservation = require('./reservation'); 

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
   
  image: {
    type: String,
    required: false,
    trim: true,
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
  cin: {
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
    status: { type: String, enum: ['notReserving', 'inspot','reserved'], default: 'notReserving' },
  codeAdmin: { type: String },
  reservationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reservation',
    default: null,
  },
  totalSpots: {
    type: Number,
    required: function () {
        return this.isAdmin; // Required only if the user is an admin
    },
    default: function () {
        return this.isAdmin ? 10 : undefined; // Default to undefined for non-admins
    },
},
});

module.exports = mongoose.model('User', userSchema);