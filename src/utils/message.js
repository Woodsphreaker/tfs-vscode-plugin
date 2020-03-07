const vscode = require('vscode')

const messages = {
  info: 'showInformationMessage',
  error: 'showErrorMessage',
}

const wrapper = (messageType) => {
  return vscode.window[messageType]
}

const message = (type, content) => {
  const messageType = messages[type]

  return wrapper(messageType || 'info')(content)
}

module.exports = message