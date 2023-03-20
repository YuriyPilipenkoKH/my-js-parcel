import SimpleLightbox from 'simplelightbox'
import "simplelightbox/dist/simple-lightbox.min.css"
import Notiflix from 'notiflix'
import {fetchCard} from './fetchCard.js'
import { lens } from './markup.js'
import itemTpl from '../../templates/img-card.hbs'

 export const refs = {
    form: document.querySelector('.search-form'),
    inputField: document.querySelector('.search-form > input'),
    buttonSubmit: document.querySelector('.search-form > button'),
    buttonMore: document.querySelector('.load-more'),
    galleryList: document.querySelector('.gallery'),
  };
    let perPage = 10;
    let page = 0;
    let currentQuery = ''
    let remained = 0

    refs.inputField.classList.add('field')
    refs.buttonSubmit.classList.add('search-btn')
    refs.buttonSubmit.innerHTML = lens


    refs.form.addEventListener('submit', onSearch)
    refs.buttonMore.addEventListener('click', onLoadMoreImg)

function onSearch(e) {
    e.preventDefault()
    clearGallery()
    page = 1
    // console.log('page',page);

    refs.inputField.focused = false
    const input = e.currentTarget.elements.searchQuery.value.trim()
    currentQuery = input

 

    if(input === '' || input.length === 1){
    return Notiflix.Notify.failure('Please enter valid name.')
    }
   
    fetchCard(input, page, perPage)
    .then(({ hits,totalHits }) => {
        console.log('totalHits',totalHits);

        remained =  totalHits - perPage
        console.log('page',page,'remained',remained);

        if (hits.length === 0) {
            Notiflix.Notify.failure(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          } else {

        const maxPage = totalHits / hits.length;
       
        if (maxPage <= page) {
          Notiflix.Notify.failure(
            "We're sorry, but you've reached the end of search results."
          );
          Notiflix.Notify.info(`Hooray! We found ${totalHits} images.`);
          return createMarkup(hits)
        }
        Notiflix.Notify.info(`Hooray! We found ${totalHits} images.`);
        refs.buttonMore.classList.remove('is-hidden');

        return createMarkup(hits);
          }
    })
    .catch(error => console.log(error))
    .finally(() => {
      refs.buttonMore.disabled = false;
      refs.buttonSubmit.disabled = false;
    //   refs.form.reset()
    });

}



function onLoadMoreImg(e) {
    refs.buttonMore.disabled = true;
    page +=1
    // console.log('page',page);

fetchCard(currentQuery, page, perPage)
.then(({ hits, totalHits }) => {

    remained =  totalHits - perPage * page
    console.log('page',page,'remained',remained);

  const maxPage = totalHits / perPage;

  if (maxPage <= page) {
    Notiflix.Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
    refs.buttonMore.classList.add('is-hidden');
  }

  return createMarkup(hits);
})
.catch(error => console.log(error))
.finally(() => {
  refs.buttonMore.disabled = false;
});
}



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


function createMarkup(data) {
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

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    enableKeyboard: true,
    doubleTapZoom: 5,
  });

function clearGallery() {
    refs.galleryList.innerHTML = '';
  }

  
 