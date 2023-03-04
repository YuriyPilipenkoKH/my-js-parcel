import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


const gall = document.querySelector('.gallery');

const myMarkup =  galleryItems.map(item => `
<a class="gallery__item" href="${item.original}" >
    <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
</a>`).join('');

gall.insertAdjacentHTML('afterbegin', myMarkup);



const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});