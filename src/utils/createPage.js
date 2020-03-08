const vscode = require('vscode')
const createFolderStructure = require('./createFolderStructure')
const createFiles = require('./createFiles')
const message = require('./message')

const createPage = ({name, files}) => {
  const [{ uri }] = vscode.workspace.workspaceFolders
  const { path: folderPath } = uri

  const foldersStructure = [
    `src/pages/${name}`
  ]

  try {
    createFolderStructure(folderPath, foldersStructure)
    createFiles(folderPath, files)
    message('info', `${name} page successfully created`)
  }
  catch(error) {
    message('error', error)
  }
}

module.exports = createPage