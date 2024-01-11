// // ProfileSettings.js

// import React, { useState } from 'react';
// import { Box, Paper, Typography, TextField, Button, Avatar,Grid,Container } from '@mui/material';

// const ProfileSettings = ({ userData }) => {
// // Email
// const [editingEmail, setEditingEmail] = useState(false);
// const [newEmail, setNewEmail] = useState(userData.email);

// // FirstName
// const [editingFirstName, setEditingFirstName] = useState(false);
// const [newFirstName, setNewFirstName] = useState(userData.firstName);

// // LastName
// const [editingLastName, setEditingLastName] = useState(false);
// const [newLastName, setNewLastName] = useState(userData.lastName);

// // Password
// const [editingPassword, setEditingPassword] = useState(false);
// const [newPassword, setNewPassword] = useState('');

// // PlateNumber
// const [editingPlateNumber, setEditingPlateNumber] = useState(false);
// const [newPlateNumber, setNewPlateNumber] = useState(userData.plateNumber);

// // PhoneNumber
// const [editingPhoneNumber, setEditingPhoneNumber] = useState(false);
// const [newPhoneNumber, setNewPhoneNumber] = useState(userData.phoneNumber);

// const handleUpdateEmail = async () => {
//   // Update the email in the backend
//   try {
//     const response = await fetch('http://localhost:5000/update-profile', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: newEmail,
//       }),
//     });

//     if (response.ok) {
//       // Handle success, e.g., show a success message
//       console.log('Email updated successfully');
//     } else {
//       // Handle error, e.g., show an error message
//       console.error('Failed to update email');
//     }
//   } catch (error) {
//     console.error('Error updating email', error);
//   }

//   // Reset state
//   setEditingEmail(false);
// };

// const handleUpdateFirstName = async () => {
//   // Update the first name in the backend
//   try {
//     const response = await fetch('http://localhost:5000/update-profile', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         firstName: newFirstName,
//       }),
//     });

//     if (response.ok) {
//       // Handle success, e.g., show a success message
//       console.log('First Name updated successfully');
//     } else {
//       // Handle error, e.g., show an error message
//       console.error('Failed to update First Name');
//     }
//   } catch (error) {
//     console.error('Error updating First Name', error);
//   }

//   // Reset state
//   setEditingFirstName(false);
// };

// const handleUpdateLastName = async () => {
//   // Update the last name in the backend
//   try {
//     const response = await fetch('http://localhost:5000/update-profile', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         lastName: newLastName,
//       }),
//     });

//     if (response.ok) {
//       // Handle success, e.g., show a success message
//       console.log('Last Name updated successfully');
//     } else {
//       // Handle error, e.g., show an error message
//       console.error('Failed to update Last Name');
//     }
//   } catch (error) {
//     console.error('Error updating Last Name', error);
//   }

//   // Reset state
//   setEditingLastName(false);
// };

// const handleUpdatePassword = async () => {
//   // Update the password in the backend
//   try {
//     const response = await fetch('http://localhost:5000/update-profile', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         password: newPassword,
//       }),
//     });

//     if (response.ok) {
//       // Handle success, e.g., show a success message
//       console.log('Password updated successfully');
//     } else {
//       // Handle error, e.g., show an error message
//       console.error('Failed to update Password');
//     }
//   } catch (error) {
//     console.error('Error updating Password', error);
//   }

//   // Reset state
//   setEditingPassword(false);
//   setNewPassword('');
// };

// const handleUpdatePlateNumber = async () => {
//   // Update the plate number in the backend
//   try {
//     const response = await fetch('http://localhost:5000/update-profile', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         plateNumber: newPlateNumber,
//       }),
//     });

//     if (response.ok) {
//       // Handle success, e.g., show a success message
//       console.log('Plate Number updated successfully');
//     } else {
//       // Handle error, e.g., show an error message
//       console.error('Failed to update Plate Number');
//     }
//   } catch (error) {
//     console.error('Error updating Plate Number', error);
//   }

