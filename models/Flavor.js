const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Flavor extends Model {}

Flavor.init(
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
    modelName: "flavor",
    sequelize: sequelize,
    timestamps: false,
  }
);

module.exports = Flavor;
