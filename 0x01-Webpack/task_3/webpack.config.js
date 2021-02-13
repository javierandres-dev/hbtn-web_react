const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry : path.resolve(__dirname, 'js/dashboard_main.js'),
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    performance: {
      maxAssetSize: 1000000,
    },
    devServer: {
      contentBase: path.join(__dirname, './public'),
      compress: true,
      port: 8564,
    },
    plugins: [
      new HTMLWebpackPlugin({
        filename: 'public/index.html'
      }),
      new CleanWebpackPlugin()
    ],
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|gif|png|jpeg|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      }
    ]
  }
}
