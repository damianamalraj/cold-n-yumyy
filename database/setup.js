const sequelize = require("../database");

const Vote = require("../models/Vote");
const Flavor = require("../models/Flavor");

Flavor.hasMany(Vote);
Vote.belongsTo(Flavor);

(async () => {
  await sequelize.sync({ force: true });
})();
