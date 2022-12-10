const path = require('path');
const MiniCssExtractPlugin=require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: 'css-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:[
    new MiniCssExtractPlugin()
  ],
  devServer:{
    hot:true
  }
};