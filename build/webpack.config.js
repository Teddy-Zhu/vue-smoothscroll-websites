module.exports = {
    entry: './index.js',
    output: {
        path: './dist',
        filename: 'vue-smoothscroll-websites.js',
        library: 'vueSmoothScrollWebsites',
        libraryTarget: 'umd',
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ]
    }
}
