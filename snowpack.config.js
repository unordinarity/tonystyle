/** @type { import("snowpack").SnowpackUserConfig } */
const config = {
	mount: {
		public: { url: '/', static: true },
		src: { url: '/dist' },
	},
	plugins: [
		'@snowpack/plugin-dotenv',
		'@snowpack/plugin-react-refresh',
		'@snowpack/plugin-typescript',
	],
	routes: [
		/* SPA fallback in development: */
		{ match: "routes", src: ".*", dest: "/index.html" },
	],
	alias: {
		'src': './src',
	},
	optimize: {},
	packageOptions: {},
	devOptions: {},
	buildOptions: {},
}

module.exports = config
