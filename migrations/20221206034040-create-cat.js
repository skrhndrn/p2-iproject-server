'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      imgUrl: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.STRING
      },
      status: {
        defaultValue: 'Adopt Me!',
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cats');
  }
};