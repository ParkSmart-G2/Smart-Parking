


// // const mongoose = require('mongoose');

// // let Reservation;

// // try {
// //   Reservation = mongoose.model('Reservation');
// // } catch (error) {
// //   const reservationSchema = new mongoose.Schema({
// //     parkingPlace: { type: Number, required: true },
// //     user: {
// //       name: { type: String, required: true },
// //       email: { type: String, required: true },
// //     },
// //     reservationType: { type: String, enum: ['hours', 'days'], required: true },
// //     duration: { type: Number, required: true },
// //     startTime: { type: Date, required: true },
// //     endTime: { type: Date, required: true },
// //     state: { type: String, enum: ['current', 'userIn','userExit'], default: 'current' },
// //     reservationDetails: {
// //       price: {
// //         type: Number,
// //         required: true,
// //       },
// //       createdAt: {
// //         type: Date,
// //         default: Date.now,
// //       },
// //     }
// //   });

// //   Reservation = mongoose.model('Reservation', reservationSchema);
// // }

// // module.exports = Reservation;






// const mongoose = require('mongoose');




//   const reservationSchema = new mongoose.Schema({
//     email: {
//       type: String,
//       required: true,
//     },
//     reservationName: {
//       type: String,
//       required: true,
//     },
//     carType: {
//       type: String,
//       required: true,
//     },
//     plateNumber: {
//       type: String,
//       required: true,
//     },
//     serialNumber: {
//       type: String,
//     },
//     secondNumber: {
//       type: String,
//     },
//     bookingType: {
//       type: String,
//       enum: ['hours', 'days'],
//       required: true,
//     },
//     reservationTime: {
//       type: Date,
//     },
//     numberOfHours: {
//       type: Number,
//     },
//     startingDate: {
//       type: Date,
//     },
//     numberOfDays: {
//       type: Number,
//     },
//     price: {
//       type: Number,
//       default: 0,
//     },
    
//   });

//   let Reservation = mongoose.model('Reservation', reservationSchema);


// module.exports = Reservation;






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
//     state: { type: String, enum: ['current', 'userIn','userExit'], default: 'current' },
//     reservationDetails: {
//       price: {
//         type: Number,
//         required: true,
//       },
//       createdAt: {
//         type: Date,
//         default: Date.now,
//       },
//     }
//   });

//   Reservation = mongoose.model('Reservation', reservationSchema);
// }

// module.exports = Reservation;






const mongoose = require('mongoose');
const qr = require('qrcode');

const reservationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  reservationName: {
    type: String,
    required: true,
  },
  carType: {
    type: String,
    required: true,
  },
  plateNumber: {
    type: String,
    required: true,
  },
  serialNumber: {
    type: String,
  },
  secondNumber: {
    type: String,
  },
  bookingType: {
    type: String,
    enum: ['hours', 'days'],
    required: true,
  },
  reservationTime: {
    type: Date,
  },
  numberOfHours: {
    type: Number,
  },
  startingDate: {
    type: Date,
  },
  numberOfDays: {
    type: Number,
  },
  price: {
    type: Number,
    default: 0,
  },
  qrCode: {
    type: String,
    required: true,
  },
});

reservationSchema.methods.generateQRCode = async function () {
  try {
    const qrCodeData = `${this.reservationTime}`; // Use reservation time or another unique identifier
    const generatedQRCode = await qr.toDataURL(qrCodeData);
    this.qrCode = generatedQRCode;
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw error;
  }
};

let Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;