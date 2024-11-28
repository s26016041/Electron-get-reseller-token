const { contextBridge } = require('electron');
const ResellerApi = require('./src/reseller-api/reseller-api.js');

contextBridge.exposeInMainWorld('api', {
    getResellToken: async (email, password) => {
        const resellerApi = new ResellerApi();
        return await resellerApi.getResellToken(email, password);
    },
    getVortexToken: async (resellToken) => {
        const resellerApi = new ResellerApi();
        return await resellerApi.getVortexToken(resellToken);
    }
});
