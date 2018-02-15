'use strict';

var path = require('path');
var chalk = require('chalk');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var env = require(path.join(__dirname, '../env'));

var options = {
    useMongoClient: true,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0
};

var db = mongoose.connect(env.DATABASE_URI, options, function (err) {
    if (err) {
        console.log('Database Connection is Failed!')
    }
    console.log(chalk.blue('Database Connection is Successfull! : on ' + env.DATABASE_URI))
});

module.exports = db;