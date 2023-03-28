import axios from "axios";

const API_KEY = '34491623-5c4ef369d6c59f62bc483440c';
const BASE_URL = 'https://pixabay.com/api';

export class ServiceApi {
    constructor() {
      this.page = 1;
      this.perPage = 40;
      this.searchQuery = '';
      this.axios = require('axios');
    }
  
   async  makeFetch(query,page) {
        const params = new URLSearchParams({
            key: API_KEY,  
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: this.perPage,
        });
        const  url = await axios.get(`${BASE_URL}/?${params}`) 
        // this.incrementPage();
         console.log(url);

         return url.data
    }; 
  
    incrementPage() {
      this.page += 1;
    }
  
    resetPage() {
      this.page = 1;
    }
  
    get query() {
      return this.searchQuery;
    }
  
    set query(newQuery) {
      this.searchQuery = newQuery;
    }
  }

export const finder = new ServiceApi()


