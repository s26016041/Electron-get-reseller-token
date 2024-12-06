const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('resellerApi', {
  getResellToken: (username, password,site) => ipcRenderer.invoke('getResellToken', username, password, site),
  getVortexToken: (resellToken, site) => ipcRenderer.invoke('getVortexToken', resellToken, site)
})