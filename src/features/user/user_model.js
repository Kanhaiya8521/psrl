import { Sequelize, DataTypes } from "sequelize";
import db from "../../config/database.js";
// console.log("ythgbbghghhg", db.sequelize.define());
const User = db.sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other options if needed
  }
);

export default User;
