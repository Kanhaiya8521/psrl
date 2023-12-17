import dotenv from "dotenv";
dotenv.config();
import { Sequelize, DataTypes } from "sequelize";
const DB_URL = process.env.DB_URL;
const sequelize = new Sequelize(DB_URL, {
  dialect: "postgresql",
  protocol: "postgresql",
  logging: false,
});

const db = {
  sequelize: sequelize,
};

export default db;
