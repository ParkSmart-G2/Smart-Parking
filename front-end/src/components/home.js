import React from 'react'
import { useState } from "react";

const home = ({userData}) => {
  console.log("userData from home",userData)
  return (
    <div>hello{userData.firstName}
    </div>
  )
}

export default home