const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
   entry: "./src/index.js",
   devServer: {
      contentBase: './dist',
      hot: true
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
         },
         {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
         }
      ]
   },
   plugins: [
      new CleanWebpackPlugin('dist', {}),
      new HtmlWebpackPlugin({
         template: "./src/index.html"
      })
   ],
   output: {
      path: path.join(__dirname, "/dist"),
      publicPath: '/',
      filename: "bundle.js"
   }
};
