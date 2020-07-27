'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataCaptureMembership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.DataCapture);
      this.belongsTo(models.MembershipStatus)
    }
  };
  DataCaptureMembership.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    DataCaptureId: DataTypes.INTEGER,
    MembershipStatusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DataCaptureMembership',
  });
  return DataCaptureMembership;
};