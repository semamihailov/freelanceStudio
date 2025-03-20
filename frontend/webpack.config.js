const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    mode: "development",
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9002,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        }),
        new CopyPlugin({
            patterns: [
                {from: path.resolve(__dirname, 'src/templates'), to: "templates"},
                {from: path.resolve(__dirname, 'src/static/images'), to: "images"},
                {from: path.resolve(__dirname, 'node_modules/admin-lte/plugins/fontawesome-free/webfonts'), to: "webfonts"},
                {from: path.resolve(__dirname, 'node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css'), to: "css"},
                {from: path.resolve(__dirname, 'node_modules/admin-lte/dist/css/adminlte.min.css'), to: "css"},
                {from: path.resolve(__dirname, 'node_modules/admin-lte/dist/js/adminlte.min.js'), to: "js"},
                {from: path.resolve(__dirname, 'node_modules/admin-lte/plugins/jquery/jquery.min.js'), to: "js"},
                {from: path.resolve(__dirname, 'node_modules/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css'), to: "css"},
            ],
        }),
    ]
}