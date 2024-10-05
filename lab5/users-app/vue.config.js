const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // chainWebpack: config => {
  //   config.module
  //     .rule('images')
  //     .test(/\.(png|jpg|gif|svg)(\?.*)?$/)
  //     .use('url-loader')
  //     .loader('url-loader')
  //     .tap(options => Object.assign({}, options, { limit: 10240 }));
  // }
})
