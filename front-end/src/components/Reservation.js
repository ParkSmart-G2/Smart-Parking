
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ReservationForm = ({ userData }) => {
//   const [reservationName, setReservationName] = useState('');
//   const [carType, setCarType] = useState('');
//   const [plateNumber, setPlateNumber] = useState('');
//   const [serialNumber, setSerialNumber] = useState('');
//   const [secondNumber, setSecondNumber] = useState('');
//   const [bookingType, setBookingType] = useState('');
//   const [reservationTime, setReservationTime] = useState('');
//   const [numberOfHours, setNumberOfHours] = useState('');
//   const [startingDate, setStartingDate] = useState('');
//   const [numberOfDays, setNumberOfDays] = useState('');
//   const [price, setPrice] = useState(0);

//   useEffect(() => {
//     calculatePrice();
//   }, [numberOfHours, numberOfDays]);

  // const calculatePrice = () => {
  //   if (bookingType === 'hours') {
  //     const hours = parseInt(numberOfHours, 10);
  //     if (hours < 5) {
  //       setPrice(hours * 1);
  //     } else if (hours >= 5 && hours <= 8) {
  //       setPrice(hours * 1 * 0.9);
  //     } else if (hours > 8 && hours <= 12) {
  //       setPrice(hours * 1 * 0.8);
  //     } else if (hours > 12 && hours <= 24) {
  //       setPrice(hours * 1 * 0.7);
  //     } else {
  //       setPrice(hours * 1 * 0.5);
  //     }
  //   } else if (bookingType === 'days') {
  //     const days = parseInt(numberOfDays, 10);
  //     setPrice(days * 1);
  //   }
  // };
//   const handleReservation = async () => {
//     try {
//       const response = await axios.post('http://localhost:4444/api/reservation/create', {
//         reservationName,
//         carType,
//         plateNumber,
//         serialNumber,
//         secondNumber,
//         bookingType,
//         reservationTime,
//         numberOfHours,
//         startingDate,
//         numberOfDays,
//         price,
//       });

//       console.log(response.data); // Handle success

//     } catch (error) {
//       console.error(error.response.data); // Handle errors
//     }
//   };

//   const handleCarTypeChange = (type) => {
//     setCarType(type);
//     setPlateNumber('');
//     setSerialNumber('');
//     setSecondNumber('');
//   };
//   if (userData.status === 'notReserving') {
//   return (
    
//     <div>
     
//       <label>Reservation Name:</label>
//       <input type="text" value={reservationName} onChange={(e) => setReservationName(e.target.value)} />

      // <label>Choose Car Plate Type:</label>
      // <select onChange={(e) => handleCarTypeChange(e.target.value)}>
      //   <option value="">Select Car Type</option>
      //   <option value="rs">RS</option>
      //   <option value="tunis">Tunis</option>
      //   <option value="01">01</option>
      //   <option value="02">02</option>
      //   <option value="03">03</option>
      //   <option value="04">04</option>
      //   <option value="05">05</option>
      //   <option value="06">06</option>
      //   <option value="07">07</option>
      //   <option value="08">08</option>
      //   <option value="09">09</option>
      //   <option value="10">10</option>
      //   <option value="11">11</option>
      //   <option value="12">12</option>
      //   <option value="13">13</option>
      //   <option value="14">14</option>
      //   <option value="15">15</option>
      //   <option value="16">16</option>
      //   <option value="17">17</option>
      //   <option value="18">18</option>
      //   <option value="19">19</option>
      //   <option value="20">20</option>
      //   <option value="21">21</option>
      //   <option value="22">22</option>
      //   <option value="23">23</option>
      //   <option value="24">24</option>
      // </select>

//       {(carType === 'rs' || (carType >= '01' && carType <= '24')) && (
//         <input
//           type="number"
//           placeholder={`Enter ${carType} Place Number`}
//           onChange={(e) => setPlateNumber(e.target.value)}
//         />
//       )}

//       {carType === 'tunis' && (
//         <div>
//           <input
//             type="number"
//             placeholder="Enter Serial Number"
//             onChange={(e) => setSerialNumber(e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Enter Second Number"
//             onChange={(e) => setSecondNumber(e.target.value)}
//           />
//         </div>
//       )}

      // <label>Choose Booking Type:</label>
      // <select onChange={(e) => setBookingType(e.target.value)}>
      //   <option value="">Select Booking Type</option>
      //   <option value="hours">By Hours</option>
      //   <option value="days">By Days</option>
      // </select>

      // {bookingType === 'hours' && (
      //   <div>
      //     <label>Select Reservation Date and Time:</label>
      //     <input
      //       type="datetime-local"
      //       placeholder="Select Reservation Time"
      //       onChange={(e) => setReservationTime(e.target.value)}
      //     />
      //     <label>Number of Hours (1 to 23):</label>
      //     <input
      //       type="number"
      //       placeholder="Enter Number of Hours"
      //       onChange={(e) => setNumberOfHours(e.target.value)}
      //     />
      //   </div>
      // )}

      // {bookingType === 'days' && (
      //   <div>
      //     <label>Select Starting Reservation Date:</label>
      //     <input
      //       type="date"
      //       placeholder="Select Starting Date"
      //       onChange={(e) => setStartingDate(e.target.value)}
      //     />
      //     <label>Number of Days:</label>
      //     <input
      //       type="number"
      //       placeholder="Enter Number of Days"
      //       onChange={(e) => setNumberOfDays(e.target.value)}
      //     />
      //   </div>
      // )}

//       <button onClick={handleReservation}>Reserve</button>

//       <p>Total Price: ${price}</p>
//     </div>
    
//   );
// }; if (userData.status === 'reserved'){
//   return (
//     <div>
//       <p>You have reserved at: {userData.startingDate} until {userData.startingDate}  </p>
//       <button onClick={() => console.log('Update reservation')}>Update</button>
//       <button onClick={() => console.log('Cancel reservation')}>Cancel</button>
//       <p>NB: If you cancel, you will pay 50% of the price.</p>
      
//     </div>
//   );
// }
// if (userData.status === 'inspot'){
//   return (
//     <div>
//       <p>You are currently inSpot. Do you want to stay more?</p>
//       <button onClick={() => console.log('Update reservation')}>Update</button>
//     </div>
//   );
// }

// } 

// export default ReservationForm;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Reservation.css'
// import Reservation from "../components/images/Reservation.png"

// const ReservationForm = ({ userData }) => {
//   const [reservationName, setReservationName] = useState(userData?.name || '');
//   const [carType, setCarType] = useState('');
//   const [plateNumber, setPlateNumber] = useState(userData?.plateNumber || '');
//   const [serialNumber, setSerialNumber] = useState('');
//   const [secondNumber, setSecondNumber] = useState('');
//   const [bookingType, setBookingType] = useState('');
//   const [reservationTime, setReservationTime] = useState('');
//   const [numberOfHours, setNumberOfHours] = useState('');
//   const [startingDate, setStartingDate] = useState('');
//   const [numberOfDays, setNumberOfDays] = useState('');
//   const [price, setPrice] = useState(0);

//   useEffect(() => {
//     calculatePrice();
//   }, [numberOfHours, numberOfDays]);

//   const calculatePrice = () => {
//     if (bookingType === 'hours') {
//       const hours = parseInt(numberOfHours, 10);
//       if (hours < 5) {
//         setPrice(hours * 1);
//       } else if (hours >= 5 && hours <= 8) {
//         setPrice(hours * 1 * 0.9);
//       } else if (hours > 8 && hours <= 12) {
//         setPrice(hours * 1 * 0.8);
//       } else if (hours > 12 && hours <= 24) {
//         setPrice(hours * 1 * 0.7);
//       } else {
//         setPrice(hours * 1 * 0.6);
//       }
//     } else if (bookingType === 'days') {
//       const days = parseInt(numberOfDays, 10);
//       if(days<3){
//         setPrice(days*24 * 0.6);
//       }
//       else if(days>=3&&days<5){
//         setPrice(days*24 * 0.5); 
//       }else
//       setPrice(days *24* 0.4);
//     }
//   };

//   const handleReservation = async () => {
//     try {
//       const response = await axios.post('http://localhost:4444/api/reservation/create', {
//         reservationName,
//         carType,
//         plateNumber,
//         serialNumber,
//         secondNumber,
//         bookingType,
//         reservationTime,
//         numberOfHours,
//         startingDate,
//         numberOfDays,
//         price,
//       });

//       console.log(response.data); // Handle success

//     } catch (error) {
//       console.error(error.response.data); // Handle errors
//     }
//   };

//   const handleCarTypeChange = (type) => {
//     setCarType(type);
//     setPlateNumber('');
//     setSerialNumber('');
//     setSecondNumber('');
//   };

//   return (
//     <div className="adjuste">
//     <div className="reservationFormContainer">
//       <label>Reservation Name:</label>
//       <input type="text" value={reservationName} onChange={(e) => setReservationName(e.target.value)} />

//       <label>Choose Car Plate Type:</label>
//       <select onChange={(e) => handleCarTypeChange(e.target.value)}>
//         <option value="">Select Car Type</option>
//         <option value="rs">RS</option>
//         <option value="tunis">Tunis</option>
//         <option value="01">01</option>
//         <option value="02">02</option>
//         <option value="03">03</option>
//         <option value="04">04</option>
//         <option value="05">05</option>
//         <option value="06">06</option>
//         <option value="07">07</option>
//         <option value="08">08</option>
//         <option value="09">09</option>
//         <option value="10">10</option>
//         <option value="11">11</option>
//         <option value="12">12</option>
//         <option value="13">13</option>
//         <option value="14">14</option>
//         <option value="15">15</option>
//         <option value="16">16</option>
//         <option value="17">17</option>
//         <option value="18">18</option>
//         <option value="19">19</option>
//         <option value="20">20</option>
//         <option value="21">21</option>
//         <option value="22">22</option>
//         <option value="23">23</option>
//         <option value="24">24</option>
//       </select>

//       {(carType === 'rs' || (carType >= '01' && carType <= '24')) && (
//         <input
//           type="number"
//           placeholder={`Enter ${carType} Place Number`}
//           onChange={(e) => setPlateNumber(e.target.value)}
//         />
//       )}

//       {carType === 'tunis' && (
//         <div>
//           <input
//             type="number"
//             placeholder="Enter Serial Number"
//             onChange={(e) => setSerialNumber(e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Enter Second Number"
//             onChange={(e) => setSecondNumber(e.target.value)}
//           />
//         </div>

        
//       )}

      
// <label>Choose Booking Type:</label>
//       <select onChange={(e) => setBookingType(e.target.value)}>
//         <option value="">Select Booking Type</option>
//         <option value="hours">By Hours</option>
//         <option value="days">By Days</option>
//       </select>

//       {bookingType === 'hours' && (
//         <div>
//           <label>Select Reservation Date and Time:</label>
//           <input
//             type="datetime-local"
//             placeholder="Select Reservation Time"
//             onChange={(e) => setReservationTime(e.target.value)}
//           />
//           <label>Number of Hours (1 to 23):</label>
//           <input
//             type="number"
//             placeholder="Enter Number of Hours"
//             onChange={(e) => setNumberOfHours(e.target.value)}
//           />
//         </div>
//       )}

//       {bookingType === 'days' && (
//         <div>
//           <label>Select Starting Reservation Date:</label>
//           <input
//             type="date"
//             placeholder="Select Starting Date"
//             onChange={(e) => setStartingDate(e.target.value)}
//           />
//           <label>Number of Days:</label>
//           <input
//             type="number"
//             placeholder="Enter Number of Days"
//             onChange={(e) => setNumberOfDays(e.target.value)}
//           />
          
//         </div>
        
//       )}

//       <button onClick={handleReservation}>Reserve</button>
      

//       <p>Total Price: ${price}</p>
//       </div>

      
//       <div className="reservimage">
//               <img src={Reservation} alt="reservimage" className="reservimage"/>
//                </div>
      
//                </div>
    
    
//   );
// };

// export default ReservationForm;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Reservation.css'
import Reservation from "../components/images/Reservation.png"

const ReservationForm = ({ userData }) => {
  const [reservationName, setReservationName] = useState(userData?.name || '');
  const [carType, setCarType] = useState('');
  const [plateNumber, setPlateNumber] = useState(userData?.plateNumber || '');
  const [serialNumber, setSerialNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [bookingType, setBookingType] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [numberOfHours, setNumberOfHours] = useState('');
  const [startingDate, setStartingDate] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    calculatePrice();
  }, [numberOfHours, numberOfDays]);

  const calculatePrice = () => {
    if (bookingType === 'hours') {
      const hours = parseInt(numberOfHours, 10);
      if (hours < 5) {
        setPrice(hours * 1);
      } else if (hours >= 5 && hours <= 8) {
        setPrice(hours * 1 * 0.9);
      } else if (hours > 8 && hours <= 12) {
        setPrice(hours * 1 * 0.8);
      } else if (hours > 12 && hours <= 24) {
        setPrice(hours * 1 * 0.7);
      } else {
        setPrice(hours * 1 * 0.6);
      }
    } else if (bookingType === 'days') {
      const days = parseInt(numberOfDays, 10);
      if(days<3){
        setPrice(days*24 * 0.6);
      }
      else if(days>=3&&days<5){
        setPrice(days*24 * 0.5); 
      }else
      setPrice(days *24* 0.4);
    }
  };

  const handleReservation = async () => {
    try {
      const response = await axios.post('http://localhost:4444/api/reservation/create', {
        reservationName,
        carType,
        plateNumber,
        serialNumber,
        secondNumber,
        bookingType,
        reservationTime,
        numberOfHours,
        startingDate,
        numberOfDays,
        price,
      });

      console.log(response.data); // Handle success

    } catch (error) {
      console.error(error.response.data); // Handle errors
    }
  };

  const handleCarTypeChange = (type) => {
    setCarType(type);
    setPlateNumber('');
    setSerialNumber('');
    setSecondNumber('');
  };
  if (userData.status === 'notReserving') {
  return (
   
    <div className='allReservation' >
    <div >
    <p className='title'>Reserve Your Parking Spot Now</p>
    </div>
    <div className="adjuste1">
    
    <div className="reservationFormContainer">
      <label>Reservation Name:</label>
      <input type="text" value={reservationName} onChange={(e) => setReservationName(e.target.value)} />

      <label>Choose Car Plate Type:</label>
      <select onChange={(e) => handleCarTypeChange(e.target.value)}>
        <option value="">Select Car Type</option>
        <option value="rs">RS</option>
        <option value="tunis">Tunis</option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
      </select>

      {(carType === 'rs' || (carType >= '01' && carType <= '24')) && (
        <input
          type="number"
          placeholder={`Enter ${carType} Place Number`}
          onChange={(e) => setPlateNumber(e.target.value)}
        />
      )}

      {carType === 'tunis' && (
        <div>
          <input
            type="number"
            placeholder="Enter Serial Number"
            onChange={(e) => setSerialNumber(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Second Number"
            onChange={(e) => setSecondNumber(e.target.value)}
          />
        </div>

        
      )}

      
<label>Choose Booking Type:</label>
      <select onChange={(e) => setBookingType(e.target.value)}>
        <option value="">Select Booking Type</option>
        <option value="hours">By Hours</option>
        <option value="days">By Days</option>
      </select>

      {bookingType === 'hours' && (
        <div>
          <label>Select Reservation Date and Time:</label>
          <input
            type="datetime-local"
            placeholder="Select Reservation Time"
            onChange={(e) => setReservationTime(e.target.value)}
          />
          <label>Number of Hours (1 to 23):</label>
          <input
            type="number"
            placeholder="Enter Number of Hours"
            onChange={(e) => setNumberOfHours(e.target.value)}
          />
        </div>
      )}

      {bookingType === 'days' && (
        <div>
          <label>Select Starting Reservation Date:</label>
          <input
            type="date"
            placeholder="Select Starting Date"
            onChange={(e) => setStartingDate(e.target.value)}
          />
          <label>Number of Days:</label>
          <input
            type="number"
            placeholder="Enter Number of Days"
            onChange={(e) => setNumberOfDays(e.target.value)}
          />
          
        </div>
        
      )}

      <button onClick={handleReservation}>Reserve</button>
      

      <p>Total Price: ${price}</p>
      </div>

      
      <div className="reservimage">
              <img src={Reservation} alt="reservimage" className="reservimage"/>
               </div>
      
               </div>
    
               </div>

  );
};

if (userData.status === 'reserved'){
    return (
      <div>
        <p>You have reserved at: {userData.startingDate} until {userData.startingDate}  </p>
        <button onClick={() => console.log('Update reservation')}>Update</button>
        <button onClick={() => console.log('Cancel reservation')}>Cancel</button>
        <button onClick={() => console.log('Update reservation')}>I Arrived</button>
        <p>NB: If you cancel, you will pay 50% of the price.</p>
        
      </div>
    );
  }
  if (userData.status === 'inspot'){
    return (
      <div>
        <p>You are currently inSpot. Do you want to stay more?</p>
        <button onClick={() => console.log('Update reservation')}>Update</button>
      </div>
    );
  }

}

export default ReservationForm;