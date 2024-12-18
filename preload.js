const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('resellerApi', {
  getResellToken: (username, password, site) => ipcRenderer.invoke('getResellToken', username, password, site),
  getVortexToken: (resellToken, site) => ipcRenderer.invoke('getVortexToken', resellToken, site)
})

contextBridge.exposeInMainWorld('writeFile', {
  saveStructAsJson: (fileName, struct) => ipcRenderer.invoke('saveStructAsJson', fileName, struct),
  readJsonFile: (fileName) => ipcRenderer.invoke('readJsonFile', fileName)
})


