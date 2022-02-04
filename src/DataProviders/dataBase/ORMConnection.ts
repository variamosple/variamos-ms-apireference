import { Sequelize } from "sequelize";

const sequelizeVariamos = new Sequelize(
  "DataBase Name",
  "DataBase User",
  "DataBase Password",
  {
    host: "...",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    dialectOptions: {
      ssl: true,
    },
  }
);
export default sequelizeVariamos;
