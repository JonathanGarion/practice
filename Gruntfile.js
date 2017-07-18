var fs = require('fs');
var path = require('path');

module.exports = function (grunt) {
  var configPath  = './build/config';
  var taskPath    = './build/tasks';


  fs.readdirSync(configPath)
    .forEach(function (fileName) {
      console.error(path.resolve(configPath,fileName));
      require(path.join(configPath, fileName))(grunt);
    });

    fs.readdirSync(taskPath)
      .forEach(function (fileName) {
        console.error(path.resolve(taskPath,fileName));
        require(path.join(taskPath, fileName))(grunt);
      });
};
