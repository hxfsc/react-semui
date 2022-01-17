const path = require("path")
//html文件模板
const HtmlWebpackPlugin = require("html-webpack-plugin")
//抽离样式文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
//过滤抽离样式文件警告信息
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin")

const chalk = require("chalk")
const ProgressBarPlugin = require("progress-bar-webpack-plugin")

const webpack = require("webpack")

module.exports = {
  entry: [path.resolve(__dirname, "../src/index.tsx")],
  output: {
    clean: true,
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },

  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@/": path.resolve(__dirname, "../src"),
      "@/layout": path.resolve(__dirname, "../src/layout"),
      "@/utils": path.resolve(__dirname, "../src/utils"),
      "@/routers": path.resolve(__dirname, "../src/routers"),
      "@/assets": path.resolve(__dirname, "../src/assets"),
      "@/pages": path.resolve(__dirname, "../src/pages"),
      "@/context": path.resolve(__dirname, "../src/context"),
      "@/components": path.resolve(__dirname, "../src/components")
    }
  },

  cache: {
    type: "filesystem" // 使用文件缓存
  },

  module: {
    rules: [
      //https://github.com/gaearon/react-hot-loader/issues/1311
      {
        test: /\.(t|j)s$/,
        include: /node_modules\/react-dom/,
        use: ["react-hot-loader/webpack"]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              experimentalWatchApi: true,
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-modules-typescript-loader", //生成css @types文件
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[local]_[hash:base64:5]"
              },
              sourceMap: true
            }
          },
          { loader: "postcss-loader" },
          {
            loader: "thread-loader",
            options: {
              workerParallelJobs: 2
            }
          },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        exclude: /node_modules/,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        type: "asset/resource"
      }
    ]
  },

  plugins: [
    new ProgressBarPlugin({
      format: ` :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`
    }),

    //生成 css @types文件
    new webpack.WatchIgnorePlugin({ paths: [/css\.d\.ts$/] }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html")
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].[hash].css"
    }),

    new FilterWarningsPlugin({
      exclude: /mini-css-extract-plugin[^]*Conflicting order/
    })
  ]
}
