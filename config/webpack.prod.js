const common = require("./webpack.common")
const { merge } = require("webpack-merge")
const webpack = require("webpack")

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "production",
  output:{
    filename: '[name].[contenthash].bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        environment: JSON.stringify("prod")
      }
    }),

    // 打包体积分析
    new BundleAnalyzerPlugin()
  ]
})
