
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Signup.css";

const fakeImages = {
  male: "https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704672000&semt=ais",
  female: "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704672000&semt=ais",
};

const SignUp = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    cin: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    isAdmin: false,
    isUser: false,
    codeAdmin: "",
    gender: "",
    image: "",
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

  const handleGenderChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      gender: value,
      image: value === "male" ? fakeImages.male : fakeImages.female,
    });
  };

  const handleSubmit = async () => {
    const {
      firstName,
      lastName,
      cin,
      email,
      password,
      confirmPassword,
      phoneNumber,
      isAdmin,
      isUser,
      codeAdmin,
      image,
    } = formData;

    if (!firstName || !lastName || !cin || !email || !password || !phoneNumber) {
      console.error("Please fill in all required fields");
      setError("Please fill in all required fields");
      return;
    }

    if (isAdmin && !codeAdmin) {
      console.error("Please enter the Admin code");
      setError("Please enter the Admin code");
      return;
    }

    if (password !== confirmPassword) {
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

      const response = await axios.post(signUpPath, {
        firstName,
        lastName,
        cin,
        email,
        password,
        phoneNumber,
        isAdmin,
        isUser,
        codeAdmin,
        image,
      });

      console.log(response.data);
      window.location.href = "/";
    } catch (error) {
      console.error(error.response.data);
      setError(error.response.data.message || "An error occurred during registration");
    }
  };

  return (
    <div>
      <div className="adjusteSignup1">
        <div style={{ margin: "20px" }}>
          <div style={{ textAlign: "center" }}>
            <div className="titleS">
              <h1>Sign Up</h1>
            </div>
          </div>
          <p className="pS">
            Already have an account?{" "}
            <Link style={{ color: "#2998FF", padding: "20px" }} to="/">
              Go back to Login
            </Link>
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "50px",
            }}
          >
            <div style={{ flex: "1", marginRight: "20px", marginBottom: "20px" }}>
              {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              />
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              />
              <label>Cin:</label>
              <input
                type="text"
                name="cin"
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              />
            </div>
            <div style={{ flex: "1", marginLeft: "20px" }}>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              />
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              />
              <label>Contact Number:</label>
              <input
                type="text"
                name="phoneNumber"
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              />
              <label>Gender:</label>
              <select
                name="gender"
                onChange={handleGenderChange}
                value={formData.gender}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <label>
              User:
              <input
                type="checkbox"
                name="isUser"
                checked={formData.isUser}
                onChange={handleCheckboxChange}
              />
            </label>
            <label>
              Admin:
              <input
                type="checkbox"
                name="isAdmin"
                checked={formData.isAdmin}
                onChange={handleCheckboxChange}
              />
            </label>
          </div>
          {formData.isAdmin && (
            <>
              <label>Admin Code:</label>
              <input
                type="text"
                name="codeAdmin"
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              />
            </>
          )}
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "10px",
              padding: "30px",
            }}
          >
            <button
              style={{
                backgroundColor: "#2998FF",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
