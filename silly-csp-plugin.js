const HtmlWebpackPlugin = require('html-webpack-plugin');

class SillyCspPlugin {

    genShas(compilation, htmlPluginData, compileCb) {
        // I want to show that what is logged here, is diff than what is output
        console.log(htmlPluginData.html)
    }

    apply(compiler) {
        compiler.hooks.compilation.tap('CspHtmlWebpackPlugin', (compilation) => {
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
                'SillyCspPlugin',
                this.genShas.bind(this, compilation)
            );
        });
    }
}

module.exports = SillyCspPlugin;