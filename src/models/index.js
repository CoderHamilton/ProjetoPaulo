const databaseConfig = require('../config/db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(databaseConfig.DB, databaseConfig.USER, databaseConfig.PASSWORD, 
  {
    host: databaseConfig.HOST,
    dialect: databaseConfig.dialect,
    operatorsAliases: false,

    pool:
      {
        max: databaseConfig.pool.max,
        min: databaseConfig.pool.min,
        acquire: databaseConfig.pool.acquire,
        idle: databaseConfig.pool.idle
      }
  });

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;

database.livros = require('./livros.model.js')(sequelize, Sequelize);

module.exports = database;