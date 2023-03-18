// import './css/styles.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import { ServiceApi } from './news-api';
import Notiflix from 'notiflix';

import fetchCard from './fetchCard';

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

 function onSearch(e) {
    e.preventDefault()
    const input = refs.form.elements.searchQuery.value

    console.log(input);
   
    fetchCard(input).then(console.log)
    refs.form.reset()
}
