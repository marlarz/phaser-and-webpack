const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src/main.js')]
  },
  mode: "development",
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Phaser and Webpack',
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: path.resolve(__dirname, 'src/index.html'),
      inject: 'body'
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'assets'), to: path.resolve(__dirname, 'dist/assets') }
    ]),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      server: {
        baseDir: ['./dist']
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};