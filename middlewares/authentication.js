const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: "invalidToken" };
    }

    const payload = verifyToken(access_token);
    if (!payload) {
      throw { name: "invalidToken" };
    }

    const user = await findByPk(payload.id);
    if (!user) {
      throw { name: "invalidToken" };
    }

    req.user = { id: user.id };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
