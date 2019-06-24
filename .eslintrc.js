module.exports = {
  // 指定解析器
  parse: '',
  // 指定解析器选项
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 别人可以直接使用你配置好的ESLint
  root: true,
  // 指定脚本的运行环境
  env: {
    node: true
  },
  // 脚本在执行期间访问的额外的全局变量
  globals: {},
  // 启用的规则及其各自的错误级别
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
}
