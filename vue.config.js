const path = require('path')
module.exports = {
  devServer: {
    open: true
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8888',
    //     changeOrigin: true
    //   }
    // }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.join(__dirname, './src'))
      .set('comp', path.join(__dirname, './src/components'))
      .set('style', path.join(__dirname, './src/assets/style'))
  }
}
