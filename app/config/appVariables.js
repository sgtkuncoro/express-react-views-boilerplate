'use strict';

var path = require('path');
var chalk = require('chalk');

var rootPath = path.dirname(require.main.filename);

var envPath = require(path.join(rootPath, './env'));
var viewPath = path.join(rootPath, 'views');

module.exports = function (app) {
    app.setValue('env', envPath);
    app.setValue('views', viewPath);
    app.setValue('view engine', 'html');
};