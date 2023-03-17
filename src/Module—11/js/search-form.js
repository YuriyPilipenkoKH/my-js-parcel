// import './css/styles.css';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import { ServiceApi } from './news-api';
import Notiflix from 'notiflix';


// const API_KEY = '34491623-5c4ef369d6c59f62bc483440c';
// const BASE_URL = 'https://pixabay.com/api';

const { height: cardHeight } = document
  .querySelector(".gallery")
//   .firstElementChild.getBoundingClientRect();

  console.log(cardHeight);

  const refs = {
    form: document.querySelector('.search-form'),
    buttonSubmit: document.querySelector('.search-form > button'),
    button: document.querySelector('.load-more'),
    galleryList: document.querySelector('.gallery'),
  }

  let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });


 refs.form.addEventListener('submit' , onSearch )
 refs.buttonSubmit.setAttribute("data-name", "search")

 function onSearch(e) {
    e.preventDefault()
    const input = refs.form.elements.searchQuery.value

    console.log(input);
   
    // fetchUser(login).then(showProfile)
    refs.form.reset()
}
