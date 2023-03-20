import SimpleLightbox from 'simplelightbox'
import "simplelightbox/dist/simple-lightbox.min.css"
import Notiflix from 'notiflix'
import { finder } from './fetch-class.js'
import { headerOfClassSearch } from './markup.js'
import itemTpl from '../../templates/img-card.hbs'
// import './markup'
// import { addStyle } from './some-styles.js'


class ImageManager {
    #markup = headerOfClassSearch;
    #targetElement = null;
    #infinityLoading = false;
    #searchQuery = null;
    #refs = {};
    #articles = [];

    constructor({ targetElement, infinityLoading = false } = {}) {
        this.#targetElement = targetElement || document.body;
        this.#infinityLoading = infinityLoading;
      }

      init() {
        this.#targetElement.innerHTML = this.#markup;
        this.#initRefs();
        this.#initListeners();

        if (this.#infinityLoading) {
            this.#initInfinityLoading();
          }
      }

      #initRefs() {
        this.#refs.form =  document.querySelector('.search-form');
        this.#refs.inputField = document.querySelector('.search-form > input');
        this.#refs.buttonSubmit = document.querySelector('.search-form > button');
        this.#refs.buttonMore = document.querySelector('.load-more');
        this.#refs.galleryList = document.querySelector('.gallery');
      }
    
      #initListeners() {
        this.#refs.form.addEventListener('submit', this.onSearch.bind(this));
        this.#refs.buttonMore.addEventListener('click', this.#onLoadMoreImg.bind(this));
        this.#refs.inputField.addEventListener('input', this.#onInputChange.bind(this));

      }
      

      onSearch(e) {
        e.preventDefault();
        this.clearGallery()
        let page = 1
        
        this.#refs.inputField.focused = false
        // this.#refs.buttonSubmit.disabled = true;
        const currentQuery = e.currentTarget.elements.searchQuery.value
      
        if(currentQuery === '' || currentQuery.length === 1){
          return Notiflix.Notify.failure('Please enter valid name.')
          }

          finder.makeFetch(currentQuery)
          .then(response => response.json())
          .catch((error) => console.log(error));
      }

      #onLoadMoreImg(e) {}

      #loadMore() {
        // return this.#fetchArticles().then((articles) => {
        //   this.#updateArticles([...this.#articles, ...articles]);
        // });
      }

      #onInputChange() {
        
      }


      #initInfinityLoading() {
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting && this.#articles.length > 0) {
                this.#loadMore();
              }
            }
          },
          { rootMargin: '400px' },
        );
    
        observer.observe(this.#refs.moreBtn);
      }

      #render() {
        const mockup = this.#articles.map((data) => articleTpl({ ...data })).join('');
    
        this.#refs.articles.innerHTML = mockup;
      }

      clearGallery() {

      }
}


const first = new ImageManager()
first.init()

console.log(finder);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  enableKeyboard: true,
  doubleTapZoom: 5,
});
