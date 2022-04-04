const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

const PORT = process.env.PORT ? process.env.PORT : 8000;
app.listen(PORT, () => {
  console.log(`Server up and runnig at ${PORT}`);
});
