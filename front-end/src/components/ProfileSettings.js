

import React, { useState,useEffect } from 'react';
import { Box, Paper, Typography, TextField, Button, Avatar,Grid,Container } from '@mui/material';
import axios from 'axios';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { IoSettings } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { PiIdentificationCardFill } from "react-icons/pi";
import { ImProfile } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const ProfileSettings = ({setUserData,userData } ) => {
  const navigate = useNavigate();

  // All Edit 
=======
import { useNavigate } from 'react-router-dom';

const ProfileSettings = ({ userData }) => {
  const navigate = useNavigate();
>>>>>>> 20bf4e88ac938d8ea56415a1f160b2c04cd092f7
  const [editing, setEditing] = useState(false);
  const [saveEditing, setSaveEditing]=useState(false);
  const [cancelEditing, setCancelEditing]=useState(false);


  const [newEmail, setNewEmail] = useState(userData.email);

  // FirstName

  const [newFirstName, setNewFirstName] = useState(userData.firstName);
  
  // LastName

  const [newLastName, setNewLastName] = useState(userData.lastName);
  
  // Password

  const [newPassword, setNewPassword] = useState('');
  
  // PlateNumber
 
  const [newCin, setNewCin] = useState(userData.cin);
  
  // PhoneNumber

  const [newPhoneNumber, setNewPhoneNumber] = useState(userData.phoneNumber);
  const userId = userData._id
  useEffect(() => {
    const saveUserDataBeforeUnload = (event) => {
      event.returnValue = '';
      localStorage.setItem("newEmail", newEmail);
      localStorage.setItem("newFirstName", newFirstName);
      localStorage.setItem("newLastName", newLastName);
      localStorage.setItem("newPassword", newPassword);
      localStorage.setItem("newCin", newCin);
      localStorage.setItem("newPhoneNumber", newPhoneNumber);
    };

<<<<<<< HEAD
    window.addEventListener('beforeunload', saveUserDataBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', saveUserDataBeforeUnload);
    };
  }, [newEmail, newFirstName, newLastName, newPassword, newCin, newPhoneNumber]);
  
=======
  const handleInputChange = (e) => {
    // Update state based on the input field
        switch (e.target.name) {
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
        newFirstName,
        newLastName,
        newPassword,
        newPlateNumber,
        newPhoneNumber,
      });
>>>>>>> 20bf4e88ac938d8ea56415a1f160b2c04cd092f7

  useEffect(() => {
    const loadUserDataOnLoad = () => {
      const name = localStorage.getItem("name");
      if (name !== null) setNewFirstName(name);
      // ... (load other fields)
    };

<<<<<<< HEAD
    window.onload = loadUserDataOnLoad;
=======
      // Redirect to the user profile page after 2 seconds
      setTimeout(() => {
        navigate('/user-profile');
      }, 2000);
    } catch (error) {
      console.error(error.response.data); // Handle errors
    }
  };
>>>>>>> 20bf4e88ac938d8ea56415a1f160b2c04cd092f7

    return () => {
      window.onload = null;
    };
  }, []);

<<<<<<< HEAD
=======
    // Reset other state variables

    setNewFirstName(userData.firstName);
    setNewLastName(userData.lastName);
    setNewPassword('');
    setNewPlateNumber(userData.plateNumber);
    setNewPhoneNumber(userData.phoneNumber);
  };
>>>>>>> 20bf4e88ac938d8ea56415a1f160b2c04cd092f7

const handleUpdate = async () => {
  

 try{
   var response = await axios.put(`http://localhost:4444/api/auth/edit/${userId}`, 
   { 
   
    firstName: newFirstName,
    lastName: newLastName,
    cin: newCin,
     phoneNumber: newPhoneNumber,
    
   });
   
   console.log(response.data,"response.data.userData")
   setUserData(response.data);
   navigate('/Profile', { state: { userData: response.data } });
 }catch(e){
   console.log(e);
 }

  // Reset state
  setCancelEditing(false);
  setEditing(false);
  setSaveEditing(false);
};


const startEditing =() =>{

  setEditing(true)
  setSaveEditing(true)
  setCancelEditing(true); 
}

//  

