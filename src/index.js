const express = require("express");
const handlebarsConfig = require("./config/handlebarsConfig.js");
const expressConfig = require("./config/expressConfig.js");
const { port } = require("./constans.js");

// local variables
const app = express();

// app configs
handlebarsConfig(app);
expressConfig(app);

// Routing
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => console.log(`Server is listening at port ${port}`));
