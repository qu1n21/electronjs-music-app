const { app, BrowserWindow, Menu, Notification, Tray, ipcMain } = require('electron')

const path = require('node:path')

// require('electron-reload')(__dirname, {
//   electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
// });

require('electron-reload')(__dirname);

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong')
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

const menuTemplate = [ ];
const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);

