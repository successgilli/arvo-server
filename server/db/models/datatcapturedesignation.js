'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DatatCaptureDesignation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.DataCapture)
      this.belongsTo(models.Designation)
    }
  };
  DatatCaptureDesignation.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    DesignationId: {
      allowNull: false,
      foreignKey: true,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE'
    },
    DataCaptureId: {
      allowNull: false,
      foreignKey: true,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'DatatCaptureDesignation',
  });
  return DatatCaptureDesignation;
};
