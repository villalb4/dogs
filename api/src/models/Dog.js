const { DataTypes, INTEGER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    life_span: {
      type: DataTypes.INTEGER,
      get() {
        const value = this.getDataValue('life_span');
        if(!value) return value;
        return value + ' years';
      }
    }
  });
};
