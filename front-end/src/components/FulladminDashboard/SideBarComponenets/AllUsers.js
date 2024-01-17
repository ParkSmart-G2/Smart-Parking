import React, { useState, useEffect } from 'react';
import './Dash.css';
import Sidebar from '../layout/Sidebar/Sidebar';
import { iconsImgs } from "../utils/images";
import { budget } from "../data/data";
import "./ContentMain.css";
const AllUsers  = ({userData}) => {
  const [allUsers,setAllUsers]=useState([])
  const [reservedUsers,setReservedUsers]=useState([])
  const [inSpot,setInSpot]=useState([])
  const [notReservingUsers,setNotReservingUsers]=useState([])

  useEffect(() => {
      fetchAllClients()  
      fetchReservedUsers()
      fetshUsersInSpot()
      fetchNotReservingUsers()
      }, []);

      const fetchNotReservingUsers = async ()=> {
        try {
          const response = await fetch(`http://localhost:4444/api/UsersNotReserving `, {
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
  return (
  

<div className='Dash'>
  
        <Sidebar  userData={userData}/>
       
        <div   style={{marginLeft:'30px'}} >
        <h1 style={{marginLeft:'100px',  fontSize: '35px',textTransform: 'uppercase',textAlign: 'center',fontFamily: 'Arial, sans-serif', textShadow: '2px 2px 4px #666'}}>Users Data 👥  </h1>
        
        <div className="content-grid-one">
      
        <div  style={{  marginBottom: "20px" }} className="grid-one-item grid-common grid-c2">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">All Users</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>

        <div className="grid-content">
            <div className="grid-items">
                {
                    allUsers.map((user) => (
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
        
    </div>

    

    <div  style={{  marginBottom: "20px" }} className="grid-one-item grid-common grid-c2">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Users in Parking Spot</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>

        <div className="grid-content">
        <div className="grid-items">
                {
                    inSpot.map((user) => (
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
    </div>
    <div  style={{  marginBottom: "20px" }} className="grid-one-item grid-common grid-c2">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Users That are not reserving</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>

        <div className="grid-content">
        <div className="grid-items">
                {
                    notReservingUsers.map((user) => (
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
    </div>
    
        </div>

      


        </div>
      </div>
        
   
  )
}

export default AllUsers 