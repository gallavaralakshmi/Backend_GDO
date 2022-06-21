'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGoals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserGoals.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    user_id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'users',
        key:"id",
      }
    },
    goal_name:{
      type:DataTypes.TEXT,
    },
    status: {
      type:DataTypes.TEXT,
      allowNull:false,
    },
    created_date:{
      type:DataTypes.DATEONLY,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'usergoals',
  });
  return UserGoals;
};