export { newBook }
import  {BASE_URL} from './r-get.js'



const newBook  = {
    title: 'test CSS',
    author: 'Me',
    genres: ['CSS'],
    rating: 10,
}




    function addBook(book) {
        const options = {
            method : 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(book),
        }

        return fetch(`${BASE_URL}/books`, options)
        .then(res => res.json())
        .then(console.log) 
        .catch(error => console.log(error));
    } 