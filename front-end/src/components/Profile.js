import React, { useState, useEffect } from 'react';
import { Box, Paper } from '@mui/material';
import './Profile.css';
import { Container, TextField, Button, Avatar, Typography, Grid } from '@mui/material';



const Profile = ({ userData }) => {
  const [pendingReservations, setPendingReservations] = useState([]);
  const [historyReservations, setHistoryReservations] = useState([]);

  console.log("userData from profile", userData);
  const Header = {
    background: 'linear-gradient(214.02deg, #2998FF 6.04%, #671AE4 92.95%)',
  color: '#fff',
  height: '100px',
  };

  const boxStyle = {
    backgroundColor: '#E1E4E7',
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
    width: '150px',
  };

  useEffect(() => {
    
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
  const handleProfileImage = () => {
    window.location.reload();
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
            marginLeft: '20px'
            
          }}
        >
        <div className='homeUserProfile' onClick={handleProfileImage} style={{ marginBottom: '20px' }}>
  <div style={{ display: 'flex', alignItems: 'center',marginLeft:'40%', }}>
    <Avatar alt="user" src={userData.userImage} sx={{ width: 80, height: 80, cursor: 'pointer', marginRight: '10px' }} />
   
    
  </div>
  <div style={{ display: 'flex', alignItems: 'center', marginLeft:'38%',marginTop:'2%' }}>
    <Typography variant='body1'>{userData.status}</Typography>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft:'38%',marginTop:'2%',marginBottom:'15%' }}>
    <Typography variant='body1'>{userData.firstName} {userData.lastName}</Typography>
    </div>
  <div style={{ display: 'flex', alignItems: 'center', marginLeft:'25%',marginTop:'5%' }}>
    <Typography variant='body1'>Plate Number: {userData.plateNumber}</Typography>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft:'25%',marginTop:'5%' }}>
    <Typography variant='body1'>Email: {userData.email}</Typography>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginLeft:'25%',marginTop:'5%' }}>
    <Typography variant='body1'>phone number: {userData.phoneNumber}</Typography>
    </div>
</div>


        </Container>
      </Grid>

      <Grid item xs={8}>
        <Container
        
          component="div"
          maxWidth="md"
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            marginTop: '20px',
            borderRadius: '10px',
          }}
          
        >
           <Box mt={3} p={3}>
        <Paper elevation={3} style={boxStyle}>
          <Box p={3}>
            <Typography variant='h5' color={'black'}>Current Reservations</Typography>
            {pendingReservations.map((reservation) => (
              <Paper key={reservation._id} elevation={3} style={{ marginBottom: '10px',border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
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
            <Typography variant='h5' color={'black'}>Reservation History</Typography>
            {historyReservations.map((reservation) => (
              <Paper key={reservation._id} elevation={3} style={{ marginBottom: '10px', border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color:'black' }}>
                
                <Typography>{`ENTRANCE: ${new Date(reservation.endTime).toLocaleString()} || EXIT AT : ${new Date(reservation.endTime).toLocaleString()}    `}  <Button style={buttonStyle} >
      Delete
    </Button></Typography>
                
               
                {/* Add more details as needed */}
              </Paper>
            ))}
          </Box>
        </Paper>
      </Box>
          
        </Container>
      </Grid>
    </Grid>
  );
        }
export default Profile;