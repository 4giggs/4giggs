const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      title: '4Giggs',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      //   {
      //     test: /\.css$/i,
      //     use: ['style-loader', 'css-loader'],
      //   },
      {
        test: /\.s(c|a)ss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
};
