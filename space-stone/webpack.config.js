const path = require('path');

module.exports = {
    entry: './src/js/space-stone.js',
    output: {
        filename: 'webgl-bundle.js',
        path: path.resolve(__dirname, 'src/js')
    }
};
