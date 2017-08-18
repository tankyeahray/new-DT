const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VendorManifest = require('./vendor-manifest.json');

const config = {

  // 分离 应用程序(app) 和 第三方库(vendor) 入口
  entry: {
    build: ['vue', 'vuex', 'axios', 'vue-router', 'element-ui']
  },
  output: {
    filename: 'js/[name]-[hash].js',
    path: path.resolve(__dirname, './dist')
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
      inject: true,
      template: './src/app.html'
    }),

    // 抽离CSS
    new ExtractTextPlugin('[name].css'),

    new webpack.SourceMapDevToolPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: VendorManifest
    }),

    new CopyWebpackPlugin([
      { from: 'static', to: 'static' }
    ]),

    // 删除每次编译后生成的文件
    new CleanWebpackPlugin(
      // 匹配删除的文件
      ['dist/js/*.js', 'dist/*.ttf'],
      {
        // 根目录
        root: __dirname,
        // 开启在控制台输出信息
        verbose: true,
        // 启用删除文件
        dry: false
      }
    )
  ],

  // 配置别名
  resolve: {
    alias: {
      // 不加入别名会引入vue.common.js导致编译错误
      vue: 'vue/dist/vue.js'
    }
  },

  devServer: {
    inline: true,
    hot: true,
    contentBase: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },

  // 开启source-map
  devtool: 'cheap-module-eval-source-map'

};

module.exports = config;
