const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src/entry/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common'),
    ]
};
