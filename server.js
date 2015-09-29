/*require('babel/register');

var path = require('path');
var webpack = require('webpack');



//console.log(__dirname);

var webpackConfig = {
	//context: path.join(__dirname, 'src'), // исходная директория
	entry: './dev/react/common.js', // файл для сборки, если несколько - указываем hash (entry name => filename)
	output: {
		path: path.join(__dirname, 'public','build-webpack') // выходная директория
	},
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader']
            }
        ]
    }
};

var compiler = webpack(webpackConfig);

compiler.run(function (err, stats) {

	console.log(stats.toJson()); // по завершению, выводим всю статистику

});*/



require('babel/register');
require('./app');

