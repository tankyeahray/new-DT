const webpack  = require('webpack');
const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {

  // 分离 应用程序(app) 和 第三方库(vendor) 入口
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'js/[name]-[chunkhash].js',
    path: path.resolve(__dirname, './dist'),
  },
  // 配置loader加载规则
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: (loader) => {
              require('autoprefixer')
            }
          }
        }]
      },
      {
        test: /\.less$/,
        use: 'less-loader'
      },
      // 小于10K直接转base64
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      },
      {
        test: /\.(js|es6)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  // 配置插件
  plugins: [

    // JS文件压缩,上线才打开
    // new webpack.optimize.UglifyJsPlugin(),

    // 文件模板，配置多个html文件可以new多个
    new HtmlWebpackPlugin({
      template: './src/app.html'
    }),

    new webpack.SourceMapDevToolPlugin()
  ],

  // 配置别名
  resolve: {
    alias: {
      // 不加入别名会引入vue.common.js导致编译错误
      'vue': 'vue/dist/vue.js'
    }
  },

  // 开启source-map
  devtool: 'cheap-module-eval-source-map'

};

module.exports = config;