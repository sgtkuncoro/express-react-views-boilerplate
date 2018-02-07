'use strict';

var express = require('express')
var path = require('path');

module.exports = function (app) {

    var pathRoot = path.dirname(require.main.filename);
    var pathPublic = path.join(pathRoot, 'public');

    app.use(express.static(pathPublic));

}