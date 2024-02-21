const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development', // Or 'production' for a final build
  entry: './app.js',  // Your main JavaScript file
  output: {
    filename: 'bundle.js',  // Name of the bundled file
    path: path.resolve(__dirname, 'dist'), 
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify"),
      "buffer": require.resolve("buffer/"), // Add this line
      "stream": require.resolve("stream-browserify") // Add this line
    }
  },
  plugins: [
    new Dotenv()
  ]
};