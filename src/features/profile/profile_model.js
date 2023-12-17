import { DataTypes } from "sequelize";
import db from "./../../config/database.js";
import User from "./../user/user_model.js";

const Profile = db.sequelize.define("Profile", {
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  // Add a foreign key that references the User model
  user_id: {
    type: DataTypes.STRING, // Make sure this type matches the type of the User model's primary key
    unique: true, // Ensure uniqueness for user_id
    allowNull: false, // Make user_id non-nullable
  },
});

Profile.belongsTo(User, { foreignKey: "user_id" });
User.hasOne(Profile, { foreignKey: "user_id" });

export default Profile;