//   // Reset state
//   setEditingPlateNumber(false);
// };

// const handleUpdatePhoneNumber = async () => {
//   // Update the phone number in the backend
//   try {
//     const response = await fetch('http://localhost:5000/update-profile', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         phoneNumber: newPhoneNumber,
//       }),
//     });

//     if (response.ok) {
//       // Handle success, e.g., show a success message
//       console.log('Phone Number updated successfully');
//     } else {
//       // Handle error, e.g., show an error message
//       console.error('Failed to update Phone Number');
//     }
//   } catch (error) {
//     console.error('Error updating Phone Number', error);
//   }

//   // Reset state
//   setEditingPhoneNumber(false);
// };

// const handleCancelEdit = () => {
//   // Reset the state for all fields to their original values
//   setEditingEmail(false);
//   setNewEmail(userData.email);

//   setEditingFirstName(false);
//   setNewFirstName(userData.firstName);

//   setEditingLastName(false);
//   setNewLastName(userData.lastName);

//   setEditingPassword(false);
//   setNewPassword('');

//   setEditingPlateNumber(false);
//   setNewPlateNumber(userData.plateNumber);

//   setEditingPhoneNumber(false);
//   setNewPhoneNumber(userData.phoneNumber);
// };
//   const boxStyle = {
//     backgroundColor: '#E1E4E7',
//     color: '#fff',
//   };

 

//   const buttonStyle = {
//     background: 'linear-gradient(214.02deg, #2998FF 6.04%, #671AE4 92.95%)',
//     color: '#fff',
//     padding: '10px 20px',
//     borderRadius: '5px',
//     border: 'none',
//     cursor: 'pointer',
//     width: '150px', 
//     marginLeft: '40px'
//   };
//   const handleProfileImage = () => {
//     window.location.reload();
//   };

//   return (

//   <Grid container spacing={3}>
//       <Grid item xs={4}>
//         <Container
//           component="div"
//           maxWidth="md"
//           style={{
//             backgroundColor: '#212121',
//             color: 'white',
//             padding: '20px',
//             borderRadius: '10px',
//             marginTop: '55px',
//             marginLeft: '20px',
//             marginBottom:"100px",
            
//           }}
//         >
//         <div className='homeUserProfile' onClick={handleProfileImage} style={{ marginBottom: '20px' }}>
//   <div style={{ display: 'flex', alignItems: 'center',marginLeft:'40%', }}>
//     <Avatar alt="user" src={userData.userImage} sx={{ width: 80, height: 80, cursor: 'pointer', marginRight: '10px' }} />
   
    
//   </div>
//   <div style={{ display: 'flex', alignItems: 'center', marginLeft:'38%',marginTop:'2%' }}>
//     <Typography variant='body1'>{userData.status}</Typography>
//     </div>
//     <div style={{ display: 'flex', alignItems: 'center', marginLeft:'38%',marginTop:'2%',marginBottom:'15%' }}>
//     <Typography variant='body1'>{userData.firstName} {userData.lastName}</Typography>
//     </div>
//   <div style={{ display: 'flex', alignItems: 'center', marginLeft:'25%',marginTop:'5%' }}>
//     <Typography variant='body1'>Plate Number: {userData.plateNumber}</Typography>
//     </div>
//     <div style={{ display: 'flex', alignItems: 'center', marginLeft:'25%',marginTop:'5%' }}>
//     <Typography variant='body1'>Email: {userData.email}</Typography>
//     </div>
//     <div style={{ display: 'flex', alignItems: 'center', marginLeft:'25%',marginTop:'5%' }}>
//     <Typography variant='body1'>phone number: {userData.phoneNumber}</Typography>
//     </div>
// </div>


//         </Container>
//       </Grid>

//       <Grid item xs={8}>
//         <Container
        
