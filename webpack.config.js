// for resolving the absolute path to our project
// necessary for webpack
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  // where our app "starts"
  entry: './src/index.js',
  // where to put the transpiled javascript
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin( {
      template: path.resolve('./public/index.html')
    }),
      new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',

  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    hot: true,
    open: true
  },

  // babel config
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  // allows us to see how the transpiled js relates to the untranspiled js
  // devtool: 'source-map'
};
