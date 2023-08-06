const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name:{
      type: DataTypes.STRING,
      allowNull: false
    },

    image:{
      type: DataTypes.STRING,
      defaultValue: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
    },

    hp:{
      type: DataTypes.INTEGER,
    },

    attack:{
      type: DataTypes.INTEGER,
    },

    defense:{
      type: DataTypes.INTEGER,
    },

    speed:{
      type: DataTypes.INTEGER,
    },

    height:{
      type: DataTypes.INTEGER,
    },

    weight:{
      type: DataTypes.INTEGER,
    },
    
  },{timestamps: false});
};
