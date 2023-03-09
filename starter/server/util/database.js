require("dotenv").config();
const { CONNESTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNESTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  sequelize
};
