"use strict"
const { comparePassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');
const { User } = require('../models');


class UserController{
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body
      const user = await User.create({ username, email, password, phoneNumber, address})

      res.status(201).json({message: "Success create account", id:user.id, email:user.email})

    } catch (error) {
      next(error)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      if (!email) {
        throw {name: "noEmail"}
      }
      if (!password) {
        throw {name: "noPassword"}
      }

      const user = await User.findOne({ where: {email} })
      if (!user) {
        throw {name: "invalidLogin"}
      }

      const validPass = comparePassword(password, user.password)
      if (!validPass) {
        throw {name: "invalidLogin"}
      }

      const payload = {id: user.id}

      const access_token = createToken(payload)

      res.status(201).json({username: user.username, email: user.email, access_token: access_token})

    } catch (error) {
      next(error)
    }
  }

  static async githubLogin(req, res, next) {
    try {
      const { githubToken } = req.body;

      if (!githubToken) {
        throw { name: "invalidLogin" };
      }

      const dataGithub = await axios({
        method: "get",
        url: "https://api.github.com/user",
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
      });

      const githubUsername = dataGithub.data.login;

      const [user, created] = await User.findOrCreate({
        where: { username: githubUsername },
        defaults: {
          username: githubUsername,
          email: `${githubUsername}@github.com`,
          password: "github",
        },
        hooks: false,
      });

      const access_token = generateToken({ id: user.id });

      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController