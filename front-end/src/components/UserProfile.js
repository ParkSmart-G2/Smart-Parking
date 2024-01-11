import React from 'react';

const UserProfile = ({ userData }) => {
  return (
    <div>
      <h1>User Profile</h1>
     
      <p>First Name: {userData.firstName}</p>
      <p>Last Name: {userData.lastName}</p>
      <p>Plate Number: {userData.plateNumber}</p>
      <p>Phone Number: {userData.phoneNumber}</p>
      
    </div>
  );
};

export default UserProfile;
