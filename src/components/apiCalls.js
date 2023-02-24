import { handleResponse } from './utilities'
export const apiCalls = {
    getAllBooks() {
        return fetch('http://localhost:3001/api/v1/books')
            .then(response => handleResponse(response))
    },
    getSingleBook(isbn){
        return fetch(`http://localhost:3001/api/v1/books/${isbn}`)
            .then(response => handleResponse(response))
    },
    getAllFavorites(){
        return fetch('http://localhost:3001/api/v1/favorites')
            .then(response => handleResponse(response))
    },
    addBookToFavorites(favoriteBook){
        return fetch('http://localhost:3001/api/v1/favorites', {
            method:'POST',
            body:JSON.stringify(favoriteBook),
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(response => handleResponse(response))
    },
    deleteFromFavorites(id) {
        return fetch(`http://localhost:3001/api/v1/favorites/${id}`, { method: 'DELETE' })
            .then(response => handleResponse(response))
      },
    updateFavStatus(selectedBook) {
        return fetch(`http://localhost:3001/api/v1/books/${selectedBook.isbn}`, {
          method: 'PATCH',
          body: JSON.stringify({isFavorited: !(selectedBook.isFavorited === 'true')}),
          headers: {
            'Content-Type': 'application/json'
          }
        })
            .then(response => handleResponse(response))
    }
}
