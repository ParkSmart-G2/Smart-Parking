import React from 'react'

const Wallet = ({userData}) => {
  return (
    <div className='wrapper'>
      <div className='header'>
  <h1>Your credit :</h1>
  <h1>{userData.wallet}</h1>
  </div>
    </div>
  )
}

export default Wallet