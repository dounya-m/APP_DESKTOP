const path = require('path')
const {app, BrowserWindow} = require('electron')

function creatMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Hello World',
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'))
}

app.whenReady().then(() => {
    creatMainWindow()
})