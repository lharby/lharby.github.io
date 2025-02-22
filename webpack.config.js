const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const jsonImporter = require('node-sass-json-importer');
const globImporter = require('node-sass-glob-importer');
const srcFolder = './src/';
const outputFolder = 'app/';

const configFE = {
    entry: {
        app: srcFolder + 'app.js',
        'app.min': srcFolder + 'app.js',
        critical: srcFolder + './scss/critical.scss'
    },
    target: 'web',
    output: {
        path: path.join(__dirname, outputFolder + 'js/'),
        filename: '[name].js',
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].css',
            allChunks: true,
        }),
        new Dotenv(),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                importer: globImporter(),
                            },
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
                sourceMap: true,
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    watch: true,
    mode: 'none',
};

module.exports = [configFE];
