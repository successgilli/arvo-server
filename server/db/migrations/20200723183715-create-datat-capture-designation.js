'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DatatCaptureDesignations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DesignationId: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE'
      },
      DataCaptureId: {
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
    await queryInterface.dropTable('DatatCaptureDesignations');
  }
};