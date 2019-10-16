const path = require('path');

module.exports = {
    entry: {
        bundle: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].js',
    },
    devServer: {
        open: true,
        port: '8081',
        overlay: true,
        contentBase: path.join(__dirname, 'dist'),
    }
}