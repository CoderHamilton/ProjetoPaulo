const { Sequelize } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, Sequelize) => 
  {
    const Livro = sequelize.define("livro", 
      {
        Titulo:
          {
            type: Sequelize.STRING
          },
        Descrição:
          {
            type: Sequelize.STRING
          },
        Ano:
          {
            type: Sequelize.INTEGER
          },
        Publicado:
          {
            type: Sequelize.BOOLEAN
          }
      });

      return Livro;

  };