import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import './Profile.css';
import { Button } from '@mui/material';



const Profile = ({ userData }) => {
  const [pendingReservations, setPendingReservations] = useState([]);
  const [historyReservations, setHistoryReservations] = useState([]);

  console.log("userData from profile", userData);

  const boxStyle = {
    backgroundColor: '#212121',
    color: '#fff',
  };
  const buttonStyle = {
    background: 'linear-gradient(214.02deg, #2998FF 6.04%, #671AE4 92.95%)',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
   
  };
  const buttonStyleDelete = {
    background: 'grey',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  useEffect(() => {
    // Fetch pending and history reservations on component mount
    fetchPendingReservations();
    fetchHistoryReservations();
  }, []); // The empty dependency array ensures the effect runs only once

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

  return (
    <Box>
      <Paper elevation={3} className='wrapper' style={boxStyle}>
        <Box p={8} textAlign='center'>
          <Typography variant='h4'>
            {userData.firstName} {userData.lastName}
          </Typography>
          <Typography variant='body1'>Plate Number: {userData.plateNumber}</Typography>
        </Box>
      </Paper>

    
      <Box mt={3} p={3}>
        <Paper elevation={3} style={boxStyle}>
          <Box p={3}>
            <Typography variant='h5' color={'#2998FF'}>Current Reservations</Typography>
            {pendingReservations.map((reservation) => (
              <Paper key={reservation._id} elevation={3} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#484848', color: '#fff' }}>
                <Typography>{`Your Reservation is at: ${new Date(reservation.startTime).toLocaleString()} for ${reservation.duration} hours      `}  <Button style={buttonStyle} >
      Check Reservation
    </Button></Typography>
                        
                {/* Add more details as needed */}
              </Paper>
            ))}
          </Box>
        </Paper>
      </Box>

      <Box mt={3} p={3}>
        <Paper elevation={3} style={boxStyle}>
          <Box p={3}>
            <Typography variant='h5' color={'#2998FF'}>Reservation History</Typography>
            {historyReservations.map((reservation) => (
              <Paper key={reservation._id} elevation={3} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#484848', color: '#fff' }}>
                
                <Typography>{`ENTRANCE: ${new Date(reservation.endTime).toLocaleString()} || EXIT AT : ${new Date(reservation.endTime).toLocaleString()}    `}  <Button style={buttonStyleDelete} >Delete</Button> </Typography>
                
               
                {/* Add more details as needed */}
              </Paper>
            ))}
          </Box>
        </Paper>
      </Box>

      {/* Additional styling or content as needed */}
    </Box>
  );
};

export default Profile;