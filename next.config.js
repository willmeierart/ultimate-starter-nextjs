const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const { parsed: localEnv } = require('dotenv').config()

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'babel-loader',
          'raw-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv)) // enable dotenv ... note: NO DESTRUCTURING!
    // ENABLE THE FOLLOWING IF BUILD FAILS ON REMOTE SERVER / APP DOESN'T WORK ON IE:
    // config.plugins = config.plugins.filter(plugin => {
    //   if (plugin.name === 'UglifyJsPlugin') {
    //     return false
    //   } else {
    //     return true
    //   }
    // })
    config.node = { fs: 'empty' } // fix bug with fs in dotenv
    return config
  }
}
