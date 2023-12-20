import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    plateNumber: "",
    email: "",
    password: "",
    phoneNumber: "",
    isAdmin: false,
    isUser: false,
    codeAdmin: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      plateNumber,
      email,
      password,
      phoneNumber,
      isAdmin,
      isUser,
      codeAdmin,
    } = formData;

    if (!firstName || !lastName || !plateNumber || !email || !password || !phoneNumber) {
      console.error("Please fill in all required fields");
      return;
    }

    try {
      let signUpPath = "";

      if (isAdmin) {
        signUpPath = "http://localhost:4444/createAdmin";
        if (!codeAdmin) {
          console.error("Please enter the Admin code");
          return;
        }
      } else {
        signUpPath = "http://localhost:4444/api/auth/register";
      }

      const response = await axios.post(signUpPath, formData);
      console.log(response.data);
      window.location.href = '/Signin'

    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="signup">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="signupContainer">
        <label>First Name:</label>
        <input type="text" name="firstName" onChange={handleInputChange} required />
        <br />

        <label>Last Name:</label>
        <input type="text" name="lastName" onChange={handleInputChange} required />
        <br />

        <label>Plate Number:</label>
        <input type="text" name="plateNumber" onChange={handleInputChange} required />
        <br />

        <label>Email:</label>
        <input type="email" name="email" onChange={handleInputChange} required />
        <br />

        <label>Password:</label>
        <input type="password" name="password" onChange={handleInputChange} required />
        <br />

        <label>Contact Number:</label>
        <input type="text" name="phoneNumber" onChange={handleInputChange} required />
        <br />

        <label>
          Admin:
          <input
            type="checkbox"
            name="isAdmin"
            checked={formData.isAdmin}
            onChange={handleCheckboxChange}
          />
        </label>

        <label>
          User:
          <input
            type="checkbox"
            name="isUser"
            checked={formData.isUser}
            onChange={handleCheckboxChange}
          />
        </label>

        {formData.isAdmin && (
          <>
            <br />
            <label>Admin Code:</label>
            <input
              type="text"
              name="codeAdmin"
              onChange={handleInputChange}
              required
            />
          </>
        )}
        <br />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignUp;