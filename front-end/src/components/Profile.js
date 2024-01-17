import React, { useState, useEffect } from 'react';
import { Box, Paper, Avatar, Typography, Grid, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { IoSettings } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { PiIdentificationCardFill } from "react-icons/pi";

const Profile = ({ userData }) => {
  const [pendingReservations, setPendingReservations] = useState([]);
  const [historyReservations, setHistoryReservations] = useState([]);

  useEffect(() => {
    fetchPendingReservations();
    fetchHistoryReservations();
  }, []);

  const fetchPendingReservations = async () => {
    try {
      const response = await fetch(`http://localhost:4444/api/auth/ReservationsPending/${userData.email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPendingReservations(data.reservations);
      } else {
        console.error('Failed to fetch pending reservations');
      }
    } catch (error) {
      console.error('Error fetching pending reservations', error);
    }
  };

  const fetchHistoryReservations = async () => {
    try {
      const response = await fetch(`http://localhost:4444/api/auth/ReservationHistory/${userData.email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setHistoryReservations(data.reservations);
      } else {
        console.error('Failed to fetch history reservations');
      }
    } catch (error) {
      console.error('Error fetching history reservations', error);
    }
  };

  const calculateCheckoutTime = (startTime, duration, bookingType) => {
    const checkoutTime = new Date(startTime);
  
    if (bookingType === 'hours') {
      checkoutTime.setHours(checkoutTime.getHours() + duration);
    } else if (bookingType === 'days') {
      checkoutTime.setDate(checkoutTime.getDate() + duration);
    }
  
    if (checkoutTime.getHours() >= 24) {
    
      checkoutTime.setHours(checkoutTime.getHours() - 24);
      checkoutTime.setDate(checkoutTime.getDate() + 1);
    }
  
    return checkoutTime;
  };
  

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Container
          component="div"
          maxWidth="md"
          style={{
            backgroundColor: '#212121',
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            marginTop: '55px',
            marginLeft: '20px',
            height:"500px"
          }}
        >
          <div className='homeUserProfile'>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40%' }}>
              <Avatar alt="user" src={userData.image} sx={{ border: '3px solid #2998FF', width: 80, height: 80, cursor: 'pointer', marginRight: '10px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40%', marginBottom:"30px" ,marginTop:"30px",color:"#2998FF" }}>
            <Typography variant='body1' style={{ fontSize: '18px',fontWeight:"bold"}}>{userData.firstName} {userData.lastName}</Typography>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '25%', marginTop: '5%' }}>
              <Typography variant='body1'><PiIdentificationCardFill /> Cin: {userData.cin}</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '25%', marginTop: '5%' }}>
              <Typography variant='body1'><MdEmail /> Email: {userData.email}</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '25%', marginTop: '5%' }}>
              <Typography variant='body1'><FaPhoneAlt />  Phone number: {userData.phoneNumber}</Typography>
            </div>
             
          </div>
          
          <div style={{  display: 'flex', alignItems: 'center', marginLeft: '40%',width: 90, height: 90, cursor: 'pointer', marginRight: '10px'}}>
  <Link to='/My-Settings' style={{ textDecoration: 'none', color: 'inherit' }}>
    <Typography variant='body1'><IoSettings /> Settings</Typography>
  </Link>
</div>
        </Container>
      </Grid>

      <Grid item xs={8}>
        <Container
          component="div"
          maxWidth="md"
          style={{
            backgroundColor: '#e6e6e6',
            padding: '20px',
            borderRadius: '10px',
            marginTop: '10px',
            border: '1px solid #4d4d4d',
          }}
        >
          <Box mt={3} p={3}>
            <Paper elevation={3}>
              <Box p={3}>
                <Typography variant='h5' color={'black'}>
                  Current Reservations
                </Typography>
                {pendingReservations
  .filter((reservation) => {
    // Calculate the checkout time for each reservation
    const checkoutTime = calculateCheckoutTime(
      reservation.reservationTime,
      reservation.bookingType === 'hours' ? reservation.numberOfHours : reservation.numberOfDays,
      reservation.bookingType
    );

    // Check if the calculated checkout time is more than the current local time
    return checkoutTime > new Date();
  })
  .map((reservation) => (
    <Paper
      key={reservation._id}
      elevation={3}
      style={{
        marginBottom: '10px',
        border: '2px solid #DADADA',
        padding: '10px',
        backgroundColor: '#E1E4E7',
        color: 'black',
      }}
    >
      <Typography>
        Reservation Time: {new Date(reservation.reservationTime).toLocaleString()}
        {reservation.bookingType === 'hours' && <p>Duration: {reservation.numberOfHours} hours</p>}
        {reservation.bookingType === 'days' && <p>Duration: {reservation.numberOfDays} days</p>}
     
        <Link to={`/reservation-details/${reservation._id}`} style={{ textDecoration: 'none' }}>
  <Button
    style={{
      background: 'linear-gradient(214.02deg, #2998FF 6.04%, #671AE4 92.95%)',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    }}
  >
    Check Reservation
  </Button>
</Link>
      </Typography>
    </Paper>
  ))}

              </Box>
            </Paper>
          </Box>

          <Box mt={3} p={3}>
            <Paper elevation={3}>
              <Box p={3}>
                <Typography variant='h5' color={'black'}>
                  Reservation History
                </Typography>
                {historyReservations
  .filter((reservation) => {
    // Calculate the checkout time for each reservation
    const checkoutTime = calculateCheckoutTime(
      reservation.reservationTime,
      reservation.bookingType === 'hours' ? reservation.numberOfHours : reservation.numberOfDays,
      reservation.bookingType
    );

    // Check if the calculated checkout time is more than the current local time
    return checkoutTime <= new Date();
  })
  .map((reservation) => (
    <Paper
      key={reservation._id}
      elevation={3}
      style={{
        marginBottom: '10px',
        border: '2px solid #DADADA',
        padding: '10px',
        backgroundColor: '#E1E4E7',
        color: 'black',
      }}
    >
      <Typography>
        Reservation Time: {new Date(reservation.reservationTime).toLocaleString()}
        {reservation.bookingType === 'hours' && <p>Duration: {reservation.numberOfHours} hours</p>}
        {reservation.bookingType === 'days' && <p>Duration: {reservation.numberOfDays} days</p>}
        <Link to={`/reservation-details/${reservation._id}`} style={{ textDecoration: 'none' }}>
  <Button
    style={{
      background: 'linear-gradient(214.02deg, #2998FF 6.04%, #671AE4 92.95%)',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    }}
  >
    Check Reservation
  </Button>
</Link>
      </Typography>
    </Paper>
  ))}
              </Box>
            </Paper>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Profile;