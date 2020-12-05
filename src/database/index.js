const Sequelize =  require('sequelize');

const databaseConfig = require('../config/db.config.js');

const connection =  new Sequelize(databaseConfig);

try {
  connection.authenticate();
  console.log("Conexão com banco de dados bem sucedida!!");
} catch (error) {
  console.error("Ocorreu algum erro a conectar com banco de dados: ", error);
}

module.exports = connection;