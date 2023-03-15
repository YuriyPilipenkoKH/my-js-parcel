export { updateBookById}
import  {BASE_URL} from './r-get.js'

// console.log('BASE_URL');



function updateBookById(update, bookId) {
    options = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(update),
    }
    return fetch(`${BASE_URL}/books/${bookId }`, options )
            .then(res => res.json())

}

// updateBookById({title: 'Big CSS'}, 18)