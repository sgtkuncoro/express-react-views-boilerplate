// 'use strict';

var path = require('path');
var devConfigPath = path.join(__dirname, './development.js');
var testConfigPath = path.join(__dirname, './testing.js');
var productionConfigPath = path.join(__dirname, './production.js');

if (process.env.NODE_ENV === 'production') {

    module.exports = require(productionConfigPath);

} else if (process.env.NODE_ENV === 'test') {

    module.exports = require(testConfigPath);

} else {

    module.exports = require(devConfigPath);

}