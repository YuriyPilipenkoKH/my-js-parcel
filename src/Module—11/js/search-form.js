// import './css/styles.css';
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
import { ServiceApi } from './news-api';
import Notiflix from 'notiflix';


// const API_KEY = '34491623-5c4ef369d6c59f62bc483440c';
// const BASE_URL = 'https://pixabay.com/api';

const { height: cardHeight } = document
  .querySelector(".gallery")
  .firstElementChild.getBoundingClientRect();

  console.log(cardHeight);

