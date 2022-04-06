const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Flavour extends Model {}

Flavour.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: "flavour",
    sequelize: sequelize,
    timestamps: false,
  }
);

module.exports = Flavour;
