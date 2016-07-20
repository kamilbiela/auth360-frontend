var path = require('path');

module.exports = {
    resolveLoader: {
      root: path.join(__dirname, 'node_modules')
    },
    entry: './src/main.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "dist",
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ],
        preLoaders: [
            { 
                test: /\.js$/, 
                loader: "source-map-loader" 
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
