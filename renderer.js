fetch('components/Account-password/Account-password.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('account-password-container').innerHTML = html;
    const script = document.createElement('script');
    script.src = 'components/Account-password/Account-password.js';
    document.body.appendChild(script);
  });