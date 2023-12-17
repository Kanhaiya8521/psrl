import { Sequelize, DataTypes } from "sequelize";
import db from "../../config/database.js";
// import Profile from "./../profile/profile_model.js"
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

// Set up the association with explicit foreign key names
// User.hasOne(Profile, { foreignKey: "user_id" }); // Specify the foreign key column in Profile
// Profile.belongsTo(User, { foreignKey: "user_id" }); // Specify the foreign key column in Profile

export default User;
