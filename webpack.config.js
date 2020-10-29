const path = require('path');
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

let config = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    main: path.resolve(__dirname, './src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]_[contenthash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: {} },
          { loader: 'css-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?)$/,
        type: 'asset/resource',
      },
    ],
  },
  performance: {
    hints: 'warning',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 2017,
          },
          compress: {
            ecma: 5,
            warnings: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            ascii_only: true,
            comments: false,
          },
        },
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'React Template',
      hash: true,
      filename: './index.html', // target html
      template: path.resolve(__dirname, './public/index.html'), // source html
    }),
    new MiniCssExtractPlugin(),
    // new FaviconsWebpackPlugin('./public/logo.svg'),
    new CleanWebpackPlugin(),
    new CompressionPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config = { ...config, mode: 'development', devtool: 'eval-source-map' };
    config.plugins = config.plugins.slice(0, config.plugins.length - 1);
    config.performance.hints = false;
  } else {
    config.module.rules[1].use[1].options.sourceMap = false;
  }
  return config;
};
