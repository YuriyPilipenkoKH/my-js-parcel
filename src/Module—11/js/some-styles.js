import {refs} from './cat-search'

const iconLens = document.querySelector('.lens')

refs.inputField.addEventListener('focus',addStyle)

export function addStyle() {
refs.form.style.borderColor = '#ff5'
}
