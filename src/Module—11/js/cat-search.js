import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import Notiflix from 'notiflix';
import {fetchCard} from './fetchCard.js'
import { lens } from './markup.js';
import { doc } from 'prettier';
import itemTpl from '../../templates/img-card.hbs'


let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    enableKeyboard: true,
    doubleTapZoom: 5,
  });

  const refs = {
    form: document.querySelector('.search-form'),
    inputField: document.querySelector('.search-form > input'),
    buttonSubmit: document.querySelector('.search-form > button'),
    buttonMore: document.querySelector('.load-more'),
    galleryList: document.querySelector('.gallery'),
  };
    let page = 1;
    let currentQuery = ''

    refs.inputField.classList.add('field')
    refs.buttonSubmit.classList.add('search-btn')
    refs.buttonSubmit.innerHTML = lens


    refs.form.addEventListener('submit', onSearch);
    refs.buttonMore.addEventListener('click', onLoadMoreImg);

function onSearch(e) {
    e.preventDefault()
    clearGallery()

    const input = e.currentTarget.elements.searchQuery.value.trim();
    currentQuery = input

    refs.inputField.focused = false

    if(input === '' || input.length === 1){
    return Notiflix.Notify.failure('Please enter valid name.');
    }
   

    fetchCard(input)
    .then(({ hits,totalHits }) => {

        if (hits.length === 0) {
            Notiflix.Notify.failure(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          } else {

        const maxPage = totalHits / hits.length;
        const currentPage = page - 1;

        if (maxPage <= currentPage) {
          Notiflix.Notify.failure(
            "We're sorry, but you've reached the end of search results."
          );
          Notiflix.Notify.info(`Hooray! We found ${totalHits} images.`);
          return imagesGalleryMarkup(hits);
        }
        Notiflix.Notify.info(`Hooray! We found ${totalHits} images.`);
        refs.buttonMore.classList.remove('is-hidden');

        return imagesGalleryMarkup(hits);
          }
    })
    .catch(error => console.log(error))
    .finally(() => {
      refs.buttonMore.disabled = false;
      refs.buttonSubmit.disabled = false;
    });

}

console.log(currentQuery);

function renderItem(data) {
    const markup = data
    .map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => itemTpl({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      })).join('')
    return markup;
  }



function onLoadMoreImg(e) {
    page += 1
    const input = refs.inputField.value.trim();
    
    fetchCard(input)


}

console.log(page);


function imagesGalleryMarkup(data) {
    refs.galleryList.insertAdjacentHTML('beforeend', renderItem(data));
    lightbox.refresh();
    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();
  
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }

function clearGallery() {
    refs.galleryList.innerHTML = '';
  }

 
 