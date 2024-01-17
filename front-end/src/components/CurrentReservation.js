import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BsQrCodeScan } from "react-icons/bs";

const CurrentReservation = ({userData}) => {
  const { reservationId } = useParams();
  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservationDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4444/api/reservation/${reservationId}`);
        setReservation(response.data.reservation);
        setLoading(false);
      } catch (error) {
        console.error(error.response.data);
        setLoading(false);
      }
    };

    fetchReservationDetails();
  }, [reservationId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!reservation) {
    return <div>No reservation found.</div>;
  }

  return (
    // <div>
    //   <h2>Reservation Details</h2>
    //   <p>Reservation Name: {reservation.reservationName}</p>
    //   <p>Car Type: {reservation.carType}</p>
    //   <p>Plate Number: {reservation.plateNumber}</p>
    //   <p>Reservation Time: {new Date(reservation.reservationTime).toLocaleString()}</p>
    //   {reservation.bookingType === 'hours' && <p>Duration: {reservation.numberOfHours} hours</p>}
    //   {reservation.bookingType === 'days' && <p>Duration: {reservation.numberOfDays} days</p>}
    //   <p>Price: {reservation.price.toFixed(1)} TND</p>
    
    //    <h2>QR Code</h2>
    //    <img src={reservation.qrCode} alt="QR Code" />  
    // </div>
    <div>
      <h2 style ={{ alignItems: "center" }}  className="title" ><BsQrCodeScan style={{ flex:"center" ,marginRight: "8px" }}  />  Reservation Details
</h2>

      <div className="currentReservationFormContainer">
      <div style={{ display: 'flex', flexDirection: 'column'}}>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom:"15px"  }}>
    <span style={{ color: '#2998FF' }}>Reservation Name:</span>
    <span style={{ marginLeft: '100px' }}>{reservation.reservationName}</span>
  </div>

  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom:"15px"  }}>
    <span style={{ color: '#2998FF' }}>Car Type:</span>
    <span style={{ marginLeft: '10px' }}>{reservation.carType}</span>
  </div>

  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom:"15px"  }}>
    <span style={{ color: '#2998FF' }}>Plate Number:</span>
    <span>{reservation.plateNumber}</span>
  </div>


  {reservation.ingType === 'hours' && (
    <div style={{ display: 'flex', justifyContent: 'space-between' , marginBottom:"15px" }}>
      <span style={{ color: '#2998FF' }}>Duration:</span>
      <span>{reservation.numberOfHours} hours</span>
    </div>
  )}

  {reservation.bookingType === 'days' && (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom:"15px"  }}>
      <span style={{ color: '#2998FF' }}>Duration:</span>
      <span>{reservation.numberOfDays} days</span>
    </div>
  )}

  <div style={{ display: 'flex', justifyContent: 'space-between' , marginBottom:"15px" }}>
    <span style={{ color: '#2998FF' }}>Price:</span>
    <span>{reservation.price.toFixed(1)} TND</span>
  </div>
</div>
<div style={{ display: 'flex', marginTop: '20px' }}>
  <p><span style={{ color: '#2998FF' }}>Reservation Time: </span>{new Date(reservation.reservationTime).toLocaleString()}</p>
</div>

<br /> {/* This adds a line break */}

<div style={{ display: 'flex'}}>
  {reservation.bookingType === 'hours' && <p><span style={{ color: '#2998FF' }}>Duration: </span>{reservation.numberOfHours} hours</p>}
  {reservation.bookingType === 'days' && <p><span style={{ color: '#2998FF' }}>Duration: </span>{reservation.numberOfDays} days</p>}
</div>

       <h2 style={{  marginTop:"20px", marginBottom:"10px" ,marginTop:"50px"}} >QR Code</h2>
      <div style={{ color: '#2998FF',  marginBottom:"10px" ,marginTop:"5px",width: '100%'}} >
       <img src={reservation.qrCode} alt="QR Code" style={{ width: '200px', height: 'auto' }}/>  
      
       
      
       </div>
      
       <div style={{ color: '#2998FF',  marginBottom:"10px" , textDecoration:'underline',marginTop:"50px"}}>
       <Link to={"http://localhost:3000/Profile"}style={{ color: '#2998FF',  marginBottom:"10px" }}  >
        See All Your Reservations
        </Link>
        </div>
        </div>
    </div>
  );
};

export default CurrentReservation;
