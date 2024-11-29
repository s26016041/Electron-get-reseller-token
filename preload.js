const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
})

contextBridge.exposeInMainWorld('resellerApi', {
  getResellToken: (username, password) => ipcRenderer.invoke('getResellToken', username, password),
  getVortexToken: (resellToken) => ipcRenderer.invoke('getVortexToken', resellToken)
})

contextBridge.exposeInMainWorld('path', {
  resolve:(place)=> ipcRenderer.invoke('resolve', place)
})
