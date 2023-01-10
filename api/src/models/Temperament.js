const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Temperament", {
    id: {
      //REVISAR SI ESTE ID NO SE DEBE SETEAR PARA Q NO SE PISE CON EL DEL OTRO MODELO
      type: DataTypes.UUID, //Genera un ID q no se puede pisar con otro
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
