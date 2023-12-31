const path = require('node:path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const dotenv = require('dotenv');

module.exports = (env) => {
  const mode = env.mode ?? 'development';
  const port = env.port ?? '3000';

  const isProd = mode === 'production';

  const newEnv = dotenv.config().parsed;
  let envKeys = {};
  if (newEnv) {
    envKeys = Object.keys(newEnv).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(newEnv[next]);
      return prev;
    }, {});
  }

  return {
    mode,
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    context: path.resolve(__dirname, 'src'),
    devtool: 'source-map',
    devServer: {
      open: true,
      port,
      hot: true,
      historyApiFallback: true,
      host: 'localhost',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
    },
    module: {
      rules: [
        // {
        //   test: /\.css$/,
        //   use: [
        //     "style-loader",
        //     {
        //       loader: "css-loader",
        //       options: {
        //         modules: {
        //           auto: (resPath) => resPath.includes(".module."),
        //           localIdentName: "[path][name]__[local]",
        //         },
        //       },
        //     },
        //     ,
        //     "sass-loader",
        //   ],
        // },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: __dirname,
        },
        {
          test: /\.s[ac]ss$/, // scss
          use: [
            isProd ? MiniCSSExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: (resPath) => resPath.includes('.module.'),
                  localIdentName: '[name]_[local]-[hash:base64:5]',
                },
              },
            },
            'sass-loader',
          ],
          include: path.resolve(__dirname, '../'),
        },
        {
          test: /\.(js|jsx|ts)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.tsx$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpe?g|gif|webp)$/i, // svg
          type: 'asset/resourse',
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/inline',
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@src': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      new Dotenv({
        path: './',
        safe: true,
      }),
      new webpack.ProgressPlugin(),
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        filename: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
      new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(!isProd),
        ...envKeys,
      }),
    ],
  };
};
