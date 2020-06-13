const { app } = require('electron')

const { setUp } = require('./display')

app.whenReady().then(setUp)

app.on('window-all-closed', function () {
  app.quit()
})
