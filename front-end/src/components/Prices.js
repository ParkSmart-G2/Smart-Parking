import React from 'react';
import './Prices.css';

const Prices = ({ userData }) => {
  console.log("userData from profile", userData);
  return (
    <div>
      <div className='wrapper'>
        <h1>Prices</h1>
        <div className='container'>
          <div className='price-info'>
            <p className='title'>From 1 hour to 3 hours</p>
            <p className='prices-hour'>$2/h</p>
          </div>
        </div>
        <div className='container'>
          <div className='price-info'>
            <p className='title'>From 4 hours to 10 hours</p>
            <p className='prices-hour'>1,8$/h</p>
          </div>
        </div>
        <div className='container'>
          <div className='price-info'>
            <p className='title'>From 10 hours to 23 hours</p>
            <p className='prices-hour'>1,5$/h</p>
          </div>
        </div>
        <div className='container'>
          <div className='price-info'>
            <p className='title'>From 1 day to 15 days</p>
            <p className='prices-hour'>25$/day</p>
          </div>
        </div>
        <div className='container'>
          <div className='price-info'>
            <p className='title'>More then 15 days </p>
            <p className='prices-hour'>20$/day</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
