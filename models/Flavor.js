const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Flavor extends Model {}

Flavor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: "Flavor",
    sequelize: sequelize,
    timestamps: false,
  }
);

module.exports = Flavor;
