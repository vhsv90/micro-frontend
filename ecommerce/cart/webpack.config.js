const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/boostrap'
            },
            shared: ['faker']
            // object using singleton implementation
            /*
            shared: {
                    faker: {
                        singleton: true
                    }
                } 
            */
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};