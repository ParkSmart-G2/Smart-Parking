const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
  

// 00 to 24h 
// reserved 



module.exports = mongoose.model('Spot', userSchema);
