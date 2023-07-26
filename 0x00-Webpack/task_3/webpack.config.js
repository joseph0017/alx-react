const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
      }),
      new CleanWebpackPlugin(),
    ],
    entry: {
        header: {
          import: './modules/header/header.js',
          dependOn: 'shared'
        },
        body: {
          import: './modules/body/body.js',
          dependOn: 'shared'
        },
        footer: {
          import: './modules/footer/footer.js',
          dependOn: 'shared'
        },
        shared: 'jquery'
      },
    output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
    },
    devServer: {
      static: path.resolve(__dirname, 'public'),
      compress: true,
      port: 8564,
      hot: true,
      open: true,
    },
    devtool: 'inline-source-map',
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    module: {
      rules: [
        { 
          test: /\.css$/, 
          use: ["style-loader", "css-loader"] 
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