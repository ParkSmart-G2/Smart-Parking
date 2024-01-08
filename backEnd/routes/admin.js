const express = require('express')
const {getAllUsers,UsersInSpot,UsersReserved,UsersNotReserving,allSpots,modifySpotsNumber,getPayments,getUserPayments} = require('../controllers/adminController')

const router = express.Router()
User = require("../models/admin")




router.get('/AllUsers',getAllUsers)    
router.get('/UsersInSpot',UsersInSpot)    
router.get('/UsersReserved',UsersReserved)   
router.get('/UsersNotReserving',UsersNotReserving )   
router.get('/AllSpots',allSpots)   
router.post('/modifySpotsNumber/:userEmail',modifySpotsNumber)   
router.get('/getPayments',getPayments)   

router.get('/getUserPayments/:userEmail',getUserPayments)   
module.exports = router