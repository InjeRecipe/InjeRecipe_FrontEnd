const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')


const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: path.join(__dirname, 'index.web.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js' ,'.json'],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!()\/).*/,
        
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
       
      },
      {
        test: /\.ts(x)?$/,
        
        use: {
          loader: 'ts-loader',
    
        },
      },
    ],
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
    open: true,
    port:3000,
    
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, './'),
    },
    hot: true,
  },
}