
import '../css/common.css'
import { fetchUser } from './services/api'
import gitCardTpl from '../../templates/github-card'


const searchbox = document.querySelector('.searchbox')
const profileContainer = document.querySelector('.profile-section')
// console.log(searchbox); 

searchbox.addEventListener('submit' , onSubmit )

function onSubmit(e) {
    e.preventDefault()
    const login = searchbox.elements.git.value
   
    fetchUser(login).then(showProfile)
    searchbox.reset()
}

function showProfile({
    avatar_url,
    name,
    bio,
    public_repos,
    folowers,
    folowing,
}) {
   
    profileContainer.insertAdjacentHTML('beforeend', gitCardTpl({
        avatar_url,
        name,
        bio,
        public_repos,
        folowers,
        folowing,
    }))

}
  

