import React from 'react'
import './Profile.css'
const Profile = ({userData}) => {
  console.log("userData from profile",userData)
  
  return (
    <body>
    <div className='wrapper'>
    <div className='header'>
  <h1> {userData.firstName} {userData.lastName} </h1>
  <p> {userData.plateNumber} </p>
      </div>
      <div className='container-status'>
    <h1>Current Reservation</h1>

    </div>
    <div className='container-history'>
    <h1>Reservation History</h1>

    </div>
      </div>
      </body>
  )
}

export default Profile