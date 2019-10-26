const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    // context: path.resolve(__dirname),
    entry: {
        test: './dist/compiled/test.js',
        index: './dist/compiled/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js',
        library: 'BCP2019Data',
        libraryTarget:'umd',
        // libraryExport: ['BCP2019Data'],
        globalObject: 'this',
        umdNamedDefine: true
    },

    module: {
        rules: [

        ],
    },

    optimization: {
        minimizer: [new UglifyJsPlugin({
            uglifyOptions: {
                mangle: true,
                keep_fnames: true,
                ie8: false
            }
        })],
    },
}