const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    header: "./modules/header/header.js",
    body: "./modules/body/body.js",
    footer: "./modules/footer/footer.js",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public/public"),
    open: true,
    port: 8564,
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "public/index.html",
    }),
  ],
  performance: {
    maxAssetSize: 1000000,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jpg$/,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
};
