const dot = require("dotenv").config();
const config = {
  dev: {
    username: "ethFruitShop",
    password: process.env.DB_PASSWORD,
    database: "ethFruitShop",
    host: "127.0.0.1",
    dialect: "mysql",
    port: 3306,
    logging: false,
    operatorsAliases: 0,
  },
};

module.exports = config;
