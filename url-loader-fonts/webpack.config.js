const path = require('path'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: {
		home: path.resolve(__dirname, 'index.js'),
		precios: path.resolve(__dirname, 'precios.js'),
		contacto: path.resolve(__dirname, 'contacto.js')

	},
	output: {
		path: path.resolve(__dirname, 'dist'), 
		filename: 'bundle.js'
	},
	module: {
		rules: [
			// Aquí van los loaders
			{
				//test: que tipo de archivo quiero reconocer.,
				//use: que loader se va a encargar del archivo
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				},
				
			},
			{
				test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000,
					}
				}
			},
			{
				//test: que ti,po de archivo quiero reconocer.,
				//use: que loader se va a encargar del archivo
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					//['style-loader','css-loader']
					// fallback: 'style-loader', 
					use: "css-loader"
				}),
			}
		]
	},
	plugins: [
		//Aqui van los plugins
		new ExtractTextPlugin("css/[name].css")
	]
}