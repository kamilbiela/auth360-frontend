module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        filename: './index.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ],
        preLoaders: [
            { 
                test: /\.js$/, 
                loader: "source-map-loader" 
            }
        ]
    }
}
