import HtmlWebpackPlugin from 'html-webpack-plugin';
 
import { resolve as _resolve, join } from 'path';

 
export const entry = './src/index.js';
export const mode = 'development';
export const output = {
  // eslint-disable-next-line no-undef
  path: _resolve(__dirname, './dist'),
  filename: 'index_bundle.js',
};
export const target = 'web';
export const devServer = {
  port: 5000,
  static: {
    // eslint-disable-next-line no-undef
    directory: join(__dirname, 'public'),
  },
  open: true,
  hot: true,
  liveReload: true,
};
export const resolve = {
  extensions: ['.js', '.jsx', '.json'],
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
  ],
};
export const plugins = [
  new HtmlWebpackPlugin({
    // eslint-disable-next-line no-undef
    template: join(__dirname, 'public', 'index.html'),
  }),
];
