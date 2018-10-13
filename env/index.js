"use strict";

var path = require("path");
var dev = path.join(__dirname, "./dev.js");
var test = path.join(__dirname, "./test.js");
var prod = path.join(__dirname, "./prod.js");

if (process.env.NODE_ENV === "prod") {
  module.exports = require(prod);
} else if (process.env.NODE_ENV === "test") {
  module.exports = require(test);
} else {
  module.exports = require(dev);
}
