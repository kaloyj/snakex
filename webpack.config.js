const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: ["react-hot-loader/patch", "./src/index.tsx"],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    historyApiFallback: true
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".svg"]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: false
    }),

    new ForkTsCheckerWebpackPlugin()
  ]
};
