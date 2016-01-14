var path = require('path');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'src'),
        loader: 'babel-loader'
      }
    ]
  }
};