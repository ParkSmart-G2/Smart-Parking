
import React, { useState, useEffect } from 'react';

import "./AllUsers.css";
import { transactions } from "../../data/data";
import { iconsImgs } from "../../utils/images";

const AvailableSpots= () => {
    const [reservedUsers,setReservedUsers]=useState([])

    useEffect(() => {
        
         fetchReservedUsers()
       
        }, []);

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
  return (
    <div className="grid-one-item grid-common grid-c2">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Current Reservation</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>

        <div className="grid-items">
                {
                    reservedUsers.map((user) => (
                        <div className="grid-item" key = {user._id}>
                            <div className="grid-item-l">
                                <div className="avatar img-fit-cover">
                                    <img src={ user.image } alt="" />
                                </div>
                                <p className="text">{ user.firstName }  { user.lastName } <span></span></p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-scarlet">{ user.status }</span>
                            </div>
                        </div>
                    ))
                }
            </div>
    </div>
  )
}

export default AvailableSpots