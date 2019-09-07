/* eslint-disable */
const webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

require('dotenv').config()

const isProduction = () => {
  return process.env.NODE_ENV === 'production'
}

module.exports = {
  mode: process.env.NODE_ENV,
  watch: !isProduction(),
  watchOptions: {
    aggregateTimeout: 500,
    ignored: ['node_modules']
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      Router: path.resolve(__dirname, 'src', 'router'),
      Store: path.resolve(__dirname, 'src', 'store'),
      Pages: path.resolve(__dirname, 'src', 'app', 'pages'),
      Layouts: path.resolve(__dirname, 'src', 'app', 'layouts'),
      Components: path.resolve(__dirname, 'src', 'components'),
      Directives: path.resolve(__dirname, 'src', 'directives'),
      Filters: path.resolve(__dirname, 'src', 'filters'),
      Images: path.resolve(__dirname, 'src', 'images'),
      Styles: path.resolve(__dirname, 'src', 'styles'),
      Plugins: path.resolve(__dirname, 'src', 'plugins'),
      Mixins: path.resolve(__dirname, 'src', 'mixins')
    }
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: true,
    port: 8000,
    stats: {
      normal: true
    }
  },
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: isProduction()
      ? 'assets/main.[contenthash].js'
      : 'assets/main.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js\vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          fix: false,
          failOnWarning: true
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: function (file) {
          return /node_modules/.test(file) && !/\.vue\.js/.test(file)
        }
      },
      {
        test: /\.s?css$/,
        use: [
          // consider vue-style-loader if not production?
          // 'vue-style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          // see postcss.config.js for options
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          {
            use: ['raw-loader', 'pug-plain-loader']
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: isProduction()
        ? 'assets/style.[contenthash].css'
        : 'assets/style.css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.pug'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        LINKEDIN_CLIENT_ID: JSON.stringify(process.env.LINKEDIN_CLIENT_ID),
        API_URL: JSON.stringify(process.env.API_URL),
        MIXPANEL_KEY: JSON.stringify(process.env.MIXPANEL_KEY),
        WEB_APP_URL: JSON.stringify(process.env.WEB_APP_URL)
      }
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/images',
        to: 'assets/images'
      }
    ])
  ]
}

/* eslint-enable */
