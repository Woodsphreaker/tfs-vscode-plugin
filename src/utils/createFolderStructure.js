const fs = require('fs')
const path = require('path')

const makeStructure = (root, paths) => {
  if (!root) {
    return false
  }

  for (const path of paths) {
    makeDirectory(root, path)
  }
}

const makeDirectory = (root, folderPath) => {
  if (!folderPath) {

    return false
  }

  const pathParts = folderPath.split('/')

  pathParts.reduce((acc, el) => {
    const folder = path.join(root, `${acc}/${el}`)
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder)
    }
    acc += `/${el}`
    return acc
  }, '')

}

module.exports = makeStructure