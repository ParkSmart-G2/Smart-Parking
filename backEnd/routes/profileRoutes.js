const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Update user profile
router.put('/update-profile/:userId', async (req, res) => {
  const userId = req.params.userId;
  const updatedProfile = req.body; // Assuming you send the updated profile data in the request body

  try {
    const user = await User.findByIdAndUpdate(userId, updatedProfile, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Profile updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
