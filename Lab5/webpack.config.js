const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:  {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/pages/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/rozklad.html',
            filename: 'rozklad.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/photo.html',
            filename: 'photo.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/news.html',
            filename: 'news.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: 'src/assets/images', to: './assets/images'
                },
            ]
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ]
    },
};
