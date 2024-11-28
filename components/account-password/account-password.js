document.getElementById('produce-button').addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  alert(window.api);
  try {
    const resellToken = await window.api.getResellToken(email, password);
    const vortexToken = await window.api.getVortexToken(resellToken);
    alert('Vortex Token: ' + vortexToken); // 修正 alert
  } catch (error) {
    alert(error);
  }
});
