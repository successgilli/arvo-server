'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataCapture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Lga, {
        foreignKey: 'lgaId',
        onDelete: 'CASCADE'
      });
      this.belongsTo(models.Ward, {
        foreignKey: 'wardId',
        onDelete: 'CASCADE'
      });
      this.belongsTo(models.Pu, {
        foreignKey: 'puId',
        onDelete: 'CASCADE'
      });
      this.hasMany(models.DataCaptureMembership);
      this.hasMany(models.DatatCaptureDesignation);
    }
  };
  DataCapture.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    lgaId: {
      allowNull: false,
      foreignKey: true,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE'
    },
    wardId: {
      allowNull: false,
      foreignKey: true,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE'
    },
    puId: {
      allowNull: false,
      foreignKey: true,
      type: DataTypes.STRING,
      onDelete: 'CASCADE'
    },
    religion: {
      type: DataTypes.STRING
    },
    occupation: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'DataCapture',
  });
  return DataCapture;
};