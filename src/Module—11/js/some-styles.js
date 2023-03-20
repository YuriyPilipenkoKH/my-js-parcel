import {refs} from './cat-search'


export function addStyle() {
    const iconLens = document.querySelector('.lens')    
    refs.inputField.addEventListener('input', function () {
        refs.form.style.borderColor = '#ff5'
        // iconLens.style.fill = '#ff5'
    } )
    
}

