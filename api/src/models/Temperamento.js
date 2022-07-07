const {DataTypes} = require('sequelize');

module.export = (sequelize) => {
  sequelize.define('temperamento', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    }
  })
}