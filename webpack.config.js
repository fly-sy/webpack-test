
const path = require('path')

module.exports = {
  mode: 'development'   // production  上线环境  development 生成环境


  // 3.x 写法  需要自己配置入口 和 出口文件  
  // entry: path.join(__dirname, './src/main.js'),// 入口，表示，要使用 webpack 打包哪个文件
  // output: { // 输出文件相关的配置
  //   path: path.join(__dirname, './dist'), // 指定 打包好的文件，输出到哪个目录中去
  //   filename: 'bundle.js' // 这是指定 输出的文件的名称
  // },
}