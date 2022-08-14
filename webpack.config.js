const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
    // Add source map support aka entry point for webpack dev server
    entry: path.resolve(__dirname, "src", "index.js"),

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        // Added Clean, this will remove the dist folder before building
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            // Added this to load the css files
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            // Added this to load images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset"
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                node_vendors: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: 1
                }
            }
        }
    },
    // Plugin for HTML Document Title
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Configured App",
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],

    // Added this to enable hot reloading
    mode: "development",

};

module.exports = webpackConfig;