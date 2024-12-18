const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path')
const ResellerApi = require(path.resolve(__dirname, './src/reseller-api/reseller-api.js'));
const WriteFile = require(path.resolve(__dirname, './src/write-file/write-file.js'));
const resellerApi = new ResellerApi
const writeFile = new WriteFile

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

    ipcMain.handle('saveStructAsJson', (event, fileName, struct) => writeFile.saveStructAsJson(fileName, struct))
    ipcMain.handle('readJsonFile', async (event, fileName) => writeFile.readJsonFile(fileName))

    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});