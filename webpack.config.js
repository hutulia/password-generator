const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    watch: false,
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
}