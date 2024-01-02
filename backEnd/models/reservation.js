
// const mongoose = require('mongoose');

// let Reservation;

// try {
//   Reservation = mongoose.model('Reservation');
// } catch (error) {
//   const reservationSchema = new mongoose.Schema({
//     parkingPlace: { type: Number, required: true },
//     user: {
//       name: { type: String, required: true },
//       email: { type: String, required: true },
//     },
//     reservationType: { type: String, enum: ['hours', 'days'], required: true },
//     duration: { type: Number, required: true },
//     startTime: { type: Date, required: true },
//     endTime: { type: Date, required: true },
//     status: { type: String, enum: ['current', 'userIn','userExit'], default: 'pending' },
   
//   });

//   Reservation = mongoose.model('Reservation', reservationSchema);
// }

// module.exports = Reservation;


const mongoose = require('mongoose');

let Reservation;

try {
  Reservation = mongoose.model('Reservation');
} catch (error) {
  const reservationSchema = new mongoose.Schema({
    parkingPlace: { type: Number, required: true },
    user: {
      name: { type: String, required: true },
      email: { type: String, required: true },
    },
    reservationType: { type: String, enum: ['hours', 'days'], required: true },
    duration: { type: Number, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    state: { type: String, enum: ['current', 'userIn','userExit'], default: 'current' },
    reservationDetails: {
      price: {
        type: Number,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    }
  });

  Reservation = mongoose.model('Reservation', reservationSchema);
}

module.exports = Reservation;
