// routes/reservation.js
const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');
const {createReservation} = require('../controllers/reservationController')


// router.post('/create', async (req, res) => {

//   console.log('Request Body:', req.body); // Log the entire request body
 
//   try {
//     const { name, email, reservationType, duration, price } = req.body;


//     // Assume each time slot is 1 hour; adjust as needed
//     const currentTime = new Date();
//     const endTimeLimit = new Date(currentTime);
//     endTimeLimit.setDate(currentTime.getDate() + 7); // Allow reservations for the next 7 days

//     const existingReservations = await Reservation.find({
//       reservationType,
//       startTime: { $gte: currentTime, $lt: endTimeLimit },
//     });

//     // Log existing reservations
//     console.log('Existing Reservations:', existingReservations);

//     const parkingPlace = findAvailableParkingPlace(existingReservations);

//     if (parkingPlace === null) {
//       console.log('No available parking places for the specified duration.');
//       return res.status(400).json({ message: 'No available parking places for the specified duration.' });
//     }

//     // Log parking place
//     console.log('Selected Parking Place:', parkingPlace);

//     const reservationStartTime = new Date();
//     const reservationDuration = parseInt(duration); // Ensure duration is a valid integer
//     const initialEndTime = new Date(reservationStartTime);
//     const reservationEndTime = new Date(initialEndTime);
//     reservationEndTime.setHours(reservationStartTime.getHours() + (reservationType === 'days' ? reservationDuration * 24 : reservationDuration));

//     const newReservation = new Reservation({
//       parkingPlace,
//       user: { name, email },
//       reservationType,
//       duration: reservationDuration,
//       startTime: reservationStartTime,
//       endTime: reservationEndTime,
//       reservationDetails: {
//         price: price,
//         createdAt: new Date(),
//       },
//     });

//     await newReservation.save();

//     console.log('Reservation created successfully:', newReservation);

//     res.status(200).json({ message: 'Reservation created successfully.', reservation: newReservation });
//   } catch (error) {
//     console.error('Error creating reservation:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });














// Helper function to find an available parking place
// function findAvailableParkingPlace(existingReservations) {
//   const totalParkingPlaces = 50; // Adjust based on the total number of parking places available

//   for (let parkingPlace = 1; parkingPlace <= totalParkingPlaces; parkingPlace++) {
//     const isAvailable = existingReservations.every(reservation =>
//       parkingPlace !== reservation.parkingPlace ||
//       existingReservations.some(
//         r =>
//           parkingPlace === r.parkingPlace &&
//           (r.startTime >= newReservation.endTime || r.endTime <= newReservation.startTime)
//       )
//     );

//     if (isAvailable) {
//       return parkingPlace;
//     }
//   }

//   return null; // No available parking places found

// }


router.post('/create', async (req, res) => {
  console.log('Request Body:', req.body); // Log the entire request body

  try {
    const { reservationName, carType, plateNumber, serialNumber, secondNumber, bookingType, reservationTime, numberOfHours, startingDate, numberOfDays, price,email } = req.body;

    const currentTime = new Date();
    const endTimeLimit = new Date(currentTime);
    endTimeLimit.setDate(currentTime.getDate() + 7);

    const existingReservations = await Reservation.find({
      reservationTime: { $gte: currentTime, $lt: endTimeLimit },
    });

    console.log('Existing Reservations:', existingReservations);

    const parkingPlace = findAvailableParkingPlace(existingReservations);

    if (parkingPlace === null) {
      console.log('No available parking places for the specified duration.');
      return res.status(400).json({ message: 'No available parking places for the specified duration.' });
    }

    console.log('Selected Parking Place:', parkingPlace);

    const reservationStartTime = bookingType === 'hours' ? new Date(reservationTime) : new Date(startingDate);
    const reservationDuration = bookingType === 'hours' ? parseInt(numberOfHours) : parseInt(numberOfDays) * 24;
    const reservationEndTime = new Date(reservationStartTime);
    reservationEndTime.setHours(reservationStartTime.getHours() + reservationDuration);

    const newReservation = new Reservation({
      email,
      reservationName,
      carType,
      plateNumber,
      serialNumber,
      secondNumber,
      bookingType,
      reservationTime: reservationStartTime,
      numberOfHours,
      startingDate,
      numberOfDays,
      price,
      parkingPlace,
    });

    await newReservation.save();

    console.log('Reservation created successfully:', newReservation);

    res.status(200).json({ message: 'Reservation created successfully.', reservation: newReservation });
  } catch (error) {
    console.error('Error creating reservation:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Helper function to find an available parking place
function findAvailableParkingPlace(existingReservations) {
  const totalParkingPlaces = 50; // Adjust based on the total number of parking places available

  for (let parkingPlace = 1; parkingPlace <= totalParkingPlaces; parkingPlace++) {
    const isAvailable = existingReservations.every(reservation =>
      parkingPlace !== reservation.parkingPlace ||
      existingReservations.some(
        r =>
          parkingPlace === r.parkingPlace &&
          (r.reservationTime >= newReservation.endTime || r.endTime <= newReservation.reservationTime)
      )
    );

    if (isAvailable) {
      return parkingPlace;
    }
  }

  return null; // No available parking places found
}







module.exports = router;
