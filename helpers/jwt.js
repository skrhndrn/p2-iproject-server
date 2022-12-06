const jwt = require("jsonwebtoken");
const SECRET = "rahasia";

const createToken = (payload) => {
  return jwt.sign(payload, SECRET);
};

const verifyToken = (token, SECRET) => {
  return jwt.verify(token, SECRET);
};

module.exports = { createToken, verifyToken };
