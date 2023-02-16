const dot = require("dotenv").config();
const config = {
  dev: {
    username: "ethFruitShop",
    password: "ethFruitShop",
    database: "ethFruitShop",
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  },
};

module.exports = config;
