'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DataCaptures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      lgaId: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE'
      },
      wardId: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE'
      },
      puId: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.STRING,
        onDelete: 'CASCADE'
      },
      religion: {
        type: Sequelize.STRING
      },
      occupation: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DataCaptures');
  }
};
