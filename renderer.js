fetch('components/Account-password/Account-password.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('account-password-container').innerHTML = html;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href ='components/Account-password/Account-password.css';
    document.head.appendChild(link);


    const script = document.createElement('script');
    script.src = 'components/Account-password/Account-password.js';
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

fetch('components/reminder-box/reminder-box.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('reminder-box-container').innerHTML = html;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'components/reminder-box/reminder-box.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'components/reminder-box/reminder-box.js';
    document.body.appendChild(script);
  });

  fetch('components/site-radio-button/site-radio-button.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('site-radio-button-container').innerHTML = html;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href ='components/site-radio-button/site-radio-button.css';
    document.head.appendChild(link);


    const script = document.createElement('script');
    script.src = 'components/site-radio-button/site-radio-button.js';
    document.body.appendChild(script);
  });