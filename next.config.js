/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	useFileSystemPublicRoutes: true,
	reactStrictMode: false,
	trailingSlash: true,
	experimental: {
		forceSwcTransforms: false,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	// images: {

	//   loader: 'default',

	//   path: '/',

	//   },
	optimizeFonts: false,
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
