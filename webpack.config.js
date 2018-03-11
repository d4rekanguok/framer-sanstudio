const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.coffee',
        framer: './src/framer/framer-fix.coffee',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.coffee$/,
                loader: 'coffee-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/index.html' },
            { from: 'src/framer/images', to: 'framer/images' },
        ]),
    ],
    resolve: {
        extensions: [".web.coffee", ".web.js", ".coffee", ".js"]
    }
};
