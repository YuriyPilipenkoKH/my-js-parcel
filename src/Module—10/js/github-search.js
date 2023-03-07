// import { doc } from "prettier";
// import { Logger } from "sass";
import '../css/common.css'

const searchbox = document.querySelector('.searchbox')
// console.log(searchbox);

searchbox.addEventListener('submit' ,  (e) => {
    e.preventDefault()

    const login = searchbox.elements.git.value
    fetchUser(login)
    .then(userdata => console.log(userdata))
})

function fetchUser(login) {
    return fetch(`https://api.github.com/users/${login}`)
    .then(res => res.json())
}