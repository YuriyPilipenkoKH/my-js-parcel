export {BASE_URL, fetchBooks, fetchBookByID }

// export * from './json-server'
const BASE_URL =  'http://localhost:4000'

 function fetchBooks () {
   return fetch(`${BASE_URL}/books`)
    .then(res => res.json())
    .then(console.log)
    .catch(error => console.log(error));
}

 function fetchBookByID (id) {
    return fetch(`${BASE_URL}/books/${id}`)
     .then(res => res.json())
     .then(console.log)
     .catch(error => console.log(error));
 }
