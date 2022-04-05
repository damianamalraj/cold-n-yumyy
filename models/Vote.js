const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Vote extends Model {}

Vote.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flavorId: {
      type: DataTypes.INTEGER,
      foreiginKey: true,
      allowNull: false,
    },
  },
  {
    modelName: "vote",
    sequelize: sequelize,
    timestamps: false,
  }
);

module.exports = Vote;
