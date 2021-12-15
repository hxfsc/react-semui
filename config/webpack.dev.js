const common = require("./webpack.common")
const { merge } = require("webpack-merge")
const webpack = require("webpack")

const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")
const smp = new SpeedMeasurePlugin()

module.exports = merge(
  common,
  smp.wrap({
    mode: "development",
    devtool: "eval-cheap-module-source-map",

    output: {
      pathinfo: false
    },

    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          environment: JSON.stringify("dev")
        }
      })
    ],

    devServer: {
      hot: true,
      // contentBase: "./dist",
      port: 3000,
      historyApiFallback: true,
      // allowedHosts: "all",
      // overlay: {
      //   warnings: true,
      //   errors: true
      // }
    }
  })
)
