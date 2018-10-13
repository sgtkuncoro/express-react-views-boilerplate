var path = require("path");
var reactViews = require("express-react-views");

module.exports = app => {
  var pathRoot = path.dirname(require.main.filename);
  var viewPath = path.join(pathRoot, "views");

  app.set("views", viewPath);
  app.set("view engine", "jsx");
  var options = { beautify: true, doctype: "<!DOCTYPE html>" };
  app.engine("jsx", reactViews.createEngine(options));
};
