'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,

    },
    skills: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.TEXT,
      unique:true,
      allowNull:false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    gdo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:'gdos',
        key:'id'
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:'roles',
        key:'id'
      }
    },
  }, {
    sequelize,
    modelName: 'users',
  });
  return User;
};