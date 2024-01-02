const mongoose = require('mongoose')


const adminSchema = new mongoose.Schema({
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
      totalSpots: {
        type: Number,
        required: true,
        default: 10,
    },
    })

    module.exports = mongoose.model('Admin', adminSchema)