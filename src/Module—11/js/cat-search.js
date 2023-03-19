import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import Notiflix from 'notiflix';
import {fetchCard} from './fetchCard.js'

// console.log(fetchCard('cat'));

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  const refs = {
    form: document.querySelector('.search-form'),
    buttonSubmit: document.querySelector('.search-form > button'),
    buttonMore: document.querySelector('.load-more'),
    galleryList: document.querySelector('.gallery'),
  };
  let page = 1;

refs.form.addEventListener('submit', onSearch);
refs.buttonMore.addEventListener('click', onLoadMoreImg);

function onSearch(e) {
    e.preventDefault()
    clearGallery()

    const input = e.currentTarget.elements.searchQuery.value.trim();
    console.log(input.length);

    if(input === '' || input.length === 1){
    return Notiflix.Notify.failure('Please enter valid name.');
    }
   

    fetchCard(input)
    .then(({ hits,totalHits }) => {

        console.log('hits',hits);
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



  

}

function galleryItem(data) {
    const markup = data
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => {
          return `<a class="gallery-item" href="${largeImageURL}">
           <div class="photo-card">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" width="320" height="214"/>
            <div class="info"><p class="info-item">
            <b>Likes:</b> ${likes}
          </p>
          <p class="info-item">
            <b>Views:</b> ${views}
          </p>
          <p class="info-item">
            <b>Comments:</b> ${comments}
          </p>
          <p class="info-item">
            <b>Downloads:</b> ${downloads}
          </p>
       </div></div></a>`;
        }
      )
      .join('');
    return markup;
  }

function onLoadMoreImg() {

}

function imagesGalleryMarkup(data) {
    refs.galleryList.insertAdjacentHTML('beforeend', galleryItem(data));
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