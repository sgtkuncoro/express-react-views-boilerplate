"use strict";

var path = require("path");
var chalk = require("chalk");

var rootPath = path.dirname(require.main.filename);

var envPath = require(path.join(rootPath, "./env"));

module.exports = app => {
  app.setValue("env", envPath);
};
