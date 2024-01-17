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
    <div  style={{marginLeft:'30px'}} >
    <h1 style={{marginLeft:'378px',  fontSize: '35px',textTransform: 'uppercase',textAlign: 'center',fontFamily: 'Arial, sans-serif', textShadow: '2px 2px 4px #666'}}>Parking Spots Data 🅿</h1>

       
        <div className="content-grid-one">
        <div className="grid-one-item grid-common grid-c2">
        <div className="grid-c-title">
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

    <div className="grid-one-item grid-common grid-c2">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Total Of Taken Spots</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>

        <div className="grid-content">
            <div className="grid-items">
            <span className="text-silver-v1">3 Cars In The Parking Space</span>
            </div>
        </div>
    </div>
    <div className="grid-one-item grid-common grid-c2">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Total Of Empty Spots</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>

        <div className="grid-content">
            <div className="grid-items">
            <span className="text-silver-v1">40 Spots In The Parking Space Are EMPTY</span>
            </div>
        </div>
    </div>
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