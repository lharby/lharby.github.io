const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const srcFolder = './src/';
const outputFolder = './app/';

console.log(__dirname, srcFolder, outputFolder);

const configFE = {
    entry: {
        app:  srcFolder + 'app.js',
        'app.min':  srcFolder + 'app.js'
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, + outputFolder + './js/'),
        filename: '[name].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
            allChunks: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    watch: true,
    mode: 'none'
};

module.exports = [configFE];
