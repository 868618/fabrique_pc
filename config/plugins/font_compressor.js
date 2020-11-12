const Fontmin = require('fontmin')

const fontCompressor = (srcPath, text, cb) => {
  const fontmin = new Fontmin()
    .src(srcPath) // 输入配置
    .use(Fontmin.glyph({ // 字型提取插件
      text: text // 所需文字
    }))
  // .use(Fontmin.ttf2eot())     // eot 转换插件
  // .use(Fontmin.ttf2woff())    // woff 转换插件
  // .use(Fontmin.ttf2svg())     // svg 转换插件
  // .use(Fontmin.css())         // css 生成插件
  // .dest(distpath)
  fontmin.run(cb)
}

module.exports = fontCompressor
