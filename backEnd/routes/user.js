const router = require('express').Router();
const { register, login, logout } = require('../controllers/Auth');
const { verifyToken } = require('../middlewares/authJWT');

 
    // Auth routes
    router.post('/register', register);
    router.post('/login', login);
    router.post('/logout', verifyToken, logout);

    



module.exports = router