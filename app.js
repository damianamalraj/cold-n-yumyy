const express = require("express");
require("dotenv").config();
const sequelize = require("sequelize");

const Vote = require("./models/Vote");
const Flavour = require("./models/Flavour");
const res = require("express/lib/response");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const flavours = await Flavour.findAll({ attributes: ["name"] });
  // console.log(flavours);
  res.render("index", { flavours: flavours });
});

app.post("/vote", async (req, res) => {
  const { name, email, flavour } = req.body;
  const oneEmail = await Vote.findOne({ where: { email: email } });
  if (!oneEmail) {
    const oneFlavour = await Flavour.findOne({ where: { name: flavour } });
    const vote = await Vote.create({
      name: name,
      email: email,
      flavourId: oneFlavour.id,
      flavourName: oneFlavour.name,
    });
  } else {
  }

  res.redirect("/tack");
});

app.get("/tack", async (req, res) => {
  const votes = await Vote.findAll({
    attributes: [
      "flavourName",
      [sequelize.fn("COUNT", sequelize.col("flavourId")), "voteCount"],
    ],
    group: "flavourId",
    order: [[sequelize.fn("COUNT", sequelize.col("flavourId")), "DESC"]],
    limit: 10,
  });
  console.log(votes);
  res.render("thanks", { array: votes });
});

const PORT = process.env.PORT ? process.env.PORT : 8000;
app.listen(PORT, () => {
  console.log(`Server up and runnig at ${PORT}`);
});
