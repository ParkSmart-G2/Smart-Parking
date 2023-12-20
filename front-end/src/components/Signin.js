



// import React, { useState } from "react";
// import axios from "axios";
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import "./Signin.css"; 

// import Home from ".././Home"

// const SignIn = ({ setUserData }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       console.error("Please fill in all required fields");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:4444/api/auth/login", formData);
//       if(response.data.message === 'Login successful'){
//         console.log('Login successful', response.data.user);
//         setUserData(response.data.user)

      

//     }
     
//     } catch (error) {
//       console.error(error.response.data);
//     }
//   };

//   return (
//     <div className="signin">
//       <h2>Sign In</h2>
//       <form onSubmit={handleSubmit} className="signinContainer">
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           onChange={handleInputChange}
//           required
//         />
//         <br />

//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           onChange={handleInputChange}
//           required
//         />
//         <br />
//         <Button
//         onClick={handleSubmit}
//         component={Link} // Use Link as the component for the button
//         to="/" // Specify the path to the SignUp page
//         variant="contained"
//         style={{ backgroundColor: '#5A4FCF', color: 'white' }}
//         fullWidth
//       >
//         Login
//       </Button>
  
//       </form>
//     </div>
//   );
// };

// export default SignIn;




import React, { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import "./Signin.css"; 
import { useNavigate } from "react-router-dom";

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
    <div className="signin">
      <h2>Login</h2>
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
 
          
        <Button
        onClick={handleSubmit}
        >
      Login
      </Button>
     
     
      </form>
    </div>
  );
};

export default SignIn;
