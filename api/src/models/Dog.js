const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,             //Genera un ID q no se puede pisar con otro
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    height:{
      type: DataTypes.JSON,
      allowNull: false,
    },
    weight:{
      type: DataTypes.JSON,
      allowNull: false,
    },
    life_span:{
      type: DataTypes.STRING,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    createdInDb:{                       //Esto ayuda a traer los datos creados por mi de manaera más rápida de la base de datos
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,

    },
    image:{
      type: DataTypes.STRING,
      allowNull: true
    }
  });
};
