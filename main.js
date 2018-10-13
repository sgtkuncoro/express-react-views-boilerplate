"use strict";

var chalk = require("chalk");
var server = require("http").createServer();

/* attach the express application.  */
var app = require("./app")();
server.on("request", app);

var PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(chalk.blue("Server started on port", chalk.magenta(PORT)));
});
