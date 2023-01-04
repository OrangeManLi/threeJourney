const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  mode: "development",
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
    minimizer: [new CssMinimizerPlugin()],
  },
  devServer: {
    compress: true, // 启动Gzip
    port: 3000, // 端口
    open: true, // 自动打开浏览器
    historyApiFallback: true,
  },
};
