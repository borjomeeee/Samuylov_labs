const path = require('path');

module.exports = {
    entry: {
        bundle: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: './[name].js',
    }
}