const handleCancelEdit = () => {
  // Reset the state for all fields to their original values
  setCancelEditing(false);
  setEditing(false);
  setSaveEditing(false);

  setNewEmail(userData.email);

 
  setNewFirstName(userData.firstName);


  setNewLastName(userData.lastName);

  setNewPassword('');

  setNewCin(userData.cin);

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
    marginLeft: '40px'
  };
  // 
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
            height:"500px"
          }}
        >
          <div className='homeUserProfile'>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40%' }}>
              <Avatar alt="user" src={userData.image} sx={{ border: '3px solid #2998FF',width: 80, height: 80, cursor: 'pointer', marginRight: '10px' }} />
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
  <Link to='/Profile' style={{ textDecoration: 'none', color: 'inherit' }}>
    <Typography variant='body1'><ImProfile /> Main</Typography>
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
            marginBottom:"20px",
          }}
          
        >
           <Box mt={3} p={3}>
        <Paper elevation={3} style={boxStyle}>
          <Box p={3}>
            <Typography variant='h5' color={'black'}>Settings</Typography>
          
              <Paper  elevation={3} style={{ marginBottom: '10px',border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
            
                        <Typography variant='subtitle1'>Email: {userData.email}</Typography>
         {editing ? (
            <div>
              <TextField
                label="New Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
             
            </div>
          ) : (
            <p></p>
          )}
          
              </Paper>
              {/*  */}
              
              <Paper  elevation={3} style={{ marginBottom: '10px',border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
            
            <Typography variant='subtitle1'>Name: {userData.firstName}</Typography>
{editing? (
<div>
  <TextField
    label="New First Name"
    variant="outlined"
    fullWidth
    margin="normal"
    value={newFirstName}
    onChange={(e) => setNewFirstName(e.target.value)}
  />

</div>
) : (
<p></p>
)}

  </Paper>
              
  <Paper  elevation={3} style={{ marginBottom: '10px',border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
            
            <Typography variant='subtitle1'>Last Name: {userData.lastName}</Typography>
{editing ? (
<div>
  <TextField
    label="New Last Name"
    variant="outlined"
    fullWidth
    margin="normal"
    value={newLastName}
    onChange={(e) => setNewLastName(e.target.value)}
  />

</div>
) : (
<p></p>
)}

    {/*  */}
  </Paper>        
  <Paper  elevation={3} style={{ marginBottom: '10px',border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
            
            <Typography variant='subtitle1'>Password:********</Typography>
{editing ? (
<div>
  <TextField
    label="New Password"
    variant="outlined"
    fullWidth
    margin="normal"
    value={newPassword}
    onChange={(e) => setNewPassword(e.target.value)}
  />
  
</div>
) : (
<p></p>
)}

    
  </Paper> 
  <Paper  elevation={3} style={{ marginBottom: '10px',border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
            
            <Typography variant='subtitle1'>Cin : {userData.cin}</Typography>
{editing ? (
<div>
  <TextField
    label="New Plate Number"
    variant="outlined"
    fullWidth
    margin="normal"
    value={newCin}
    onChange={(e) => setNewCin(e.target.value)}
  />

</div>
) : (
<p></p>
)}

  </Paper> 
  <Paper  elevation={3} style={{ marginBottom: '10px',border: '2px solid #DADADA', padding: '10px', backgroundColor: '#E1E4E7', color: 'black' }}>
            
            <Typography variant='subtitle1'>Phone Number: {userData.phoneNumber}</Typography>
{editing? (
<div>
  <TextField
    label="New Phone Number"
    variant="outlined"
    fullWidth
    margin="normal"
    value={newPhoneNumber}
    onChange={(e) => setNewPhoneNumber(e.target.value)}
  />
  
  
</div>
) : (
<p></p>
)}

{/*  */}
  </Paper> 

  {
    editing ? (
      <div>
        <Button  style={buttonStyle} onClick={() => handleUpdate()}>
          Save 
        </Button>



        <Button  style={buttonStyle} onClick={() => handleCancelEdit()}>
          Cancel 
        </Button>
      </div>
      

      
    ) : (
      <Button  style={buttonStyle} onClick={() => startEditing()}>
      Edit 
    </Button>
    )
  }

  
          </Box>
        </Paper>
      </Box>
        </Container>

        
      </Grid>
    </Grid>
)}

export default ProfileSettings;