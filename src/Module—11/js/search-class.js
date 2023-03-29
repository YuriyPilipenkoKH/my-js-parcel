import SimpleLightbox from 'simplelightbox'
import "simplelightbox/dist/simple-lightbox.min.css"
import throttle from 'lodash.throttle'
import Notiflix from 'notiflix'
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { finder  } from './fetch-class.js'
import { headerOfClassSearch, itemTpl } from './markup.js'

// import {topFunction, scrollFunction} from './backToTop.js'

// console.log(finder.resetPage);
// import './markup'
// import { addStyle } from './some-styles.js'
class ImageManager {
    #markup = headerOfClassSearch;
    #targetElement = null;
    #infinityLoading = false;
    #refs = {};
    #articles = [];

    total = 0
    query = null;
    page = 1
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
        finder.resetPage()
        console.log(finder.resetPage);
        console.log('page',finder.page);
       
        
        this.#refs.inputField.focused = false
        // this.#refs.buttonSubmit.disabled = true;
        this.query = this.#refs.inputField.value
      
        if(this.query === '' || this.query.length === 1){
          return Notiflix.Notify.failure('Please enter valid name.')
          }

          finder.makeFetch(this.query)
          .then(({ hits,totalHits }) => {
            // finder.incrementPage()
            if (totalHits === 0) {
              Notiflix.Notify.failure(
                  'Sorry, there are no images matching your search query. Please try again.',
                );

                totalHits = this.total

            } else {
              this.render(hits,finder.page);
              lightbox.refresh();
              Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
              this.#refs.buttonSubmit.disabled = true;
      
              if (totalHits > this.perPage) {
                  this.#refs.buttonMore.classList.remove('is-hidden');
              }
            }
          })
          .catch((error) => Notiflix.Notify.failure('Please enter valid name.'))
          .finally(() => {
            this.#refs.form.reset();
       });  
      }

      #onLoadMoreImg(e) {
        // finder.incrementPage()
        this.page += 1
        finder.makeFetch(this.query,finder.page)
        .then(({ hits,totalHits }) => {
          this.render(hits,finder.page);
          lightbox.refresh();

          const totalPages = Math.ceil(totalHits / this.perPage);
          if (this.page >= totalPages) {
            this.hideMoreBtn()
          }
        })
        // console.log('finder.page',finder.page,'this.page',this.page);


        
      }

      #onInputChange() {
        this.#refs.buttonSubmit.disabled = false;
      }

      // window.addEventListener('scroll', throttle(this.infiniteScroll, 3000))

        infiniteScroll() {
        window.addEventListener('scroll', throttle(function scroll ()  {
          const documentRect = document.documentElement.getBoundingClientRect()
          // console.log('bottom',documentRect.bottom);

          if(documentRect.bottom < document.documentElement.clientHeight +200) {
            this.page += 1

            finder.makeFetch(this.query,this.page)
            .then(({ hits,totalHits,total }) => {

              console.log(hits);
              console.log(totalHits);
              console.log(total);
              console.log(this.total);

              let totalPages = Math.ceil(totalHits / this.perPage);
              if (this.page >= totalPages) {
                
                // this.page = finder.page
                console.log('FFF');
                Notiflix.Report.info(
                  'Gallery ',
                  'Sorry'

                );
                this.hideMoreBtn()
              finder.resetPage()
              }
              this.render(hits,page);
              lightbox.refresh();
              // 

     
            })


          }
        } ,3000)
        )
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


      render(images, page) {
        const mockup = images
        .map((image,idx) => {
          const { id, largeImageURL, webformatURL, tags, likes, views, comments, downloads } = image;
          return `
            <a class="gallery__link" href="${largeImageURL}">
              <div class="gallery-item" id="${id}">
                <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
                <div class="info">
                  <p class="info-item"><b>id</b>${(idx+1)+ (this.perPage * (page-2))}</p>
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

      hideMoreBtn() {
        this.#refs.buttonMore.classList.add('is-hidden')
      }
}


const first = new ImageManager()
first.init()
// first.infiniteScroll()
// first.hideMoreBtn()



const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  enableKeyboard: true,
  doubleTapZoom: 5,
});
