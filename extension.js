const vscode = require('vscode')
const {
  createReactNativeDefaultPage,
  createReactNativeProjectStructure
} = require('./src/commands/index')

/**
@param {vscode.ExtensionContext} context
**/

const activate = (context) => {

  const disposable = [
    vscode.commands.registerCommand('extension.createReactNativeDefaultPage', () => createReactNativeDefaultPage(vscode)),
    vscode.commands.registerCommand('extension.createReactNativeProjectStructure', () => createReactNativeProjectStructure(vscode))
  ]

	context.subscriptions.push(...disposable);
}

const deactivate = () => {}

module.exports = {
  activate,
  deactivate
}