'use strict';

var exhbs = require('express-handlebars');

module.exports = function (app, db) {

    app.setValue = app.set.bind(app);
    app.getValue = function (path) {
        return app.get(path);
    };

    require('./appVariables')(app);
    require('./staticMiddleware')(app);
    require('./parsingMiddleware')(app);

    app.engine('html', exhbs({
        defaultLayout: "main",
        extname: '.html'
    }));

};