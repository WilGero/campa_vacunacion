const { defineConfig } = require('@vue/cli-service')
plugins: [{ src: '~plugins/leaflet.js', ssr: false }];
module.exports = defineConfig({
  transpileDependencies: true
})
