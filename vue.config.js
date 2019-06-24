module.exports = {
  // 选项...
  /** 区分打包环境与开发环境
   * process.env.NODE_ENV==='production'  (打包环境)
   * process.env.NODE_ENV==='development' (开发环境)
   * publicPath: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
   */
 // 基本路径
 publicPath: '/',
 // 输出文件目录
 outputDir: 'dist',
 // eslint-loader 是否在保存的时候检查
 lintOnSave: true,
 runtimeCompiler: false,
 // webpack配置
 // see https://cli.vuejs.org/zh/config/#configurewebpack
 chainWebpack: () => {},
 configureWebpack: () => {},
 //如果想要引入babel-polyfill可以这样写
 // configureWebpack: (config) => {
 //   config.entry = ["babel-polyfill", "./src/main.js"]
 // },
 // 生产环境是否生成 sourceMap 文件
 productionSourceMap: false,
 // css相关配置
 css: {
  // 是否使用css分离插件 ExtractTextPlugin
  extract: process.env.NODE_ENV==='production' ? true : false,
  // 开启 CSS source maps?
  sourceMap: false,
  // css预设器配置项
  loaderOptions: {
    css: {
      // 这里的选项会传递给 css-loader
    },
    postcss: {
      // 这里的选项会传递给 postcss-loader
    },
    sass: {
      // 这里的选项会传递给 sass-loader
    }
  },
  // 启用 CSS modules for all css / pre-processor files.
  modules: false
 },
 // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
 parallel: require('os').cpus().length > 1,
 // webpack-dev-server 相关配置
 // https://webpack.docschina.org/configuration/dev-server
 devServer: {
  open: process.platform === 'darwin',  // OS X操作系统
  host: '0.0.0.0',
  port: 8899,
  https: false, // 是否启用https服务
  // hot 和 hotOnly 的区别是在某些模块不支持热更新的情况下，前者会自动刷新页面，后者不会刷新页面，而是在控制台输出热更新失败。
  hot: true,
  hotOnly: false,
  // https://github.com/chimurai/http-proxy-middleware#proxycontext-config
  proxy: {
    '/cross': {
      target: '<url>',
      // ws: true, // 是否代理websockets
      // secure: false,  // 是否要验证SSL, 如果是https接口，需要配置这个参数
      changeOrigin: true,  // 如果接口跨域，需要进行这个参数配置
      pathRewrite: {
        '^/cross': '' // 路径重写（请求到后台拿掉了'/cross'）
      }
    }
  },
  before: app => {}
 },
 // 第三方插件配置
 pluginOptions: {
  // ...
 }
}