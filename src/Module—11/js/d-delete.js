import  {BASE_URL} from './r-get.js'

export function deleteBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`
  const options = {
    method: 'DELETE'
  }

  return fetch(url, options)
  .then(res => res.json())
  .then(console.log)
  .catch(error => console.log(error));
}

// deleteBook(38)