



import React, { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import "./Signin.css"; 
import { useNavigate } from "react-router-dom";
import loginimage from "../images/loginimage.jpg"

const SignIn = ({ setUserData }) => {
 


  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      console.error("Please fill in all required fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4444/api/auth/login", formData);
      if (response.data.message === 'Login successful') {
        console.log('Login successful', response.data.user);

        setUserData(response.data.user);
        navigate('/Home')
      }
      // if(setUserData(response.data.user)!==null){
      //   console.log('hello')
      // }
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <div className="adjuste">
      <div>
      
    <div className="signin">
 
            <form onSubmit={handleSubmit} className="signinContainerandSignIn">

     
      <form onSubmit={handleSubmit} className="signInContainer">
      <h1>Login</h1>
      <br></br>
 
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          required
        />
        <br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          required
        />
        <br />
 

             <button type="submit"  onClick={handleSubmit}>Login</button>
             <br />
             <br></br>
             
             <p>Don't have an account? <Link to="/SignUp"> Sign Up</Link></p> 
      </form>
      

      </form>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
    <div className="loginimage">
   
       <img src={loginimage} alt="loginimage"  className="loginimage"/>
 
       </div>
    </div>
  );
};

export default SignIn;
