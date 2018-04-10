'use strict';
var express = require('express')
var path = require('path');
var logger = require('morgan');

module.exports = (app) => {

    var pathRoot = path.dirname(require.main.filename);
    var pathPublic = path.join(pathRoot, 'public');
    var viewPath = path.join(pathRoot, 'views');

    app.use(logger("dev"));
    app.use(express.static(pathPublic));
    app.use(express.static(viewPath));

}