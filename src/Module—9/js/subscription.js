import BSN from 'bootstrap.native'
import { ref } from 'joi';

// ====reminder===========

// const PROMPT_DELAY = 1000
// const MAX_PROMPT_ATTEMPTS = 3

// let promptCounter  = 0
// let hasSubscribed = false
 
// const intervalId =  setInterval(() => {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//         console.log('stop interval');
//         clearInterval(intervalId)
//         return
//     }
//     console.log('Please Subscribe!'+Date.now());
//     promptCounter +=1
// }, PROMPT_DELAY);
//=============================

const refs = {
    modal: document.querySelector('#subscription-modal'),
    launchBtn: document.querySelector('.launch'),
    subscribeBtn: document.querySelector('[data-subscribe]') 

}
const PROMPT_DELAY = 4000
const MAX_PROMPT_ATTEMPTS = 3
let promptCounter = 0
let  hasSubscribed = false


refs.modal.addEventListener('hide.bs.modal', () => {
    openModal()
})

const modal = new BSN.Modal('#subscription-modal')
console.log(modal);
console.log(refs.subscribeBtn);
// console.log(refs.launchBtn);

// refs.launchBtn.addEventListener('click', openModal()) 

refs.subscribeBtn.addEventListener('click', () => {
    hasSubscribed = true
    modal.hide()
})

openModal()

function openModal() {
if(promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    return
}

    setTimeout(() => {
        modal.show() 
        promptCounter +=1
     }, PROMPT_DELAY);
}


