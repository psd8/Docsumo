const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: "./public/favicon.ico"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify(
          'https://apptesting.docsumo.com'
        ),
        DEV_API_URL: JSON.stringify(
          'https://apptesting.docsumo.com'
        ),
      },
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    hot: true,
    watchContentBase: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: './public/index.html' },
      ],
    }
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: 'defaults',
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
      {
        test: /\.min.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$|\.css/i,
        exclude: [path.resolve(__dirname, 'node_modules/bootstrap')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  devtool: 'source-map',
};
