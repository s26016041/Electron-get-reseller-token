const ResellerApi = require('./src/reseller-api/reseller-api.js');

(async () => {
    const a = new ResellerApi();
    const activityTable = await a.getResellToken('sinjie.wang@vivotek.com','Aa11111111@',"dev"); // 等待 Promise 解析

    const activityTable2 = await a.getVortexToken(activityTable.IdToken,"dev");
    console.log(activityTable2.expire,"----------------------",activityTable2.token); // 访问 bulletinId

})();