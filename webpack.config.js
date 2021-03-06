const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    history: './src/history.js',
    stats: './src/stats.js',
  },
  output: {
    filename: '[name]bundle.js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
  },

  resolve: {
    alias: {
      Img: path.resolve(__dirname, 'src/img'),
      Components: path.resolve(__dirname, 'src/scripts/components'),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      chunks: ['index'],
      template: 'src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      chunks: ['history'],
      template: 'src/history.html',
      filename: 'history.html',
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      chunks: ['stats'],
      template: 'src/stats.html',
      filename: 'stats.html',
    }),

    new MiniCssExtractPlugin({ filename: '[name]style.css' }),
  ],

  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              [
                '@babel/preset-env',
                {
                  targets: { esmodules: true },
                  bugfixes: true,
                  shippedProposals: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
