/* eslint-disable @typescript-eslint/no-require-imports */
const { readdirSync } = require('fs')
const { join, resolve } = require('path')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const isAnalyze = process.argv.includes('--analyze')

/**
 * Auto Load Plugin Entry
 *
 * @param {String} pluginDir Path of your plugins here.
 */
function loadPluginEntry(pluginDir = 'src/plugins') {
  const pluginPath = join(__dirname, pluginDir)
  let files = readdirSync(join(__dirname, 'src/plugins'))
  let object = {}

  // split extension file if is typescript (.ts)
  files = files.map((file) => {
    if (file.split('.').length == 2) {
      return file
    }
  })

  // remove/filter undefined file
  files = files.filter((file) => {
    return file != undefined
  })

  // assign object for webpack entry
  files.forEach((file) => {
    const key = file.split('.')[0]
    return (object[key] = `${pluginPath}/${file}`)
  })

  // Output: (Array Object) [{File_Name}: {File}]
  // Example: {
  //  PluginA: 'src/plugins/PluginA.ts',
  //  PluginB: 'src/plugins/PluginB.ts'
  // }
  return object
}

module.exports = {
  mode: 'production',
  entry: loadPluginEntry(),
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
