const BASE_URL =  'http://localhost:4000'

function fetchBooks () {
   return fetch(`${BASE_URL}/books`)
    .then(res => res.json())
    .then(console.log)
}

function fetchBookByID (id) {
    return fetch(`${BASE_URL}/books/#{id}`)
     .then(res => res.json())
     .then(console.log)
 }
