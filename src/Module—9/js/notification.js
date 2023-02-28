const NOTIFICATION_DELAY = 5000
let timeoutId = null

const refs = {
    notification:document.querySelector('.js-alert')
}

refs.notification.addEventListener('click', onNotificationClick)

showNotification()

function onNotificationClick() {
    hideNotification()
    clearTimeout(timeoutId)
}

function showNotification() {
    refs.notification.classList.add('is-visible')

    timeoutId =  setTimeout(() => {
        console.log('needs closing');
        hideNotification()
    }, NOTIFICATION_DELAY);

    console.log(timeoutId);
}

function hideNotification() {
    refs.notification.classList.remove('is-visible') 
}
