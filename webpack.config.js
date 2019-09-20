const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');
const mode = process.env.NODE_ENV;

module.exports = {
    mode: mode,
    entry: {
        app: path.resolve(__dirname, 'resources/js/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'public/'),
        filename: 'js/[name].js',
        publicPath: '/js/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',

                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: `css/[name].css`,
        }),
        new CopyPlugin([
            {
                from: 'resources/images',
                to: 'images'
            }
        ])
    ]
};
