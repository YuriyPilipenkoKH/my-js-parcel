import {refs} from './cat-search'


export function addStyle() {
     
    refs.inputField.addEventListener('input', function () {
        refs.form.style.borderColor = '#ff5'
       
    } )
    refs.inputField.addEventListener('blur', function () {
        refs.form.style.borderColor = '#fff'
       
    } )
    
}

