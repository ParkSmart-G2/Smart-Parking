import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import './Reservation.css';
import ReservationImage from '../components/images/Reservation.png';
import { Link } from 'react-router-dom';
import { BsQrCodeScan } from "react-icons/bs";

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
  const [qrCode, setQRCode] = useState('');
  const [showQRCode, setShowQRCode] = useState(false); 
  const [reservationId, setReservationId] = useState(null); // Add this line

  useEffect(() => {
    calculatePrice();
  }, [numberOfHours, numberOfDays]);
  



  const calculatePrice = () => {
        if (bookingType === "hours") {
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
        } else if (bookingType === "days") {
          const days = parseInt(numberOfDays, 10);
          if (days < 3) {
            setPrice(days * 24 * 0.6);
          } else if (days >= 3 && days < 5) {
            setPrice(days * 24 * 0.5);
          } else setPrice(days * 24 * 0.4);
        }
      };

  const handleReservation = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:4444/api/reservation/create', {
        email: userData.email,
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

     
      // const newReservationId = response.data.reservationId;
      // const reservationId = response.data.reservationId;
      // const generatedQRCode = generateQRCode(reservationId);

      // setQRCode(generatedQRCode);
      // setShowQRCode(true);
      // setReservationId(newReservationId);

      const newReservationId = response.data.reservation._id;
      const generatedQRCode = generateQRCode(newReservationId);

      setReservationId(newReservationId);
      setQRCode(generatedQRCode);
      setShowQRCode(true);
      console.log(newReservationId, 'reservationId');
      
    } catch (error) {
      console.error(error.response.data); // Handle errors
    }
  };

  const generateQRCode = (data) => {
    // You can customize the QR code data as needed
    return data;
  };

  const handleCarTypeChange = (type) => {
    setCarType(type);
    setPlateNumber('');
    setSerialNumber('');
    setSecondNumber('');
  };


    return (
      <>
      {reservationId ? (
      <div>
      <h2 style ={{ alignItems: "center",color:"#2998FF" }}  className="title" ><BsQrCodeScan style={{ flex:"center" ,marginRight: "8px" }}  />  Reservation Details
</h2>

      <div className="currentReservationFormContainer">
      <div style={{ display: 'flex', flexDirection: 'column'}}>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom:"15px"  }}>
    <span style={{ color: '#2998FF' }}>Reservation Name:</span>
    <span style={{ marginLeft: '100px' }}>{reservationName}</span>
  </div>

  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom:"15px"  }}>
    <span style={{ color: '#2998FF' }}>Car Type:</span>
    <span style={{ marginLeft: '10px' }}>{carType}</span>
  </div>

  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom:"15px"  }}>
    <span style={{ color: '#2998FF' }}>Plate Number:</span>
    <span>{plateNumber}</span>
  </div>


  {bookingType === 'hours' && (
    <div style={{ display: 'flex', justifyContent: 'space-between' , marginBottom:"15px" }}>
      <span style={{ color: '#2998FF' }}>Duration:</span>
      <span>{numberOfHours} hours</span>
    </div>
  )}

  {bookingType === 'days' && (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom:"15px"  }}>
      <span style={{ color: '#2998FF' }}>Duration:</span>
      <span>{numberOfDays} days</span>
    </div>
  )}

  <div style={{ display: 'flex', justifyContent: 'space-between' , marginBottom:"15px" }}>
    <span style={{ color: '#2998FF' }}>Price:</span>
    <span>{price.toFixed(1)} TND</span>
  </div>
</div>
<div style={{ display: 'flex',marginTop:"20px"}}>
<p><span style={{ color: '#2998FF' }}>Reservation Time: </span>{new Date(reservationTime).toLocaleString()}</p>
</div>
       <h2 style={{  marginTop:"20px", marginBottom:"10px" ,marginTop:"50px"}} >QR Code</h2>
       <div style={{ color: '#2998FF',  marginBottom:"10px" ,marginTop:"5px"}} >
       <QRCode value={qrCode}  size={200} /> 
       </div>
       <div style={{ color: '#2998FF',  marginBottom:"10px" , textDecoration:'underline',marginTop:"50px"}}>
       <Link to={"http://localhost:3000/Profile"}style={{ color: '#2998FF',  marginBottom:"10px" }}  >
        See All Your Reservations
        </Link>
        </div>
        </div>
    </div>
      ) :( 
      <div  style= {{ marginBottom:"100px"}} className="allReservation">
        <div>
          <p className="title">Reserve Your Parking Spot Now</p>
        </div>
        <div  style= {{ marginTop:"100px"}} className="adjuste1">
          <div  className="reservationFormContainer">
          <label>Reservation Name:</label>
            <input
              type="text"
              value={reservationName}
              onChange={(e) => setReservationName(e.target.value)}
            />

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

            {(carType === "rs" || (carType >= "01" && carType <= "24")) && (
              <input
                type="number"
                placeholder={`Enter ${carType} Place Number`}
                onChange={(e) => setPlateNumber(e.target.value)}
              />
            )}

            {carType === "tunis" && (
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

            {bookingType === "hours" && (
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

            {bookingType === "days" && (
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
            <p>Total Price: {price.toFixed(1)} TDN</p>
     
        
          </div>
          <div className="reservimage">
            <img src={ReservationImage} alt="reservimage" className="reservimage" />
           
          </div>
        </div>
      </div>
      
       )}
    </>
    );
    
  }



export default ReservationForm;


