/* eslint-disable @typescript-eslint/no-require-imports */
const { resolve } = require('path')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'bundle_[contenthash:8].js',
    path: resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new BundleAnalyzerPlugin()],
  optimization: {
    usedExports: true,
    minimize: true,
    splitChunks: {
      chunks: 'all'
    }
  }
}
