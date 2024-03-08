const HtmlWebpackPlugin = require("html-webpack-plugin");
const SillyCspPlugin = require('./silly-csp-plugin');

module.exports = {
    mode: 'development',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            templateContent: ({ htmlWebpackPlugin }) => {
                return  `
                    <html>
                    <head>
                        // ${htmlWebpackPlugin.tags.headTags}
                    </head>
                    <body>
                        <h1>Hello World</h1>
                        ${htmlWebpackPlugin.files.js.map(f => f.split('.').join(' '))}
                        ${htmlWebpackPlugin.tags.bodyTags}
                    </body>
                    </html>
                `
            },
        }),
        // new SillyCspPlugin()
    ]
}