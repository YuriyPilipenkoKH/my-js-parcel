export { options, newBook }
import  {BASE_URL} from './r-get.js'



const newBook  = {
    title: 'test CSS',
    author: 'Me',
    genres: ['CSS'],
    rating: 10,
}

const options = {
    method : 'POST',
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify(newBook),
}

fetch(`${BASE_URL}/books`, options)
    .then(res => res.json())
    .then(console.log)