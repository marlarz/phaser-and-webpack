const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src/main.js')]
  },
  mode: "production",
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'build/js'),
    chunkFilename: 'vendor.build.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Phaser and Webpack',
      filename: path.resolve(__dirname, 'build/index.html'),
      template: path.resolve(__dirname, 'src/index.html'),
      inject: 'body',
      hash: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true
      }
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'assets'), to: path.resolve(__dirname, 'build/assets') }
    ])
  ],
  optimization: {
    minimize: true,
    splitChunks: {
        chunks: 'all',
        minSize: 50000,
        cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
            }
        }
      },
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false,
            },
          },
        }),
      ],
  },
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