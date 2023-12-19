
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css"

import SignUp from "./components/signup"
import SignIn from "./components/signin"
import Home from "./components/home"

function App() {
  return (
    <div className="App">
<Router>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/SignIn" element={<SignIn/>} />
<Route path="/SignUp" element={<SignUp/>} />

</Routes>

</Router>



    </div>
  )
}

export default App;