const path = require('path')
module.exports = {
	images: {
    domains: ['dummyimage.com'],
	},
  reactStrictMode: true,
	trailingSlash: true,
	webpackDevMiddleware: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		}

		return config
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
}