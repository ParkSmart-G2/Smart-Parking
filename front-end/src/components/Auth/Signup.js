import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState(null);
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

    if (
      !firstName ||
      !lastName ||
      !plateNumber ||
      !email ||
      !password ||
      !phoneNumber
    ) {
      console.error("Please fill in all required fields");
      setError("Please fill in all required fields");
      return;
    }

    if (isAdmin && !codeAdmin) {
      console.error("Please enter the Admin code");
      setError("Please enter the Admin code");
      return;
    }

    // Check if password and confirmPassword match
    if (password !== formData.confirmPassword) {
      console.error("Password and Confirm Password do not match");
      setError("Password and Confirm Password fields do not match");
      return;
    }

    try {
      let signUpPath = "";

      if (isAdmin) {
        signUpPath = "http://localhost:4444/api/auth/register";
      } else {
        signUpPath = "http://localhost:4444/api/auth/register";
      }

      // Instead of sending formData, send only the relevant fields
      const response = await axios.post(signUpPath, {
        firstName,
        lastName,
        plateNumber,
        email,
        password,
        phoneNumber,
        isAdmin,
        isUser,
        codeAdmin,
      });

      console.log(response.data);
      window.location.href = "/";
    } catch (error) {
      console.error(error.response.data);
      setError(
        error.response.data.message || "An error occurred during registration"
      );
    }
  };

  return (
    <div>
      <div className="login"></div>
      <div className="signupContainer">
        <form onSubmit={handleSubmit} className="signupContainerandSignUp">
          <h1>Sign Up</h1>
          {error && <p className="error-message">{error}</p>}
          <p>
            you have an account? <Link to="/"> go back to Login</Link>
          </p>
          <br />
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

          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleInputChange}
            required
          />
          <br />

          <label>Contact Number:</label>
          <input type="text" name="phoneNumber" onChange={handleInputChange} required />
          <br />

          <div>
            <label>
              Admin:
              <input
                type="checkbox"
                name="isAdmin"
                checked={formData.isAdmin}
                onChange={handleCheckboxChange}
              />
            </label>
            <label>   </label>
            <label>
               User:
              <input
                type="checkbox"
                name="isUser"
                checked={formData.isUser}
                onChange={handleCheckboxChange}
              />
            </label>
          </div>
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
