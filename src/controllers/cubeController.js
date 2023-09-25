const router = require("express").Router();
const { createCube, getAllCubes } = require("../services/cubeService.js");

router.get("/create", (req, res) => {
 const cubes = getAllCubes()
 console.log(cubes)
  res.render("create");
});

router.post("/create", (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  const newCube = createCube({ name, description, imageUrl, difficultyLevel });
  res.redirect("/");
});

module.exports = router;
