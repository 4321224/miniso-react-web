"use strict";
const { Model } = require("sequelize");
const formatSlug = require("../helpers/formatSLug");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Image, { foreignKey: "productId" });
      Product.belongsTo(models.Category, { foreignKey: "categoryId" });
      Product.belongsTo(models.User, { foreignKey: "authorId" });
    }
  }
  Product.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Name is required",
          },
          notNull: {
            msg: "Name is required",
          },
        },
      },
      slug: {
        type: DataTypes.STRING,
      },
      descriptions: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Description is required",
          },
          notNull: {
            msg: "Description is required",
          },
        },
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "Price is required",
          },
          notNull: {
            msg: "Price is required",
          },
          min: {
            args: 10000,
            msg: "Price minimum 10000",
          },
        },
      },
      mainImg: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Main Images is required",
          },
          notNull: {
            msg: "Main Images is required",
          },
        },
      },
      categoryId: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      hooks: {
        beforeCreate(product) {
          product.slug = product.name.replaceAll(" ", "-");
          // product.description = product.description.slice(0, 254);
        },
      },
      modelName: "Product",
    }
  );
  return Product;
};
