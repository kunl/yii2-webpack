let webpack = require('webpack');
let path = require('path');

const modules = ['app', 'home', 'about', 'site'];

const entry = modules.reduce((entry, it) => {
    (entry[it] = './src/' + it + '.js');
    return entry
}, {});


module.exports = {
    mode: 'development',
    entry: {
        ...entry
    },
    output: {
        path: path.resolve(__dirname , './web/dist'),
    },
    devServer: {
        contentBase: './web/dist',
        port: 9000,
        host: 'localhost'
    },
};