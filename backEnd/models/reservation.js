// // const mongoose = require('mongoose');

// // const reservationSchema = new mongoose.Schema({
// //  userEmail: {
// //         type: mongoose.Schema.Types.ObjectId,
// //         ref: 'User',
// //         required: true,
// //       },
// //   spotNumber: {
// //     type: Number,
// //     required: true,
// //   },
// //   startTime: {
// //     type: Date,
// //     required: true,
// //   },
// //   endTime: {
// //     type: Date,
// //     required: true,
// //   },
// // });

// // module.exports = mongoose.model('Reservation', reservationSchema);


// const mongoose = require('mongoose');

// const reservationSchema = new mongoose.Schema({
//   parkingPlace: { type: Number,
//      required: true 
//     },
//   user: {
//     name: { type: String,
//      required: true },
//     email: { type: String,
//       required: true },
//   },
//   reservationType: { type: String, enum: ['hours', 'days'], required: true },
//   duration: { type: Number, required: true }, // in hours for 'hours' reservation, in days for 'days' reservation
//   startTime: { type: Date, required: true },
//   endTime: { type: Date, required: true },
// });

// const Reservation = mongoose.model('Reservation', reservationSchema);
// module.exports = Reservation;

const mongoose = require('mongoose');

// Check if the model is already defined to avoid OverwriteModelError
let Reservation;

try {
  // Try to get the existing model
  Reservation = mongoose.model('Reservation');
} catch (error) {
  // If the model does not exist, define it
  const reservationSchema = new mongoose.Schema({
    parkingPlace: { type: Number, required: true },
    user: {
      name: { type: String, required: true },
      email: { type: String, required: true },
    },
    reservationType: { type: String, enum: ['hours', 'days'], required: true },
    duration: { type: Number, required: true }, // in hours for 'hours' reservation, in days for 'days' reservation
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
  });

  Reservation = mongoose.model('Reservation', reservationSchema);
}

module.exports = Reservation;