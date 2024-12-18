const axios = require('axios');

class ResellerApi {
    /**
     * @param {string} username 
     * @param {string} password 
     * @param {string} site 
     * @returns {{ExpiresIn:number,IdToken:string}}
     */
    async getResellToken(username, password, site) {
        try {
            let cognitoUrl, clientId
            switch (site) {
                case "dev":
                    cognitoUrl = `https://cognito-idp.ap-northeast-1.amazonaws.com/`
                    clientId = `hc3lc2p8j1mjho5qqg478quhm`
                    break;
                case "stage":
                    cognitoUrl = `https://cognito-idp.us-west-2.amazonaws.com/`
                    clientId = `5gsnpmkg6debsame5fmd4poqhr`
                    break;
                case "prod":
                    cognitoUrl = `https://cognito-idp.us-west-2.amazonaws.com/`
                    clientId = `1useoulpvaip0jcnvqphqamo3m`
                    break;
                default:
                    throw new Error("Invalid site value");
            }
            const requestData = {
                AuthFlow: "USER_PASSWORD_AUTH",
                AuthParameters: {
                    USERNAME: "",
                    PASSWORD: ""
                },
                ClientMetadata: {
                    "custom:vendor_name": "Vivotek"
                },
                ClientId: clientId
            };

            requestData.AuthParameters.USERNAME = username
            requestData.AuthParameters.PASSWORD = password

            const postResponse = await axios.post(cognitoUrl, JSON.stringify(requestData), {
                headers: {
                    'Content-Type': 'application/x-amz-json-1.1',
                    'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth'
                },
            });

            return postResponse.data.AuthenticationResult
        } catch (error) {
            return null
        }
    }

    /**
     * @param {string} resellToken 
     * @param {string} site 
     * @returns {{expire:string,token:string}}
     */
    async getVortexToken(resellToken, site) {
        try {
            let companiesInfoUrl, vortextokenUrl
            switch (site) {
                case "dev":
                    companiesInfoUrl = `https://api.reseller.dev.vortexcloud.com/v1/companies/info`
                    vortextokenUrl = `https://api.reseller.dev.vortexcloud.com/auth/vortextoken`
                    break;
                case "stage":
                    companiesInfoUrl = `https://api.reseller.stage.vortexcloud.com/v1/companies/info`
                    vortextokenUrl = `https://api.reseller.stage.vortexcloud.com/auth/vortextoken`
                    break;
                case "prod":
                    companiesInfoUrl = `https://api.reseller.vortexcloud.com/v1/companies/info`
                    vortextokenUrl = `https://api.reseller.vortexcloud.com/auth/vortextoken`
                    break;
                default:
                    throw new Error("Invalid site value");
            }
            const authorization = 'Bearer ' + resellToken
            const vortextokenRequestData = {
                companyId: 0,
            };

            const infoGetResponse = await axios.get(companiesInfoUrl, {
                headers: {
                    'Content-Type': 'application/x-amz-json-1.1',
                    'authorization': authorization
                }
            });

            vortextokenRequestData.companyId = infoGetResponse.data.id

            const vortextokenPostResponse = await axios.post(vortextokenUrl, JSON.stringify(vortextokenRequestData), {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'authorization': authorization
                },
            });

            return vortextokenPostResponse.data
        } catch (error) {
            return null
        }
    }
}

module.exports = ResellerApi;