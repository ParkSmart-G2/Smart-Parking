
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css"
import { useState } from "react";
import SignUp from "./components/Auth/Signup"
import SignIn from "./components/Auth/Signin"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar  from "./components/NavBar/NavBar";
import Profile from "./components/Profile";
import AfterReservation from "./components/AfterReservation";
import Reservation from "./components/Reservation"
import Payment from "./components/Payment"
import Chat from "./components/Chat"
import Notification from "./components/Notification";
import ProfileSettings from "./components/ProfileSettings";
import Wallet from "./components/Wallet";

function App() {
  const [userData, setUserData] = useState({});

  return (
    <div className="App">
    
<Router>

<Navbar userData={userData} />

<Routes>
  
<Route path="/" element={<Home/>} />
<Route path="/SignIn" element={<SignIn setUserData={setUserData}/>} />
<Route path="/SignUp" element={<SignUp/>} />
<Route path="/About-Us" element={<AboutUs userData={userData}/>} />
<Route path="/services" element={<Services userData={userData}/>} />
<Route path="/contact" element={<Contact userData={userData}/>} />
<Route path="/Profile" element={<Profile userData={userData}/>} />
<Route path="/Your-Reservation" element={<AfterReservation userData={userData}/>} />
<Route path="/Reservation" element={<Reservation userData={userData}/>} />
<Route path="/Payment" element={<Payment userData={userData}/>} />
<Route path="/Notification" element={<Notification userData={userData}/>} />
<Route path="/Chat" element={<Chat userData={userData}/>} />
<Route path="/My-Settings" element={<ProfileSettings userData={userData}/>} />
<Route path="/Wallet" element={<Wallet userData={userData}/>} />


</Routes>

</Router>



    </div>
  )
}

export default App;