"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelizeVariamos = new sequelize_1.Sequelize("DataBase Name", "DataBase User", "DataBase Password", {
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
});
exports.default = sequelizeVariamos;
