'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Link.init({
    slug: DataTypes.STRING,
    description: DataTypes.STRING,
    link: DataTypes.STRING,
    shortLink: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Link',
  });
  return Link;
};