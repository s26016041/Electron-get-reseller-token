document.getElementById('record-account').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const site = document.querySelector('input[name="site"]:checked').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('account-name').value;

    if (name === "") {
        document.getElementById('reseller-text').innerText = "暱稱不要空白"
        return;
    }
    if (password === "") {
        document.getElementById('reseller-text').innerText = "密碼不要空白"
        return;
    }
    if (email === "") {
        document.getElementById('reseller-text').innerText = "帳號不要空白"
        return;
    }


    fetch('components/account-list/account-list.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('account-list-container').innerHTML += html;
            const newElement = document.querySelector('#account-list-container .account-list:last-child');


            newElement.querySelector('.account-list-name').textContent = name;
            newElement.querySelector('.account-list-account').textContent = email;
            newElement.querySelector('.account-list-name').dataset.password = password;
            newElement.querySelector('.account-list-name').dataset.email = email;
            newElement.querySelector('.account-list-name').dataset.site = site;
            newElement.querySelector('.account-list-name').dataset.title = name;

            window.accountFile[site] = window.accountFile[site] || [];
            window.accountFile[site].push({ email: email, password: password, name: name })

            window.writeFile.saveStructAsJson(window.jasonName, window.accountFile)
        });
});
