
document.getElementById('produce-button').addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const resellToken = await window.resellerApi.getResellToken(email, password)
    const vortexToken = await window.resellerApi.getVortexToken(resellToken.IdToken)

    if (typeof resellToken === 'undefined') {
      alert(`帳號密碼錯誤`);
      return
    }

    document.getElementById('reseller-text').innerText = `Bearer ` + resellToken.IdToken

    document.getElementById('vortex-text').innerText = `Bearer ` + vortexToken.token
  } catch (error) {
    alert(`帳號密碼錯誤`);
  }
});
