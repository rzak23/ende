const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    transparent: true,
    frame: false,
    width: 1000,
    height: 600,
    icon: __dirname+'/build/icon.png',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })

  win.loadFile('index.html'); 
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

  app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
