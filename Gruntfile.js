var fs = require('fs');
var path = require('path');

module.exports = function (grunt) {
  var configPath = path.resolve('./build/config');
  var taskPath = path.resolve('./build/tasks');

  fs.readdirSync(configPath)
    .forEach(function (fileName) {
      require(path.join(configPath, fileName))(grunt);
    });

  fs.readdirSync(taskPath)
    .forEach(function (fileName) {
      require(path.join(configPath, fileName))(grunt);
    });
};
