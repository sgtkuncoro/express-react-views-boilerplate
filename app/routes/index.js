"use strict";

var router = require("express").Router();

module.exports = router;

router.use("/", require("./home"));
router.use("/user", require("./user"));

// handle error
router.use((req, res) => {
  res
    .status(404)
    .send("Page not found!")
    .end();
});

/* catch any URLs resembling a file extension */
router.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res
      .status(404)
      .send("You can't do that")
      .end();
  } else {
    next(null);
  }
});

/* error catching endware */
router.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send(err.message || "Internal server error.")
    .end();
});
