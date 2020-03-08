const message = require('../utils/message')
const createPage = require('../utils/createPage')
const createFolderStructure = require('../../src/utils/createFolderStructure')
const createFiles = require('../../src/utils/createFiles')
const projectStructure = require('../../src/config/projectStructure')
const {pageDefault} = require('../config/filesContents')

const createReactNativeDefaultPage = (vscode) => (
    vscode.window.showInputBox({
      value: '',
      prompt: 'Insert a name of your Page',
      placeHolder: 'Name of page'
    }).then(response => {
      if (!response) {
        return message('info', 'Command Canceled')
      }

      const files = [
        {
          "path": `src/pages/${response}`,
          "elements": [
            {
              "name": "index.js",
              "contents": pageDefault
            },
            {
              "name": "styles.js",
              "contents": ""
            }
          ]
        }
      ]

      createPage({name: response, files})
    })
)

const createReactNativeProjectStructure = (vscode) => {

  const [{ uri }] = vscode.workspace.workspaceFolders
  const { path: folderPath } = uri
  const { folders, files } = projectStructure

  try {
    createFolderStructure(folderPath, folders)
    createFiles(folderPath, files)
    message('info', 'Project structure created successfully')
  }
  catch(error) {
    message('error', error)
  }
}

module.exports = {
  createReactNativeDefaultPage,
  createReactNativeProjectStructure
}