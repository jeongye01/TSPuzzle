const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require("mini-css-extract-plugin");

module.exports = {
  mode:'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:[
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({template:'./public/index.html',filename:'./index.html'})
  ],
  devServer:{
    hot:true
  },
 

};