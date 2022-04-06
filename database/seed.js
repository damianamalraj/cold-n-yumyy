const sequelize = require("../database");

const Flavour = require("../models/Flavour");

(async () => {
  await Flavour.bulkCreate([
    { name: "Vanilla" },
    { name: "Pear" },
    { name: "Chocolate" },
    { name: "Hazelnut" },
    { name: "Almond" },
    { name: "Apple" },
    { name: "Banana" },
    { name: "Orange" },
    { name: "Mint" },
    { name: "Grape" },
  ]);
})();
