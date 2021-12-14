/* eslint-disable import/no-extraneous-dependencies */
import * as path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const isDevelopment = process.env.NODE_ENV !== 'production';

const config: Configuration = {
  mode: isDevelopment ? 'development' : 'production',
  target: 'web',
  resolve: {
    alias: {
      '@byte-eight-engine/engines': path.resolve(
        __dirname,
        '..',
        'src',
        'ByteEightEngine',
        'engines',
      ),
      '@byte-eight-engine/gears': path.resolve(
        __dirname,
        '..',
        'src',
        'ByteEightEngine',
        'gears',
      ),
      '@byte-eight-engine/errors': path.resolve(
        __dirname,
        '..',
        'src',
        'ByteEightEngine',
        'errors',
      ),
      '@byte-eight-engine/logger': path.resolve(
        __dirname,
        '..',
        'src',
        'ByteEightEngine',
        'logger',
      ),
      '@game/settings': path.resolve(
        __dirname,
        '..',
        'src',
        'game',
        'settings',
      ),
    },
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '..', 'src', 'game', 'index.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src', 'game', 'index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', 'src', 'game', 'assets'),
          to: 'assets',
        },
      ],
    }),
  ],
};

export default config;
