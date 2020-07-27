'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ward.belongsTo(models.Lga, {
        foreignKey: 'lgaId',
        onDelete: 'CASCADE'
      })

      Ward.hasMany(models.Pu, {
        foreignKey: 'wardId',
        onDelete: 'CASCADE'
      })

      Ward.hasMany(models.DataCapture, {
        foreignKey: 'wardId',
        onDelete: 'CASCADE'
      })
    }
  };
  Ward.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    lgaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ward',
  });
  return Ward;
};
