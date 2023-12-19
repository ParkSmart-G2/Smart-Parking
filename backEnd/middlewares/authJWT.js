require('dotenv').config();
const jwt = require('jsonwebtoken');
const accessSecretKey = process.env.ACCESS_SECRET_KEY;




exports.generateToken = (user) => {
    const payload = {id: user.id}
const secretKey = 'secret'
    return jwt.sign(payload,secretKey)
}



// Verify token
exports.verifyToken = (req, res, next) => {
    const headersToken = req.headers.authorization;
    
    if(!headersToken) return res.status(401).send({message: "No access token sended."});

    const token = headersToken.split(' ')[1];

    jwt.verify(token, accessSecretKey, (err, payload) => {
        
        if(err) return res.status(403).send({message: "You are not authorized."});

        console.log(payload); 

        req.payload = payload;
        
        next();

    });

}