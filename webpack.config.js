const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};
module.exports = {
    entry: {
        index: PATHS.source + '/pages/index/index.js',
        blog: PATHS.source + '/pages/blog/blog.js'
    },
    output: {
        path: PATHS.build,
        filename: './js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: PATHS.source + '/pages/index/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            chunks: ['blog'],
            template: PATHS.source + '/pages/blog/blog.pug'
        }),
        new HtmlBeautifyPlugin({
            config: {
                html: {
                    indent_size: 4
                }
            }
        })
    ],
    module: {
        rules: [{
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                //pretty: true
            }
        }]
    }
};