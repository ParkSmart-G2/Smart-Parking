const User = require('../models/user')
const bcrypt = require('bcrypt');
const { generateToken } = require('../middlewares/authJWT');


const isPhoneNumberValid = (phoneNumber) => {

  return phoneNumber.length === 8 ;
};
function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isPlateNumberValid(plateNumber) {
  const plateNumberRegex1 = /^\d+\s?نت$/;
  const plateNumberRegex2 = /^\d+\s?rs$/;
  const plateNumberRegex3 = /^0[1-9]$|^1\d$|^2[0-3]$/;
  const plateNumberRegex4 = /^(\d{1,4}\s?تونس\s?\d{1,2}|[1-9]\d{4})$/;

  return (
    plateNumberRegex1.test(plateNumber) ||
    plateNumberRegex2.test(plateNumber) ||
    plateNumberRegex3.test(plateNumber) ||
    plateNumberRegex4.test(plateNumber)
  );
}

// Register
exports.register = async (req, res) => {
  const { firstName, lastName, plateNumber, password, email,phoneNumber, isAdmin, codeAdmin,image } = req.body;

  // Validate email format
  if (!isEmailValid(email)) {
    return res.status(400).send({ message: 'Invalid email format.' });
  }

  if (!firstName || !lastName || !plateNumber || !password || !email || !phoneNumber) {
    return res.status(400).send({ message: 'All fields are required.' });
  }

  if (!isPlateNumberValid(plateNumber)) {
    return res.status(400).send({ message: 'Invalid plate number format.' });
  }
  
  if (!isPhoneNumberValid(phoneNumber)) {
    return res.status(400).send({ message: 'Invalid phone number format.' });
  }
  
  try {
    // Check if it's an admin signup and validate admin code
    if (isAdmin) {
      if (codeAdmin !== 'rbk-smart2023') {
        return res.status(400).send({ message: 'Invalid admin code' });
      }
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).send({ message: 'Email already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      plateNumber,
      password: hashedPassword,
      email,
      phoneNumber,
      isAdmin,
      image,
    });

    await newUser.save();

    return res.status(200).send({ message: `User ${email} has been created successfully.` });
  } catch (err) {
    return res.status(400).send({ message: err.message || 'Invalid credentials: username and email should be unique, password should be more than 6 characters.' });
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!password || !email) {
    res.status(400).send({ message: 'Enter your email and password.' });
    return;
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).send({ message: 'Wrong credentials: User not exist' });
      return;
    }

    const verifiedPassword = await bcrypt.compare(password, user.password);

    if (!verifiedPassword) {
      res.status(401).send({ message: 'Wrong credentials!' });
    } else {
      // Generate access token
      const token = generateToken(user);

      res.status(200).send({
        
        message: 'Login successful',
        // user: {
        //   id: user._id,
        //   firstName:user.firstName,
        //   lastName: user.lastName,
        //   plateNumber:user.plateNumber,
        //   phoneNumber:user.phoneNumber,
        //   email: user.email,
        //   password:user.password,
        //   accessToken: token,
        // },
        user:user,
      });

    }
    
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Internal server error.' });
  }
};


exports.logout = async (req, res) => {
  try {
    const userId = req.payload.id;

    const user = await User.findById(userId);

    if (!user) return res.status(400).send({ message: 'User not exist' });

    res.status(200).send({
      user: {
        id: null,
        username: null,
        email: null,
        accessToken: null,
      },
      message: 'Logout successfully.',
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Internal server error.' });
  }
};