// routes/reservation.js
const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');

// POST create a reservation
router.post('/create', async (req, res) => {
  try {
    const { name, email, reservationType, duration } = req.body;

    // Assume each time slot is 1 hour; adjust as needed
    const currentTime = new Date();
    const endTimeLimit = new Date(currentTime);
    endTimeLimit.setDate(currentTime.getDate() + 7); // Allow reservations for the next 7 days

    const existingReservations = await Reservation.find({
      reservationType,
      startTime: { $gte: currentTime, $lt: endTimeLimit },
    });

    const parkingPlace = findAvailableParkingPlace(existingReservations);

    if (parkingPlace === null) {
      return res.status(400).json({ message: 'No available parking places for the specified duration.' });
    }

    const reservationStartTime = new Date();
    const reservationDuration = parseInt(duration); // Ensure duration is a valid integer
    const initialEndTime = new Date(reservationStartTime);
    const reservationEndTime = new Date(initialEndTime);
    reservationEndTime.setHours(reservationStartTime.getHours() + (reservationType === 'days' ? reservationDuration * 24 : reservationDuration));

    const newReservation = new Reservation({
      parkingPlace,
      user: { name, email },
      reservationType,
      duration: reservationDuration,
      startTime: reservationStartTime,
      endTime: reservationEndTime,
    });

    await newReservation.save();

    res.status(200).json({ message: 'Reservation created successfully.', reservation: newReservation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Helper function to find an available parking place
function findAvailableParkingPlace(existingReservations) {
  const totalParkingPlaces = 2; // Adjust based on the total number of parking places available

  for (let parkingPlace = 1; parkingPlace <= totalParkingPlaces; parkingPlace++) {
    const isAvailable = existingReservations.every(reservation =>
      parkingPlace !== reservation.parkingPlace ||
      existingReservations.some(
        r =>
          parkingPlace === r.parkingPlace &&
          (r.startTime >= newReservation.endTime || r.endTime <= newReservation.startTime)
      )
    );

    if (isAvailable) {
      return parkingPlace;
    }
  }

  return null; // No available parking places found
}

module.exports = router;