//           component="div"
//           maxWidth="md"
//           style={{
//             backgroundColor: 'white',
//             padding: '20px',
//             borderRadius: '10px',
//             marginTop: '20px',
//             borderRadius: '10px',
//           }}
          
//         >
//            <Box mt={3} p={3}>
//         <Paper elevation={3} style={boxStyle}>
//           <Box p={3}>
//             <Typography variant='h5' color={'black'}>Settings</Typography>
          
//               <Paper  elevation={3} style={{ marginBottom: '10px',border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
            
//                         <Typography variant='subtitle1'>Email: {userData.email}</Typography>
//          {editingEmail ? (
//             <div>
//               <TextField
//                 label="New Email"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={newEmail}
//                 onChange={(e) => setNewEmail(e.target.value)}
//               />
//               <Button style={buttonStyle} variant="contained"  onClick={handleUpdateEmail}>
//                 Update 
//               </Button>
//               <Button style={buttonStyle} variant="contained"  onClick={handleCancelEdit} >
//                Cancel Edit
//               </Button>
//             </div>
//           ) : (
//             <Button  style={buttonStyle} onClick={() => setEditingEmail(true)}>
//               Edit 
//             </Button>
//           )}
          
                
//               </Paper>
              
//               <Paper  elevation={3} style={{ marginBottom: '10px',border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
            
//             <Typography variant='subtitle1'>Email: {userData.firstName}</Typography>
// {editingEmail ? (
// <div>
//   <TextField
//     label="New First Name"
//     variant="outlined"
//     fullWidth
//     margin="normal"
//     value={newFirstName}
//     onChange={(e) => setNewFirstName(e.target.value)}
//   />
//   <Button style={buttonStyle} variant="contained"  onClick={handleUpdateFirstName}>
//     Update 
//   </Button>
//   <Button style={buttonStyle} variant="contained"  onClick={handleCancelEdit} >
//    Cancel Edit
//   </Button>
// </div>
// ) : (
// <Button  style={buttonStyle} onClick={() => setEditingFirstName(true)}>
//   Edit 
// </Button>
// )}

    
//   </Paper>
              
//   <Paper  elevation={3} style={{ marginBottom: '10px',border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
            
//             <Typography variant='subtitle1'>Last Name: {userData.lastName}</Typography>
// {editingEmail ? (
// <div>
//   <TextField
//     label="New Last Name"
//     variant="outlined"
//     fullWidth
//     margin="normal"
//     value={newLastName}
//     onChange={(e) => setNewLastName(e.target.value)}
//   />
//   <Button style={buttonStyle} variant="contained"  onClick={handleUpdateLastName}>
//     Update 
//   </Button>
//   <Button style={buttonStyle} variant="contained"  onClick={handleCancelEdit} >
//    Cancel Edit
//   </Button>
// </div>
// ) : (
// <Button  style={buttonStyle} onClick={() => setEditingLastName(true)}>
//   Edit 
// </Button>
// )}

    
//   </Paper>        
//   <Paper  elevation={3} style={{ marginBottom: '10px',border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
            
//             <Typography variant='subtitle1'>Password</Typography>
// {editingEmail ? (
// <div>
//   <TextField
//     label="New Password"
//     variant="outlined"
//     fullWidth
//     margin="normal"
//     value={newPassword}
//     onChange={(e) => setNewPassword(e.target.value)}
//   />
//   <Button style={buttonStyle} variant="contained"  onClick={handleUpdatePassword}>
//     Update 
//   </Button>
//   <Button style={buttonStyle} variant="contained"  onClick={handleCancelEdit} >
//    Cancel Edit
//   </Button>
// </div>
// ) : (
// <Button  style={buttonStyle} onClick={() => setEditingPassword(true)}>
//   Edit 
// </Button>
// )}

    
//   </Paper> 
//   <Paper  elevation={3} style={{ marginBottom: '10px',border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
            
