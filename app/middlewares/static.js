"use strict";
var express = require("express");
var path = require("path");
var logger = require("morgan");

module.exports = app => {
  var pathRoot = path.dirname(require.main.filename);
  var pathAssets = path.join(pathRoot, "assets");

  app.use(logger("dev"));
  app.use(express.static(pathAssets));
};
