const vscode = require('vscode')
// const fs = require('fs')
// const path = require('path')

const message = require('./src/utils/message')
const createFolderStructure = require('./src/utils/createFolderStructure')
const projectStructure = require('./src/config/projectStructure')

/**
@param {vscode.ExtensionContext} context
**/

const activate = (context) => {

  
  const folderCreate = ({name}) => {
    const [{ uri }] = vscode.workspace.workspaceFolders
    const { path: folderPath } = uri

    const foldersStructure = [
      `src/pages/${name}`
    ]

    try {
      createFolderStructure(folderPath, foldersStructure)
      message('info', `${name} page successfully created`)
    }
    catch(error) {
      message('error', error)
    }
    
    

    // for (const folder of foldersStructure) {
    //   const folderURI = path.join(folderPath, folder)
    //   if(!fs.existsSync(folderURI)) {
    //     fs.mkdirSync(folderURI)
    //   }
    // }

    
    
  }

  const disposable = [
    vscode.commands.registerCommand('extension.loadMessage', () => 
      message('info', 'Hello VSCODE')
    ),
    vscode.commands.registerCommand('extension.loadMessage2', () => 
      message('error', 'Error')
    ),
    vscode.commands.registerCommand('extension.createPage', () => 
      vscode.window.showInputBox({
        value: '',
        prompt: 'Insert a name of your Page',
        placeHolder: 'Name of page'
      }).then(response => {
        if (!response) {
          return message('info', 'Command Canceled')
        }
        // vscode.window.showInformationMessage(response)
        // message('error', 'Error')
        folderCreate({name: response})
      })
    ),
    vscode.commands.registerCommand('extension.createProjectStructure', () => {
      const [{ uri }] = vscode.workspace.workspaceFolders
      const { path: folderPath } = uri
      const { folders } = projectStructure

      try {
        createFolderStructure(folderPath, folders)
      }
      catch(error) {
        message('error', error)
      }
      
    })
  ]

	context.subscriptions.push(...disposable);
}

const deactivate = () => {}

module.exports = {
  activate,
  deactivate
}