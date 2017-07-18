module.exports = {
  options: {
    cache: false
  },

  dist: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['img/**/*.{png,jpg,gif}'],
      dest: 'dist/'
    }]
  }
};
