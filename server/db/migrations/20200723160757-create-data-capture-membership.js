'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DataCaptureMemberships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DataCaptureId: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE'
      },
      MembershipStatusId: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE'
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DataCaptureMemberships');
  }
};
