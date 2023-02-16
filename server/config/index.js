const dot = require("dotenv").config();
const config = {
  dev: {
    username: "ethFruitShop",
    password: process.env.DB_PASSWORD,
    database: "ethFruitShop",
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  },
};

module.exports = config;
