import SimpleLightbox from 'simplelightbox'
import "simplelightbox/dist/simple-lightbox.min.css"
import Notiflix from 'notiflix'
import { finder } from './fetch-class.js'
import { lens } from './markup.js'
import itemTpl from '../../templates/img-card.hbs'
// import { addStyle } from './some-styles.js'

console.log(finder);

class ImageManager {
    #markup = 1;
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
      }
    
      #initListeners() {
        this.#refs.form.addEventListener('submit', this.#onSearch.bind(this));
        this.#refs.buttonMore.addEventListener('click', this.#onLoadMoreImg.bind(this));
      }


      #onSearch(e) {}

      #onLoadMoreImg(e) {}

      #loadMore() {
        // return this.#fetchArticles().then((articles) => {
        //   this.#updateArticles([...this.#articles, ...articles]);
        // });
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

}
