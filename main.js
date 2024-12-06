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
    ipcMain.handle('getResellToken', async (event, username, password, site) => resellerApi.getResellToken(username, password, site))
    ipcMain.handle('getVortexToken', async (event, resellToken, site) => resellerApi.getVortexToken(resellToken, site))

    // 设置自动更新的检查源
    autoUpdater.setFeedURL({
        provider: "github",
        owner: "s26016041",  // 替换为 GitHub 用户名
        repo: "Electron-get-reseller-token"        // 替换为 GitHub 仓库名
    });

    // 监听检查更新事件
    autoUpdater.checkForUpdatesAndNotify();

    // 更新的事件处理
    autoUpdater.on('update-available', () => {
        console.log('Update available!');
    });

    autoUpdater.on('update-downloaded', () => {
        console.log('Update downloaded!');
        // 触发安装更新
        autoUpdater.quitAndInstall();
    });

    autoUpdater.on('error', (error) => {
        console.log('Update error:', error);
    });

    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});