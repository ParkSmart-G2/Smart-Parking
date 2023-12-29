const router = require('express').Router();
const { register, login, logout } = require('../controllers/Auth');
const {getAllReservationHistory,getAllReservationsPending} = require('../controllers/reservationController')
const { verifyToken } = require('../middlewares/authJWT');

 
    // Auth routes
    router.post('/register', register);
    router.post('/login', login);
    router.post('/logout', verifyToken, logout);


    //Reservation

router.get('/ReservationsPending/:userEmail',getAllReservationsPending)    
router.get('/ReservationHistory/:userEmail',getAllReservationHistory)



module.exports = router