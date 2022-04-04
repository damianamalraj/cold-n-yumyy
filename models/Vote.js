const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Vote extends Model {}

Vote.init(
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
  },
  {
    modelName: "Vote",
    sequelize: sequelize,
    timestamps: false,
  }
);

module.exports = Vote;
