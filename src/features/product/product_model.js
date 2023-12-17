import { Sequelize, DataTypes } from "sequelize";
import db from "../../config/database.js";
const Product = db.sequelize.define(
  "Product",
  {
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    product_name: {
      type: DataTypes.STRING,
    },
    product_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);

export default Product;
