window.jasonName = `accountList`

fetch('components/Account-password/Account-password.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('account-password-container').innerHTML = html;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'components/Account-password/Account-password.css';
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
    link.href = 'components/site-radio-button/site-radio-button.css';
    document.head.appendChild(link);


    const script = document.createElement('script');
    script.src = 'components/site-radio-button/site-radio-button.js';
    document.body.appendChild(script);
  });

fetch('components/add-log/add-log.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('add-log-container').innerHTML = html;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'components/add-log/add-log.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'components/add-log/add-log.js';
    document.body.appendChild(script);
  });

window.accountFile = {};


document.addEventListener('DOMContentLoaded', async () => {

  window.accountFile = await window.writeFile.readJsonFile(window.jasonName);
  // 如果讀取的檔案為 null，初始化為空物件
  if (window.accountFile === null) {
    window.accountFile = {};
  }

  // 確保 window.accountFile["dev"] 是陣列
  if (Array.isArray(window.accountFile["dev"])) {
    window.accountFile["dev"].forEach((item) => {
      fetch('components/account-list/account-list.html')
        .then(response => response.text())
        .then(html => {
          // 在容器中加入新的 HTML 內容
          const accountListContainer = document.getElementById('account-list-container');
          accountListContainer.insertAdjacentHTML('beforeend', html);

          // 取得新插入的 .account-list 元素
          const newElement = accountListContainer.querySelector('.account-list:last-child');

          // 更新新元素的內容
          newElement.querySelector('.account-list-name').textContent = item.name;
          newElement.querySelector('.account-list-account').textContent = item.email;
          newElement.querySelector('.account-list-name').dataset.password = item.password;
          newElement.querySelector('.account-list-name').dataset.email = item.email;
          newElement.querySelector('.account-list-name').dataset.site = 'dev'; // 如果 `site` 是 'dev'
          newElement.querySelector('.account-list-name').dataset.title = item.name;
        });
    });
  }
})

