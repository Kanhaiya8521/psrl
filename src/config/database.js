import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  "postgres://bibvcvcq:96HtzBLcR04bmawgIKv8BQjYy9LDjKDd@peanut.db.elephantsql.com/bibvcvcq",
  {
    dialect: "postgresql",
    protocol: "postgresql",
    logging: false,
  }
);

const db = {
  sequelize: sequelize,
};

export default db;
