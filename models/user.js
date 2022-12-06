'use strict';
const { hashPassword } = require('../helpers/bcrypt');
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
      User.belongsToMany(models.Favorite, { through: models.Favorite })
      User.belongsToMany(models.Adopt, { through: models.Adopt })
    }
  }
  User.init({
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Username is required"},
        notEmpty: {msg: "Username is required"},
      },
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: {msg: "Email must be unique"},
      validate: {
        notNull: {msg: "Email is required"},
        notEmpty: {msg: "Email is required"},
        isEmail: {msg: "Use email format"}
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Password is required"},
        notEmpty: {msg: "Password is required"},
        len: {
          args: 5,
          msg: "Password must be more than 5 characters"
        }
      },
    },
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user) => {
    user.password = hashPassword(user.password)
  })
  return User;
};