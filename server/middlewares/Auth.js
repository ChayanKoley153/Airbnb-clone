const jwt = require('jsonwebtoken');
const env = require('dotenv').config();

const checkLogin = (req, res, next) => {
      try {
            jwt.verify(req.headers.token, process.env.secretKey);
            next();
      }
      catch (error) {
            return res.status(403).json({ "message": "token is expired or invalid" });
      }
}
module.exports = checkLogin;
console.log("middleware is working");