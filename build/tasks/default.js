module.exports = function (grunt) {
  grunt.registerTask('default', 'Build app archive for deployment.', [
    'clean:src,'
    'package'
  ]);
};
