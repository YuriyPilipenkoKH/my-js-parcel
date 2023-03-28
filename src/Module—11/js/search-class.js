import SimpleLightbox from 'simplelightbox'
import "simplelightbox/dist/simple-lightbox.min.css"
import Notiflix from 'notiflix'
import { finder  } from './fetch-class.js'
import { headerOfClassSearch, itemTpl } from './markup.js'

// import './markup'
// import { addStyle } from './some-styles.js'
class ImageManager {
    #markup = headerOfClassSearch;
    #targetElement = null;
    #infinityLoading = false;
    #refs = {};
    #articles = [];

    query = null;
    page = finder.page
    perPage = finder.perPage

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
       
        
        this.#refs.inputField.focused = false
        // this.#refs.buttonSubmit.disabled = true;
        this.query = this.#refs.inputField.value
      
        if(this.query === '' || this.query.length === 1){
          return Notiflix.Notify.failure('Please enter valid name.')
          }

          finder.makeFetch(this.query)
          .then(({ hits,totalHits }) => {
            if (totalHits === 0) {
              Notiflix.Notify.failure(
                  'Sorry, there are no images matching your search query. Please try again.',
                );
            } else {
              this.render(hits);
              lightbox.refresh();
              Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
              this.#refs.buttonSubmit.disabled = true;
      
              if (totalHits > this.perPage) {
                  this.#refs.buttonMore.classList.remove('is-hidden');
              }
            }
          })
          .catch((error) => console.log(error))
          .finally(() => {
            this.#refs.form.reset();
       });  
      }

      #onLoadMoreImg(e) {
        finder.incrementPage()
        this.page = finder.page
        finder.makeFetch(this.query,this.page)
        .then(({ hits,totalHits }) => {
          this.render(hits);
          lightbox.refresh();

          const totalPages = Math.ceil(totalHits / this.perPage);
          if (this.page >= totalPages) {
            this.#refs.buttonMore.classList.add('is-hidden');
            Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")
          }
        })
        .catch(error => console.log(error));
        // console.log('finder.page',finder.page,'this.page',this.page);


        
      }

      #onInputChange() {
        this.#refs.buttonSubmit.disabled = false;
      }


      #initInfinityLoading() {
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting && this.#articles.length > 0) {
                this.#onLoadMoreImg();
              }
            }
          },
          { rootMargin: '400px' },
        );
    
        observer.observe(this.#refs.moreBtn);
      }


      render(images) {
        const mockup = images
        .map(image => {
          const { id, largeImageURL, webformatURL, tags, likes, views, comments, downloads } = image;
          return `
            <a class="gallery__link" href="${largeImageURL}">
              <div class="gallery-item" id="${id}">
                <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
                <div class="info">
                  <p class="info-item"><b>Likes</b>${likes}</p>
                  <p class="info-item"><b>Views</b>${views}</p>
                  <p class="info-item"><b>Comments</b>${comments}</p>
                  <p class="info-item"><b>Downloads</b>${downloads}</p>
                </div>
              </div>
            </a>
          `;
        })
        .join('');
       
    
        this.#refs.galleryList.insertAdjacentHTML('beforeend', mockup) 
      }

      clearGallery() {
        this.#refs.galleryList.innerHTML = ''
      }
}


const first = new ImageManager()
first.init()



const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  enableKeyboard: true,
  doubleTapZoom: 5,
});
