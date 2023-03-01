require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "nodebird",
    host: "127.0.0.1",
    port: "3307",
    dialect: "mysql",
    operatorsAliases: "false",
  },
  production: {
    username: "root",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "nodebird",
    host: "127.0.0.1",
    port: "3307",
    dialect: "mysql",
    operatorsAliases: false,
    logging: false,
  },
};
