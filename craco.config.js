const path = require('path')

module.exports = {
	webpack: {
		alias: {
			'@sass': path.resolve(__dirname, 'src/sass/'),
			'@components': path.resolve(__dirname, 'src/components/'),
            '@img':path.resolve(__dirname, 'public/img')
		},
	},
}
