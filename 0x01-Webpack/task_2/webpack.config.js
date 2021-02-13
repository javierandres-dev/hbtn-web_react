const path = require('path');

module.exports = {
    mode: 'production',
    entry : path.resolve(__dirname, 'js/dashboard_main.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    performance: {
    maxAssetSize: 1000000,
  },
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
