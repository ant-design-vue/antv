var path = require('path')
var utils = require('./utils')
var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var prodWebpackConfig = require('./webpack.prod.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var webpackConfig = merge(prodWebpackConfig, {
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('[name].min.js'),
    library: 'antv',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin(utils.assetsPath('[name].min.css'))
  ]
})

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

module.exports = webpackConfig
