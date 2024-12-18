// 等待 DOM 加載完成後再執行
document.addEventListener('DOMContentLoaded', () => {
  // 綁定事件監聽器到父元素
  document.getElementById('account-list-container').addEventListener('click', (event) => {
    // 如果點擊的是 .delete-button
    if (event.target.classList.contains('delete-button')) {
      // 刪除該項目
      const accountList = event.target.closest('.account-list'); // 找到最接近的 .account-list 父元素
      const accountListName = accountList.querySelector('.account-list-name');

      const indexToDelete = window.accountFile[accountListName.dataset.site].findIndex(item =>
        (item.email === accountListName.dataset.email && item.password === accountListName.dataset.password && item.name === accountListName.dataset.title));

      // 如果找到，使用 splice 刪除
      if (indexToDelete !== -1) {
        window.accountFile[accountListName.dataset.site].splice(indexToDelete, 1);
      }

      window.writeFile.saveStructAsJson(window.jasonName, window.accountFile)

      accountList.remove(); // 移除該元素
    }

    // 如果點擊的是 .account-list-name
    if (event.target.classList.contains('account-list-name')) {
      const clickedElement = event.target; // 被點擊的元素

      // 可以在這裡執行一些操作，比如填入值
      document.getElementById('email').value = clickedElement.dataset.email;
      document.getElementById('account-name').value = clickedElement.dataset.title;
      document.getElementById('password').value = clickedElement.dataset.password;
    }
  });
});
