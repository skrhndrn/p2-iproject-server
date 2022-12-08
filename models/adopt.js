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
      Adopt.belongsTo(models.User)
      Adopt.belongsTo(models.Cat)
    }
  }
  Adopt.init({
    fullName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Full name is required"},
        notEmpty: {msg: "Full name is required"},
        isLong(value) {
          if (value.length < 6) {
            throw new Error("Full Name must be more than 6 characters!")
          }
        }
      },
    },
    phoneNumber: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Phone number is required"},
        notEmpty: {msg: "Phone number is required"},
      },
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Address is required"},
        notEmpty: {msg: "Address is required"},
      },
    },
    about: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "About me is required"},
        notEmpty: {msg: "About me is required"},
      },
    },
    donation: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {msg: "Donation amount is required"},
        notEmpty: {msg: "Donation amount is required"},
        minDonate(value) {
          if (value < 100000) {
            throw new Error("Minimum amount of donation should be above Rp.100.000,-")
          }
        }
      },
    },
    UserId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    CatId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Adopt',
  });
  return Adopt;
};