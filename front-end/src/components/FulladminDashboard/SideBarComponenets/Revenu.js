import React, { useState, useEffect } from 'react';

import './Dash.css';
import { iconsImgs } from "../utils/images";
import { budget } from "../data/data";
import "./ContentMain.css";
import Sidebar from '../layout/Sidebar/Sidebar';
const Revenu = ({userData}) => {
  const [totalRevenu,setTotalRevenu]=useState([])
    useEffect(() => {
        
        fetchTotalRevenu()
        }, []);

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
  return (
    <div className='Dash'>
        <Sidebar  userData={userData}/>
        <div   >
        <h1 style={{marginLeft:'170px',  fontSize: '35px',textTransform: 'uppercase',textAlign: 'center',fontFamily: 'Arial, sans-serif', textShadow: '2px 2px 4px #666'}}>Revenu 📈 </h1>
        
        <div style={{alignItems: 'center', justifyContent: 'center', marginLeft:'130px' }}>
       
        <div  style={{ alignItems: 'center', justifyContent: 'center', width:'1000px',height:"600px"}} className="grid-two-item grid-common grid-c4">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">All Revenu</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
          

        </div>
        
        <div className="grid-c-top text-silver-v1">
            <h2 className="lg-value">Today</h2>
            <span className="lg-value">{totalRevenu} TDN </span>
        </div>
        <div className="grid-c4-content bg-jet">
        <div className="grid-items">
                {
                    budget.map((budget) => (
                        <div className="grid-item" key = { budget.id }>
                            <div className="grid-item-l">
                                <div className="icon">
                                    <img src={ iconsImgs.check } />
                                </div>
                                <p className="text text-silver-v1">{ budget.title } <span>{ budget.type }</span></p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-silver-v1"> { budget.amount } TDN</span>
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

export default Revenu