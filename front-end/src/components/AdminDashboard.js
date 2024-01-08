import React, { useState, useEffect } from 'react';
import { Box, Paper,Typography } from '@mui/material';

const boxStyle = {
  backgroundColor: '#E1E4E7',
  color: '#fff',
};


const AdminDashboard = ({ userData }) => {
  const [allUsers,setAllUsers]=useState([])

  const [inSpot,setInSpot]=useState([])
  const [reservedUsers,setReservedUsers]=useState([])
  const [notReservingUsers,setNotReservingUsers]=useState([])
  const [availableSpots,setAvailableSpots]=useState([])
  const [totalRevenu,setTotalRevenu]=useState([])
useEffect(() => {
fetchAllClients()  
 fetshUsersInSpot()
 fetchReservedUsers()
 fetchNotReservingUsers()
 fetchAllSpots()
fetchTotalRevenu()
}, []);




// i need to do for each one the number of all of them
const fetchTotalRevenu = async () => {
  try {
    const response = await fetch('http://localhost:4444/api/getPayments', {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();
      setTotalRevenu(data.totalSum);
    } else {
      console.error('Failed to fetch available spots count');
    }
  } catch (error) {
    console.error('Error fetching available spots count', error);
  }
};

const fetchAllSpots = async () => {
  try {
    const response = await fetch('http://localhost:4444/api/AllSpots', {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();
      setAvailableSpots(data.totalSpots);
    } else {
      console.error('Failed to fetch available spots count');
    }
  } catch (error) {
    console.error('Error fetching available spots count', error);
  }
};

const fetchAllClients = async ()=> {
  try {
    const response = await fetch(`http://localhost:4444/api/AllUsers`, {
      method: 'GET',
    
    });
    if(response.ok){
      const data = await response.json()
      setAllUsers(data.users)
    }else {
      console.error('Failed to fetch all users');
    }
}
catch (error) {
  console.error('Error fetching pending reservations', error);
}
}

const fetshUsersInSpot = async ()=> {
  try {
    const response = await fetch(`http://localhost:4444/api/UsersInSpot`, {
      method: 'GET',
    
    });
    if(response.ok){
      const data = await response.json()
      setInSpot(data.users)
    }else {
      console.error('Failed to fetch all users');
    }
}
catch (error) {
  console.error('Error fetching pending reservations', error);
}
}

const fetchReservedUsers = async ()=> {
  try {
    const response = await fetch(`http://localhost:4444/api/UsersInSpot`, {
      method: 'GET',
    
    });
    if(response.ok){
      const data = await response.json()
      setReservedUsers(data.users)
    }else {
      console.error('Failed to fetch all users');
    }
}
catch (error) {
  console.error('Error fetching pending reservations', error);
}
}
const fetchNotReservingUsers = async ()=> {
  try {
    const response = await fetch(`http://localhost:4444/api/UsersInSpot`, {
      method: 'GET',
    
    });
    if(response.ok){
      const data = await response.json()
      setNotReservingUsers(data.users)
    }else {
      console.error('Failed to fetch all users');
    }
}
catch (error) {
  console.error('Error fetching pending reservations', error);
}
}

  return (
    <div>
      <h2>Admin Dasffhboard</h2>
      
      
      <Box mt={3} p={3}>
  <Paper elevation={3} style={boxStyle}>
    <Box p={3}>
      <Typography variant='h5' color={'black'}>Available Spots:</Typography>
      <Paper
        elevation={3}
        style={{
          marginBottom: '10px',
          border: '2px solid #DADADA',
          padding: '10px',
          backgroundColor: '#E1E4E7',
          color: 'black',
        }}
      >
        {availableSpots} spots available
      </Paper>
    </Box>
  </Paper>
</Box>
<Box mt={3} p={3}>
  <Paper elevation={3} style={boxStyle}>
    <Box p={3}>
      <Typography variant='h5' color={'black'}>Total Revenu : </Typography>
      <Paper
        elevation={3}
        style={{
          marginBottom: '10px',
          border: '2px solid #DADADA',
          padding: '10px',
          backgroundColor: '#E1E4E7',
          color: 'black',
        }}
      >
        {totalRevenu} TDN In Total
      </Paper>
    </Box>
  </Paper>
</Box>


      <Box mt={3} p={3}>
        <Paper elevation={3} style={boxStyle}>
          <Box p={3}>
            <Typography variant='h5' color={'black'}>All Client :</Typography>
            {allUsers.map((user) => (
              <Paper key={user._id} elevation={3} style={{ marginBottom: '10px',border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
                {user.firstName}  {user.lastName}
                        
               
              </Paper>
            ))}
          </Box>
        </Paper>
      </Box>

      
     

     
      <Box mt={3} p={3}>
        <Paper elevation={3} style={boxStyle}>
          <Box p={3}>
            <Typography variant='h5' color={'black'}>Client in spot:</Typography>
            {inSpot.map((user) => (
              <Paper key={user._id} elevation={3} style={{ marginBottom: '10px',border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
                {user.firstName}  {user.lastName}
                        
               
              </Paper>
            ))}
          </Box>
        </Paper>
      </Box>
     
      <Box mt={3} p={3}>
        <Paper elevation={3} style={boxStyle}>
          <Box p={3}>
            <Typography variant='h5' color={'black'}>Client resevred: </Typography>
            {reservedUsers.map((user) => (
              <Paper key={user._id} elevation={3} style={{ marginBottom: '10px',border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
                {user.firstName}  {user.lastName}
                        
               
              </Paper>
            ))}
          </Box>
        </Paper>
      </Box>
   
    
      



    </div>
  );
};

export default AdminDashboard;
