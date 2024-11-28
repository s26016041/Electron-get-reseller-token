fetch('components/Account-password/Account-password.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('account-password-container').innerHTML = html;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'components/account-password/account-password.css';
    document.head.appendChild(link);
    

    const script = document.createElement('script');
    script.src = 'components/account-password/account-password.js';
    document.body.appendChild(script);
  });

fetch('components/token-table/token-table.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('token-table-container').innerHTML = html;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'components/token-table/token-table.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'components/token-table/token-table.js';
    document.body.appendChild(script);
  });

  document.getElementById('wwww').addEventListener('click', async () => {
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
  