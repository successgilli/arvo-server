'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Lga.hasMany(models.Ward, {
        foreignKey: 'lgaId',
        onDelete: 'CASCADE'
      });

      Lga.hasMany(models.DataCapture, {
        foreignKey: 'lgaId',
        onDelete: 'CASCADE'
      })

    }
  };
  Lga.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Lga',
  });
  return Lga;
};
