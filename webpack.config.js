/* eslint-disable @typescript-eslint/no-require-imports */
const { resolve } = require('path')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const isAnalyze = process.argv.includes('--analyze')

module.exports = {
  mode: 'production',
  entry: {
    MyPluginA: './src/plugins/MyPluginA.ts',
    MyPluginB: './src/plugins/MyPluginB.ts'
  },
  output: {
    filename: '[name].js',
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
  plugins: [...(isAnalyze ? [new BundleAnalyzerPlugin()] : [])],
  optimization: {
    usedExports: true,
    minimize: true,
    splitChunks: {
      chunks: 'all',
      name: 'common'
    }
  }
}
