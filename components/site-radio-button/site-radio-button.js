const radioButtons = document.querySelectorAll('.site-radio-button input[type="radio"]');

// 為每個單選按鈕添加 change 事件監聽器
radioButtons.forEach(radio => {
    radio.addEventListener('change', (event) => {
        // 在這裡執行你想要的功能
        handleSiteChange(event.target.value);
    });
});

// 定義你的功能
function handleSiteChange(site) {
    const container = document.getElementById('account-list-container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    document.getElementById('email').value = ""
    document.getElementById('password').value = ""
    document.getElementById('account-name').value = ""

    window.accountFile[site].forEach((item, index) => {
        fetch('components/account-list/account-list.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('account-list-container').innerHTML += html;
                const newElement = document.querySelector('#account-list-container .account-list:last-child');

                newElement.querySelector('.account-list-name').textContent = item.name;
                newElement.querySelector('.account-list-account').textContent = item.email;
                newElement.querySelector('.account-list-name').dataset.password = item.password;
                newElement.querySelector('.account-list-name').dataset.email = item.email;
                newElement.querySelector('.account-list-name').dataset.site = site;
                newElement.querySelector('.account-list-name').dataset.title = item.name;
            });
    });



}