const { loadPresentWindows, loadEditWindows } = require('./display')
const { store } = require('./redux/store')

function toggleScreenMode () {
  const presenting = store.getState()
  if (presenting) {
    // loadEditWindows()
  } else {
    // loadPresentWindows()
  }
}

module.exports = {
  toggleScreenMode,
}
