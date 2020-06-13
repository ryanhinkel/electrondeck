const { screen, BrowserWindow } = require('electron')

const baseUrl = 'http://localhost:3000'
const editorUrl = 'editor'
const presentUrl = 'present'
const notesUrl = 'notes'

let internalDisplay
let externalDisplay

let mainWindow
let presentationWindow

function setUp () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true }
  })

  presentationWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true }
  })

  loadEditWindows()
  mainWindow.webContents.openDevTools()
}

function loadPresentWindows () {
  // mainWindow.setFullScreen(true)
  presentationWindow.loadURL(`${baseUrl}/${presentUrl}`)
  mainWindow.loadURL(`${baseUrl}/${notesUrl}`)
}

function loadEditWindows () {
  // mainWindow.setFullScreen(false)
  presentationWindow.loadURL(`${baseUrl}/${presentUrl}`)
  mainWindow.loadURL(`${baseUrl}/${editorUrl}`)
}

function findDisplays () {
  const displays = screen.getAllDisplays()
  externalDisplay = displays.find(({ bounds }) => (
    bounds.x !== 0 || bounds.y !== 0
  ))
  // if (externalDisplay) {
  //   win = new BrowserWindow({
  //     x: externalDisplay.bounds.x + 50,
  //     y: externalDisplay.bounds.y + 50
  //   })
  //   win.loadURL('https://github.com')
  // }
}

module.exports = {
  setUp,
  loadPresentWindows,
  loadEditWindows,
}
