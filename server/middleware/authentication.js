const { verifyJWT } = require("../helpers/jwt");
const { User, Product } = require("../models");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw {
        code: 401,
        msg: "UnAuthorized",
      };
    }
    const payload = verifyJWT(access_token);
    const user = await User.findByPk(payload.id);
    if (!user) {
      throw {
        code: 401,
        msg: "Invalid Token",
      };
    }

    req.user = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    };
    next();
  } catch (error) {
    next(error);
  }
};

const authorization = async (req, res, next) => {
  try {
    const { role } = req.user;

    if (role !== "Admin") {
      throw {
        code: 403,
        msg: "Admin access only",
      };
    }
    next();
  } catch (error) {
    next(error);
  }
};

const AuthorizationProduct = async (req, res, next) => {
  try {
    const { id, role } = req.user;
    const productId = req.params.id;
    if (role === "Admin") {
      return next();
    }

    const findProduct = await Product.findOne({
      where: {
        id: productId,
      },
    });

    if (!findProduct) {
      throw {
        code: 404,
        msg: "Product not found",
      };
    }
    if (role !== "Admin") {
      throw {
        code: 403,
        msg: "Forbidden",
      };
    }
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = { authentication, authorization, AuthorizationProduct };
