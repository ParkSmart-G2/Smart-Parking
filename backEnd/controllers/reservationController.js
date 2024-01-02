
const Reservation = require('../models/reservation');

// const createReservation = async (req, res) => {
//   try {
//     const {
//       reservationName,
//       carType,
//       plateNumber,
//       serialNumber,
//       secondNumber,
//       bookingType,
//       reservationTime,
//       numberOfHours,
//       startingDate,
//       numberOfDays,
//     } = req.body;

//     // Check availability
//     const isAvailable = await checkAvailability(plateNumber, serialNumber, secondNumber, reservationTime, bookingType, numberOfHours, startingDate, numberOfDays);
//     if (!isAvailable) {
//       return res.status(400).json({ message: 'Selected place is not available for the specified time.' });
//     }

//     // Save reservation to MongoDB
//     const reservation = new Reservation({
//       reservationName,
//       carType,
//       plateNumber,
//       serialNumber,
//       secondNumber,
//       bookingType,
//       reservationTime,
//       numberOfHours,
//       startingDate,
//       numberOfDays,
//     });

//     await reservation.save();

//     res.status(201).json({ message: 'Reservation successful' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// Check place availability
const checkAvailability = async (plateNumber, serialNumber, secondNumber, reservationTime, bookingType, numberOfHours, startingDate, numberOfDays) => {
  try {
   
    const allReservations = await Reservation.find({
      plateNumber,
      serialNumber,
      secondNumber,
    });

    
    const totalHours = bookingType === 'days' ? numberOfDays * 24 : numberOfHours;

    
    for (let i = 0; i < totalHours; i++) {
      const currentReservationTime = new Date(reservationTime);
      const targetTime = new Date(
        currentReservationTime.getFullYear(),
        currentReservationTime.getMonth(),
        currentReservationTime.getDate(),
        currentReservationTime.getHours() + i
      );

      
      const isHourBooked = allReservations.some((reservation) => {
        const reservationStartTime = new Date(reservation.reservationTime);
        const reservationEndTime = new Date(reservationStartTime);
        reservationEndTime.setHours(reservationStartTime.getHours() + reservation.numberOfHours);

        return (
          targetTime >= reservationStartTime &&
          targetTime < reservationEndTime
        );
      });

      if (isHourBooked) {
        return false; // Not available for the specified time
      }
    }

    return true; // Available for the specified time
  } catch (error) {
    console.error(error);
    return false; // Assume not available in case of an error
  }
};




const getAllReservationsCurrent = async (req, res) => {
  try {
    const userEmail = req.params.userEmail; 
    console.log(userEmail)
    const currentReservations = await Reservation.find({ 'user.email': userEmail, state: 'current' });
    
    res.status(200).json({ reservations: currentReservations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
const getUserInParkingSpot = async (req, res) => {
  try {
    const userEmail = req.params.userEmail; 
    console.log(userEmail)
    const userInParkingSpot = await Reservation.find({ 'user.email': userEmail, state: 'userIn' });
    
    res.status(200).json({ reservations: userInParkingSpot });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};






const getAllReservationHistory = async (req, res) => {
  try {
    const userEmail = req.params.userEmail; 
    const oldReservations = await Reservation.find({ 'user.email': userEmail, state: 'userExit' });
    res.status(200).json({ reservations: oldReservations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};





module.exports = {
  // createReservation,
  getAllReservationHistory,
  getAllReservationsCurrent,
  getUserInParkingSpot,
};
