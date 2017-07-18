module.exports={
    php: {
        cwd: 'src/',
        src: ['**/*.php'],
        dest: 'build',
        expand: true
    },
    images: {
        cwd: 'src/',
        src: ['img/**/*'],
        dest: 'build',
        expand: true
    },
    javascript: {
        cwd: 'src/',
        src: ['js/*.js'],
        dest: 'build',
        expand: true
    }
}
