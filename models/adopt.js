'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adopt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Adopt.init({
    fullName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    about: DataTypes.TEXT,
    donation: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    CatId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Adopt',
  });
  return Adopt;
};