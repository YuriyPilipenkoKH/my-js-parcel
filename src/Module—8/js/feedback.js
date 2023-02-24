const refs = {
    form: document.querySelector('form.feedback-form'),
    textarea: document.querySelector('form [name="message"]'),
    email: document.querySelector('form [name="email"]')
}


const EMAIL_KEY = 'feedback-email'
const MESSAGE_KEY = 'feedback-msg'

console.log(localStorage);

refs.form.addEventListener('submit', onFormSubmit)
refs.email.addEventListener('input', onMailInput)
refs.textarea.addEventListener('input', onTextInput)

populateTextarea()

function onFormSubmit(e) {
    e.preventDefault()
     
    e.currentTarget.reset()
    localStorage.removeItem(EMAIL_KEY)
    localStorage.removeItem(MESSAGE_KEY)
} 

function onMailInput(e) {
    const message = e.currentTarget.value
    localStorage.setItem(EMAIL_KEY,message)

    console.log(message);
}

function onTextInput(e) {
    const message = e.currentTarget.value
    localStorage.setItem(MESSAGE_KEY,message)

    console.log(message);
}

function populateTextarea(e) {
    const saveMessage = localStorage.getItem(MESSAGE_KEY)
    if(saveMessage) {
        console.log(saveMessage);

        refs.textarea.value = saveMessage
    }

    const saveEmail = localStorage.getItem(EMAIL_KEY)
    if(saveEmail) {
        console.log(saveEmail);

        refs.email.value = saveEmail
    }

}