const jwt = require("jsonwebtoken");

const signJwt = (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY);
};
const verifyJWT = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};

module.exports = { signJwt, verifyJWT };
