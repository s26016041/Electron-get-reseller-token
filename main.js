const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    resizable: false,
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true, // 開啟上下文隔離
      preload: path.join(__dirname, 'preload.js'), // 指向 preload.js
    }
  });

  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();
});
