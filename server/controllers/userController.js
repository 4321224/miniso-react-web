const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { signJwt } = require("../helpers/jwt");

class userController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw {
          code: 400,
          msg: "Email is required",
        };
      }
      if (!password) {
        throw {
          code: 400,
          msg: "Password is required",
        };
      }

      const data = await User.findOne({
        where: {
          email,
        },
      });
      if (!data) {
        throw {
          code: 401,
          msg: "Invalid Email/Password",
        };
      }
      const matchPassword = comparePassword(data.password, password);
      if (!matchPassword) {
        throw {
          code: 401,
          msg: "Invalid Email/Password",
        };
      }
      const payload = {
        id: data.id,
        email: data.email,
      }
      const token = signJwt(payload);
      res.status(200).json({
        statusCode: 200,
        email: data.email,
        access_token: token,
      });
    } catch (error) {
      // console.log(error, "ini error login<<<");
      next(error);
    }
  }
  static async register(req, res, next) {
    try {
      const { username, email, password, address, phoneNumber } = req.body;
      console.log(req.body);
      const user = await User.create({
        username,
        email,
        password,
        address,
        phoneNumber,
        role: "Admin"
      });
      console.log(user, "ini user");
      res.status(201).json({
        email: user.email,
        role: user.role
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = userController;
