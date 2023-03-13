import BAASE_URL from './r-get'

const newBook  = {
    title: 'test book',
    author: 'Me',
    genres: ['JS'],
    rating: 10,
}

const options = {
    method : 'POST',
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify(newBook),
}