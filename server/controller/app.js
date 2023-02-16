const express = require("express");
const app = express();
const txRouter = require("../routes/transaction");
const { sequelize } = require("../models");
app.use(express.json());
const cors = require("cors");
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB연결 완료");
  })
  .catch((err) => {
    console.log("DB연결 에러 : ", err);
  });
app.use("/api", txRouter);
const options = {
  origin: "http://localhost:80",
};
app.use(cors(options));
app.listen(4000, () => {
  console.log("server start");
});
