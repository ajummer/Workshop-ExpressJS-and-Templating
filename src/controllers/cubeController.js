const router = require("express").Router();
const createCube = require("../services/cubeService.js")

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create" , (res,req) => {
  console.log(req.body)
})

module.exports = router;
