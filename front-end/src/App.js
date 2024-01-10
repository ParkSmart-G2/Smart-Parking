
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css"
import { useState } from "react";
import SignUp from "./components/Auth/Signup"
import SignIn from "./components/Auth/Signin"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar  from "./components/NavBar/NavBar"
import Profile from "./components/Profile";
import AfterReservation from "./components/AfterReservation";
import Reservation from "./components/Reservation"
import Payment from "./components/Payment"
import Chat from "./components/Chat"
import Notification from "./components/Notification";
import ProfileSettings from "./components/ProfileSettings";
import Wallet from "./components/Wallet";
import Prices from "./components/Prices"
import UserIcon from "./components/UserIcon"
import Footer from "./components/Footer/Footer.js";
import AdminDash from "./components/AdminDashboard.js"
import AdminDashboard from "./components/AdminDashboard.js";
import Map  from "./components/Map.js";

import Dash from "./components/FulladminDashboard/Dash.jsx"
// import AllUsers from "./components/FulladminDashboard/components/AllUsers/AllUsers.jsx"
import AllUsers from "./components/FulladminDashboard/SideBarComponenets/AllUsers"
import  Messages from "./components/FulladminDashboard/SideBarComponenets/Messages"
import ParkingSpots  from "./components/FulladminDashboard/SideBarComponenets/ParkingSpots"
import Revenu from "./components/FulladminDashboard/SideBarComponenets/Revenu"


function App() {
  const [userData,setUserData] = useState({});
  return (
    <div className="App">
    
<Router>

<Navbar userData={userData} />

<Routes>
  
<Route path="/Home" element={<Home userData={userData}/>} />
<Route path="/" element={<SignIn setUserData={setUserData}/>} />
<Route path="/SignUp" element={<SignUp/>} />
<Route path="/About-Us" element={<AboutUs userData={userData}/>} />
<Route path="/services" element={<Services userData={userData}/>} />
<Route path="/contact" element={<Contact userData={userData}/>} />



{/* admindashboard links */}
<Route path="/AllUsers" element={<AllUsers userData={userData}/>} />
<Route path="/Messages" element={<Messages userData={userData}/>} />
<Route path="/ParkingSpots" element={<ParkingSpots  userData={userData}/>} />
<Route path="/Revenu" element={<Revenu  userData={userData}/>} />

{/* admindashboard links */}


<Route path="/Reservation" element={<Reservation userData={userData}/>} />
<Route path="/Payment" element={<Payment userData={userData}/>} />
<Route path="/Notification" element={<Notification userData={userData}/>} />
<Route path="/Chat" element={<Chat userData={userData}/>} />
<Route path="/My-Settings" element={<ProfileSettings userData={userData}/>} />
<Route path="/Wallet" element={<Wallet userData={userData}/>} />
<Route path="/Prices" element={<Prices userData={userData}/>} />

<Route path="/Map" element={<Map userData={userData}/>} />
<Route path="/UserIcon" element={<UserIcon userData={userData}/>} />
{/* <Route path="/Dashboard" element={<Dash userData={userData}/>} /> */}
{userData.isAdmin && 
  // <Route path="/Profile" element={<AdminDashboard userData={userData}/>} />
  <Route path="/Profile" element={<Dash  userData={userData}/>} />
}
{!userData.isAdmin && <Route path="/Profile" element={<Profile userData={userData}/>} />}
</Routes>
<Footer userData={userData} />
</Router>



    </div>
  )
}

export default App;