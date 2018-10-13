"use strict";

var express = require("express");
var app = express();

module.exports = () => {
  require("./middlewares")(app);
  require("./db")(app);
  app.use("/", require("./routes"));

  return app;
};
