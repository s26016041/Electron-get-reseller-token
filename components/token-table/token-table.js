
document.getElementById('reseller-text').addEventListener('click', async () => {
    try {
        const textToCopy = document.getElementById('reseller-text').innerText;
        await navigator.clipboard.writeText(textToCopy);
    } catch (error) {
        showToast(error);
    }

    showReminder()
});

document.getElementById('vortex-text').addEventListener('click', async () => {
    try {
        const textToCopy = document.getElementById('vortex-text').innerText;
        await navigator.clipboard.writeText(textToCopy);
    } catch (error) {
        showToast(error);
    }

    showReminder()
});

function showReminder() {
    if (document.getElementById('reseller-text').innerText === "") {
        return
    }
    const reminderBox = document.getElementById('reminder-box');

    // 設定為可見
    reminderBox.style.visibility = 'visible';
    reminderBox.style.opacity = '1';

    // 設定在3秒後淡出
    setTimeout(() => {
        reminderBox.style.opacity = '0'; // 淡出
    }, 2000);

    // 設定在淡出完成後完全隱藏
    setTimeout(() => {
        reminderBox.style.visibility = 'hidden';
    }, 3500); // 2000ms 淡出延遲 + 1500ms transition 時間
}