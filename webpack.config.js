var path = require('path');
var webpack = require('webpack');
    
module.exports = {
    entry: './Client/src/index.js',
    output: {
        path: path.resolve(__dirname, 'Client/static'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader', 
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};