const sequelize = require("../database");

const Vote = require("../models/Vote");
const Flavour = require("../models/Flavour");

Flavour.hasMany(Vote);
Vote.belongsTo(Flavour);

(async () => {
  await sequelize.sync({ force: true });
})();
