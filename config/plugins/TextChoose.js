const Fontmin = require('fontmin')
const path = require('path')
const chalk = require('chalk')
// const fs = require('fs')

class TextChoose {
  constructor (options) {
    this.options = options || { test: /\.(ttf)$/i }
    console.log('***********************')
  }
  apply (compiler) {
    let distPaths = []
    let strBox = []
    compiler.hooks.emit.tap('textChoose', compilation => {
      const assets = compilation.assets
      distPaths = Object.keys(assets).filter(item => this.options.test.test(item))
      const jsFilesStr = Object.keys(assets).filter(item => /\.js$/i.test(item)).map(item => assets[item].source()).join('')
      strBox = [...new Set(Array.from(jsFilesStr))]
    })

    compiler.hooks.done.tap('textChoose', compilation => {
      console.log('总字数', strBox.length)
      const allText = strBox.join('')
      const outPutPath = compiler.options.output.path
      distPaths.forEach(filePath => {
        const fullPath = path.join(outPutPath, filePath)
        const targetPath = path.dirname(fullPath)
        const fontmin = new Fontmin()
            .src(fullPath)
            .use(Fontmin.glyph({
              text: allText
            }))
            .dest(targetPath)
        fontmin.run((err, file) => {
          if (err) {
            // throw new Error(err)
            console.log(err)
          } else {
            console.log(chalk.greenBright('字体压缩完成！！！', filePath))
          }
        })
      })
    })
  }
}

module.exports = TextChoose
