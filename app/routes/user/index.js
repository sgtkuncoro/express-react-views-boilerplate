"use strict";

var router = require("express").Router();

module.exports = router;

router.get("/", (req, res) => {
  res.render("Page/User", { title: "User" });
});
