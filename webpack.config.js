const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

const isDev = process.env.NODE_ENV === "development";
console.log("数据", process.env.NODE_ENV);
module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.js",
  //   output: {
  //     path: path.resolve(__dirname, 'dist'),
  //     filename: 'bundle.js',
  //   },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
      // '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader?cacheDirectory=true",
            options: {
              babelrc: true,
            },
          },
        ],
      },
      {
        test: /\.(s)?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|fbx)$/,
        loader: "url-loader",
        options: {
          limit: 10,
          // name: "images/[hash].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
    // new LoadablePlugin(),
  ],
  optimization: {
    minimizer: isDev
      ? []
      : [
          new CssMinimizerPlugin(),
          new TerserPlugin({
            parallel: true, // 可省略，默认开启并行
            terserOptions: {
              toplevel: true, // 最高级别，删除无用代码
            },
          }),
        ],
    splitChunks: {
      name: "commons",
      chunks: "all",
      maxSize: 400000,
    },
  },
  devServer: {
    compress: true, // 启动Gzip
    port: 3000, // 端口
    open: true, // 自动打开浏览器
    historyApiFallback: true,
  },
};
