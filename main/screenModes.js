const { getWindow } = require('./index')

function setPresentMode () {
  const win = getWindow()
  win.maximize()
  win.setFullScreen(true)
}

function setEditMode () {
  const win = getWindow()
  win.setFullScreen(false)
  win.unmaximize()
}

module.exports = {
  setPresentMode,
  setEditMode,
}
