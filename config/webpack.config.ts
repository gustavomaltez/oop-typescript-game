
import * as path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const isDevelopment = process.env.NODE_ENV !== 'production';

const config: Configuration = {
  mode: isDevelopment ? 'development' : 'production',
  target: "web",
  resolve: {
    alias: {
      "@engines": path.resolve(__dirname, '..', 'src', 'game', 'engines'),
      "@errors": path.resolve(__dirname, '..', 'src', 'game', 'errors'),
      "@handlers": path.resolve(__dirname, '..', 'src', 'game', 'handlers'),
      "@logger": path.resolve(__dirname, '..', 'src', 'game', 'logger')
    },
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: "babel-loader" }],
      },
    ],
  },
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, "..", "src", "index.ts"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        '..',
        'src',
        'index.html',
      ),
    })
  ],
}

export default config;
