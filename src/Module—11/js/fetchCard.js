import axios from "axios";

const API_KEY = '34491623-5c4ef369d6c59f62bc483440c';
const BASE_URL = 'https://pixabay.com/api';


export  async function fetchCard(data,page) {
    try {
      const response = await axios.get(`
      ${BASE_URL}/?key=${API_KEY}&q=${data}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=39
      `);
      console.log(response);
      return response.data
    } catch (error) {
        console.error(error);
        throw Error(response.statusText)
      
    }
  }

// console.log(fetchCard('cat'))

   //    return  axios.get(`${BASE_URL}/?key=${API_KEY}&q=${data}&image_type=photo&orientation=horizontal&safesearch=true`)
        // .then(response =>  {
        //     if(!response.ok) {
        //         throw Error(response.statusText)
        //     }
        //     return response.json()
        // } )