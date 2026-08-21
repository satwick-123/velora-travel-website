const express = require("express");
const router = express.Router();
const { getAllHotels } = require("../data/hotels");

router.get("/", (req, res) => {
  const hotels = getAllHotels().slice(0, 3);
  res.render("home", { title: "Velora | Find your next stay", hotels });
});

router.get("/stays", (req, res) => {
  const hotels = getAllHotels();
  res.render("listings", { title: "Velora | Stays", hotels });
});

module.exports = router;
