const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 8080
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import \'./src/styles/scssconfig.scss\';'
      }
    }
  }
})
