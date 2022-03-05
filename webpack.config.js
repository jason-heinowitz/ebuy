const path = require('path');

module.exports = {
  entry: ['./client/inc/polyfills.js', './client/src/index.js'],
  output: {
    path: __dirname,
    filename: './build/bundle.js',
    publicPath: '/',
  },
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true,
    server: 'http',
    static: path.join(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /.((s(a|c))|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
