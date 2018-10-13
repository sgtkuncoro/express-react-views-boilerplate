"use strict";

var router = require("express").Router();

module.exports = router;

router.get("/", (req, res, next) => {
  res.render("Page/Home", { title: "Home" });
});
