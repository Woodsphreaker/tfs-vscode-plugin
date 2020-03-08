const fs = require('fs')
const path = require('path')

const makeDirectory = (root, folderPath) => {
  if (!folderPath) {
    throw new Error('Folder path is required')
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

const makeStructure = (root, paths) => {
  if (!root) {
   throw new Error('Root is missing')
  }

  for (const path of paths) {
    makeDirectory(root, path)
  }
}

module.exports = makeStructure