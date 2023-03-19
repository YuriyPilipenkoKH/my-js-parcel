import axios from "axios";

const API_KEY = '34491623-5c4ef369d6c59f62bc483440c';
const BASE_URL = 'https://pixabay.com/api';

export class ServiceApi {
    constructor() {
      this.page = 1;
      this.perPage = 40;
      this.searchQuery = 'cat';
      this.axios = require('axios');
    }
  
    async makeFetch() {
        const params = new URLSearchParams({
            key: API_KEY,  
            q: this.searchQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: this.pageAmount,
            per_page: this.perPage,
        });
        const url = `${BASE_URL}/?${params}`;
        this.incrementPage();
        return await axios.get(url);
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

const first = new ServiceApi


// export default  async function fetchCard(data) {
//     try {
//       const response = await axios.get(`
//       ${BASE_URL}/?key=${API_KEY}&q=${data}&image_type=photo&orientation=horizontal&safesearch=true
//       `);
//       console.log(response);
//     } catch (error) {
//         console.error(error);
//         throw Error(response.statusText)
      
//     }
//   }

// console.log(fetchCard('cat'))
   //    return  axios.get(`${BASE_URL}/?key=${API_KEY}&q=${data}&image_type=photo&orientation=horizontal&safesearch=true`)
        // .then(response =>  {
        //     if(!response.ok) {
        //         throw Error(response.statusText)
        //     }
        //     return response.json()
        // } )