const fs = require('fs')
const path = require('path')
const message = require('./message')

const makeFileContents = ({root, path: filePath, files}) => { 
  for (const {name, contents} of files) {
    const file = path.join(root, filePath, name)
    if (!fs.existsSync(file)) {
      try {
        // message('info', file)
        fs.writeFileSync(file, contents)
      }
      catch (error) {
        message('error', error)
      }
    }
  }
}

const createFile = (root, files = []) => {
  if (!files.length) {
    message('error', 'Files to create is missing')
    return false
  }

  for (const {path, elements} of files) {
     makeFileContents({root, path, files: elements})
  }

}

module.exports = createFile