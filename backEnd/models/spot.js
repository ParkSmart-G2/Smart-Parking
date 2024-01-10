const mongoose = require('mongoose');
const Reservation = require('./reservation'); 

const spotSchema = new mongoose.Schema({
    spotNumber: {
        type: Number,
        required: true,
        unique: true,
      },
      isReserved: {
        type: Boolean,
        default: false,
      },


}
  );
  




module.exports = mongoose.model('Spot', spotSchema);
