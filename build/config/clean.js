module.exports = function (grunt) {
  grunt.config.set('clean', {
    src: [
      'dist/**'
    ],
    docs: [
      'build/api'
    ],
    coverage: [
      'build/coverage/'
    ]
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
};
