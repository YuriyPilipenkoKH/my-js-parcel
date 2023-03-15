
import  {BASE_URL} from './r-get.js'

// console.log('BASE_URL');



export function updateBookById(update, bookId) {
  const  options = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(update),
    }
    return fetch(`${BASE_URL}/books/${bookId }`, options )
            .then(res => res.json())
            .then(console.log)
            .catch(error => console.log(error));
}

// updateBookById({title: 'Big CSS'}, 18)
// updateBookById({rating: 1, author: 'Mango'}, 21)