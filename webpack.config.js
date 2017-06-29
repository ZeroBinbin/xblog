const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/entry/index.jsx'),
    output: {
        path: __dirname,
        filename: './[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    use:[
                        {
                            loader: 'css-loader',
                            options:{
                                modules:true,
                                importLoaders:1,
                                localIdentName:'[name]_[local]_[hash:base64:5]',
                                sourceMap : true,
                                camelCase : true
                            }
                        },
                        {
                            loader:'less-loader',
                        }
                    ],
                    fallback: 'style-loader',
                }),
            },{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/index.css',
            disable: false,
            allChunks: true,
        }),
        new webpack.optimize.CommonsChunkPlugin('common')
    ]
};
