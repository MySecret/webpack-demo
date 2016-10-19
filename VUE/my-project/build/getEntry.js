/**
 * Created by zhugod on 2016-08-29.
 */
var path = require('path')
var fs = require("fs")
exports.getEntry = function() {
  var jsPath = path.resolve("./src/");
  var dirs = fs.readdirSync(jsPath);
  var matchs = [], files = {};
  dirs.forEach(function (item) {
    matchs = item.match(/(.+)\.js$/);
    if (matchs) {
      files[matchs[1]] = path.resolve("./src/", item);
    }
  });
  files[""]
  return files;
}

