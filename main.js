'use strict';

var chalk = require('chalk')
var server = require('http').createServer();

var createApplication = function () {
    var app = require('./app')(app);
    server.on('request', app);
}

var startServer = function (createApplication) {
    
    var PORT = process.env.PORT || 3000;
    server.listen(PORT, function () {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)))
    })
}

startServer(createApplication());