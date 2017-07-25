module.exports={
	options: {
        livereload: false
    },
    php: {
        files: ['src/*.php', 'src/templates/*.php'],
        tasks: ['htmlhint', 'copy']
    },
    sass: {
        files: ['src/sass/**/*.scss'],
        tasks: ['sass', 'cssmin']
    },
    js: {
        files: ['src/js/**/*.js'],
        tasks: ['jshint', 'uglify']
    }
}
