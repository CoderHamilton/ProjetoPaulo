const { Sequelize } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, Sequelize) => 
  {
    const Livros = sequelize.define("livro", 
      {
        titulo:
          {
            type: Sequelize.STRING
          },
        descrição:
          {
            type: Sequelize.STRING
          },
        ano:
          {
            type: Sequelize.INTEGER
          },
        publicado:
          {
            type: Sequelize.BOOLEAN
          }
      });

      return Livros;

  };