'use strict';

var chalk = require('chalk')
var server = require('http').createServer();

/* attach the express application.  */
var createApplication = function () {
    var db = require('./db');
    var app = require('./app')();
    server.on('request', app);
}

var startServer = function (createApplication) {    
    var PORT = process.env.PORT || 3000;
    server.listen(PORT, function () {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)))
    })
}

/* execute */
startServer(createApplication());