import { Sequelize, DataTypes } from "sequelize";
import db from "../../config/database.js";
const User = db.sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    // tableName: "User",
  }
);

export default User;
