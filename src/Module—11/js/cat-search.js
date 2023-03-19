import SimpleLightbox from 'simplelightbox';
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
//   console.log(refs.form);
//   console.log(refs.buttonSubmit);
//   console.log(refs.buttonMore);
//   console.log(refs.galleryList);

refs.form.addEventListener('submit', onSearch);
refs.buttonMore.addEventListener('click', onLoadMoreImg);

function onSearch(e) {
    e.preventDefault()
    clearGallery()

    const input = e.currentTarget.elements.searchQuery.value.trim();

    fetchCard(input)

}

function render() {
    
}

function onLoadMoreImg() {

}

function clearGallery() {
    refs.galleryList.innerHTML = '';
  }