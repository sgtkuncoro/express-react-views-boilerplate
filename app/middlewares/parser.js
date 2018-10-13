"use strict";

var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

module.exports = app => {
  app.use(cookieParser());

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
};
