module.exports = {
	'default':[
		'clean',
		'copy',
		'sass',
		'cssmin',
		'jshint',
		'uglify',
		'connect',
		'watch'
	],

	'build':[
		'clean',
        'copy'
	],

	'conn':[
		'connect'
	],

	'css':[
		'sass',
		'cssmin'
	],

	'js':[
		'jshint',
		'uglify'
	],

	'production':[
		'build',
		'css',
		'js',
		'html',
		'connect'
	],

	'serve':[
		'connect',
		'watch'
	]
}
