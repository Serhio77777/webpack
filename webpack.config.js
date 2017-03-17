const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry:  {
        scripts: './app/scripts/main.js',
        styles: './app/styles/main.scss'
    },
    output: {
        path: path.join(__dirname + '/dist'),
        filename: '[name].entry.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    use: "css-loader!sass-loader"
                })
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
}
