const path = require('path');
// const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const env = process.env.NODE_ENV;
// const devMode = process.env.NODE_ENV !== 'production';
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const location = {
	build: './build',
	react: './src',

	style: './src/style'
};

const output = {
	react: location.react,

	style: location.style
};

// define plugins
/* const plugins = (function(env) {
	let plugins = [
		new UglifyJsPlugin({
			sourceMap: false
		}),
	];

	if(env === 'production') {
		plugins.push(new CleanWebpackPlugin([location.build]));
	}

	return plugins;
})(env); */

module.exports = {
	mode: 'production',
	/* stats: 'minimal', */
	entry: output,
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, location.build),
		publicPath: '/'
	},
	plugins: [
		new MomentLocalesPlugin({
			localesToKeep: ['es-us', 'uk']
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
		/* new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }) */
	],
	module: {
		// configuration regarding modules
		rules: [
			{
				/* rules for modules (configure loaders, parser options, etc.) */
				enforce: 'pre',
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options: {
					fix: true,
					smarttabs: true
				}
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.woff($|\?)|\.otf($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)|\.png($|\?)|\.jpg($|\?)|\.gif($|\?)|\.pdf($|\?)/,
				use: 'url-loader'
			},
			{
				test: /\.handlebars$/,
				loader: 'handlebars-loader'
			},
			{
				test: /\.(sass|scss|css)$/,
				use: [
					{
						// creates style nodes from JS strings
						loader: 'style-loader',
						options: {}
					},
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: false
						}
					},
					{
						/* translates CSS into CommonJS */
						loader: 'css-loader',
						options: {
							url: false
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									[
										'autoprefixer',
										{
											// Options
										}
									]
								]
							}
						}
					},
					{
						/* compiles Sass to CSS, using Node Sass by default */
						loader: 'sass-loader',
						options: {
							sassOptions: {
								outputStyle: 'compressed'
							}
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx', '.css'],
		modules: ['node_modules']
	},
	watchOptions: {
		aggregateTimeout: 600,
		poll: true,
		ignored: ['./assets/fonts/*', './assets/images/*', './node_modules']
	},
	/*
	 * Don`t use, I have some problem with cashed files.
		 * https://webpack-3.cdn.bcebos.com/configuration/dev-server/
	 */
	devServer: {
		// compress: true,
		host: 'localhost',
		port: 3000,
		open: true,
		hot: true,
		// inline: false,
		// watchContentBase: true,
		historyApiFallback: true,
		writeToDisk: true,
		contentBase: path.join(__dirname, '/'),
		publicPath: '/',
		watchOptions: {
			poll: true
		},
		stats: {
			children: false
		}
	},
	node: {
		// fs: 'empty',
	},
	performance: {
		maxEntrypointSize: 40000000,
		maxAssetSize: 40000000
	},
	optimization: {
		// minimize: false,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
				terserOptions: {
					ecma: 2019,
					parse: {},
					compress: {},
					mangle: true, // Note `mangle.properties` is `false` by default.
					module: false,
					keep_classnames: true,
					keep_fnames: true
				}
			})
			/* new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }],
                },
                canPrint: true
            }) */
		]
	}
};
