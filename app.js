const express = require("express");
require("dotenv").config();

const Vote = require("./models/Vote");
const Flavor = require("./models/Flavor");
const { getAttributes } = require("./models/Vote");
const res = require("express/lib/response");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const flavors = await Flavor.findAll({ attributes: ["name"] });
  // console.log(flavors);
  res.render("index", { flavors: flavors });
});

app.post("/vote", async (req, res) => {
  const { name, email, flavor } = req.body;
  const oneEmail = await Vote.findOne({ where: { email: email } });
  if (!oneEmail) {
    const oneFlavor = await Flavor.findOne({ where: { name: flavor } });
    const vote = await Vote.create({
      name: name,
      email: email,
      flavorId: oneFlavor.id,
    });

    console.log("the one flavor " + oneFlavor.id);
  }

  res.redirect("/tack");
});

app.get("/tack", (req, res) => {
  res.render("tack");
});

const PORT = process.env.PORT ? process.env.PORT : 8000;
app.listen(PORT, () => {
  console.log(`Server up and runnig at ${PORT}`);
});
