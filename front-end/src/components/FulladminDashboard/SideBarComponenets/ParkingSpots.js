import React, { useState, useEffect } from 'react';
import './Dash.css';
import { iconsImgs } from "../utils/images";
import Sidebar from '../layout/Sidebar/Sidebar';
import "./ContentMain.css";
import "./ParkingSpot.css"

const ParkingSpots = ({userData}) => {
  const [AllSpots,setAllSpots]=useState([])
  useEffect(() => {
      
       fetchAllSpots()
      
      }, []);
      const fetchAllSpots = async () => {
          try {
            const response = await fetch('http://localhost:4444/api/AllSpots', {
              method: 'GET',
            });
        
            if (response.ok) {
              const data = await response.json();
              setAllSpots(data.totalSpots);
            } else {
              console.error('Failed to fetch available spots count');
            }
          } catch (error) {
            console.error('Error fetching available spots count', error);
          }
        };
  
  return (
    <div  className='Dash'>
    <Sidebar  userData={userData}/>
    <div  className="main-content-holder" >
        <h1>Parking Spots Informations</h1>
        <div className="content-grid-one">
          
</div>
  </div>
  </div>
  )
}

export default ParkingSpots


{/* <div className="main-content-holder" >

<h1>Parking Spots informations</h1>
<div className="content-grid-one">
    <div style={{  marginBottom: "20px" }} className="grid-one-item grid-common grid-c2">
        <h3 className="grid-c-title-text">All Parking Spots</h3>
        <button className="grid-c-title-icon">
            <img src={ iconsImgs.plus } />
        </button>
    </div>

    <div className="grid-content">
        <div className="grid-items">
        <span className="text-silver-v1">{AllSpots} Spots In The Parking Space</span>
        </div>
    </div>
</div>
</div> */}