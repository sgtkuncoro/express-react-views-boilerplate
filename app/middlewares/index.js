"use strict";

module.exports = (app, db) => {
  app.setValue = app.set.bind(app);
  app.getValue = path => {
    return app.get(path);
  };

  require("./variable")(app);
  require("./parser")(app);
  require("./template")(app);
  require("./static")(app);
};
