import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


const gall = document.querySelector('.gallery');

const myMarkup =  galleryItems.map(({ preview, original, description })=> `
<a class="gallery__item" href="${original}" >
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
</a>`).join('');

gall.insertAdjacentHTML('beforeend', myMarkup);



const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});

const pics = {}

lightbox.on('show.simplelightbox', function (e) {
	// console.log(e.srcElement.href );
    // console.log(e.target.firstElementChild.alt );
    // console.log(e);
    pics.name = e.target.firstElementChild.alt
 
});

console.log(pics);