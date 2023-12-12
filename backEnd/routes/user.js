const express = require('express')
const router = express.Router()
User = require("../models/user")

//creating One user

//getting One user

//getting ALL user
router.get('/allUser', async (req, res) => {
    try {
      const users = await User.find()
      res.json(subscribers)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

//Updating user

//deleting one user


module.exports = router