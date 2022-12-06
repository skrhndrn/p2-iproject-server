'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cat.belongsToMany(models.User, { through: models.Favorite })
      Cat.belongsToMany(models.User, { through: models.Adopt })
    }
  }
  Cat.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    age: DataTypes.STRING,
    gender: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    about: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cat',
  });
  return Cat;
};