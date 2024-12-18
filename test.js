const ResellerApi = require('./src/reseller-api/reseller-api.js');
const WriteFile = require('./src/write-file/write-file.js');

(async () => {
    // const a = new ResellerApi();
    // const activityTable = await a.getResellToken('sinjie.wan6g@vivotek.com','Aa11111111@',"dev"); // 等待 Promise 解析

    // // const activityTable2 = await a.getVortexToken(activityTable.IdToken,"dev");
    // // console.log(activityTable); // 访问 bulletinId

    // wwe = {}
    // wwe["std"] = wwe["std"] || [];
    // wwe["std"].push({ email: "wee@gmail.com", password: "wwesssa", name: "Fox" })
    // wwe["std"].push({ email: "2wee@gmail.com", password: "2wwesssa", name: "2Fox" })
    const b = new WriteFile()
    // b.saveStructAsJson("accountlist", wwe)
    ss =await b.readJsonFile("accountlist")
    console.log(ss);

})();