const path = require('path')
const webpack = require('webpack')

module.exports = options => ({
  entry: options.entry,
  output: Object.assign({
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
  }, options.output),
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: true,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        options: {
          prefix: 'images/',
          limit: 8000,
          mimetype: 'image/png',
        },
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader',
        options: {
          prefix: 'images/',
          limit: 8000,
          mimetype: 'image/jpeg',
        },
      },
      {
        test: /\.woff$/,
        loader: 'url-loader',
        options: {
          prefix: 'fonts/',
          limit: 8000,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.woff2$/,
        loader: 'url-loader',
        options: {
          prefix: 'fonts/',
          limit: 8000,
          mimetype: 'font/woff2',
        },
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file-loader',
        options: {
          prefix: 'fonts/',
        },
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader',
        options: {
          prefix: 'svg/',
        },
      },
    ],
  },
  plugins: options.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        PORT: JSON.stringify(process.env.PORT),
        DEBUG_API: 'false',
      },
    }),
  ]),
  resolve: {
    modules: ['src', 'node_modules'],
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},
})
