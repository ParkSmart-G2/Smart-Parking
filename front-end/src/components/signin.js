import React, { useState } from "react";
import axios from "axios";
import "./Signin.css"; 
const SignIn = () => {
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
      const response = await axios.post("http://localhost:4444/signin", formData);
      console.log(response.data);
      
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="signin">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="signinContainer">
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

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;