
document.getElementById('produce-button').addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const site = document.querySelector('input[name="site"]:checked').value
  const resellToken = await window.resellerApi.getResellToken(email, password, site)
  if (typeof resellToken === 'undefined' || resellToken === null) {
    document.getElementById('reseller-text').innerText ="帳號密碼錯誤"
    return
  }
  const vortexToken = await window.resellerApi.getVortexToken(resellToken.IdToken, site)

  document.getElementById('reseller-text').innerText = `Bearer ` + resellToken.IdToken

  document.getElementById('vortex-text').innerText = `Bearer ` + vortexToken.token

});
