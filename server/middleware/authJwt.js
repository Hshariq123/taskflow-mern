const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.JWT_SECRET_KEY;

const authenticateToken = async (req, res, next) => {
    let token = req.header('Authorization');

    if (!token) return res.status(401).send({ message: 'Authentication Failed!' });
    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).send({ message: 'Token is not valid! Please Login Again.' });
        req.user = user;
        next();
    })
}



module.exports = authenticateToken;