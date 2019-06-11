const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@api', resolve('src/api'))
      .set('@views', resolve('src/views'))
  },
  // 反向代理配置，解决跨域问题
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.hao123.com/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}