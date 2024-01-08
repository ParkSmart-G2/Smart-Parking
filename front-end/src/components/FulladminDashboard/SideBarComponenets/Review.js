
import React, { useState, useEffect } from 'react';
import './Dash.css';
import Sidebar from '../layout/Sidebar/Sidebar';
import "./ContentMain.css";
const Review = ({userData}) => {
  return (
    <div className='Dash'>
        <Sidebar  userData={userData}/>
        <h1>Reviews</h1>
       
      </div>
  )
}

export default Review