const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SRC_DIR = path.join(__dirname, './client');
const DIST_DIR = path.join(__dirname, './public');
module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'sass-loader',
      ],
    },
    {
      test: /\.jsx?/,
      include: SRC_DIR,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      }],
      resolve: {
        extensions: ['.js', '.jsx'],
      },
    },
    {
      test: /\.svg$/,
      use: [
        'svg-react-loader',
        {
          loader: 'svgo-loader',
          options: {
            plugins: [
              { cleanupAttrs: true },
            ],
          },
        },
      ],
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
};
