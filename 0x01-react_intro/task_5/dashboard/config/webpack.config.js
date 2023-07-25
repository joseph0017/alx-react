const path = require('path');

module.exports = {
    mode: 'production',
    devtool: "inline-source-map",
    entry: {
        main: path.resolve(__dirname, '../src/index.js'),
      },
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
    },
    devServer: {
      hot: true,
      contentBase: path.resolve(__dirname, 'dist'),
      compress: true,
      port: 8564,
    },
    module: {
      rules: [
        { 
          test: /\.css$/, 
          use: ["style-loader", "css-loader"] 
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        { 
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
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
        },
      ]
    },
}