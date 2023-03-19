// import './css/styles.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import { ServiceApi } from './news-api';
import Notiflix from 'notiflix';

import fetchCard from './fetch-class';

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
    enableKeyboard: true,
    doubleTapZoom: 5,
  });


 refs.form.addEventListener('submit' , onSearch )
 refs.button.addEventListener('click', onLoadMoreImg);

 function onSearch(e) {
    e.preventDefault();
    clearGallery();
    refs.button.classList.add('is-hidden');

    const input = refs.form.elements.searchQuery.value.trim()

    if(input === '') {
    return Notiflix.Notify.failure('Please enter valid name.');
    }
    refs.buttonSubmit.disabled = true;

    fetchCard(input)
    .then(console.log)


    refs.form.reset()
    refs.buttonSubmit.disabled = false;
}


function onLoadMoreImg() {

}

function clearGallery() {
    refs.galleryList.innerHTML = '';
  }

  function scroll() {
    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();
  
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }  