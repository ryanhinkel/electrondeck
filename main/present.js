const electron = require('electron')

exports.present = () => {
  let displays = electron.screen.getAllDisplays()
  console.log(displays)
}

exports.unPresent = () => {

}
