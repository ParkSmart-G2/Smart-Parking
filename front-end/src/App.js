
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css"

import SignUp from "./components/Signup"
import SignIn from "./components/Signin"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import  Navbar  from "./components/NavBar";
import Profile from "./components/Profile";
import AfterReservation from "./components/AfterReservation";
import Reservation from "./components/Reservation"
import Payment from "./components/Payment"



function App() {
  return (
    <div className="App">
    
<Router>

<Navbar />

<Routes>
<Route path="/" element={<Home/>} />
<Route path="/SignIn" element={<SignIn/>} />
<Route path="/SignUp" element={<SignUp/>} />
<Route path="/About-Us" element={<AboutUs/>} />
<Route path="/services" element={<Services/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/Profile" element={<Profile/>} />
<Route path="/Your-Reservation" element={<AfterReservation/>} />
<Route path="/Reservation" element={<Reservation/>} />
<Route path="/Payment" element={<Payment/>} />

</Routes>

</Router>



    </div>
  )
}

export default App;