//             <Typography variant='subtitle1'>Plate Number: {userData.plateNumber}</Typography>
// {editingEmail ? (
// <div>
//   <TextField
//     label="New Plate Number"
//     variant="outlined"
//     fullWidth
//     margin="normal"
//     value={newPlateNumber}
//     onChange={(e) => setNewPlateNumber(e.target.value)}
//   />
//   <Button style={buttonStyle} variant="contained"  onClick={handleUpdatePlateNumber}>
//     Update 
//   </Button>
//   <Button style={buttonStyle} variant="contained"  onClick={handleCancelEdit} >
//    Cancel Edit
//   </Button>
// </div>
// ) : (
// <Button  style={buttonStyle} onClick={() => setEditingPlateNumber(true)}>
//   Edit 
// </Button>
// )}

    
//   </Paper> 
//   <Paper  elevation={3} style={{ marginBottom: '10px',border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
            
//             <Typography variant='subtitle1'>Phone Number: {userData.plateNumber}</Typography>
// {editingEmail ? (
// <div>
//   <TextField
//     label="New Phone Number"
//     variant="outlined"
//     fullWidth
//     margin="normal"
//     value={newPhoneNumber}
//     onChange={(e) => setNewPhoneNumber(e.target.value)}
//   />
//   <Button style={buttonStyle} variant="contained"  onClick={handleUpdatePhoneNumber}>
//     Update 
//   </Button>
//   <Button style={buttonStyle} variant="contained"  onClick={handleCancelEdit} >
//    Cancel Edit
//   </Button>
// </div>
// ) : (
// <Button  style={buttonStyle} onClick={() => setEditingPhoneNumber(true)}>
//   Edit 
// </Button>
// )}

    
//   </Paper> 
//           </Box>
//         </Paper>
//       </Box>


          
//         </Container>
//       </Grid>
//     </Grid>
// )}

// export default ProfileSettings;




// ProfileSettings.js

