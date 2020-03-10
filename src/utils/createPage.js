const vscode = require('vscode')
const createFolderStructure = require('./createFolderStructure')
const createFiles = require('./createFiles')
const message = require('./message')

const createPage = ({name, files}) => {
  const [{ uri }] = vscode.workspace.workspaceFolders
  const { fsPath: folderPath } = uri

  const foldersStructure = [
    `src/pages/${name}`
  ]

  try {
    createFolderStructure(folderPath, foldersStructure)
    createFiles(folderPath, files)
    // vscode.commands.executeCommand()

    // vscode.commands.executeCommand('', `${folderPath}/src/pages/${name}`)
    message('info', `${name} page successfully created`)
  }
  catch(error) {
    message('error', error)
  }
}

module.exports = createPage