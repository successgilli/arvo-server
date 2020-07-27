'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pu.belongsTo(models.Ward, {
        foreignKey: 'wardId',
        onDelete: 'CASCADE'
      })

      Pu.hasMany(models.DataCapture, {
        foreignKey: 'puId',
        onDelete: 'CASCADE'
      })
    }
  };
  Pu.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    wardId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Pu',
  });
  return Pu;
};
