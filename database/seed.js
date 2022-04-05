const sequelize = require("../database");

const Flavor = require("../models/Flavor");

(async () => {
  await Flavor.bulkCreate([
    { name: "Vanilj" },
    { name: "Päron" },
    { name: "Choklad" },
    { name: "hasselnöt" },
    { name: "Mandel" },
    { name: "Äpple" },
    { name: "Banan" },
    { name: "Apelsin" },
    { name: "Mint" },
    { name: "Druva" },
  ]);
})();