import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Button, Avatar, Grid, Container } from '@mui/material';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ProfileSettings = ({ userData }) => {
  const history = useHistory();
  const [editing, setEditing] = useState(false);
  const [saveEditing, setSaveEditing] = useState(false);
  const [cancelEditing, setCancelEditing] = useState(false);

  const [newEmail, setNewEmail] = useState(userData.email);
  const [newFirstName, setNewFirstName] = useState(userData.firstName);
  const [newLastName, setNewLastName] = useState(userData.lastName);
  const [newPassword, setNewPassword] = useState('');
  const [newPlateNumber, setNewPlateNumber] = useState(userData.plateNumber);
  const [newPhoneNumber, setNewPhoneNumber] = useState(userData.phoneNumber);

  const handleInputChange = (e) => {
    // Update state based on the input field
    switch (e.target.name) {
      case 'newEmail':
        setNewEmail(e.target.value);
        break;
      case 'newFirstName':
        setNewFirstName(e.target.value);
        break;
      case 'newLastName':
        setNewLastName(e.target.value);
        break;
      case 'newPassword':
        setNewPassword(e.target.value);
        break;
      case 'newPlateNumber':
        setNewPlateNumber(e.target.value);
        break;
      case 'newPhoneNumber':
        setNewPhoneNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleUpdateProfile = async () => {
    try {
      // Make API call to update profile
      const response = await axios.put(`/api/profile/${userData.email}`, {
        newEmail,
        newFirstName,
        newLastName,
        newPassword,
        newPlateNumber,
        newPhoneNumber,
      });

      // Handle success
      setEditing(false);
      setSaveEditing(false);
      setCancelEditing(false);

      // Redirect to the user profile page after 2 seconds
      setTimeout(() => {
        history.push('/user-profile');
      }, 2000);
    } catch (error) {
      console.error(error.response.data); // Handle errors
    }
  };

  const handleCancelEdit = () => {
    // Reset the state for all fields to their original values
    setCancelEditing(false);
    setEditing(false);
    setSaveEditing(false);

    // Reset other state variables
    setNewEmail(userData.email);
    setNewFirstName(userData.firstName);
    setNewLastName(userData.lastName);
    setNewPassword('');
    setNewPlateNumber(userData.plateNumber);
    setNewPhoneNumber(userData.phoneNumber);
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
    width: '150px',
    marginLeft: '40px',
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
            marginLeft: '20px',
            marginBottom: '100px',
          }}
        >
          <div className="homeUserProfile" onClick={handleProfileImage} style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40%' }}>
              <Avatar alt="user" src={userData.userImage} sx={{ width: 80, height: 80, cursor: 'pointer', marginRight: '10px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '38%', marginTop: '2%' }}>
              <Typography variant="body1">{userData.status}</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '38%', marginTop: '2%', marginBottom: '15%' }}>
              <Typography variant="body1">{userData.firstName} {userData.lastName}</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '25%', marginTop: '5%' }}>
              <Typography variant="body1">Plate Number: {userData.plateNumber}</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '25%', marginTop: '5%' }}>
              <Typography variant="body1">Email: {userData.email}</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '25%', marginTop: '5%' }}>
              <Typography variant="body1">phone number: {userData.phoneNumber}</Typography>
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
                <Typography variant="h5" color={'black'}>
                  Settings
                </Typography>

                <Paper elevation={3} style={{ marginBottom: '10px', border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
                  <Typography variant="subtitle1">Email: {userData.email}</Typography>
                  {editing && (
                    <TextField
                      fullWidth
                      label="New Email"
                      variant="outlined"
                      name="newEmail"
                      value={newEmail}
                      onChange={handleInputChange}
                    />
                  )}
                </Paper>
                <Paper elevation={3} style={{ marginBottom: '10px', border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
                  <Typography variant="subtitle1">First Name: {userData.firstName}</Typography>
                  {editing && (
                    <TextField
                      fullWidth
                      label="New First Name"
                      variant="outlined"
                      name="newFirstName"
                      value={newFirstName}
                      onChange={handleInputChange}
                    />
                  )}
                </Paper>

                <Paper elevation={3} style={{ marginBottom: '10px', border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
                  <Typography variant="subtitle1">Last Name: {userData.lastName}</Typography>
                  {editing && (
                    <TextField
                      fullWidth
                      label="New Last Name"
                      variant="outlined"
                      name="newLastName"
                      value={newLastName}
                      onChange={handleInputChange}
                    />
                  )}
                </Paper>
                <Paper elevation={3} style={{ marginBottom: '10px', border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
  <Typography variant="subtitle1">Password</Typography>
  {editing && (
    <TextField
      fullWidth
      label="New Password"
      variant="outlined"
      name="newPassword"
      value={newPassword}
      onChange={handleInputChange}
    />
  )}
</Paper>

<Paper elevation={3} style={{ marginBottom: '10px', border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
  <Typography variant="subtitle1">Plate Number: {userData.plateNumber}</Typography>
  {editing && (
    <TextField
      fullWidth
      label="New Plate Number"
      variant="outlined"
      name="newPlateNumber"
      value={newPlateNumber}
      onChange={handleInputChange}
    />
  )}
</Paper>

<Paper elevation={3} style={{ marginBottom: '10px', border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
  <Typography variant="subtitle1">Phone Number: {userData.phoneNumber}</Typography>
  {editing && (
    <TextField
      fullWidth
      label="New Phone Number"
      variant="outlined"
      name="newPhoneNumber"
      value={newPhoneNumber}
      onChange={handleInputChange}
    />
  )}
</Paper>

                {editing ? (
                  <div>
                    <Button style={buttonStyle} onClick={handleUpdateProfile}>
                      Save
                    </Button>

                    <Button style={buttonStyle} onClick={handleCancelEdit}>
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button style={buttonStyle} onClick={() => setEditing(true)}>
                    Edit
                  </Button>
                )}
              </Box>
            </Paper>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default ProfileSettings;
