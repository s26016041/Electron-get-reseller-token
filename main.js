const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path')
const ResellerApi = require(path.resolve(__dirname, './src/reseller-api/reseller-api.js'));
const resellerApi = new ResellerApi
const { autoUpdater } = require("electron-updater");

const createWindow = () => {
    const win = new BrowserWindow({
        autoHideMenuBar: true,
        resizable: false,
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        icon: path.join(__dirname, './icons/icon.png')
    });

    win.loadFile('index.html');
};

app.whenReady().then(() => {
    autoUpdater.setFeedURL({
        provider: "github",
        owner: "s26016041",
        repo: "Electron-get-reseller-token"
    });


    autoUpdater.checkForUpdatesAndNotify();


    autoUpdater.on('update-available', () => {
        console.log('Update available!');
    });

    autoUpdater.on('update-downloaded', () => {
        console.log('Update downloaded!');
        autoUpdater.quitAndInstall();
    });

    autoUpdater.on('error', (error) => {
        console.log('Update error:', error);
    });

    ipcMain.handle('getResellToken', async (event, username, password, site) => resellerApi.getResellToken(username, password, site))
    ipcMain.handle('getVortexToken', async (event, resellToken, site) => resellerApi.getVortexToken(resellToken, site))

    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});