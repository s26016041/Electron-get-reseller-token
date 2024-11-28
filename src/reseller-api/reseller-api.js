const axios = require('axios');

class ResellerApi {


    /**
     * @param {string} username 
     * @param {string} password 
     * @returns {{ExpiresIn:number,IdToken:string}}
     */
    async getResellToken(username, password) {
        try {
            const requestData = {
                AuthFlow: "USER_PASSWORD_AUTH",
                AuthParameters: {
                    USERNAME: "",
                    PASSWORD: ""
                },
                ClientMetadata: {
                    "custom:vendor_name": "Vivotek"
                },
                ClientId: "hc3lc2p8j1mjho5qqg478quhm"
            };

            requestData.AuthParameters.USERNAME = username
            requestData.AuthParameters.PASSWORD = password

            const postResponse = await axios.post('https://cognito-idp.ap-northeast-1.amazonaws.com/', JSON.stringify(requestData), {
                headers: {
                    'Content-Type': 'application/x-amz-json-1.1',
                    'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth'
                },
            });

            return postResponse.data.AuthenticationResult
        } catch (error) {
            alert("reseller 或 cognito 修改了登入方式 API 打不通請聯繫開發人員")
            console.log(error)
        }
    }

    /**
     * @param {string} resellToken 
     * @returns {{expire:string,token:string}}
     */
    async getVortexToken(resellToken) {
        try {
            const authorization = 'Bearer ' + resellToken
            const vortextokenRequestData = {
                companyId: 0,
            };

            const infoGetResponse = await axios.get('https://api.reseller.dev.vortexcloud.com/v1/companies/info', {
                headers: {
                    'Content-Type': 'application/x-amz-json-1.1',
                    'authorization': authorization
                }
            });

            vortextokenRequestData.companyId = infoGetResponse.data.id

            const vortextokenPostResponse = await axios.post('https://api.reseller.dev.vortexcloud.com/auth/vortextoken', JSON.stringify(vortextokenRequestData), {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'authorization': authorization
                },
            });

            return vortextokenPostResponse.data
        } catch (error) {
            alert("reseller 或 cognito 修改了登入方式 API 打不通請聯繫開發人員")
            console.log(error)
        }
    }
}

module.exports = ResellerApi;