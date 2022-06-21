'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gdo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gdo.init({
    id:{ 
   type: DataTypes.INTEGER,
   allowNull:false,
   primaryKey:true,
   autoIncrement:true
    },
    gdo: {
     type: DataTypes.TEXT,
     allowNull:false
    }
  }, {
    sequelize,
    modelName: 'gdos',
  });
  return Gdo;
};