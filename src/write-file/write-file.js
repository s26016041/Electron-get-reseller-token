const fs = require('fs');

class WriteFile {
    /**
  * 將 struct-like 值保存為 JSON 文件
  * @param {string} fileName - 文件名稱（不包含 .json 後綴）
  * @param {Object} struct - 傳入的 struct 資料（可序列化的對象）
  */
    saveStructAsJson(fileName, struct) {
        const jsonData = JSON.stringify(struct, null, 2);
        fs.writeFileSync(`${fileName}.json`, jsonData, 'utf8');
    }

    /**
    * 從 JSON 文件讀取數據並轉為對象
    * @param {string} fileName - 文件名稱（不包含 .json 後綴）
    * @returns {Object} 解析後的 JSON 對象
    */
    async readJsonFile(fileName) {
        try {
            const jsonData = await fs.readFileSync(`${fileName}.json`, 'utf8');
            return JSON.parse(jsonData);
        } catch (error) {
            return null; // 或者根據需要處理錯誤
        }
    }
}

module.exports = WriteFile;