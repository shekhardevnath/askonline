const path = require('path');
const mode = process.env.NODE_ENV;

module.exports = {
    mode: mode,
    entry: {
        app: path.resolve(__dirname, 'resources/js/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'public/'),
        filename: 'js/[name].js',
        publicPath: '/js/'
    }
};
