const router = require("express").Router();
const { getAllCubes } = require("../services/cubeService.js");

router.get("/", (req, res) => {
  const cubes = getAllCubes();
  res.render("home", { cubes });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/404", (req, res) => {
  res.render("404");
});




module.exports = router;
