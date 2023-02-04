const { Product, Image, Category } = require("../models");

class publicController {
  static async readProduct(req, res, next) {
    try {
      const data = await Product.findAll({
        include: [Category],
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async readDetailProduct(req, res, next) {
    try {
      const { detail } = req.query;
      const data = await Product.findOne({
        where: {
          detail,
        },
        include: [Category, Image],
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async readProductById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Product.findOne({
        where: {
          id,
        },
        include: [Category, Image],
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = publicController;
