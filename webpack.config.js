var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: './scripts/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
