const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

const createToken = (payload) => {
  return jwt.sign(payload, SECRET);
};

const verifyToken = (token, SECRET) => {
  return jwt.verify(token, SECRET);
};

module.exports = { createToken, verifyToken };
